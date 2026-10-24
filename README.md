# Student Feedback Website (Frontend)

A responsive React web application where students can share feedback about their academic experience. This is the front-end part of the project, built as a PG-DAC project at C-DAC Indore.

> **Status:** Front end only. The Login, Register and Contact forms are UI screens and are not yet connected to a backend.

## Features

- **Login and Register pages** with a clean, responsive form layout
- **Home page** with a welcome message encouraging students to give feedback
- **About page** explaining the purpose of the platform
- **Contact page** with a contact form UI, embedded Google Map and social media links
- **Reusable components** (Header and Footer shared across all pages)
- **Client-side routing** between pages without page reloads
- **Responsive design** using the Bootstrap 5 grid

## Tech Stack

| Area | Technology |
| --- | --- |
| Library | React.js |
| Routing | React Router DOM |
| Styling | Bootstrap 5, CSS, Google Fonts |
| HTTP client | Axios (added for future backend integration) |
| Tools | Node.js, npm, Git/GitHub |

## Project Structure

```
src/
  components/
    layout/
      Header.js
      Footer.js
    pages/
      Home.js
      About.js
      Contact.js
      Login.js
      Register.js
  App.js
  index.js
public/
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher) and npm

### Installation

```bash
git clone https://github.com/Vanshita-Waghale/Student_Feedback_Website.git
cd Student_Feedback_Website
npm install
```

### Run the app

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```
## What I Learned

- Building reusable React components and organizing a project into layout and page folders
- Setting up client-side routing with React Router
- Creating responsive layouts with Bootstrap 5
- Structuring a front end so it can later connect to a REST API

## Future Improvements

- Build a backend with Node.js and Express
- Store users and feedback in a database (MongoDB or MySQL)
- Connect the forms to REST APIs using Axios
- Add form validation and authentication
- Add an admin view to see submitted feedback

