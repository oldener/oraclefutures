# Deployment Guide

This guide outlines the steps to deploy the OracleFutures application to Vercel (Frontend) and Render (Backend).

## MongoDB Atlas Preparation

Before deploying, ensure your MongoDB Atlas cluster is accessible from anywhere.

1.  **Network Access:** In your MongoDB Atlas settings, navigate to "Network Access" and add an IP address entry for `0.0.0.0/0` (Allow access from anywhere). This is crucial for Render to connect to your database.

## Backend Deployment (Render)

The backend is a Node.js Express application.

1.  **Create a New Web Service:**
    *   Log in to Render and create a new Web Service.
    *   Connect your GitHub repository.
    *   **Build Command:** `npm install`
    *   **Start Command:** `node server/index.js`
    *   **Environment Variables:**
        *   `NODE_ENV`: `production`
        *   `MONGODB_URI`: Your MongoDB Atlas connection string (e.g., `mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority`)
        *   `CORS_ORIGIN`: The URL of your deployed frontend on Vercel (e.g., `https://your-vercel-app.vercel.app`).
        *   `JWT_SECRET`: A strong, random string for JWT token signing.
    *   **Port:** Ensure the service is listening on port `5000` (Render will automatically expose this).
2.  **Deploy:** Initiate the deployment. Render will build and deploy your backend service.

## Frontend Deployment (Vercel)

The frontend is a React application built with Vite.

1.  **Create a New Project:**
    *   Log in to Vercel and create a new project.
    *   Connect your GitHub repository.
    *   Vercel should automatically detect that it's a Vite project.
2.  **Build & Development Settings:**
    *   **Framework Preset:** `Vite`
    *   **Build Command:** `npm run build`
    *   **Output Directory:** `dist`
3.  **Environment Variables:**
    *   `VITE_API_URL`: The URL of your deployed backend on Render (e.g., `https://your-render-app.onrender.com`).
4.  **Deploy:** Initiate the deployment. Vercel will build and deploy your frontend application.

## Post-Deployment

*   After both are deployed, ensure the `CORS_ORIGIN` in Render's environment variables is updated with the actual Vercel frontend URL, and `VITE_API_URL` in Vercel's environment variables is updated with the actual Render backend URL.
*   Test all functionalities to ensure the frontend can communicate with the backend.
