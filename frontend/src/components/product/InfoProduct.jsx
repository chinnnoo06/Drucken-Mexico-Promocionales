import React, { useState, useEffect } from 'react'
import { ModalAddOrder } from './ModalAddOrder';
import { useProduct } from '../../hooks/useProduct';
import { input, primaryButton } from '../../helpers/StyleClasses';
import { ModalTrigger } from "../ui/ModalTrigger"

export const InfoProduct = ({ product, selectedColor, setSelectedColor }) => {
    const { quantity, order, handleQuantityChange, saveProductLocalStorage } = useProduct(product, selectedColor);

    return (
        <>
            <div className='lg:w-3/5 pt-8 lg:p-8 w-full flex flex-col justify-center'>
                <h3 className='text-[#9F531B] font-semibold text-xl lg:text-2xl mb-5'>
                    {product.name} ({product.key})
                </h3>

                <span className='text-[#1A1615]/75 text-xs lg:text-base block mb-5 whitespace-pre-line'>
                    {product.description}
                </span>

                <div className="mb-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <span className="text-[#7C3E13] text-sm lg:text-base font-medium mb-2">Categoría</span>
                            <span className="text-[#1A1615]/75 text-xs lg:text-sm"> {product.category}</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-[#7C3E13] text-sm lg:text-base font-medium mb-2">Material</span>
                            <span className="text-[#1A1615]/75 text-xs lg:text-sm">{product.material}</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-[#7C3E13] text-sm lg:text-base font-medium mb-2">Técnica de impresión</span>
                            <span className="text-[#1A1615]/75 text-xs lg:text-sm">{product.printingTechnique}</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-[#7C3E13] text-sm lg:text-base font-medium mb-2">Medidas</span>
                            <span className="text-[#1A1615]/75 text-xs lg:text-sm">{product.measures}</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-[#7C3E13] text-sm lg:text-base font-medium mb-2">Medidas de impresión</span>
                            <span className="text-[#1A1615]/75 text-xs lg:text-sm">{product.printingMeasures}</span>
                        </div>
                    </div>
                </div>

                <div className='mb-5'>
                    <h4 className='text-[#7C3E13] text-sm lg:text-base font-medium mb-2'>Colores disponibles</h4>
                    <div className="flex flex-wrap gap-3">
                        {product.colors.map((c, index) => (
                            <div className='flex flex-col gap-2 items-center' key={index}>
                                <button
                                    onClick={() => setSelectedColor(index)}
                                    className={`w-5 h-5 lg:w-6 lg:h-6 rounded-full border-2 transition-all flex items-center justify-center
                                                ${selectedColor === index ? 'border-[#7C3E13]/50 scale-110' : 'border-gray-200 hover:border-gray-300'}`}
                                    style={{ backgroundColor: c.hex || '#ccc' }}
                                    aria-label={`Seleccionar color ${c.color}`}
                                    title={c.color}
                                >

                                </button>
                                <span className='text-[#1A1615]/75 text-[10px] lg:text-xs'>{c.color}</span>
                            </div>

                        ))}
                    </div>
                </div>

                <div className='mb-5'>
                    <label htmlFor='quantity' className='block text-[#7C3E13] text-sm lg:text-base font-medium mb-2'>Cantidad</label>
                    <input
                        type="number"
                        id='quantity'
                        name='quantity'
                        min="1"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className={input}
                    />

                </div>

                <ModalTrigger
                    renderTrigger={(onOpen) => (
                        <button className={`${primaryButton} flex gap-2 items-center justify-center`} onClick={() => {
                            saveProductLocalStorage()
                            onOpen()
                        }}>
                            <i className="fa-solid fa-bag-shopping"></i>
                            Agregar al pedido
                        </button>
                    )}
                >
                    {(onClose, isOpen) => (
                        <ModalAddOrder isOpen={isOpen} onClose={onClose} order={order}/>
                    )}
                </ModalTrigger>
            </div>
        </>
    )
}