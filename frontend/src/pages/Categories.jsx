import React, { useEffect, useState } from 'react'
import { useCategorys } from '../hooks/useCategorys'
import { MapCategory } from '../components/categories/MapCategory';
import { CategoryForm } from '../components/categories/CategoryForm';

export const Categories = () => {
  const { totalCount, categories, loading, saveCategory, formErrors, setFormErrors, loadingAction, removeCategory } = useCategorys();
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);
  const [categoryEdit, setCategoryEdit] = useState(false);
  const [idCategoryEdit, setIdCategoryEdit] = useState(false);

  useEffect(() => {
    if (editing) {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 50);
    }
  }, [editing]);

  return (
    <section className='max-w-7xl mx-auto px-4 pb-10 pt-[120px]'>

      <div className="mb-8">
        <span className="text-[11px] lg:text-[13px] font-semibold tracking-[0.18em] uppercase text-[#7C3E13]">
          Administrar Categorías
        </span>
        <h2 className='mt-2 font-semibold text-4xl lg:text-5xl tracking-tight text-[#9F531B]'>
          Administrar las Categorías de Productos
        </h2>
        <p className="mt-4 text-[#1A1615]/75 text-base lg:text-lg leading-relaxed">
          En este panel puedes administrar las categorías de productos registradas en el sistema, puedes agregar, editar o eliminar categorías.
        </p>
      </div>

      <h3 className='text-[#1A1615]/75 text-lg lg:text-xl font-semibold block mb-8'>Total de Productos: {totalCount}</h3>

      {!editing ? (
        <MapCategory categories={categories} loading={loading} saveCategory={saveCategory} formErrors={formErrors} setFormErrors={setFormErrors}
          loadingAction={loadingAction} adding={adding} setAdding={setAdding} setEditing={setEditing} setCategoryEdit={setCategoryEdit} setIdCategoryEdit={setIdCategoryEdit}
          removeCategory={removeCategory} />
      ) : (
        <CategoryForm setEditing={setEditing} saveCategory={saveCategory} formErrors={formErrors} loadingAction={loadingAction} categoryEdit={categoryEdit} idCategoryEdit={idCategoryEdit} />
      )}

    </section>
  )
}
