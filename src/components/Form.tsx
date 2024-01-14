import styled from "styled-components"
import { useForm, FieldValues } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
    description: z.string().min(3, { message: "Description needs at least 3 characters" }),
    amount: z
        .number({ invalid_type_error: "Amount is required" })
        .min(1, { message: "amount must be at least $1" }),
    category: z.string()

})

type FormData = z.infer<typeof schema>

const Form = () => {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FieldValues) => {
        console.log(data)
    }

    return (
        <Container>
            <h1>Expense Tracker</h1>
            <FormContainer onSubmit={handleSubmit(onSubmit)} >
                <label htmlFor="description">Description</label>
                <Input {...register('description')} type="text" name="description" />
                {errors.description && <p className="text-danger" >{errors.description.message}</p>}
                <label htmlFor="amount" >Amount</label>
                <Input {...register('amount')} type="number" name="amount" />
                {errors.amount && <p className="text-danger" >{errors.amount.message}</p>}

                <label htmlFor="category">Category</label>
                <Select {...register('category')} name="category" >
                    <option>Groceries</option>
                    <option>Utilities</option>
                    <option>Entertainment</option>
                </Select>
                <Button disabled={!isValid} type="submit" className="btn btn-primary" >Submit</Button>
            </FormContainer>
            <select>
                <option>Groceries</option>
                <option>Utilities</option>
                <option>Entertainment</option>
            </select>
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

const Button = styled.button`
    margin: 1rem;
`