import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = ( newCategory ) => {
    //setCategories([...categories, 'Valorant']);
    //setCategories(cat => [ newCategory,...cat] );
    setCategories([ newCategory,...categories ]);
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
