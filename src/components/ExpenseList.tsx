interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;
}

interface Props {
    expenses: Expense[];
    onDelete: (id: number) => void;
}

// reducer func => acc is the variable containing total

// passing each expense as an object and shaping each expense
const ExpenseList = ({ expenses, onDelete }: Props) => {
    return (
        <table className="table" >
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {expenses.map(expense => <tr key={expense.id}>
                    <td>{expense.description}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.category}</td>
                    <td>
                        <button
                            className="btn btn-outline-danger"
                            onClick={() => onDelete(expense.id)}
                        >Delete</button>
                    </td>
                </tr>)}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>${expenses.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2)}</td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>

        </table>
    )
}

export default ExpenseList
