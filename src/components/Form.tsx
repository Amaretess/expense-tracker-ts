import styled from "styled-components"
import { useForm, FieldValues } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
    description: z.string().min(3, { message: "Description needs at least 3 characters" }),
    amount: z
        .number({ invalid_type_error: "Amount is required" })
        .min(1, { message: "amount must be at least $1" }),
    category: z.string().min(1, { message: "Category is required" })

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
                <Input {...register('description')} type="text" id="description" className="form-control" />
                {errors.description && <p className="text-danger" >{errors.description.message}</p>}
                <label htmlFor="amount" >Amount</label>
                <Input {...register('amount', { valueAsNumber: true })} type="number" id="amount" className="form-control" />
                {errors.amount && <p className="text-danger" >{errors.amount.message}</p>}

                <label htmlFor="category">Category</label>
                <Select {...register('category')} id="category" className="form-control" >
                    <option>Groceries</option>
                    <option>Utilities</option>
                    <option>Entertainment</option>
                </Select>
                <Button type="submit" disabled={!isValid} className="btn btn-primary">Submit</Button>
            </FormContainer>
            <select>
                <option>Groceries</option>
                <option>Utilities</option>
                <option>Entertainment</option>
            </select>
            <table>
                <tr>
                    <th>heading 1</th>
                    <td>item 2</td>
                    <td>item 3</td>
                </tr>

            </table>

        </Container>
    )
}

export default Form;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    margin: 1rem;
`

const Select = styled.select`
    
`

const Button = styled.button`
    margin: 1rem;
`