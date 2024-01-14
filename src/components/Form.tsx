import styled from "styled-components"
import { useForm, FieldValues } from 'react-hook-form';

const Form = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data: FieldValues) => {
        console.log(data)
    }

    return (
        <Container>
            <h1>Expense Tracker</h1>
            <FormContainer onSubmit={handleSubmit(onSubmit)} >
                <label htmlFor="description">Description</label>
                <Input {...register('description')} type="text" name="description" />
                <label htmlFor="amount" >Amount</label>
                <Input {...register('amount')} type="number" name="amount" />
                <label htmlFor="category">Category</label>
                <Select {...register('category')} name="category" >
                    <option>Groceries</option>
                    <option>Utilities</option>
                    <option>Entertainment</option>
                </Select>
                <Input type="submit" className="btn btn-primary" />
            </FormContainer>
        </Container>
    )
}

export default Form;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    margin: 1rem;
`

const Select = styled.select`
    padding: .5rem;
`