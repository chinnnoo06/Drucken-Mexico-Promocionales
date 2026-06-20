import React from 'react'
import { Link } from 'react-router-dom';
import { GlobalImage } from '../../helpers/Global';
import ReactDOM from 'react-dom';
import { primaryButton, secondaryButton } from '../../helpers/StyleClasses';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import { FaArrowLeft, FaBagShopping } from 'react-icons/fa6';

export const ModalAddOrder = ({ isOpen, onClose, order }) => {
    useLockBodyScroll(isOpen)

    return ReactDOM.createPortal(
        <div className={`fixed inset-0 z-100 flex items-center justify-center px-4 backdrop-blur-sm bg-black/5
        transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}>

            <div role="dialog" aria-modal="true" aria-labelledby="add-order-modal-title" className={`max-w-xl w-full bg-[#FFF9F5] rounded-lg shadow-lg p-4 transition-all duration-300 ease-out origin-center
                ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"}`} onClick={(e) => e.stopPropagation()}>

                <div className='flex flex-col text-center'>
                    <h3 id="add-order-modal-title" className="text-[#9F531B] font-semibold text-lg lg:text-xl mb-4">
                        ¡Producto agregado!
                    </h3>

                    <p className='text-[#1A1615]/75 text-sm lg:text-base mb-4'>
                        Tu producto se agregó correctamente. Puedes seguir comprando o ir a revisar tu pedido.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-4">
                        <div className="w-4/5 md:w-1/2 flex justify-center">
                            <div className="relative w-full max-w-md h-48 bg-white rounded-xl shadow-sm border border-[#9F531B] overflow-hidden group">
                                <img
                                    src={`${GlobalImage.url}${order.ProductImage}`}
                                    alt={order.ProductName}
                                    loading="lazy"
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-contain  transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col ">
                            <h4 className="text-[#9F531B] font-semibold text-left text-base lg:text-lg mb-2">{order.ProductName} ({order.ProductKey})</h4>

                            <div className="space-y-2 mb-2">
                                <div className="flex items-center gap-2 text-sm lg:text-base">
                                    <span className="text-[#9F531B]">Color Seleccionado:</span>
                                    <span className="font-medium text-[#1A1615]/75">{order.ProductColor}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm lg:text-base">
                                    <span className="text-[#9F531B]">Cantidad Agregada:</span>
                                    <span className="font-medium text-[#1A1615]/75">{order.OrderQuantity}</span>
                                </div>
                            </div>

                            {order.ProductCategory == "Agendas" && (
                                <div className="bg-transparent border border-[#9F531B] rounded-lg p-2 md:p-3 w-full">
                                    <div className="flex justify-between items-center text-sm lg:text-lg">
                                        <span className="font-semibold text-[#9F531B]">Subtotal:</span>
                                        <span className="font-bold text-[#9F531B]">
                                            MXN {order.Subtotal.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                                        </span>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                            className={`${secondaryButton} flex gap-2 items-center justify-center w-full sm:w-1/2`}
                            onClick={() => setShowModal(false)}
                        >
                            <FaArrowLeft className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
                            Seguir comprando
                        </button>

                        <Link to="/pedido" className={`${primaryButton} flex gap-2 items-center justify-center w-full sm:w-1/2`}>
                            <FaBagShopping className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
                            Ver mi pedido
                        </Link>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    )
}