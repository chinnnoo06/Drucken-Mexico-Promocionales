import React from 'react'
import { GlobalImage } from '../../helpers/Global'

export const ImgProduct = ({product, selectedColor}) => {
    
    return (
        <div className='w-full md:w-2/5 bg-white rounded-lg shadow-md flex items-center justify-center mt-8 lg:my-8'>
            <div className='w-full max-w-md h-[350px] sm:h-[400px] md:h-[500px] aspect-square'>
                <img
                    src={`${GlobalImage.url}${product.colors[selectedColor].image}`}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    )
}
