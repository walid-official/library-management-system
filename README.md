


# 📚 Minimal Library Management System – Frontend

A minimalist, client-side library management application built with **React**, **TypeScript**, **Redux Toolkit Query**, and styled using **Tailwind CSS**. This application interfaces with a RESTful backend to manage books and borrowing operations—without authentication or payment systems.

---

## 📌 Table of Contents

- [🚀 Project Overview](#-project-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [📦 Installation](#-installation)
- [📁 Project Structure](#-project-structure)
- [🧑‍💻 Usage](#-usage)
- [🐞 Troubleshooting](#-troubleshooting)
- [🙌 Contributors](#-contributors)

---

## 🚀 Project Overview

This project is a frontend interface for a minimal library system. Users can:

- View a list of books
- Add new books
- Edit and delete existing books
- Borrow books (with availability checks)
- View a summary of borrowed books

The app demonstrates clean state management, type safety, responsive UI/UX, and seamless API interactions using **Redux Toolkit Query**.

---

## ✨ Features

### 1. Public Access
- No login required
- All pages accessible to all users

### 2. Book Management
- **List View:** Title, Author, Genre, ISBN, Copies, Availability
- **Actions:**
  - Edit (Form prefilled with data)
  - Delete (Confirmation dialog)
  - Borrow (Simple form)
- **Add Book:**
  - Fields: Title, Author, Genre, ISBN, Description, Copies
  - Default Availability: `true`
  - Redirects to book list upon creation

### 3. Borrow Functionality
- Fields: Quantity, Due Date
- Validates quantity against available copies
- Reduces available copies accordingly
- Redirects to borrow summary on success

### 4. Borrow Summary
- Aggregated list of borrowed books
- Columns: Book Title, ISBN, Total Quantity Borrowed

### 5. UI Components
- Navbar: Navigate to Books, Add Book, Borrow Summary
- Footer: Site info or credits
- Responsive Layout for desktop, tablet, and mobile

### 💡 Bonus Features
-  Optimistic UI Updates
-  Toast Notifications
-  Fully Responsive Layout
-  Type-Safe Forms

---

## 🛠️ Tech Stack

| Layer        | Technology                         |
| ------------ | ---------------------------------- |
| Framework    | React + TypeScript                 |
| State Mgmt   | Redux Toolkit + RTK Query          |
| Styling      | Tailwind CSS        |
| Package Mgmt | pnpm                               |
| Forms        | React Hook Form          |
| UI Lib       | Shadcn  |

---

## 📦 Installation

> Requires [pnpm](https://pnpm.io/) installed globally.

```bash
# Clone the repository
git clone https://github.com/walid-official/library-management-system.git

cd library-management-frontend

# Install dependencies
pnpm install

# Start development server
pnpm dev
````

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/            # Page-level components
├── features/         # Book CRUD and Borrow
├── App/              # Redux Toolkit setup (slices, RTK Query)
├── layout/           # Layout Of Website
├── lib/              # Zod Validation
└── main.tsx          # Entry point
```

---

## 🧑‍💻 Usage

### Available Routes

| Path              | Description                    |
| ----------------- | ------------------------------ |
| `/books`          | View all books                 |
| `/create-book`    | Add a new book                 |
| `/books/:id`      | View details of a book         |
| `/edit-book/:id`  | Edit book details              |
| `/borrow/:bookId` | Borrow a book                  |
| `/borrow-summary` | View aggregated borrow summary |

---
---

## 🐞Ensuring Troubleshooting

| Issue                   | Solution                                   |
| ----------------------- | ------------------------------------------ |
| API not responding      | Ensure backend is running on correct port  |
| Styling not applied     | Confirm Tailwind is properly configured    |
| Typescript build errors | Run `pnpm lint` and check type definitions |
| CORS errors             | Enable CORS on backend server              |

---

## 🙌 Contributors

* [Walid Hasan](https://github.com/walid-official)

---


