# Dev Stack Builder

A responsive React-based website that helps developers explore modern technologies and build their own development stack.

## Technologies Used

- React
- JavaScript (ES6+)
- Vite
- CSS
- React Toastify
- JSON

## Features

1. **Explore Technologies**
   Browse popular frontend, backend, database, language, styling, DevOps, and developer tools.

2. **Build Your Stack**
   Add technologies to your personal stack, prevent duplicate selections, remove individual items, or remove all technologies.

3. **Responsive Design**
   Fully responsive layout for desktop, tablet, and mobile devices.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript. It makes React code easier to read and helps us describe the UI.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data managed inside a component that can change over time and update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to create and manage state in a functional component. In this project, it is used to manage the technology list, selected stack, loading state, and mobile menu state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is a React Hook used to perform side effects after a component renders. In this project, it is used to load the technology data from the JSON file when the application starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to efficiently update, add, or remove the correct item when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In this project, the "Your Stack" section shows an empty message when no technology is selected and shows the selected technologies when the stack contains items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child component through props. A child can send information back to the parent by calling a function passed to it as a prop.

## Project Features

- Technology cards loaded from JSON data
- Personal stack builder with duplicate prevention
- Toast notifications for stack actions
- Loading state while technology data is loaded
- Responsive design for desktop, tablet, and mobile
- Add, remove, and remove-all stack functionality
