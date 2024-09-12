# Sin Validator

This project uses Turborepo to manage a monorepo structure with multiple applications and shared packages.

It consists of an express backend and a vue frontend, written in Typescript.

The User can input their SIN and check if it's valid. They will receive realtime input validation as they type, which is provided by the frontend.

The User can also click the 'Validate' button at any time, to check if their SIN is valid. This will trigger a request to the backend and display the result via a toast.

Both the frontend and backend share a common package for utility functions, located at `packages/shared-utils`. Mainly `validateSin.ts` which is used for the SIN validation logic.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (latest LTS version recommended)
- npm (comes with Node.js)

## Getting Started

Follow these steps to set up and run the project:

1. Install Turbo globally:
   ```
   npm install -g turbo
   ```

2. Clone the repository and navigate to the project root.

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development servers:
   ```
   turbo run dev
   ```

This command will start the development servers for all applications in the monorepo concurrently.

The frontend will run on `http://localhost:5173` and the backend on `http://localhost:3000`.

## Project Structure

- `apps/`: Contains individual applications
  - `frontend/`: Frontend application
  - `backend/`: Backend application
- `packages/`: Shared packages used across applications
  - `shared-utils/`: Shared utilities