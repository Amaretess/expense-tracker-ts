import { useState } from "react"
import ExpenseList from "./components/ExpenseList.tsx"
import Form from "./components/Form.tsx"
import ExpenseFilter from "./components/ExpenseFilter.tsx"

const App = () => {

  const [selectedCategory, setSelectedCategory] = useState('')



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
