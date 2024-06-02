[![Forks](https://img.shields.io/github/forks/galgardev/myproject-template?style=for-the-badge)](https://github.com/galgardev/myproject-template/forks)
[![Watchers](https://img.shields.io/github/watchers/galgardev/myproject-template?style=for-the-badge)](https://github.com/galgardev/myproject-template/watchers)
[![Stars](https://img.shields.io/github/stars/galgardev/myproject-template?style=for-the-badge)](https://github.com/galgardev/myproject-template/stargazers)
[![Contributors](https://img.shields.io/github/contributors/galgardev/myproject-template?style=for-the-badge)](https://github.com/galgardev/myproject-template/graphs/contributors)

# myProject Template

Welcome to `myProject Template`, a base template designed to kickstart your front-end development with a powerful tech stack. This project aims to provide a scalable and maintainable foundation, allowing you to focus on building your application without starting from scratch.

[![Static Badge](https://img.shields.io/badge/Run%20in-StackBlitz-blue?style=for-the-badge&logo=stackblitz)](https://stackblitz.com/github.com/galgardev/myproject-template)

## Table of Contents

- [myProject Template](#myproject-template)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
    - [Key Directories and Files](#key-directories-and-files)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Development Server](#running-the-development-server)
  - [Available Scripts](#available-scripts)
  - [Styling](#styling)
    - [Global Styles](#global-styles)
    - [Component and Page Styles](#component-and-page-styles)
    - [Page Styles](#page-styles)
  - [Components and Layouts](#components-and-layouts)
    - [Components](#components)
    - [Layouts](#layouts)
    - [Pages](#pages)
  - [Utilities](#utilities)
  - [Contributing](#contributing)
  - [License](#license)

## Project Overview

`myProject` is a template that combines React, React Router, Vite, Tailwind CSS, Material Tailwind, and Heroicons. It includes a basic file structure, common layouts, and essential utilities to streamline your development process.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **React Router**: Declarative routing for React applications.
- **Vite**: A fast build tool for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework.
- **Material Tailwind**: Tailwind components library inspired by Material Design.
- **Heroicons**: Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.

## Project Structure

```plaintext
myproject/
┣ public/
┃ ┗ assets/
┃ ┣ fonts/
┃ ┃ ┗ ...
┃ ┗ img/
┃ ┗ ...
┣ src/
┃ ┣ components/
┃ ┃ ┣ Footer/
┃ ┃ ┃ ┣ Copyright.jsx
┃ ┃ ┃ ┗ Footer.jsx
┃ ┃ ┣ Icons/
┃ ┃ ┃ ┣ ...
┃ ┃ ┣ Sidebar/
┃ ┃ ┃ ┣ Sidebar.jsx
┃ ┃ ┃ ┗ SidebarItem.jsx
┃ ┃ ┣ Header.jsx
┃ ┃ ┗ SocialLinks.jsx
┃ ┣ layouts/
┃ ┃ ┗ BaseLayout.jsx
┃ ┣ pages/
┃ ┃ ┣ Home.jsx
┃ ┃ ┗ ...
┃ ┣ styles/
┃ ┃ ┣ components/
┃ ┃ ┃ ┣ footer.css
┃ ┃ ┃ ┣ header.css
┃ ┃ ┃ ┗ sidebar.css
┃ ┃ ┣ pages/
┃ ┃ ┃ ┣ home.css
┃ ┃ ┃ ┗ ...
┃ ┃ ┗ global.css
┃ ┣ utils/
┃ ┃ ┗ MetaTags.jsx
┃ ┣ App.jsx
┃ ┣ consts.js
┃ ┗ main.jsx
┣ index.html
┗ ...
```

### Key Directories and Files

- **public/**: Static assets (images, fonts, etc.)
- **src/**: Main source code
  - **components/**: Reusable React components
  - **layouts/**: Layout components for different pages
  - **pages/**: Individual page components
  - **styles/**: CSS files for styling components and pages
  - **utils/**: Utility functions and components
  - **App.jsx**: Main application component
  - **consts.js**: Contains constants used throughout the project
  - **main.jsx**: Entry point for the application

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm (v8 or higher recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/galgardev/myproject-template.git myproject
   ```

2. Navigate to the project directory:

   ```bash
   cd myproject
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

Start the development server using Vite:

```bash
npm run dev
```

This will launch the application at `http://localhost:5173`.

## Available Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run preview`**: Previews the production build.
- **`npm run lint`**: Runs ESLint for code quality checks.

## Styling

This project uses Tailwind CSS for styling. The configuration file (`tailwind.config.js`) extends the default theme with custom fonts and colors. PostCSS is configured with plugins for Tailwind, autoprefixer, and nesting.

### Global Styles

Global styles are defined in `src/styles/global.css`, which includes base styles, component styles, and utility classes.

### Component and Page Styles

Each component and page has its own CSS file under `src/styles/components` and `src/styles/pages` respectively.

- **Components**:
  - **Header**: `src/styles/components/header.css`
  - **Footer**: `src/styles/components/footer.css`
  - **Sidebar**: `src/styles/components/sidebar.css`
- **Pages**:
  - **Home**: `src/styles/pages/home.css`
  - **Docs**: `src/styles/pages/docs.css`
  - **About**: `src/styles/pages/about.css`

### Page Styles

## Components and Layouts

### Components

- **Header.jsx**: Contains the navigation bar.
- **Footer.jsx**: Contains the footer section.
- **Sidebar.jsx**: Contains the sidebar with navigation links.
- **SocialLinks.jsx**: Contains social media icons.

### Layouts

- **BaseLayout.jsx**: A common layout used by all pages. You can extend or create new layouts as needed.

### Pages

- **Home.jsx**: Home page component.
- **About.jsx**: About page component.
- **Docs.jsx**: Documentation page component.

## Utilities

- **MetaTags.jsx**: Utility component for setting meta tags dynamically.
- **consts.js**: Contains site-wide constants such as the site title and page links.

## Contributing

If you want to contribute to this project, feel free to fork the repository and submit a pull request. Please ensure your code follows the established conventions and passes all linting checks.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to customize this template to suit your project's specific needs.

Happy coding! 🎉
