# Pennywise — Money Studio

An alternative visual redesign of the original Expense Tracker project built with React, TypeScript, Vite, Material UI, Zustand, React Hook Form, and React Toastify.

## Run locally

1. Extract this ZIP.
2. Open the extracted `Expense-Tracker-Alternative` folder in VS Code.
3. Open a terminal in that folder.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL printed by Vite.

To check the production build, run `npm run build`.

## What changed

- New Pennywise branding and a fixed dark-indigo sidebar navigation.
- New lilac, violet, mint, and coral palette instead of the original blue-and-white style.
- Redesigned overview cards, activity rows, spacing, typography, responsive layout, and empty state.
- Added searchable transactions and an income/expense filter on the Transactions page.
- Added category options including Health.
- Added React Toastify success notifications when a transaction is added or deleted.
- Added a confirmation dialog before deleting a transaction.
- Kept Zustand persistence so transaction data remains saved in local storage.
- Kept the original component-based React + TypeScript structure.

## Notes

- Currency is displayed in USD, matching the original project.
- Existing saved data uses the `expense-tracker` local-storage key. If you want a completely fresh demo, clear that key in your browser's local storage.
