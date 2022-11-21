import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = () => {
    //setCategories([...categories, 'Valorant']);
    setCategories(cat => ['Valorant',...cat] );
  }

  return (
    <>
      {/*Título */}
      
      <h1>GifExpertApp</h1>

      {/*Input */}
      <AddCategory setCategories={ setCategories }/>


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
