import { FieldValues, useForm } from "react-hook-form"
import styled from "styled-components";


const App = () => {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data)

  return (
    <Container>
      <Title>React Hook Form</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName')} type="text" placeholder="First name" />
        <input {...register('lastName')} type="text" placeholder="Last name" />
        <input type="submit" />
      </form>
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