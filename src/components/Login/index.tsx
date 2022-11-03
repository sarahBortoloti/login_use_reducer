import { Wrapper } from "./styles"
import { useForm } from 'react-hook-form';
import { useAuthState } from "../../hook/useAuthState";

export const Login = () => {
  const { register, watch } = useForm();

  const { state, handleLogin } = useAuthState();

  const [email, password] = ['email', 'password'];

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleLogin(email, password);
  }

  return (
    <Wrapper>
      <h4>Login Example</h4>
      <form action="">
        <input {...register('email')} type="text" />
        <input {...register('password')} type="password" />

        <button onClick={handleSubmit}>Logar</button>
      </form>
    </Wrapper>
  )
}