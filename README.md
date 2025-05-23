# app

A React application that allows users to interact with the mathematical constant Pi in two different ways.

## Features

- **Two Interaction Modes:** The application offers two distinct modes (`TypeOne` and `TypeTwo`) for exploring or utilizing Pi.
  - **TypeOne (Sequential Pi Challenge):** In this mode, users are challenged to enter the digits of Pi one by one. The application provides immediate feedback (correct/incorrect) for each entered digit. Users can also see the next expected digit if they need help and reset their progress.
  - **TypeTwo (Pi Prefix Checker):** In this mode, users can type a sequence of numbers. Upon request, the application will compare this sequence to the digits of Pi, highlighting which digits are correct and which are incorrect. It also shows how many digits from the beginning of their sequence match the corresponding digits of Pi.
- **On-Screen Keyboard:** Includes an on-screen keyboard for input.
- **Persistent Mode Selection:** Remembers the user's last selected interaction mode.
- **Loading State:** Displays a loading indicator while the application initializes.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm (or yarn) installed on your system.

### Installing

1.  Clone the repository:
    ```bash
    git clone https://github.com/thisisdkyadav/pi
    ```
2.  Navigate to the project directory:
    ```bash
    cd app
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

## Running the Application

To start the development server:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

## Building for Production

To build the app for production:

```bash
npm run build
```

This builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run eject`: Removes the single dependency and copies all configuration files and transitive dependencies (webpack, Babel, ESLint, etc.) right into your project. **Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
