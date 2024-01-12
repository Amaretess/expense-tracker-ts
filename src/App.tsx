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
        {errors.firstName?.type === 'required' && <p className="text-danger" >First name is required</p>}
        {errors.firstName?.type === 'minLength' && <p className="text-danger" >Need at least 3 characters</p>}
        <input {...register('lastName', { required: true, minLength: 3 })} type="text" placeholder="Last name" />
        {errors.lastName?.type === 'required' && <p className="text-danger" >Last name is required</p>}
        {errors.lastName?.type === 'minLength' && <p className="text-danger" >Need at least 3 characters</p>}
        <input type="submit" />
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
`