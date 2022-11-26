
import { useFetchFifs } from '../hooks/useFetchFifs';
import { GiftItem } from './GiftItem';


export const GifGrid = ({category}) => {

  const { images, isLoading } = useFetchFifs ( category );


  return (
    <>
      <h3>{ category }</h3>
      <div className='card-grid'>
        {
          images.map ( ( image )=> (
            <GiftItem 
              key={ image.id }
              { ...image }
              />

        ))
        }
      </div>
    </>
  )
}


