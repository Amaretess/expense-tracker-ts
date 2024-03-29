import { useState } from "react"
import ExpenseList from "./components/ExpenseList.tsx"
import Form from "./components/Form.tsx"
import ExpenseFilter from "./components/ExpenseFilter.tsx";

const App = () => {

  const [selectedCategory, setSelectedCategory] = useState('');

  // reduce function
  const arr = [1, 2, 3, 4, 5, 6, 7, 8]
  const totalArr = arr.reduce((acc, currentValue) => acc + currentValue)
  console.log(totalArr);

  const [expenses, setExpenses] = useState([
    { id: 0, description: 'milk', amount: 4, category: 'Groceries' },
    { id: 1, description: 'electric', amount: 4, category: 'Utilities' },
    { id: 2, description: 'cheese', amount: 4, category: 'Groceries' },
  ])

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <Form onSubmit={newExpense => setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }])} />
      <div className='mb-3'>
        <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))} />
    </>
  )
}

export default App
