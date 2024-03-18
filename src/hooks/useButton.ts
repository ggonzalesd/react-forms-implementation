import { useState } from "react"
import { UseInput } from "./useInput";

export interface UseButton {
  loading: boolean;
  valid: () => boolean;
  enable: () => void;
  disable: () => void;
}

const useButton = (expressions:UseInput[]): UseButton => {
  const [loading, setLoading] = useState(false);

  const valid = () => {
    for(let i=0; i<expressions.length; i++) {
      if (!expressions[i].ok())
        return false;
    }
    return true;
  };

  const enable = () => {
    setLoading(false);
    expressions.forEach(useInput => useInput.setEnable());
  };

  const disable = () => {
    setLoading(true);
    expressions.forEach(useInput => useInput.setDisable());
  };

  return {
    loading,
    valid,
    enable,
    disable,
  };
}

export default useButton;
