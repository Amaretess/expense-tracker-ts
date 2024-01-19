
interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;
}

interface Props {
    expenses: Expenses[];
    onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {



    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>placeholder</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map(expense => <tr key={expense.id}>
                    <td>{expense.description}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.category}</td>
                </tr>)}
                <tr>
                    <th>Total</th>
                    <td>{expenses.reduce((expense, acc) => (expense.amount + acc), 0)}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ExpenseList
