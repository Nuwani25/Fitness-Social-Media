# Fitness Social Media Application

This repository contains my contribution to a fitness social media group project developed for university assignement.

My component lets users share fitness posts with images and interact through likes and comments.

## My Contribution

- Creating posts with images
- Viewing, updating and deleting posts
- Implementing likes and comments
- Connecting the React frontend to the Spring Boot backend
- Uploading images using Firebase Storage
- Performing manual testing of my components

## Technologies

- React and JavaScript
- Java and Spring Boot
- MongoDB
- Firebase Storage
- Tailwind CSS
- Vite
- Maven

## Repository Structure

- `fitness-server-api/` — Spring Boot backend
- `post/client/` — React frontend

## Local Configuration

The backend requires a `MONGODB_URI` environment variable containing your MongoDB connection string. It runs on port 8081.

The frontend requires a local `post/client/.env` file containing:

    VITE_FIREBASE_API_KEY=your_firebase_web_api_key

Use your own Firebase project configuration in `post/client/src/firebase.js`.

Dependency folders, build output and local environment files are excluded through `.gitignore`.

## Project Scope

This repository focuses on my post management and interaction components. Other components of the complete application were developed by my teammates.
