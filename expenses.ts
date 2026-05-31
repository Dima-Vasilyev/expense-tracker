interface Expense {
  description: string;
  amount: number;
  category: string;
}

const expenses: Expense[] = [
  { description: "Groceries", amount: 85.5, category: "food" },
  { description: "Gas", amount: 45.0, category: "transport" },
  { description: "Movie tickets", amount: 30.0, category: "entertainment" },
  { description: "Restaurant", amount: 60.0, category: "food" },
  { description: "Bus pass", amount: 25.0, category: "transport" },
];

function addExpense(
  expenses: Expense[],
  description: string,
  amount: number,
  category: string,
): Expense[] {
  return [...expenses, { description, amount, category }];
}

function filterByCategory(expenses: Expense[], category: string): Expense[] {
  return expenses.filter((expense) => expense.category === category);
}

function getTotal(expenses: Expense[]): number {
  return expenses.reduce((sum, expense) => sum + expense.amount, 0);
}

function getAverage(expenses: Expense[]): number {
  if (expenses.length === 0) return 0;
  return getTotal(expenses) / expenses.length;
}

function getMostExpensive(expenses: Expense[]): Expense {
  return expenses.reduce((max, expense) =>
    expense.amount > max.amount ? expense : max,
  );
}

function getCategorySummary(expenses: Expense[]): Record<string, number> {
  return expenses.reduce(
    (summary, expense) => {
      summary[expense.category] =
        (summary[expense.category] ?? 0) + expense.amount;
      return summary;
    },
    {} as Record<string, number>,
  );
}
