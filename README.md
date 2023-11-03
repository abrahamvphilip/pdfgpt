# OV-OS

OV-OS is a Next.js project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). This project is designed to be a fast, efficient, and user-friendly web application.

## Table of Contents

- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

Before you start, make sure you have Node.js (version 14.0.0 or higher) installed on your machine. This project uses `bun` as its package manager. If you haven't installed `bun` yet, you can do so by running the following command in your terminal:

`curl -fsSL https://bun.sh/install | bash`

To install the project, clone the repository and install the dependencies:

```
git clone https://github.com/YOUR_USERNAME/ov-os.git
cd ov-os
bun install
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Folder Structure

The project has the following folder structure:

```
ov-os/
├── .husky/
├── .next/
├── .vscode/
│   └── launch.json
├── node_modules/
├── public/
│   ├── favicon.ico
│   └── vercel.svg
├── src/
│   ├── app/
│   │   ├── _components/
│   │   │   ├── componentName/
│   │   │   │   ├── ui/
│   │   │   │   │   ├── test/
│   │   │   │   │   │   ├── test.tsx
│   │   │   │   │   │   └── test.scss
│   │   ├── _trpc/
│   │   ├── api/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.scss
│   ├── assets/
│   │   └── svg/
│   │       └── osenorth-space.svg
│   ├── components/
│   │   ├── Component1/
│   │   │   ├── Component1.tsx
│   │   │   └── Component1.scss
│   │   ├── Component2/
│   │   │   ├── Component2.tsx
│   │   │   └── Component2.scss
│   │   └── Component3/
│   │       ├── Component3.tsx
│   │       └── Component3.scss
│   ├── config/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   │   ├── api/
│   │   └── index.tsx
│   ├── styles/
│   │   └── reset.scss
│   ├── trpc/
│   ├── index.d.ts
│   └── middleware.ts
├── .env
├── .env.local
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package.json
├── README.md
├── tsconfig.json
└── Other files in root...
```

- `src/`: This directory contains all the source code for the application.
- `src/app/`: This directory contains the main page component and global styles.
- `.husky/`: This directory contains Husky hooks.
- `.next/`: This directory is generated when the project is built and contains the compiled output.
- `node_modules/`: This directory contains all the project dependencies.
- `next-env.d.ts`: This file is used for TypeScript configuration.
- `next.config.js`: This file is used for Next.js configuration.
- `package.json`: This file contains the list of project dependencies and scripts.
- `README.md`: This file contains information about the project and instructions for setting up the development environment.
- `tsconfig.json`: This file is used for TypeScript configuration.

## Usage

To start the development server, run:

`bun dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Scripts

In the project directory, you can run the following scripts:

- `bun dev`: Starts the development server.
- `bun build`: Builds the app for production.
- `bun start`: Starts the built app in production mode.
- `bun lint`: Lints the project using ESLint.
- `bun prettier`: Formats the project using Prettier.

## Contributing

We welcome contributions from everyone. Before you start, please read the [contributing guidelines](CONTRIBUTING.md). Make sure your changes are well-documented and include test coverage.

## License

This project is licensed under the terms of the MIT license. See the [LICENSE](LICENSE) file for the full license text.

## Further Reading

For more information about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [The Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

For more information about Bun, check out the [Bun documentation](https://bun.sh/docs/index).

## Credits

This project was bootstrapped with [Create Next App](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
