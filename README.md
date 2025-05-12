
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# 🎓 Student Feedback Website (Frontend)

A beautiful, animated React-based frontend application that allows students to share feedback about their academic experiences. This project promotes a better learning environment by collecting constructive feedback and engaging with students through modern UI/UX.

---

## 🛠️ Tech Stack

### Frontend:

* **React.js** – Component-based architecture for building reusable UI.
* **Bootstrap 5** – Responsive design with grid and form utilities.
* **Inline CSS + Google Fonts** – Beautiful gradient backgrounds, animated effects, and stylistic touches.
* **React Router DOM** – For routing between Login, Register, About, Contact, and Home pages (if implemented).

### Suggested Backend (Not included here):

* **Node.js** with **Express** – To handle form submissions and serve feedback data.
* **MongoDB** (or PostgreSQL) – As a data store for feedback and user data.
* **Axios** – For making HTTP requests between the frontend and backend (used in this project skeleton, though not yet connected).

---

## 📄 Folder Structure

```
/src
├── /components
│   ├── layout/
│   │   ├── Header.js
│   │   └── Footer.js
│   └── pages/
│       ├── Login.js
│       ├── Register.js
│       ├── About.js
│       ├── Contact.js
│       └── Home.js
├── App.js
├── index.js
```

---

## ✨ Features

### 🔐 Login & Register Pages

* Custom animated background (purple-violet gradient).
* Motivational quotes with fade-in effects.
* Input fields for authentication UI (currently not functional – backend required).
* Shared Header & Footer components.

### 📍 Contact Page

* Beautiful layout with Google Maps iframe embed.
* Social media icons (LinkedIn, Skype, Instagram, WhatsApp).
* Animated form UI for submitting contact details.
* Cute animations & inspirational design.

### 🧾 About Page

* Introduction to the purpose of the platform.
* Animated GIFs and responsive design using Bootstrap.
* Cards showing team/mission visuals.

### 🏠 Home Page

* Welcoming message with a student-oriented design.
* Inspirational imagery.
* Encouragement to contribute feedback.

---

## 🔗 Why Axios?

While not currently fetching or sending data, Axios is imported in the Home page to:

* Send POST requests (e.g., contact form data to the backend).
* Get feedback history or authenticated user data from an API.
* Handle promises easily with `async/await`.

```javascript
// Example (future implementation):
axios.post('/api/feedback', formData)
  .then(response => console.log(response.data));
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/student-feedback-frontend.git
cd student-feedback-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the App

```bash
npm start
```

The app will run at `http://localhost:3000`.

---

## ⚙️ Future Backend Setup (Optional with Node.js)

* Build a backend using **Express.js** with API routes like:

  * `POST /api/contact` to save messages
  * `POST /api/auth/register` and `POST /api/auth/login`
* Use MongoDB Atlas for cloud database
* Connect using Axios from the frontend to send/receive data

---

## 📌 Unique & Creative Aspects

* 🎨 Gradient backgrounds and soft UI animations
* 🧠 Motivation-driven interface (quotes, friendly prompts)
* 📍 Embedded location with social icons on the Contact page
* 🤝 Modular component structure (Header/Footer reused)
* 🧩 Easily extendable to full MERN stack

---

## 📬 Feedback & Contribution

Want to suggest a feature or fix a bug? Open an [[Issue](https://github.com/your-repo/issues)](https://github.com/your-repo/issues) or [[Pull Request](https://github.com/your-repo/pulls)](https://github.com/your-repo/pulls).

