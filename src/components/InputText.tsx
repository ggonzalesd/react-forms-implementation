import { UseInput } from "../hooks/useInput"
import './InputText.css'

interface InputText {
  type: 'text' | 'password',
  data: UseInput,
}

const InputText = (props:InputText) => {
  const { type, data } = props;

  const classes = ['input_text-input', data.empty() ? 'empty' : ( data.ok() ? 'ok' : 'error' )];

  return (
    <div className='input_text'>
      <label
        htmlFor={data.name}
        className="input_text-label"
        >
        {data.name}
      </label>
      <input
        type={type}
        name={data.name}
        placeholder={`Enter ${data.name}`}
        onChange={data.update}
        className={classes.join(' ').trim()}
        disabled={data.isDisable}
        />
    </div>
  );
}

export default InputText;
