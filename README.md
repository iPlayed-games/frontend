# iplayed-frontend

Welcome to iplayed-frontend – the frontend component of our exciting developer group's projects!

Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Commiting](#commiting)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Contributing](#contributing)
- [License](#license)

## About

iplayed-frontend is the frontend module for our innovative developer group's projects. We focus on integrating gamification into engaging activity venues like escape rooms, axe throwing, and paintball, creating a blend of technology and entertainment.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites:

- Node.js: Make sure you have Node.js installed. You can download it from here.

### Installation

1. [Clone the repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository):

   `git clone https://github.com/iplayed/iplayed-frontend.git`

2. Ask on Discord for the `.env` file credentials if necessary and add it to your local copy.

3. Keep the `.env-template` file and create a `.env` file with the credentials. To use the key from the credentials file, use ` const EXAMPLE_KEY = process.env.EXAMPLE_KEY;`

4. Navigate to the project directory:

   `cd iplayed-frontend`

5. Install dependencies:

   `npm install`

## Usage

To run the development server, use the following command:

`npm run dev`

This will start the Next.js development server and allow you to preview your frontend.

## Commiting

[Branch out](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) by following the structure `feature/add-your-branch-name` or `chore/add-your-branch-name` or `fix/add-your-branch-name` and submit your [PR](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)

After completing your component and you are ready to commit do the following...

`npm run lint` and `npm run test`

## Scripts

- dev: Start the Next.js development server.
- build: Build the Next.js project.
- start: Start the Next.js production server.
- lint: Run TypeScript, Next.js linting, and auto-format with Prettier.
- test: Run Jest tests in watch mode.

## Dependencies

- @types/node: Types for Node.js.
- @types/react: Types for React.
- @types/react-dom: Types for React DOM.
- eslint: ESLint for code linting.
- eslint-config-next: ESLint config for Next.js projects.
- next: Next.js for server-rendered React applications.
- react: React library.
- react-dom: React DOM library.
- typescript: TypeScript for static typing.

## Dev Dependencies

- @types/jest: TypeScript types for Jest.
- eslint-config-prettier: ESLint config to disable ESLint formatting rules in favor of Prettier.
- jest: Testing framework.
- jest-environment-jsdom: JSDom environment for Jest.
- prettier: Code formatter.

## Contributing

If you're interested in participating, sign up at the following URL:

- [Sign-Up Form](https://forms.gle/nAsyk91DiCZB3tAk7)

## License

This project is licensed under the MIT License.

---

Join us on this journey of innovation and growth!
