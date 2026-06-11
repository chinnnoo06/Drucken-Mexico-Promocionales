import React from 'react'

export const ContentAbout = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row justify-between items-stretch gap-12 md:gap-8'>

                {/* Tarjeta de Visión */}
                <div className='vision-container flex-1 bg-gradient-to-br from-[#9F531B]/5 to-[#7C3E13]/10 border border-[#9F531B]/20 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl'>
                    <div className='p-8 flex flex-col items-center'>
                        <div className='mb-6 p-4 bg-[#eddcca] rounded-full'>
                            <i className="fa-solid fa-eye text-3xl lg:text-5xl text-[#9F531B]"></i>
                        </div>
                        <h3 className='text-[#9F531B] font-bold text-xl lg:text-3xl mb-4'>Visión</h3>
                        <p className='text-gray-700 text-center text-sm lg:text-lg leading-relaxed'>
                            Somos un equipo que marcamos tendencias en el mercado promocional, a través de la selección, mejora, diferenciación,
                            importación y comercialización de artículos promocionales de alto valor percibido, precios competitivos, excelente
                            calidad y diseños innovadores que satisfacen los requerimientos de nuestros clientes.
                        </p>
                    </div>
                </div>

                {/* Separador visual para móviles */}
                <div className="md:hidden w-3/4 h-[2px] bg-[#9F531B] mx-auto my-4"></div>

                {/* Separador visual para desktop */}
                <div className="hidden md:block w-[2px] bg-gradient-to-b from-transparent via-[#9F531B] to-transparent mx-4"></div>

                {/* Tarjeta de Misión */}
                <div className='mission-container flex-1 bg-gradient-to-br from-[#9F531B]/5 to-[#7C3E13]/10 border border-[#9F531B]/20 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl'>
                    <div className='p-8 flex flex-col items-center'>
                        <div className='mb-6 p-4 bg-[#eddcca] rounded-full'>
                            <i className="fa-solid fa-bullseye text-3xl lg:text-5xl text-[#9F531B]"></i>
                        </div>
                        <h3 className='text-[#9F531B] font-bold text-xl lg:text-3xl mb-4'>Misión</h3>
                        <p className='text-gray-700 text-center text-sm lg:text-lg leading-relaxed'>
                            Ser la primera opción de compra de artículos promocionales para nuestros clientes, gracias a la confianza que
                            tienen en nuestra calidad.
                        </p>
                    </div>
                </div>

            </div>

            <div className="mt-10 text-center">
                <h3 className="text-xl lg:text-3xl font-bold text-[#9F531B] mb-4">Nuestro Compromiso</h3>
                <p className="text-gray-700 text-base lg:text-2xl font-medium mt-2 block">
                    En cada producto que ofrecemos, buscamos superar las expectativas de nuestros clientes con innovación, calidad y servicio excepcional.
                </p>
            </div>
        </>
    )
}
