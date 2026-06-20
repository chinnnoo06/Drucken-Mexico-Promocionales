import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import DruckenLogo from '../../assets/logodrucken.webp';
import { primaryButton, secondaryButton } from '../../helpers/StyleClasses';
import { motion } from "framer-motion"
import { slideInBottom } from "../../helpers/Motion"

export const HomeMainContent = () => {
    const scrollToSection = () => {
        const element = document.getElementById("contacto");
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='flex flex-col md:flex-row items-center gap-8 lg:gap-10 w-full min-h-auto lg:min-h-[clamp(640px,100dvh,800px)] mx-auto max-w-7xl px-4 pt-[120px] pb-10 lg:pt-20 lg:pb-0'>
            <motion.div  {...slideInBottom} className='w-full lg:w-[55%] flex flex-col items-start gap-4'>
                <p className='flex items-center gap-2 text-[11px] lg:text-[13px] font-bold tracking-[0.18em] uppercase text-[#7C3E13]'>
                    <span className='w-8 h-[1.5px] bg-[#7C3E13] inline-block'></span>
                    Publicidad para tu marca
                </p>

                <h1 className='text-[#1A1615] font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-tight'>
                    <span className='block overflow-hidden pb-2'>
                        <span className='block' style={{ animation: 'drk-rise 0.9s cubic-bezier(.2,.7,.2,1) 0.15s both' }}>
                            Artículos promocionales
                        </span>
                    </span>
                    <span className='block overflow-hidden pb-2'>
                        <span className='block' style={{ animation: 'drk-rise 0.9s cubic-bezier(.2,.7,.2,1) 0.28s both' }}>
                            y regalos de empresa
                        </span>
                    </span>
                    <span className='block overflow-hidden pb-2'>
                        <span className='block' style={{ animation: 'drk-rise 0.9s cubic-bezier(.2,.7,.2,1) 0.41s both' }}>
                            en{' '}
                            <span className='relative text-[#9F531B] italic'>
                                México.
                            </span>
                        </span>
                    </span>
                </h1>

                <p className='text-[#9F531B] text-base lg:text-lg font-medium block relative sm:pl-2 sm:border-l-2 border-[#9F531B]/20'>
                    Empresa mexicana especializada en artículos promocionales y regalos corporativos desde 2016.
                </p>

                <div className='butons-container flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start gap-4 w-full sm:w-auto'>
                    <Link to="/catalogo/todos/1" className='no-underline w-full sm:w-auto'>
                        <button className={`${primaryButton} w-full sm:w-auto`}>
                            Ver Catálogo
                        </button>
                    </Link>
                    <button onClick={scrollToSection} className={`${secondaryButton} w-full sm:w-auto`}>
                        Contactar
                    </button>
                </div>

                <div className='socialMedia-container flex justify-center sm:justify-start gap-4 text-xl lg:text-2xl'>
                    <a href='https://www.facebook.com/share/1BaikYetVw/?mibextid=wwXIfr' target='_blank' rel='noopener noreferrer' className='text-[#1A1615] hover:text-[#9F531B] transition-all duration-300 hover:scale-110 hover:rotate-3'><i className='fab fa-facebook'></i></a>
                    <a href='https://www.instagram.com/drucken.promocionales?igsh=eGtjOHFldnR4aGE5' target='_blank' rel='noopener noreferrer' className='text-[#1A1615] hover:text-[#9F531B] transition-all duration-300 hover:scale-110 hover:rotate-3'><i className='fab fa-instagram'></i></a>
                    <a href='https://wa.me/523315876207' target='_blank' rel='noopener noreferrer' className='text-[#1A1615] hover:text-[#9F531B] transition-all duration-300 hover:scale-110 hover:rotate-3'><i className='fab fa-whatsapp'></i></a>
                </div>
            </motion.div>

            <motion.div  {...slideInBottom} className='col2 flex w-full lg:w-[45%] max-w-[320px] sm:max-w-[420px] md:max-w-[480px] relative mx-auto'>
                <div className='relative group w-full flex items-center justify-center py-6'>

                    <div aria-hidden='true'
                        className='absolute z-0 w-[78%] aspect-square border border-[#9F531B]/40 translate-x-5 translate-y-5'
                        style={{ borderRadius: '28px 28px 28px 80px' }}>
                    </div>

                    <span aria-hidden='true'
                        className='absolute left-[2%] top-1/2 -translate-y-1/2 h-[55%] w-px bg-gradient-to-b from-transparent via-[#9F531B]/50 to-transparent z-0'></span>

                    <div
                        className='relative z-10 w-[82%] aspect-square flex items-center justify-center overflow-hidden p-9 sm:p-11
                       bg-white/35 backdrop-blur-md border border-white/50
                       shadow-[0_30px_70px_-25px_rgba(26,22,21,0.55)]
                       transition-all duration-700 group-hover:-translate-y-1'
                        style={{ borderRadius: '28px 28px 28px 80px' }}>

                        <span aria-hidden='true'
                            className='absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-60 pointer-events-none'></span>

                        <img
                            src={DruckenLogo}
                            alt='Logo Drucken México'
                            className='relative w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03] drop-shadow-[0_10px_25px_rgba(159,83,27,0.18)]'
                        />
                    </div>

                    <svg viewBox='0 0 60 60' aria-hidden='true'
                        className='absolute -top-1 right-[4%] w-14 h-14 opacity-60 z-20 pointer-events-none'>
                        <g fill='#9F531B'>
                            <circle cx='6' cy='6' r='2.2' /><circle cx='24' cy='6' r='2.2' /><circle cx='42' cy='6' r='2.2' />
                            <circle cx='6' cy='24' r='2.2' /><circle cx='24' cy='24' r='2.2' /><circle cx='42' cy='24' r='2.2' />
                            <circle cx='6' cy='42' r='2.2' /><circle cx='24' cy='42' r='2.2' /><circle cx='42' cy='42' r='2.2' />
                        </g>
                    </svg>
                </div>
            </motion.div>
        </div>
    )
}