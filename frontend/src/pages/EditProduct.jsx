import React, { useState, useEffect } from 'react'
import { useForm } from '../hooks/useForm';
import { useProductForm } from '../hooks/useProductForm';
import { ProductForm } from '../components/product/ProductForm';
import { useLocation, useNavigate } from 'react-router-dom';

export const EditProduct = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const update = true;

    useEffect(() => {
        if (!location.state?.product) {
            navigate('/admin/catalogo/todos/1', { replace: true });
        }
    }, [location, navigate]);

    // Inicializamos colors solo con color y hex, image vacío
    const initialColors = location.state.product.colors.map(c => ({
        color: c.color,
        hex: c.hex,
        image: '' // obliga a subir nueva imagen
    }));

    const [colors, setColors] = useState(initialColors);

    const { formData, setFormData, manageChange } = useForm({
        _id: location.state.product._id,
        name: location.state.product.name,
        key: location.state.product.key,
        description: location.state.product.description,
        colors: initialColors,
        printingTechnique: location.state.product.printingTechnique,
        material: location.state.product.material,
        measures: location.state.product.measures,
        printingMeasures: location.state.product.printingMeasures,
        category: location.state.product.category,
        minQuantity: location.state.product.minQuantity,
        generalImage: ''
    });

    const { handleAddColor, handleRemoveColor, handleColorChange, handleImageChange, sendProduct, formErrors, loading } = useProductForm(colors, setColors, formData, setFormData, update)


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className='max-w-7xl mx-auto px-4 pb-10 pt-[120px]'>
            <div className="mb-8">
                <span className="text-[11px] lg:text-[13px] font-semibold tracking-[0.18em] uppercase text-[#7C3E13]">
                    Editar Producto
                </span>
                <h2 className='mt-2 font-semibold text-4xl lg:text-5xl tracking-tight text-[#9F531B]'>
                    Editar un Producto Existente
                </h2>
            </div>

            <ProductForm
                handleAddColor={handleAddColor} handleRemoveColor={handleRemoveColor} handleColorChange={handleColorChange} handleImageChange={handleImageChange} sendProduct={sendProduct}
                formErrors={formErrors} loading={loading} formData={formData} manageChange={manageChange} colors={colors} isEdit={true} />
        </section>
    )
}
