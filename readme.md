# Sum to N – TypeScript CLI Utility

This project provides three different implementations to calculate the sum of integers from `1` to `n`, written in TypeScript and runnable via the command line.
 
## Project Structure
sum-to-n/
├── src/
│   └── problem4/
│       └── sum.ts          # TypeScript source code
├── package.json            # NPM config and scripts
└── tsconfig.json           # TypeScript compiler settings

##  Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) installed
- [TypeScript](https://www.typescriptlang.org/) installed via npm

### 2. Install Dependencies

Install required packages and type definitions:

```bash
npm install
npm install --save-dev typescript @types/node

npm run build
npm start -- <number>

npm start -- 10 