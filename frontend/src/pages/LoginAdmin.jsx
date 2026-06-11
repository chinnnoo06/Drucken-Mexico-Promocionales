import React from 'react';
import { HeaderLogin } from '../components/layout/HeaderLogin';
import { FormLogin } from "../components/admin/FormLogin";

export const LoginAdmin = () => {
  return (
    <>
      <HeaderLogin />

      <section id="content" className="content-login px-[10px] md:px-0">
      
        <div className="flex flex-col pt-28 pb-10 gap-5 mx-auto max-w-[1300px]">
          <div className="text-center mb-8">
            <h1 className='text-[#9F531B] titulo-seccion font-bold text-5xl lg:text-6xl mb-6 relative inline-block'>
              Panel de administrador
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] w-24 h-1.5 bg-[#9F531B] rounded-full"></span>
            </h1>
 
          </div>

          <FormLogin/>
        </div>

      </section>

    </>

  )
}
