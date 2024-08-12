https://annonymusmessage-51tq.vercel.app/
Core Technologies
Next.js (v14.2.3): A React-based framework that offers server-side rendering, static site generation, and other powerful features for building modern web applications.
React (v18) and React-DOM (v18): For building the user interface components.
Mongoose (v8.4.1): For interacting with MongoDB, which will likely be your database for storing user accounts and messages.
Next-Auth (v4.24.7): A library for implementing authentication in your Next.js app.
Axios (v1.7.2): A promise-based HTTP client for making API requests.
bcryptjs (v2.4.3): For hashing passwords, which is crucial for securing user accounts.
Form Handling and Validation
React-Hook-Form (v7.52.0): A library for managing form state in React, focusing on performance and simplicity.
Zod (v3.23.8): A schema declaration and validation library, which can be used with React-Hook-Form for validating input.
UI and Design
Tailwind CSS (v3.4.1): A utility-first CSS framework for styling the app.
Radix UI Components: A set of accessible UI primitives for building consistent user interfaces.
Embla Carousel (v8.1.6): For creating carousels/sliders in the app.
Lucide-React (v0.396.0): A library of icons for your UI.
Additional Features
Dayjs (v1.11.11): A lightweight JavaScript library for parsing, validating, manipulating, and displaying dates and times.
OpenAI (v4.52.0): Integration with OpenAI's API, possibly for generating or filtering content.
React-Email (v2.1.4): For handling email-related functionalities in your app, such as sending notifications or verifications.
Resend (v3.3.0): Likely used for sending emails programmatically.
Dev Tools and Utilities
TypeScript (v5): Adds static typing to your JavaScript code, enhancing development and reducing bugs.
ESLint (v8) and eslint-config-next (14.2.3): For maintaining code quality and consistency.
App Overview
The app allows users to send anonymous messages to others based on usernames they create. Given the dependencies and purpose, it likely includes features such as:

User authentication (with Next-Auth and bcryptjs).
Form handling (with React-Hook-Form and Zod).
Secure storage of data (using Mongoose and MongoDB).
A responsive, modern UI (built with Tailwind CSS and Radix UI components).
Email notifications or verifications (using React-Email and Resend).
This combination of technologies makes for a robust and feature-rich application, ideal for your project’s goal of anonymous messaging.




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
