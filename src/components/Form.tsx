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

        <></>
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