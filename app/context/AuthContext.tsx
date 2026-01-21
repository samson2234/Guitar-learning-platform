"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    signup: (email: string, password: string, name: string) => Promise<boolean>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        try {
            // Check local storage for persistent session
            const storedUser = localStorage.getItem('user');
            if (storedUser && storedUser !== 'undefined') {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error('Failed to restore auth session:', error);
            localStorage.removeItem('user');
        } finally {
            setIsLoading(false);
        }
    }, []);

    const login = async (email: string, password: string) => {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (!res.ok) {
            const errorMessage = data.message || 'Login failed';
            console.error('Login error:', errorMessage, data);
            throw new Error(errorMessage);
        }

        if (!data.user) {
            console.error('No user data in response:', data);
            throw new Error('Invalid response from server');
        }

        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
        router.push('/dashboard');
        return true;
    };

    const signup = async (email: string, password: string, name: string) => {
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, name }),
        });

        const data = await res.json();

        if (!res.ok) {
            const errorMessage = data.message || 'Signup failed';
            console.error('Signup error:', errorMessage, data);
            throw new Error(errorMessage);
        }

        if (!data.user) {
            console.error('No user data in response:', data);
            throw new Error('Invalid response from server');
        }

        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
        router.push('/dashboard');
        return true;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
