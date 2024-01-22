import { useState } from "react"
import ExpenseList from "./components/ExpenseList.tsx"
import Form from "./components/Form.tsx"
import ExpenseFilter from "./components/ExpenseFilter.tsx";

export const categories = ['Groceries', 'Utilities', 'Entertainment'];

const App = () => {

  const [selectedCategory, setSelectedCategory] = useState('');

  // reduce function
  const arr = [1, 2, 3, 4, 5, 6, 7, 8]
  const totalArr = arr.reduce((acc, currentValue) => acc + currentValue)
  console.log(totalArr);



  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;



  return (
    <>
      <Form />
      <div className='mb-3'>
        <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))} />
    </>
  )
}

export default App
