import React from 'react';
import ReactDOM from 'react-dom';
import { primaryButton, secondaryButton } from '../../helpers/StyleClasses';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'

export const ConfirmationModal = ({ onClose, isOpen, onConfirm, title, context }) => {
    useLockBodyScroll(isOpen)

    return ReactDOM.createPortal(
        <div className={`fixed inset-0 z-100 flex items-center justify-center px-4 backdrop-blur-sm bg-black/5
                        transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' :
                'opacity-0 pointer-events-none'}`} onClick={onClose}>

            <div className={`max-w-xl w-full bg-[#FFF9F5] rounded-lg shadow-lg p-4 transition-all duration-300 ease-out origin-center 
                ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"}`} onClick={(e) => e.stopPropagation()}>

                <div className='container-modal flex flex-col text-center'>
                    <h3 className="text-[#9F531B] font-semibold text-lg lg:text-xl mb-4">
                        {title}
                    </h3>

                    <p className='text-[#1A1615]/75 text-sm lg:text-base mb-4'>
                        {context}
                    </p>

                    <div className="flex gap-3 justify-center">
                        <button className={`${secondaryButton} flex gap-2 items-center justify-center w-full sm:w-1/2`} onClick={() => onClose()}>
                            <i className="fa-solid fa-arrow-left"></i>
                            Cancelar
                        </button>
                        <button className={`${primaryButton} flex gap-2 items-center justify-center w-full sm:w-1/2`} onClick={() => onConfirm()}>
                            <i className="fa-solid fa-check"></i>
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}