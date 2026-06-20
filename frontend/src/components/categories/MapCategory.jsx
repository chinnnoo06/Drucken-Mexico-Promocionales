import React, { useState } from 'react'
import LoadingSpinner from '../ui/LoadingSpinner';
import { CategoryForm } from './CategoryForm';
import { primaryButton, secondaryButton } from '../../helpers/StyleClasses';
import { ModalTrigger } from "../ui/ModalTrigger"
import { ConfirmationModal } from '../ui/ConfirmationModal';
import { FaPenToSquare, FaTrash, FaPlus } from 'react-icons/fa6';

export const MapCategory = ({ categories, loading, adding, setAdding, saveCategory, formErrors, setFormErrors, loadingAction, setEditing, setCategoryEdit, setIdCategoryEdit, removeCategory }) => {
    const [idCategoryDeleted, setIdCategoryDeleted] = useState(null);

    if (loading) {
        return <LoadingSpinner />;
    }

    const manageShowModal = (category) => {
        setShowModal(true);
        setIdCategoryDeleted(category._id);
    }

    const editing = (category) => {
        setEditing(true)
        setIdCategoryEdit(category._id)
        setCategoryEdit(category.name)
        setAdding(false);
        setFormErrors([])
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {categories.map((category) => (
                    <div
                        key={category._id}
                        className="relative bg-gradient-to-br from-[#9F531B]/5 to-[#7C3E13]/10 border border-[#9F531B]/20 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >

                        <div className="bg-gradient-to-r from-[#9F531B] to-[#7C3E13] p-2 text-center">
                            <h3 className="text-[#EEEEEF] font-semibold text-lg lg:text-xl tracking-wide">
                                {category.name}
                            </h3>

                            <span className="text-[#EEEEEF] font-medium text-sm lg:text-base tracking-wide">
                                {category.productCount} Productos de esta categoría
                            </span>

                        </div>

                        <div className="p-4 flex  justify-between gap-5 items-center">

                            <button className={`${secondaryButton} w-full flex items-center justify-center gap-2`} onClick={() => editing(category)}>
                                <FaPenToSquare className="h-4 w-4 lg:h-5 lg:w-5" />
                                Editar
                            </button>

                            <ModalTrigger
                                renderTrigger={(onOpen) => (
                                    <button className={`${secondaryButton}  flex gap-2 items-center justify-center w-1/2`} onClick={() => {
                                        setIdCategoryDeleted(category._id)
                                        onOpen()
                                    }}>
                                        <FaTrash className="h-4 w-4 lg:h-5 lg:w-5" />
                                        Eliminar
                                    </button>
                                )}
                            >
                                {(onClose, isOpen) => (
                                    <ConfirmationModal isOpen={isOpen} onClose={onClose} onConfirm={async () => {
                                        await removeCategory(idCategoryDeleted)
                                        onClose()
                                    }}
                                        title="¿Realmente quieres eliminar esta categoría?"
                                        context={`Si eliminas la categoría se eliminarán ${category.productCount} productos`} />
                                )}
                            </ModalTrigger>
                        </div>

                    </div>
                ))}

                {adding && (
                    <CategoryForm setAdding={setAdding} saveCategory={saveCategory} formErrors={formErrors} loadingAction={loadingAction} />
                )}

            </div>

            {!adding && (
                <button className={`${primaryButton} mt-8 flex items-center justify-center gap-2`} onClick={() => setAdding(true)}>
                    <FaPlus className="h-4 w-4 lg:h-5 lg:w-5" />
                    Agregar
                </button>
            )}
        </div>
    )
}
