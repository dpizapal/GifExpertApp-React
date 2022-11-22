import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = ( newCategory ) => {

    if ( categories.includes(newCategory)) return;//Si la categoría ya existe, salir de la función
    
    setCategories([ newCategory,...categories ]);
    //setCategories([...categories, 'Valorant']);
    //setCategories(cat => [ newCategory,...cat] );
  }

  return (
    <>
      {/*Título */}
      
      <h1>GifExpertApp</h1>

      {/*Input */}
      <AddCategory ç
        //setCategories={ setCategories }
        onNewCategory={ (event)=> onAddCategory(event) }
      />


      {/* Listado de Items*/}
      
      <ol>
        { categories.map( category => {
            return <li key={ category }>{ category }</li>
        }) 
        }
        
        
      </ol>
          {/* GIF Items*/}
    </>
  )
}
