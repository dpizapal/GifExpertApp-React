import React from 'react';
import { useState } from 'react';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

  return (
    <>
      {/*Título */}
      
      <h1>GifExpertApp</h1>

      {/*Input */}


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
