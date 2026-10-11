import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useExpenseStore = create(
  persist(
    (set) => ({
      expenses: [
        {
          id: 1,
          title: "Freelance Work",
          amount: 600,
          category: "Work",
          type: "income",
          date: "2026-10-08",
        },
      ],

      addExpense: (expense) =>
        set((state) => ({
          expenses: [{ ...expense, id: Date.now() }, ...state.expenses],
        })),

      deleteExpense: (id) =>
        set((state) => ({
          expenses: state.expenses.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "expense-tracker",
    },
  ),
);
