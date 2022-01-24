import { useState } from "react";

export const useForm = (initialState = {}) => {
  
  const [input, setInput] = useState(initialState)

  const handleChange = (e) => {

    const {name, value, checked, type} = e.target;
    
    setInput({
      ...input,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const reset =() => {
    setInput(initialState)
  }
  
  return ([input, handleChange, reset]);
};
