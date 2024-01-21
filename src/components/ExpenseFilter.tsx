

interface Props {
    onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
    return (
        <select className='form-select' onChange={(event) => onSelectCategory(event.target.value)} >
            <option>Groceries</option>
            <option>Utilities</option>
            <option>Entertainment</option>

        </select>
    )
}

export default ExpenseFilter
