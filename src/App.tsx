import { useState } from "react"
import ExpenseList from "./components/ExpenseList.tsx"
import Form from "./components/Form.tsx"

const App = () => {

  const [expenses, setExpenses] = useState([
    { id: 0, description: 'milk', amount: 4, category: 'groceries' },
    { id: 1, description: 'eggs', amount: 4, category: 'groceries' },
    { id: 2, description: 'cheese', amount: 4, category: 'groceries' },
  ])


  return (
    <>
      <Form />
      <ExpenseList expenses={expenses} />

    </>
  )
}

export default App
