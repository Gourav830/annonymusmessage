# 🕵️‍♂️ Anonymous Message

> **Dive into the World of Anonymous Feedback - Where your identity remains a secret.**

A modern, secure platform for sending and receiving anonymous messages built with Next.js, TypeScript, and MongoDB.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge)](https://annonymusmessage-51tq.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)

## ✨ Features

### 🔐 **Authentication & Security**

- Secure user registration and login with NextAuth.js
- Email verification system with OTP
- Password hashing with bcryptjs
- Protected routes and middleware

### 💬 **Anonymous Messaging**

- Send anonymous messages to any user by username
- Toggle message acceptance on/off
- Real-time message management
- Message deletion capabilities

### 🤖 **AI Integration**

- OpenAI-powered message suggestions
- Smart content recommendations
- Enhanced user experience with AI assistance

### 📧 **Email System**

- Automated verification emails
- Beautiful HTML email templates with React Email
- Reliable email delivery with Resend

### 🎨 **Modern UI/UX**

- Responsive design with Tailwind CSS
- Accessible components with Radix UI
- Interactive carousels and animations
- Dark/light theme support
- Toast notifications

##

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

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or later)
- MongoDB database
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Gourav830/annonymusmessage.git
   cd annonymusmessage
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   # Database
   MONGODB_URI=your_mongodb_connection_string

   # NextAuth
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000

   # Email Service
   RESEND_API_KEY=your_resend_api_key

   # OpenAI
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Technology Stack

### **Frontend**

- **Next.js 14.2.3** - React framework with server-side rendering
- **React 18** - UI library for building user interfaces
- **TypeScript** - Static type checking for JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives

### **Backend**

- **Next.js API Routes** - Serverless API endpoints
- **NextAuth.js** - Authentication library
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### **Email & Communication**

- **Resend** - Email delivery service
- **React Email** - Email template components
- **OpenAI** - AI-powered features

### **Form Handling & Validation**

- **React Hook Form** - Performant form library
- **Zod** - TypeScript-first schema validation
- **Hookform Resolvers** - Form validation integration

### **UI Components & Libraries**

- **Lucide React** - Beautiful icon library
- **Embla Carousel** - Lightweight carousel library
- **class-variance-authority** - CSS utility for component variants
- **usehooks-ts** - Collection of React hooks

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (app)/             # Main application pages
│   │   ├── dashboard/     # User dashboard
│   │   └── u/             # User profile pages
│   ├── (auth)/            # Authentication pages
│   │   ├── sign-in/       # Login page
│   │   ├── sign-up/       # Registration page
│   │   └── verify/        # Email verification
│   └── api/               # API routes
│       ├── auth/          # Authentication endpoints
│       ├── accept-messages/
│       ├── check-username/
│       ├── delete-message/
│       ├── get-messages/
│       ├── send-message/
│       ├── sign-up/
│       ├── suggest-messages/
│       └── verify-code/
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── messagecard.tsx   # Message display component
│   └── navbar.tsx        # Navigation component
├── contex/               # React context providers
├── helpers/              # Utility functions
├── lib/                  # Configuration and utilities
├── model/                # MongoDB schemas
├── schemas/              # Zod validation schemas
└── types/                # TypeScript type definitions
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Additional commands
npm run type-check   # Run TypeScript compiler check
```

## 🌟 Key Features Explained

### Anonymous Messaging System

Users can send messages to any registered user without revealing their identity. The system ensures complete anonymity while maintaining a respectful communication environment.

### Smart Username System

- Unique username validation
- Real-time availability checking
- User-friendly profile URLs (`/u/[username]`)

### Message Management

- Toggle message acceptance on/off
- View all received messages in dashboard
- Delete unwanted messages
- AI-powered message suggestions

### Email Verification

- Secure OTP-based verification
- Beautiful HTML email templates
- Automatic verification status tracking

## 🔒 Security Features

- **Password Hashing**: All passwords are securely hashed using bcryptjs
- **Email Verification**: Users must verify their email before accessing features
- **Protected Routes**: Middleware ensures only authenticated users access protected pages
- **Input Validation**: All user inputs are validated using Zod schemas
- **CSRF Protection**: Built-in Next.js security features

## 🚀 Deployment

The application is deployed on Vercel. To deploy your own instance:

1. **Fork the repository**
2. **Connect to Vercel**
   - Import your GitHub repository to Vercel
   - Configure environment variables
3. **Deploy**
   - Vercel will automatically build and deploy your application

### Environment Variables for Production

Make sure to set all the required environment variables in your deployment platform:

- `MONGODB_URI`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `RESEND_API_KEY`
- `OPENAI_API_KEY`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [MongoDB](https://www.mongodb.com/) for the database
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Tailwind CSS](https://tailwindcss.com/) for styling

## 📞 Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/Gourav830/annonymusmessage/issues) page
2. Create a new issue if your question isn't already addressed
3. Visit the [live demo](https://annonymusmessage-51tq.vercel.app/) to see the application in action

---

**Built with ❤️ by [Gourav830](https://github.com/Gourav830)**
