import React, { useState, useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import { useProductForm } from '../hooks/useProductForm';
import { ProductForm } from '../components/product/ProductForm';

export const AddProduct = () => {
    const [colors, setColors] = useState([{ color: '', hex: '', image: '' }]);
    const { formData, setFormData, manageChange } = useForm({
        name: '',
        key: '',
        description: '',
        colors: [{ color: '', hex: '', image: '' }],
        printingTechnique: '',
        material: '',
        measures: '',
        printingMeasures: '',
        category: '',
        minQuantity: 1,
        generalImage: ''
    })

    const { handleAddColor, handleRemoveColor, handleColorChange, handleImageChange, sendProduct, formErrors, loading } = useProductForm(colors, setColors, formData, setFormData)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className='max-w-7xl mx-auto px-4 pb-10 pt-[120px]'>
            <div className="mb-8">
                <span className="text-[11px] lg:text-[13px] font-semibold tracking-[0.18em] uppercase text-[#7C3E13]">
                    Agregar Producto
                </span>
                <h2 className='mt-2 font-semibold text-4xl lg:text-5xl tracking-tight text-[#9F531B]'>
                    Agrega un Nuevo Producto
                </h2>
            </div>

            <ProductForm
                handleAddColor={handleAddColor} handleRemoveColor={handleRemoveColor} handleColorChange={handleColorChange} handleImageChange={handleImageChange} sendProduct={sendProduct}
                formErrors={formErrors} loading={loading} formData={formData} manageChange={manageChange} colors={colors} />
        </section>
    )
}