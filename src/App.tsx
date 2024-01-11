import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';

type Inputs = {
  example: string
  exampleRequired: string
}

const App = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


  return (
    <Container>
      <Title>React Hook Form</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")} placeholder="First Name" />
        <input defaultValue="test" {...register("exampleRequired", { required: true })} placeholder="First Name" />
        {errors.exampleRequired && <p>This field is required</p>}
        <input placeholder="Last Name" type='submit' />

      </form>
    </Container>

  )
}

export default App

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  color: #ec5891;
`