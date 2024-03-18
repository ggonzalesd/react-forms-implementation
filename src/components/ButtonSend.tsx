import { UseButton } from "../hooks/useButton";
import './ButtonSend.css';

interface ButtonSend {
  data: UseButton
}

const ButtonSend = (props: ButtonSend) => {
  const { data } = props;

  const disabled = !data.valid() || data.loading;

  const classes = [
    'button_send',
    data.loading?'button_send-loading':(data.valid()&&'button_send-enable')
  ];

  return (
    <button
      className={classes.join(' ').trim()}
      disabled={disabled}
      >
      { data.loading ? 'Loading...' : 'Register' }
    </button>
  )
};

export default ButtonSend;