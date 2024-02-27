
# Education Portal Project
This project is an Educational Portal that allows users to add questions, take quizzes, and evaluate their performance. It consists of both frontend and backend components, providing an interactive learning experience.

![quiz](https://github.com/slgedik/educationPortal-with-react.js-node.js/assets/112625294/7b0fd630-5fab-483b-9f6e-2b42888a59f0)
![evaluation](https://github.com/slgedik/educationPortal-with-react.js-node.js/assets/112625294/16e48ac7-61c6-4d9a-a4e8-75dc7048dc51)
![addquestion](https://github.com/slgedik/educationPortal-with-react.js-node.js/assets/112625294/1dbda8e4-18c2-483f-a524-e59d839f7005)

## Project Files
### Backend
index.js: Initializes the Express application, defines API endpoints.

questions.json: JSON file containing question data.
### Frontend
AddQuestion.js: Provides a form to add new questions.

Home.js: Creates the home page, offering options for users to add questions or start a quiz.

Quiz.js: Provides an interface to take the quiz.

api.js: Provides functions using axios to communicate with the backend API.

App.js: Routes pages using React Router.

App.css: Contains CSS styles for the application.

## How to Run
Frontend Setup 

Clone the repository:
```
git clone <repository-url>
```
Navigate to the frontend directory:
```
cd frontend
```
Install dependencies:
```
npm install
```
Start the frontend server:
```
npm start
```
Open your browser and go to http://localhost:3000 to view the application.

Backend Setup

Navigate to the backend directory:
```
cd backend
```
Install dependencies:
```
npm install
```
Start the backend server:
```
nodemon index
```


## Notes
The project utilizes React to create a user interface.
Express.js is used to create a simple backend.
Data storage is implemented using a JSON file.
React Router is used for navigation between pages.
This simple education portal project is ideal for understanding the basic features of popular technologies like React and Express, as well as communication between these technologies.
