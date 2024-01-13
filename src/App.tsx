import { FieldValues, useForm } from "react-hook-form"
import styled from "styled-components";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
  firstName: z.string().min(3, { message: "First name must be at least 3 characters" }),
  lastName: z.string().min(3, { message: "Last name must be at least 3 characters" }),
  age: z
    .number({ invalid_type_error: "Age field is required" })
    .min(18, { message: "age must be of at least 21 years" })
})

type FormData = z.infer<typeof schema>;

const App = () => {

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data)

  return (
    <Container>
      <Title>React Hook Form</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('firstName')} type="text" placeholder="First name" className="form-control" />
        {errors.firstName && <p className="text-danger" >{errors.firstName.message}</p>}
        <Input {...register('lastName')} type="text" placeholder="Last name" className="form-control" />
        {errors.lastName && <p className="text-danger" >{errors.lastName.message}</p>}
        <Input {...register('age', { valueAsNumber: true })} type="number" placeholder="age" className="form-control" />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
        <Input disabled={!isValid} type="submit" className="btn btn-primary" />

      </Form>
    </Container>
  )
}


export default App

const Title = styled.h1`
  color: #ec5891;
`

const Container = styled.div`
  display: flex;
  background-color: #242424;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  margin: 1rem;
`