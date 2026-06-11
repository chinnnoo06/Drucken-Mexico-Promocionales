import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DruckenLogo from '../../assets/logodrucken.webp';
import SplitText from "../layout/SplitText";

export const HomeMainContent = () => {
    const [textAlign, setTextAlign] = useState('center');

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1024px)'); 
        const handleChange = (e) => setTextAlign(e.matches ? 'left' : 'center');

        handleChange(mediaQuery); // valor inicial
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const scrollToSection = () => {
        const element = document.getElementById("contacto");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <div className='w-full lg:w-[60%] flex flex-col items-center text-center lg:items-start lg:text-left gap-2'>
                <div className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-[#9F531B]/10 to-[#7C3E13]/10 border border-[#9F531B]/20 rounded-full px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 w-fit relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9F531B]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#9F531B] rounded-full animate-pulse relative">
                        <div className="absolute inset-0 rounded-full border border-[#9F531B] animate-ping opacity-20"></div>
                    </div>
                    <span className="text-[#9F531B] font-semibold text-xs lg:text-base relative z-10">
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                            Empresa Mexicana desde 2016
                        </span>
                    </span>
                </div>
                <div className='text-container w-full flex flex-col items-center lg:items-start gap-2'>
                    <div className='flex justify-center lg:justify-start w-full'>
                        <SplitText
                            text="Drucken México Promocionales"
                            className="text-[#9F531B] font-extrabold text-4xl lg:text-5xl"
                            delay={50}
                            duration={0.3}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign={textAlign}
                        />
                    </div>
                    <h3 className='text-[#1A1615] font-semibold text-2xl lg:text-3xl'>
                        Promociona con impacto, vende con resultados.
                    </h3>
                    <span className='text-[#9F531B] text-lg lg:text-xl font-medium mt-2 block relative max-w-[32rem] sm:max-w-none mx-auto sm:mx-0 sm:pl-2 sm:border-l-2 border-[#9F531B]/20'>
                        Drucken es una empresa mexicana dedicada a la distribución de artículos promocionales, desde el año 2016 contamos
                        con un equipo de trabajo preparado, comprometido y responsable, que busca brindarle el mejor servicio
                        y las mejores alternativas de marketing promocional.
                    </span>
                </div>

                <div className='butons-container flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start gap-4 pt-4 w-full sm:w-auto'>
                    <Link to="/catalogo/todos/1" className='no-underline w-full sm:w-auto'>
                        <button className='w-full sm:w-auto px-5 py-2 text-base lg:text-lg bg-[#9F531B] text-[#EEEEEF] rounded-xl hover:bg-[#7C3E13]  hover:text-[#EEEEEF] transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1'>
                            <span>Ver Catálogo</span>
                        </button>
                    </Link>

                    <button onClick={scrollToSection} className='w-full sm:w-auto px-5 py-2 text-base lg:text-lg bg-[#9F531B] text-[#EEEEEF] rounded-xl hover:bg-[#7C3E13]  hover:text-[#EEEEEF] transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1'>
                        Contactar
                    </button>
                </div>

                <div className='socialMedia-container flex justify-center sm:justify-start gap-4 pt-4 text-xl lg:text-2xl'>
                    <a href='https://www.facebook.com/share/1BaikYetVw/?mibextid=wwXIfr' target='_blank' rel='noopener noreferrer' className='text-[#1A1615] hover:text-[#9F531B] transition-all duration-300 hover:scale-110 hover:rotate-3'><i className='fab fa-facebook'></i></a>
                    <a href='https://www.instagram.com/drucken.promocionales?igsh=eGtjOHFldnR4aGE5' target='_blank' rel='noopener noreferrer' className='text-[#1A1615] hover:text-[#9F531B] transition-all duration-300 hover:scale-110 hover:rotate-3'><i className='fab fa-instagram'></i></a>
                    <a href='https://wa.me/523315876207' target='_blank' rel='noopener noreferrer' className='text-[#1A1615] hover:text-[#9F531B] transition-all duration-300 hover:scale-110 hover:rotate-3'><i className='fab fa-whatsapp'></i></a>
                </div>
            </div>

            <div className='col2 flex w-full max-w-[250px] sm:max-w-[450px] lg:max-w-[550px] xl:max-w-[650px] mx-auto sm:mx-0 mb-6 sm:mb-16 lg:mb-0 relative'>
                <div className='relative group'>
                    <img
                        src={DruckenLogo}
                        alt='Logo Drucken México'
                        className='w-full h-auto object-contain transition-all duration-700 group-hover:scale-x-100 group-hover:rotate-2'
                    />
                </div>
            </div>
        </>
    )
}