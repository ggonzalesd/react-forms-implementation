import { ChangeEvent, useState } from "react";

export interface UseInput {
  name: string;
  value: string;
  ok: () => boolean;
  empty: () => boolean;
  update: (e: ChangeEvent<HTMLInputElement>) => void;
  isDisable: boolean;
  setDisable: () => void;
  setEnable: () => void;
}

const useInput = (regex:RegExp, name:string):UseInput => {
  const [value, setValue] = useState('');
  const [disable, setDisable] = useState(false);

  // Verifica la entrada de texto
  const ok = () => {
    return regex.test(value);
  }
  // Verifica si la entrada no está vacía
  const empty = () => {
    return value.length === 0;
  }
  // Actualiza el valor por el evento change
  const update = (e:ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return {
    name,
    value,
    ok,
    empty,
    update,
    isDisable: disable,
    setDisable: () => setDisable(true),
    setEnable: () => setDisable(false),
  }
}

export default useInput;
