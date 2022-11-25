import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch']);

  const onAddCategory = ( newCategory ) => {

    if ( categories.includes(newCategory)) return;//Si la categoría ya existe, salir de la función
    
    setCategories([ newCategory,...categories ]);
    //setCategories([...categories, 'Valorant']);
    //setCategories(cat => [ newCategory,...cat] );
  }

  return (
    <>
      
      <h1>GifExpertApp</h1>

      <AddCategory ç
        
        onNewCategory={ (event)=> onAddCategory(event) }
      />
        { 
          categories.map( ( category ) => (
            <GifGrid 
              key={ category } 
              category={ category }/>
          ))
        }
  
    </>
  )
}
