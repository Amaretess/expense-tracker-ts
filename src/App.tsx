import { FieldValues, useForm } from "react-hook-form"
import styled from "styled-components";


const App = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data)

  return (
    <Container>
      <Title>React Hook Form</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName', { required: true, minLength: 3 })} type="text" placeholder="First name" />
        {errors.firstName?.type === 'required' && <p>First name is required</p>}
        <input {...register('lastName', { required: true, minLength: 3 })} type="text" placeholder="Last name" />
        {errors.lastName?.type === 'required' && <p>Last name is required</p>}
        <input type="submit" />
      </Form>
      <h1>DATA</h1>
    </Container>
  )
}


export default App

const Title = styled.h1`
  color: #ec5891;
`

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`