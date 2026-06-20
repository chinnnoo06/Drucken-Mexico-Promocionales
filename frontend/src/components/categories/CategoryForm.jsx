import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import { input, primaryButton } from '../../helpers/StyleClasses';
import { FaCircleExclamation } from 'react-icons/fa6';

export const CategoryForm = ({ setAdding, setEditing, saveCategory, formErrors, loadingAction, categoryEdit, idCategoryEdit, removeCategory }) => {
    const { formData, setFormData, manageChange } = useForm({
        name: '',
    })

    useEffect(() => {
        if (categoryEdit) {
            setFormData({ name: categoryEdit });
        }
    }, [categoryEdit]);

    return (
        <div className={`${setEditing ? 'flex justify-center' : ''} `}>
            <div className="animate-scaleIn bg-gradient-to-br from-[#9F531B]/5 to-[#7C3E13]/10 border border-[#9F531B]/20 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-center gap-5">

                <div className='form-group'>
                    <input
                        onChange={manageChange}
                        value={formData.name}
                        name='name'
                        placeholder="Nombre de la categoría"
                        className={input}
                    />
                    {formErrors.name && (
                        <span className="text-red-500 text-xs flex items-center mt-1">
                            <FaCircleExclamation className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-1" />
                            {formErrors.name}
                        </span>
                    )}
                </div>


                <div className="flex justify-between gap-5">

                    {setAdding ? (
                        <>
                            <button className={`${primaryButton} flex items-center justify-center gap-2 w-full`}
                                onClick={(e) => saveCategory(e, formData, setAdding, setEditing, false)}
                            >
                                {loadingAction ? 'Cargando...' : 'Guardar'}
                            </button>
                            <button className={`${primaryButton} flex items-center justify-center gap-2 w-full`}
                                onClick={() => setAdding(false)}
                            >
                                Cancelar
                            </button>
                        </>

                    ) : (
                        <>
                            <button className={`${primaryButton} flex items-center justify-center gap-2 w-full`}
                                onClick={(e) => saveCategory(e, formData, setAdding, setEditing, true, idCategoryEdit)}
                            >
                                {loadingAction ? 'Cargando...' : 'Guardar'}
                            </button>
                            <button className={`${primaryButton} flex items-center justify-center gap-2 w-full`}
                                onClick={() => setEditing(false)}
                            >
                                Cancelar
                            </button>
                        </>

                    )}


                </div>
            </div>
        </div>

    )
}
