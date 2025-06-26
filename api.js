// api.js - Handles backend API requests for the frontend

// The base URL of your backend API (change this to your backend's address)
const API_BASE_URL = 'http://localhost:5000'; // Example: Flask/Express backend running locally

// Fetch all jobs from the backend
async function fetchJobs() {
    // Send a GET request to the /jobs endpoint
    const response = await fetch(`${API_BASE_URL}/jobs`);
    // Parse the JSON response
    const jobs = await response.json();
    // Return the jobs data
    return jobs;
}

// Fetch all internships from the backend
async function fetchInternships() {
    // Send a GET request to the /internships endpoint
    const response = await fetch(`${API_BASE_URL}/internships`);
    // Parse the JSON response
    const internships = await response.json();
    // Return the internships data
    return internships;
}

// Fetch all new grad roles from the backend
async function fetchNewGradRoles() {
    // Send a GET request to the /newgrad endpoint
    const response = await fetch(`${API_BASE_URL}/newgrad`);
    // Parse the JSON response
    const newGradRoles = await response.json();
    // Return the new grad roles data
    return newGradRoles;
}

// Example usage: Load jobs and display in the console
// (You can call these functions from your main HTML file to update the UI)
// fetchJobs().then(jobs => console.log(jobs));
// fetchInternships().then(internships => console.log(internships));
// fetchNewGradRoles().then(newGradRoles => console.log(newGradRoles));
