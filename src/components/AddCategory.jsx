
import React, { useState } from 'react'

export const AddCategory= ({onNewCategory}) => {

    const [inputValue, setImputValue] = useState('')

    const onInputChange = (event) => {
        setImputValue(event.target.value)
    }

    const onImputSubmit = (event) => {
        event.preventDefault()
        inputValue.trim().length <= 1 ? inputValue : onNewCategory(inputValue.trim()) 
        setImputValue('')
    }

return (
   
    <form onSubmit={event => onImputSubmit(event)}> 
        <input 
            type="text" 
            placeholder='Buscar Gifs'
            value={inputValue}
            onChange={(event) => onInputChange(event)}
        />
    </form> 

  )
}
