import styled from "styled-components"
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import categories from "../categories";

interface Props {
    onSubmit: (data: FormData) => void;
}

const schema = z.object({
    description: z.string().min(3, { message: "Description needs at least 3 characters" }).max(50),
    amount: z
        .number({ invalid_type_error: "Amount is required" })
        .min(1, { message: "amount must be at least $1" })
        .max(100_000),
    category: z.enum(categories)
});

type FormData = z.infer<typeof schema>

const Form = ({ onSubmit }: Props) => {


    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema) });

    return (
        <Container>
            <h1>Expense Tracker</h1>
            <FormContainer onSubmit={handleSubmit(data => {
                onSubmit(data);
                reset();
            })} >
                <label htmlFor="description">Description</label>
                <Input {...register('description')} type="text" id="description" className="form-control" />
                {errors.description && <p className="text-danger" >{errors.description.message}</p>}
                <label htmlFor="amount" >Amount</label>
                <Input {...register('amount', { valueAsNumber: true })} type="number" id="amount" className="form-control" />
                {errors.amount && <p className="text-danger" >{errors.amount.message}</p>}

                <label htmlFor="category">Category</label>
                <Select {...register('category')} id="category" className="form-select" >
                    {categories.map((category) => <option key={category} value={category} >{category}</option>)}
                </Select>
                <Button type="submit" disabled={!isValid} className="btn btn-primary">Submit</Button>
            </FormContainer>
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
    align-items: center;
`

const Input = styled.input`
    margin: 1rem;
`

const Select = styled.select`
    margin: 1rem;
`

const Button = styled.button`
    margin: 1rem;
`