import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  example: string
  exampleRequired: string
}

const App = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")} placeholder="First Name" />
      <input defaultValue="test" {...register("exampleRequired", { required: true })} placeholder="First Name" />
      {errors.exampleRequired && <span>This field is required</span>}
      <input placeholder="Last Name" type='submit' />
      <input />

    </form>
  )
}

export default App