import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Instructors from './components/Instructors';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Features />
            <Pricing />
            <Instructors />
            <Testimonials />
            <Cta />
            <Footer />
        </main>
    );
}
