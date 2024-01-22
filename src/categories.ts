// zod is expecting a "read only" array, so set as a const for ts purposes
const categories = ['Groceries', 'Utilities', 'Entertainment'] as const;

export default categories;