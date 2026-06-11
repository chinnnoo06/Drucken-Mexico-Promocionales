import React, { useEffect, useState } from 'react'
import { SectionWrapper } from '../components/layout/SectionWrapper'
import { useCategorys } from '../hooks/useCategorys'
import { MapCategory } from '../components/admin/MapCategory';
import { FormCategory } from '../components/admin/FormCategory';

export const CategorysAdmin = () => {
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
    <SectionWrapper className='container-main-content flex flex-col pt-28 pb-10 gap-5 mx-auto max-w-[1300px]'>
      <div className="text-center">
        <h1 className='text-[#9F531B] titulo-seccion font-bold text-5xl lg:text-6xl mb-6 relative inline-block'>
          Administrar Categorías
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] w-24 h-1.5 bg-[#9F531B] rounded-full"></span>
        </h1>
        <p className="text-gray-700 text-base lg:text-2xl font-medium mt-2 block">
          En este panel puedes administrar las categorías de productos registradas en el sistema, puedes agregar, editar o eliminar categorías.
        </p>

      </div>

      <h3 className='text-center text-gray-700 text-base lg:text-2xl font-semibold block'>Total de Productos: {totalCount}</h3>

      {!editing ? (
        <MapCategory categories={categories} loading={loading} saveCategory={saveCategory} formErrors={formErrors} setFormErrors={setFormErrors}
          loadingAction={loadingAction} adding={adding} setAdding={setAdding} setEditing={setEditing} setCategoryEdit={setCategoryEdit} setIdCategoryEdit={setIdCategoryEdit}
          removeCategory={removeCategory} />
      ) : (
        <FormCategory setEditing={setEditing} saveCategory={saveCategory} formErrors={formErrors} loadingAction={loadingAction} categoryEdit={categoryEdit} idCategoryEdit={idCategoryEdit} />
      )}

    </SectionWrapper>
  )
}
