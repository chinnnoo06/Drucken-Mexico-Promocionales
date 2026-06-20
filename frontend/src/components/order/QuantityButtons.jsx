import React from 'react'

export const QuantityButtons = ({decreaseQuantity, increaseQuantity, quantity}) => {
    return (
        <div className="flex items-center gap-2">
            {quantity > 1 && (
                <button
                    type="button"
                    className="px-3 py-1 text-sm lg:text-base text-[#EEEEEF] bg-[#9F531B] hover:bg-[#7C3E13]"
                    onClick={decreaseQuantity}
                    aria-label="Disminuir cantidad"
                >
                    -
                </button>
            )}

            <span className="text-sm lg:text-base py-1 bg-[#EEEEEF] text-center w-12">
                {quantity}
            </span>

            <button
                type="button"
                className="px-3 py-1 text-sm lg:text-base text-[#EEEEEF] bg-[#9F531B] hover:bg-[#7C3E13]"
                onClick={increaseQuantity}
                aria-label="Aumentar cantidad"
            >
                +
            </button>
        </div>
    )
}
