import { FormEvent } from "react";
import InputText from "./components/InputText";
import useButton from "./hooks/useButton";
import useInput from "./hooks/useInput";
import './App.css'
import ButtonSend from "./components/ButtonSend";

const App:React.FC = () => {
  const email = useInput(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'email');
  const username = useInput(/^[a-zA-Z0-9_-]{6,}$/, 'username');
  const password = useInput(/^.{8,}$/, 'password');

  const button = useButton([email, username, password]);

  const onSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    button.disable();
    console.log(email.value);
    console.log(username.value);
    console.log(password.value);
  };

  return (
    <form
      className="form_input"
      onSubmit={onSubmit}
      >
      <h3>Login</h3>
      <div>
        <InputText
          type="text"
          data={email}
          />
        <InputText
          type="text"
          data={username}
          />
        <InputText
          type="password"
          data={password}
          />
      </div>
      <ButtonSend data={button} />
    </form>
  )
};

export default App;