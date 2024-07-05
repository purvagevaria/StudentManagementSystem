# Student Management System

A web application for managing student records, built using Flask, SQLAlchemy, and Bootstrap. This application supports CRUD (Create, Read, Update, Delete) operations on student records and features an interactive UI for easy data management.

## Live Demo

You can view the deployed application [here](https://studentmanagementsystem-esz0.onrender.com/).

## Features

- **Create**: Add new student records.
- **Read**: View all student records.
- **Update**: Update existing student records.
- **Delete**: Remove student records.

## Technologies Used

- **Flask**: A lightweight WSGI web application framework in Python.
- **SQLAlchemy**: SQL toolkit and Object-Relational Mapping (ORM) library for Python.
- **Bootstrap**: Front-end framework for creating responsive and visually appealing user interfaces.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/student-management-system.git
   cd student-management-system
2. **Set up a virtual environment:**
   ```bash
   python -m venv venv
3. **Activate the virtual environment: (For windows machine) :**
    ```bash
    venv\Scripts\activate
4. **Install the dependencies::**
    ```bash
    pip install -r requirements.txt
5. **Run the application:**
    ```bash
    python app.py

## API Endpoints
- GET /students: Retrieve all student records.
- POST /students: Create a new student record.
- GET /students/<id>: Retrieve a student record by ID.
- PUT /students/<id>: Update a student record by ID.
- DELETE /students/<id>: Delete a student record by ID.

## Collaborators

- [Purva Gevaria](https://github.com/purvagevaria)
- [Bhumika Pathak](https://github.com/BhumikaPathak2)
