# Google News Clone - TypeScript, React, Vite, and Tailwind

This is a Google News Clone built with React, TypeScript, Vite, and Tailwind CSS. The site is fully responsive and includes a dark mode feature. News data is loaded from mock data files located in public/mockData/\*.json, with a 3000ms delay to simulate data fetching, displaying skeleton loaders during the loading time.

The app also includes a responsive navigation menu that hides when clicking outside of it, managed via React Context.

## Demo

A live demo of this project is available at https://irebah.github.io/google-news.

## Features

- Responsive Design: The layout adjusts based on screen size, ensuring a good user experience on mobile, tablet, and desktop devices.
- Dark Mode: The app includes a dark mode toggle, allowing users to switch between light and dark themes.
- Skeleton Loader: While news data is loading (with a simulated delay of 3000ms), skeleton placeholders are shown to improve the user experience.
- Mock Data: News data is loaded from public/mockData/\*.json files, simulating an API call with a delay.
- Mobile-Responsive Menu: The navigation menu is fully responsive, with a hamburger-style menu for smaller screens. Additionally, React Context is used to hide the menu when clicking outside of it, improving the user experience on mobile devices.
- Click Outside to Close Menu: The menu will automatically close if the user clicks outside of it, providing a better mobile navigation experience.

## Tech Stack

React: JavaScript library for building user interfaces.
TypeScript: Superset of JavaScript that adds static typing.
Vite: Next-generation front-end build tool that provides fast development and production builds.
Tailwind CSS: Utility-first CSS framework for rapid UI development.
React Context: Used to manage global state, including dark mode and mobile menu visibility.

## Installation

To run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>= v20.17.0)
- pnpm (preferred package manager)

If you don't have pnpm installed, you can install it globally via npm:

```
npm install -g pnpm
```

The project includes an .nvmrc file, which specifies the version of Node.js required for the project. You can use NVM (Node Version Manager) to install and manage the required Node.js version easily.

### Steps

Clone the repository:

```
git clone https://github.com/irebah/google-news.git
cd google-news
```

Install the correct Node.js version: If you have NVM installed, you can run the following command to automatically use the Node.js version specified in the .nvmrc file:

```
nvm install
```

This will install and switch to the correct Node.js version.

### Install dependencies with pnpm:

```
pnpm install
```

Start the development server:

```
pnpm run dev
```

Visit the app in your browser at http://localhost:5173.

## Features Walkthrough

### React Context for Menu Visibility

In this project, React Context is used to manage the visibility of the mobile menu, including the behavior when the user clicks outside of the menu.

- Mobile Menu Visibility: The visibility of the mobile navigation menu is controlled using React Context. The context provides a global state that determines whether the menu is open or closed.

- Click Outside to Close: When the user clicks outside the menu (e.g., on the background), the menu automatically closes. This behavior is implemented using a combination of React Context and event listeners attached to the document.

- Dark Mode
  The app includes a dark mode detecting automatically your prefered option from the computer or phone.

- Responsive Menu
  The navigation menu is designed to be fully responsive with Tailwind CSS. On smaller screens (mobile), the menu collapses into a hamburger button. This button opens and closes the full navigation menu, providing a user-friendly mobile experience.

- Skeleton Loader
  The news articles are loaded from mock JSON data, and a 3000ms delay is simulated to mimic an API call. During this delay, skeleton loaders (gray placeholder boxes) are shown for each news item. This gives users a smooth, professional experience as the data loads.

- News Data (Mock Data)
  The data used in the app is stored in the public/mockData/\*.json folder. These JSON files simulate a real API call for news data, containing article objects with titles, descriptions, image URLs, and other relevant information. This data is loaded into the app during the initialization process.

- TypeScript Interface (News)
  The mock data follows the News interface defined in src/types/index.ts, which ensures type safety and helps structure the data consistently across the app.

```
export interface News {
  id: number;
  image?: string;
  source: {
    icon: string;
    text?: string;
  };
  title: string;
  date: string;
  secondary?: Array<News>;
  author?: string;
}
```

## Limitations

The images used in this app are taken from Google and are not optimized. The quality and formats may not be ideal for production.
The data loading is simulated with a delay for demo purposes. In a production scenario, data would be fetched from a real API.
This app does not include full error handling for network requests, as it is focused on simulating a basic news site.
