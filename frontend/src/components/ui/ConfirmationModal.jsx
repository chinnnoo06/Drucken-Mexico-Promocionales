import React from 'react';
import ReactDOM from 'react-dom';
import { primaryButton, secondaryButton } from '../../helpers/StyleClasses';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import { FaArrowLeft, FaCheck } from 'react-icons/fa6';

export const ConfirmationModal = ({ onClose, isOpen, onConfirm, title, context }) => {
    useLockBodyScroll(isOpen)

    return ReactDOM.createPortal(
        <div className={`fixed inset-0 z-100 flex items-center justify-center px-4 backdrop-blur-sm bg-black/5
                        transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' :
                'opacity-0 pointer-events-none'}`} onClick={onClose}>

            <div role="dialog" aria-modal="true" aria-labelledby="confirmation-modal-title" className={`max-w-xl w-full bg-[#FFF9F5] rounded-lg shadow-lg p-4 transition-all duration-300 ease-out origin-center
                ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"}`} onClick={(e) => e.stopPropagation()}>

                <div className='container-modal flex flex-col text-center'>
                    <h3 id="confirmation-modal-title" className="text-[#9F531B] font-semibold text-lg lg:text-xl mb-4">
                        {title}
                    </h3>

                    <p className='text-[#1A1615]/75 text-sm lg:text-base mb-4'>
                        {context}
                    </p>

                    <div className="flex gap-3 justify-center">
                        <button className={`${secondaryButton} flex gap-2 items-center justify-center w-full sm:w-1/2`} onClick={() => onClose()}>
                            <FaArrowLeft className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
                            Cancelar
                        </button>
                        <button className={`${primaryButton} flex gap-2 items-center justify-center w-full sm:w-1/2`} onClick={() => onConfirm()}>
                            <FaCheck className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}