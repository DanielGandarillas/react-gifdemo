import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value)
    console.log(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = inputValue.trim();
    if (value.length <= 0) return;
    onNewCategory(value)
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}
