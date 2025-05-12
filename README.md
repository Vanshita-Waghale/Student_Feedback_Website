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
