# How to Run StringMaster Next.js App

It appears that **Node.js** is not installed or configured correctly on your system, which prevents the application from running automatically.

## Prerequisites

1.  **Install Node.js**:
    *   Download and install the LTS version from [nodejs.org](https://nodejs.org/).
    *   During installation, make sure to check the box "Add to PATH".
    *   After installation, restart your computer or command prompt.

## Running the Project

Once Node.js is installed, you can run the project using the helper script or manual commands.

### Option 1: Double-click Helper Script
1.  Open the folder `string-master-next`.
2.  Double-click `run_app.bat`.

### Option 2: Manual Commands
1.  Open a terminal/command prompt.
2.  Navigate to the project folder:
    ```bash
    cd c:\Users\Hp\Downloads\templatemo_606_string_master\string-master-next
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Start the server:
    ```bash
    npm run dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) in your web browser.

## Troubleshooting

*   **Images not loading?**: Ensure the `public/images` folder exists and contains the image files.
*   **Styles missing?**: Ensure `app/globals.css` exists.
