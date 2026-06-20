import React from 'react'
import { useCategorys } from '../../hooks/useCategorys';
import { errorSpan, input, label, primaryButton, select } from '../../helpers/StyleClasses';
import { FaTag, FaCircleExclamation, FaKey, FaAlignLeft, FaPaintbrush, FaList, FaBox, FaRulerVertical, FaRulerCombined, FaLayerGroup, FaPalette, FaPlus, FaTrash, FaImage, FaPencil, FaCirclePlus } from 'react-icons/fa6';

export const ProductForm = ({ handleAddColor, handleRemoveColor, handleColorChange, handleImageChange, sendProduct, formErrors, loading, formData, manageChange, colors, isEdit = false }) => {
    const { categories } = useCategorys();

    return (
        <div className='form-container flex flex-col justify-center items-center'>
            <form className='space-y-6 w-full flex flex-col' onSubmit={sendProduct}>
                <div className="flex-1 space-y-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="form-group flex-1">
                            <label htmlFor="name" className={label}>
                                <FaTag className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Ingresa el nombre"
                                className={input}
                                onChange={manageChange}
                                value={formData.name}
                            />
                            {formErrors.name && (
                                <span className={errorSpan}>
                                    <FaCircleExclamation className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-1" />
                                    {formErrors.name}
                                </span>
                            )}
                        </div>

                        <div className="form-group flex-1">
                            <label htmlFor="key" className={label}>
                                <FaKey className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                                Clave
                            </label>
                            <input
                                type="text"
                                id="key"
                                name="key"
                                placeholder="Ingresa la clave"
                                className={input}
                                onChange={manageChange}
                                value={formData.key}
                            />
                            {formErrors.key && (
                                <span className={errorSpan}>
                                    <FaCircleExclamation className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-1" />
                                    {formErrors.key}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description" className={label}>
                            <FaAlignLeft className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                            Descripción
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows="5"
                            placeholder="Ingresa la descripción del producto..."
                            className={input}
                            onChange={manageChange}
                            value={formData.description}
                        />
                        {formErrors.description && (
                            <span className={errorSpan}>
                                <FaCircleExclamation className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-1" />
                                {formErrors.description}
                            </span>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="printingTechnique" className={label}>
                            <FaPaintbrush className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                            Técnica(s) de Impresión
                        </label>
                        <input
                            type="text"
                            id="printingTechnique"
                            name="printingTechnique"
                            placeholder="Ingresa la(s) técnica(s) de impresión"
                            className={input}
                            onChange={manageChange}
                            value={formData.printingTechnique}
                        />
                        {formErrors.printingTechnique && (
                            <span className={errorSpan}>
                                <FaCircleExclamation className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-1" />
                                {formErrors.printingTechnique}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="form-group flex-1">
                            <label htmlFor="category" className={label}>
                                <FaList className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                                Categoria
                            </label>
                            <div className="relative">
                                <select
                                    id="category"
                                    name="category"
                                    className={select}
                                    onChange={manageChange}
                                    value={formData.category}
                                >
                                    <option value="">Selecciona una</option>

                                    {categories.map(cat => (
                                        <option key={cat.name} value={cat.name}>
                                            {cat.name}
                                        </option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#9F531B]">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                            {formErrors.category && (
                                <span className={errorSpan}>
                                    <FaCircleExclamation className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-1" />
                                    {formErrors.category}
                                </span>
                            )}
                        </div>

                        <div className="form-group flex-1">
                            <label htmlFor="material" className={label}>
                                <FaBox className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                                Material
                            </label>
                            <input
                                type="text"
                                id="material"
                                name="material"
                                placeholder="Ingresa el material"
                                className={input}
                                onChange={manageChange}
                                value={formData.material}
                            />
                            {formErrors.material && (
                                <span className={errorSpan}>
                                    <FaCircleExclamation className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-1" />
                                    {formErrors.material}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="form-group flex-1">
                            <label htmlFor="measures" className={label}>
                                <FaRulerVertical className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                                Medidas
                            </label>
                            <input
                                type="text"
                                id="measures"
                                name="measures"
                                placeholder="Ingresa las medidas del producto"
                                className={input}
                                onChange={manageChange}
                                value={formData.measures}
                            />
                            {formErrors.measures && (
                                <span className={errorSpan}>
                                    <FaCircleExclamation className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-1" />
                                    {formErrors.measures}
                                </span>
                            )}
                        </div>

                        <div className="form-group flex-1">
                            <label htmlFor="printingMeasures" className={label}>
                                <FaRulerCombined className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                                Medidas de Impresión
                            </label>
                            <input
                                type="text"
                                id="printingMeasures"
                                name="printingMeasures"
                                placeholder="Ingresa las medidas del producto"
                                className={input}
                                onChange={manageChange}
                                value={formData.printingMeasures}
                            />
                            {formErrors.printingMeasures && (
                                <span className={errorSpan}>
                                    <FaCircleExclamation className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-1" />
                                    {formErrors.printingMeasures}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="form-group flex-1">
                        <label htmlFor="minQuantity" className={label}>
                            <FaLayerGroup className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                            Cantidad mínima
                        </label>
                        <input
                            name='minQuantity'
                            type="number"
                            min="1"
                            placeholder="Cantidad mínima"
                            className={input}
                            onChange={manageChange}
                            value={formData.minQuantity}
                        />
                        {formErrors.minQuantity && (
                            <span className={errorSpan}>
                                <FaCircleExclamation className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-1" />
                                {formErrors.minQuantity}
                            </span>
                        )}
                    </div>

                    <div className="colors-section">
                        <div className="flex justify-between items-center">
                            <label className={label}>
                                <FaPalette className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                                Colores del producto
                            </label>
                            <button
                                type="button"
                                onClick={handleAddColor}
                                className={`${primaryButton} flex gap-2 items-center justify-center !text-xs !lg:text-sm`}
                            >
                                <FaPlus className="h-4 w-4 lg:h-5 lg:w-5" />
                                Agregar
                            </button>
                        </div>

                        {colors.map((colorGroup, index) => (
                            <div key={index} className="color-group mt-4 p-4 bg-[#9F531B]/5 rounded-lg border border-[#9F531B]/20">
                                <div className="flex justify-between items-center mb-3">
                                    <p className={label}>Color {index + 1}</p>
                                    {colors.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveColor(index)}
                                            className="text-red-500 hover:text-red-700 text-[10px] lg:text-xs"
                                        >
                                            <FaTrash className="inline-block h-4 w-4 lg:h-5 lg:w-5" /> Eliminar
                                        </button>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className={label}>Nombre del color</label>
                                        <input
                                            type="text"
                                            name={`colors[${index}][color]`}
                                            value={colorGroup.color}
                                            onChange={(e) => handleColorChange(index, 'color', e.target.value)}
                                            placeholder="Ej: Blanco"
                                            className={input}
                                        />
                                        {formErrors[`colors[${index}].color`] && (
                                            <span className={errorSpan}>
                                                <FaCircleExclamation className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-1" />
                                                {formErrors[`colors[${index}].color`]}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label className={label}>Código HEX</label>
                                        <div className="flex items-center">
                                            <input
                                                type="text"
                                                name={`colors[${index}][hex]`}
                                                value={colorGroup.hex}
                                                onChange={(e) => handleColorChange(index, 'hex', e.target.value)}
                                                placeholder="#FFFFFF"
                                                className={input}
                                            />
                                            {colorGroup.hex && (
                                                <div
                                                    className="ml-2 w-8 h-8 rounded border border-gray-300"
                                                    style={{ backgroundColor: colorGroup.hex }}
                                                    title="Previsualización del color"
                                                />
                                            )}
                                        </div>
                                        {formErrors[`colors[${index}].hex`] && (
                                            <span className={errorSpan}>
                                                <FaCircleExclamation className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-1" />
                                                {formErrors[`colors[${index}].hex`]}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label className={label}>Imagen</label>
                                        <input
                                            type="file"
                                            name={`colors[${index}][image]`}
                                            onChange={(e) => handleColorChange(index, 'image', e.target.files[0])}
                                            className={input}
                                            accept=".jpg, .jpeg, .png"
                                        />

                                        {colorGroup.image && (
                                            <p className="mt-1 text-[10px] lg:text-xs text-[#1A1615]/75">
                                                Archivo actual: <span className="font-medium">
                                                    {typeof colorGroup.image === 'string' ? colorGroup.image : colorGroup.image.name}
                                                </span>
                                            </p>
                                        )}

                                        {formErrors[`colors[${index}].image`] && (
                                            <span className={errorSpan}>
                                                <FaCircleExclamation className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-1" />
                                                {formErrors[`colors[${index}].image`]}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {formData.colors.length > 1 && (
                    <div className="form-group">
                        <label htmlFor="minQuantity" className={label}>
                            <FaImage className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                            Imagen general de todos los colores
                        </label>
                        <input
                            type="file"
                            name='generalImage'
                            onChange={(e) => handleImageChange(e.target.files[0])}
                            className={input}
                            accept=".jpg, .jpeg, .png"
                        />
                        {formData.generalImage && (
                            <p className="mt-1 text-[10px] lg:text-xs text-[#1A1615]/75">
                                Archivo actual: <span className="font-medium">
                                    {/* Aquí está el cambio */}
                                    {typeof formData.generalImage === 'string' ? formData.generalImage : formData.generalImage.name}
                                </span>
                            </p>
                        )}
                        {formErrors.generalImage && (
                            <span className={errorSpan}>
                                <FaCircleExclamation className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-1" />
                                {formErrors.generalImage}
                            </span>
                        )}
                    </div>
                )}

                <div className='flex justify-center pt-4'>
                    <button
                        className={`${primaryButton} flex gap-2 items-center justify-center`}
                        type="submit"
                        disabled={loading}
                    >
                        {isEdit ? <FaPencil className="h-4 w-4 lg:h-5 lg:w-5" /> : <FaCirclePlus className="h-4 w-4 lg:h-5 lg:w-5" />}
                        {loading ? 'Cargando...' : isEdit ? 'Actualizar Producto' : 'Crear Producto'}
                    </button>
                </div>
            </form>
        </div>
    )
}