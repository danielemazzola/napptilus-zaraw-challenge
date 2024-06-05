# Napptilus Challenge Project

## Overview

This project is a React application developed for the Napptilus Challenge. It features character management, routing, and state handling. The project includes unit testing, linting, and formatting tools to ensure code quality and maintainability. The application is responsive and accessible, with clean console logs free from errors and warnings.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
  - [Dependencies](#dependencies)
  - [DevDependencies](#devdependencies)
  - [Scripts](#scripts)
  - [File and Folder Structure](#file-and-folder-structure)
- [Features](#features)
  - [Routing](#routing)
  - [Services](#services)
  - [Pages](#pages)
  - [Hooks and Context](#hooks-and-context)
  - [Components](#components)
  - [Global Styles](#global-styles)
- [Requirements](#requirements)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download Node.js from [nodejs.org](https://nodejs.org/).

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/napptilus-challenge.git
cd napptilus-challenge
npm install
```

### Running the Application

To start the development server, run:

```bash
npm start
```

This will run the app in development mode. Open http://localhost:3000 to view it in your browser.

To build the app for production, run:

```bash
npm run build
```

### Project Structure

### Dependencies

| Package            | Version   |
| ------------------ | --------- |
| `js-md5`           | `^0.8.3`  |
| `react`            | `^18.3.1` |
| `react-dom`        | `^18.3.1` |
| `react-router-dom` | `^6.23.1` |
| `react-scripts`    | `5.0.1`   |
| `web-vitals`       | `^2.1.4`  |

### DevDependencies

| Package                       | Version   |
| ----------------------------- | --------- |
| `@testing-library/jest-dom`   | `^6.4.5`  |
| `@testing-library/react`      | `^15.0.7` |
| `@testing-library/user-event` | `^14.5.2` |
| `eslint`                      | `^8.57.0` |
| `eslint-config-prettier`      | `^9.1.0`  |
| `eslint-plugin-prettier`      | `^5.1.3`  |
| `prettier`                    | `^3.3.0`  |
| `stylelint`                   | `^16.6.1` |
| `stylelint-config-standard`   | `^36.0.0` |
| `stylelint-prettier`          | `^5.0.0`  |

### Scripts

| Script        | Description                                   |
| ------------- | --------------------------------------------- |
| `start`       | Runs the app in development mode.             |
| `build`       | Builds the app for production.                |
| `test`        | Runs the test suite.                          |
| `eject`       | Ejects the app configuration.                 |
| `lint`        | Lints JavaScript and JSX files.               |
| `lint:styles` | Lints CSS and SCSS files.                     |
| `format`      | Formats JavaScript, JSX, CSS, and SCSS files. |

### File and Folder Structure

```plaintext
napptilus-challenge/
├── public/
├── src/
│ ├── components/
│ │ ├── card/
│ │ ├── comics/
│ │ ├── favorite/
│ │ ├── hero/
│ │ ├── loader/
│ │ └── search/
│ ├── context/
│ │ └── CharacterContext.jsx
│ ├── hooks/
│ │ └── useCharacters.jsx
│ ├── pages/
│ │ ├── Layout/
│ │ ├── favoriteDetails/
│ │ ├── error404/
│ │ ├── charactersList/
│ │ └── characterDetail/
│ ├── services/
│ │ ├── api.jsx
│ │ └── helpers/
│ ├── App.jsx
│ ├── index.js
│ └── globalStyle.css
├── .eslintrc.json
├── .prettierrc
├── .stylelintrc
├── package.json
└── README.md
```

### Routing

The routing of the application is managed in `App.jsx` using `react-router-dom`. The routes include:

- `/` - Main character list page (`CharacterList` component)
- `/favorites` - Favorites details page (`FavoriteDetails` component)
- `/character/:id` - Character detail page (`CharacterDetail` component)
- `*` - Error 404 page (`Error404` component)

### Services

- `api.jsx`: Contains all the fetch requests to the API.
- `helpers`: Includes hashing for the fetch requests.

### Pages

- **Layout**: Main layout component.
- **favoriteDetails**: Favorites details view.
- **error404**: Error 404 view.
- **charactersList**: Characters list view.
- **characterDetail**: Character detail view.

Each view has its own CSS file to facilitate future changes.

### Hooks and Context

- `useCharacters.jsx`: Custom hook for character-related logic.
- `CharacterContext.jsx`: Context provider for managing the application's state.

### Components

- **card**: Hero card component.
- **comics**: Comics component.
- **favorite**: Heart (favorite) component.
- **hero**: Banner component.
- **loader**: Loader component.
- **search**: Search logic and results component.

### Global Styles

- `globalStyle.css`: Contains all CSS variables for the application.

### Requirements

- **Testing Implementation**: The project includes unit tests to ensure functionality.
- **Responsive Design**: The application is fully responsive.
- **Accessibility**: The application is accessible to users with disabilities.
- **Linters and Formatters**: The project uses ESLint, Prettier, and Stylelint to maintain code quality.
- **Clean Console**: The browser console is free from errors and warnings.

### Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Repository Link

[https://github.com/danielemazzola/napptilus-zaraw-challenge](https://github.com/danielemazzola/napptilus-zaraw-challenge)

---

Made by Daniele Mazzola
