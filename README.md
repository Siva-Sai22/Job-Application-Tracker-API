# Job Application Tracker

This is a simple job application tracker built with Node.js and Express. It uses SQLite for data storage.

## Features

This job application tracker includes the following features:
- **Company Management**: You can create and retrieve all companies. Each company is identified by a unique ID and has a name.
- **Job Management**: You can create, retrieve, update, and delete jobs. Each job has a title, associated company ID, status, and deadline.
- **API Endpoints**: The application provides RESTful API endpoints for managing companies and jobs.
- **Data Storage**: The application uses SQLite for data storage, providing a lightweight disk-based database that doesn't require a separate server process.

## Installation

1. Clone this repository: `git clone https://github.com/yourusername/job-application-tracker.git`
2. Navigate to the project directory: `cd job-application-tracker`
3. Install dependencies: `npm install`

## Usage

1. Start the server: `node index.js`
2. The server runs on port 3000. You can access it at `http://localhost:3000`.

## API Endpoints

- GET `/api/companies`: Fetch all companies
- POST `/api/companies`: Create a new company
- GET `/api/jobs`: Fetch all jobs
- POST `/api/jobs`: Create a new job

## License

This project is licensed under the ISC License.