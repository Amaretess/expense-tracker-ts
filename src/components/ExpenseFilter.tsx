import categories from "../categories";


interface Props {
    onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
    return (
        <select className='form-select' onChange={(event) => onSelectCategory(event.target.value)} >
            <option value="">Select a Category</option>
            {categories.map((category) => <option value={category} key={category} >{category}</option>)}
        </select>
    )
}

export default ExpenseFilter
