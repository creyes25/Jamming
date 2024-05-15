import { useState } from "react";

function SearchBar({handleSearchVal}) {
  const [input, setInput] = useState('')

  const handleInputChange = ({target}) => {
    setInput(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('here')
    handleSearchVal(input)
    setInput('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='input'
          value={input} 
          onChange={handleInputChange} 
        />

        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar;
