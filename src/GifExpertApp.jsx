import PropTypes, { string } from 'prop-types';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp= () => {

  const [categorias, setCategorias] = useState([])
  
  
  const onAddCategory = (newCategory) => {
    categorias.includes(newCategory) ? categorias : setCategorias([ newCategory])
  
  }

  return (
    <>
      {/* {Titulo} */}
      <h1>GifExpertApp</h1>

      {/* {Agregar categorias} */}
      <AddCategory
          onNewCategory = {(category => onAddCategory(category))}
      />


      {/* { listado de Gif } */}
        {categorias.map((categoria)=>(
           <GifGrid
              key = {categoria}
              categoria = {categoria}
           />
        ))}
      

    </>
  )
}

