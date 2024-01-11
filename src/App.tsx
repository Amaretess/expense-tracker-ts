import { useForm } from 'react-hook-form'

const App = () => {

  const { register } = useForm()

  return (
    <>
      <form onSubmit={(data) => console.log(data)}>
        <input {...register('name')} type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="submit" />
      </form>
    </>
  )
}

export default App;
