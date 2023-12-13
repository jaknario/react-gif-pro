/* eslint-disable react/prop-types */
import { useState } from "react";


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState();

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    // Ingreso de valores
    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        //setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );
        // Limpieza del input
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input
          type="text"
          placeholder="Buscar gift"
          value={ inputValue }
          onChange={ (event) =>  onInputChange(event) }
      />
    </form>
  )
}
