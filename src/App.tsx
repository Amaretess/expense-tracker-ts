import ExpenseList from "./components/ExpenseList.tsx"
import Form from "./components/Form.tsx"

const App = () => {

  const expenses = [
    { id: 0, description: 'milk', amount: 5, category: 'groceries' },
    { id: 1, description: 'ham', amount: 6, category: 'groceries' },
    { id: 2, description: 'insurance', amount: 100, category: 'utilities' },
  ]

  return (
    <>
      <Form />
      <ExpenseList expenses={expenses} onDelete={(id) => console.log('delete', id)} />
    </>
  )
}

export default App
