import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSummary } from '../../hooks/useSummary';
import { primaryButton, secondaryButton } from '../../helpers/StyleClasses';
import { FaWhatsapp, FaArrowLeft } from 'react-icons/fa6';

export const OrderSummary = ({ orders }) => {
    const { isDisabled, sendOrder } = useSummary(orders);

    return (
        <div className="col2 flex flex-col flex-[30%] h-1/2 bg-gradient-to-br from-[#9F531B]/5 to-[#7C3E13]/10 p-6 rounded-xl border border-[#9F531B]/20 shadow-sm">
            <div className='flex flex-col space-y-6'>

                <div className="space-y-3">
                    <h3 className="text-lg lg:text-xl font-semibold text-[#9F531B] border-b pb-2 border-[#9F531B]/20">
                        Resumen del pedido
                    </h3>

                    <div className="flex justify-between items-center text-sm lg:text-base text-[#1A1615]/75">
                        <span className="">Productos:</span>
                        <span className="font-medium">{orders.length}</span>
                    </div>

                </div>

                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col'>
                        <button
                            className={`${primaryButton} flex gap-2 items-center justify-center`}
                            disabled={isDisabled}
                            onClick={sendOrder}
                        >
                            <FaWhatsapp className="h-4 w-4 lg:h-5 lg:w-5" />
                            Realizar Pedido
                        </button>
                        {isDisabled && (
                            <p className="text-[10px] lg:text-xs text-red-500 mt-1">
                                * Uno o más productos no cumplen con la cantidad mínima de pedido
                            </p>
                        )}
                    </div>

                    <div className='flex justify-center items-center'>
                        <Link
                            to="/catalogo/todos/1"
                            className="no-underline w-full"
                        >
                            <button className={`${secondaryButton} w-full flex gap-2 items-center justify-center`} >
                                <FaArrowLeft className="h-4 w-4 lg:h-5 lg:w-5" />
                                Comprar Más
                            </button>
                        </Link>
                    </div>

                </div>

                <p className="text-[10px] lg:text-xs text-[#9F531B]/70 text-center mt-2">
                    * Los precios se proporcionarán en la cotización directamente por mensaje
                </p>
            </div>
        </div>
    )
}