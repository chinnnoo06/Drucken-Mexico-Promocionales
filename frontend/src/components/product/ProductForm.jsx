import React from 'react'
import { useCategorys } from '../../hooks/useCategorys';
import { errorSpan, input, label, primaryButton, select } from '../../helpers/StyleClasses';

export const ProductForm = ({ handleAddColor, handleRemoveColor, handleColorChange, handleImageChange, sendProduct, formErrors, loading, formData, manageChange, colors, isEdit = false }) => {
    const { categories } = useCategorys();

    return (
        <div className='form-container flex flex-col justify-center items-center'>
            <form className='space-y-6 w-full flex flex-col' onSubmit={sendProduct}>
                <div className="flex-1 space-y-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="form-group flex-1">
                            <label htmlFor="name" className={label}>
                                <i className="fas fa-tag mr-2"></i>
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
                                    <i className="fas fa-exclamation-circle mr-1"></i>
                                    {formErrors.name}
                                </span>
                            )}
                        </div>

                        <div className="form-group flex-1">
                            <label htmlFor="key" className={label}>
                                <i className="fa-solid fa-key mr-2"></i>
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
                                    <i className="fas fa-exclamation-circle mr-1"></i>
                                    {formErrors.key}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description" className={label}>
                            <i className="fas fa-align-left mr-2"></i>
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
                                <i className="fas fa-exclamation-circle mr-1"></i>
                                {formErrors.description}
                            </span>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="printingTechnique" className={label}>
                            <i className="fa-solid fa-paintbrush mr-2"></i>
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
                                <i className="fas fa-exclamation-circle mr-1"></i>
                                {formErrors.printingTechnique}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="form-group flex-1">
                            <label htmlFor="category" className={label}>
                                <i className="fa-solid fa-list mr-2"></i>
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
                                    <i className="fas fa-exclamation-circle mr-1"></i>
                                    {formErrors.category}
                                </span>
                            )}
                        </div>

                        <div className="form-group flex-1">
                            <label htmlFor="material" className={label}>
                                <i className="fas fa-box mr-2"></i>
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
                                    <i className="fas fa-exclamation-circle mr-1"></i>
                                    {formErrors.material}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="form-group flex-1">
                            <label htmlFor="measures" className={label}>
                                <i className="fa-solid fa-ruler-vertical mr-2"></i>
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
                                    <i className="fas fa-exclamation-circle mr-1"></i>
                                    {formErrors.measures}
                                </span>
                            )}
                        </div>

                        <div className="form-group flex-1">
                            <label htmlFor="printingMeasures" className={label}>
                                <i className="fa-solid fa-ruler-combined mr-2"></i>
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
                                    <i className="fas fa-exclamation-circle mr-1"></i>
                                    {formErrors.printingMeasures}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="form-group flex-1">
                        <label htmlFor="minQuantity" className={label}>
                            <i className="fa-solid fa-layer-group mr-2"></i>
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
                                <i className="fas fa-exclamation-circle mr-1"></i>
                                {formErrors.minQuantity}
                            </span>
                        )}
                    </div>

                    <div className="colors-section">
                        <div className="flex justify-between items-center">
                            <label className={label}>
                                <i className="fas fa-palette mr-2"></i>
                                Colores del producto
                            </label>
                            <button
                                type="button"
                                onClick={handleAddColor}
                                className={`${primaryButton} flex gap-2 items-center justify-center !text-xs !lg:text-sm`}
                            >
                                <i className="fa-solid fa-plus"></i>
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
                                            <i className="fa-solid fa-trash"></i> Eliminar
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
                                                <i className="fas fa-exclamation-circle mr-1"></i>
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
                                                <i className="fas fa-exclamation-circle mr-1"></i>
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
                                                <i className="fas fa-exclamation-circle mr-1"></i>
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
                            <i className="fa-solid fa-image mr-2"></i>
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
                                <i className="fas fa-exclamation-circle mr-1"></i>
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
                        <i className={`fa-solid ${isEdit ? 'fa-pencil' : 'fa-circle-plus'}`}></i>
                        {loading ? 'Cargando...' : isEdit ? 'Actualizar Producto' : 'Crear Producto'}
                    </button>
                </div>
            </form>
        </div>
    )
}