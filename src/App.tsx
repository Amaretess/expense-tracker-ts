import { FieldValues, useForm } from "react-hook-form";

const App = () => {

  const { register, handleSubmit } = useForm();
  // 
  console.log(register('name'));

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="First Name" type="text" />
        <input {...register('name')} placeholder="Last Name" type="text" />
        <input placeholder="Submit" type="submit" />
      </form>
    </>
  )
}

export default App
