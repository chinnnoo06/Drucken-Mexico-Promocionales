import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import DruckenLogo from '../../assets/logodrucken.webp';
import { closeSession } from '../../helpers/CloseSession';
import { useHeaderFooter } from '../../hooks/useHeaderFooter';
import { FaFacebook, FaInstagram, FaWhatsapp, FaBars, FaXmark } from 'react-icons/fa6';

export const HeaderAdmin = () => {
    const { toggleMenu, menuVisible, scrolled } = useHeaderFooter();

    return (
        <>
           <div className={`flex justify-center fixed top-0 inset-x-0 z-[100] h-20 px-4 border-b border-[#9F531B]/20 backdrop-blur-md transition-colors duration-300 ${scrolled ? 'bg-[#f8dcc6]/95' : 'bg-[#f8dcc6]/50'}`}>
                <header className='max-w-7xl mx-auto w-full flex justify-between items-center gap-4 px-4 py-2.5'>
                <div className='container-logo-nav flex items-center gap-5 lg:gap-10'>
                    <div className='logo transition-transform duration-300 hover:scale-105'>
                        <Link to="/" className='no-underline'>
                            <img
                                src={DruckenLogo}
                                alt="Logo de Drucken México"
                                className="h-10 lg:h-12 object-contain"
                            />
                        </Link>
                    </div>

                    <nav className='desktop-nav hidden lg:flex gap-5 items-center'>
                        {(
                            // Enlaces internos cuando estamos en la página de inicio
                            [
                                { to: "/admin/catalogo/todos/1", text: "Catálogo" },
                                { to: "/admin/agregar-producto", text: "Agregar Producto" },
                                { to: "/admin/categorias", text: "Administrar Categorias" },
                                { id: 'Cerrar Sesión', action: closeSession, text: "Cerrar Sesión" },
                            ]
                                .map((item, index) => (
                                    item.to ? (
                                        <NavLink
                                            key={index}
                                            to={item.to}
                                            className={({ isActive }) =>
                                                `relative px-2 py-1 font-[400] text-sm xl:text-base  transition-colors duration-300 cursor-pointer
                                        ${isActive ? 'text-[#9F531B]' : 'text-[#1A1615] hover:text-[#9F531B]'}
                                        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                                        after:bg-[#9F531B] after:transition-all after:duration-300
                                        hover:after:w-full ${isActive ? 'after:w-full' : ''}`
                                            }
                                        >
                                            {item.text}
                                        </NavLink>
                                    ) : (
                                        <button
                                            key={index}
                                            onClick={item.action}
                                            className={`relative px-2 py-1 font-[400] text-sm xl:text-base transition-colors duration-300 cursor-pointer
                                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                                    after:bg-[#9F531B] after:transition-all after:duration-300
                                    hover:after:w-full`}
                                        >
                                            {item.text}
                                        </button>
                                    )
                                ))
                        )}
                    </nav>
                </div>

                <div className='container-social-media hidden lg:flex gap-8 items-center'>
                    {[
                        { icon: FaFacebook, url: "https://www.facebook.com/share/1BaikYetVw/?mibextid=wwXIfr" },
                        { icon: FaInstagram, url: "https://www.instagram.com/drucken.promocionales?igsh=eGtjOHFldnR4aGE5" },
                        { icon: FaWhatsapp, url: "https://wa.me/523315876207" }
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl xl:text-2xl text-[#1A1615] hover:text-[#9F531B] transition-colors duration-300 hover:scale-110"
                        >
                            <social.icon className="h-4 w-4 lg:h-5 lg:w-5" />
                        </a>
                    ))}
                </div>

                {/*Boton de menú responsive*/}
                <div
                    className="nav-responsive flex lg:hidden items-center text-[#9F531B] text-xl xl:text-2xl pr-[0.2rem] cursor-pointer hover:text-[#9F531B]"
                    onClick={toggleMenu}
                >
                    <FaBars className="h-4 w-4 lg:h-5 lg:w-5" />
                </div>
            </header>
            </div>

            <div className={`menu-lateral fixed top-0 right-0 h-screen bg-[#f8dcc6] w-64 transform ${menuVisible ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out z-[10000] flex flex-col`}>
                <div className="flex justify-between items-center p-4 border-b border-[#9F531B]">
                    <button
                        className="text-[#1A1615] hover:text-[#b03a3a] text-xl"
                        onClick={toggleMenu}
                    >
                        <FaXmark className="h-4 w-4 lg:h-5 lg:w-5" />
                    </button>
                </div>
                <nav className="flex flex-col p-4 gap-4">
                    {(
                        // Enlaces internos cuando estamos en la página de inicio
                        [
                            { to: "/admin/catalogo", text: "Catálogo" },
                            { to: "/admin/agregar-producto", text: "Agregar Producto" },
                            { to: "/admin/categorias", text: "Administrar Categorias" },
                            { id: 'Cerrar Sesión', action: closeSession, text: "Cerrar Sesión" },
                        ]
                            .map((item, index) => (
                                item.to ? (
                                    <NavLink
                                        key={index}
                                        to={item.to}
                                        className={({ isActive }) =>
                                            `relative py-2 font-[400] transition-colors duration-300 cursor-pointer text-left
                                            ${isActive ? 'text-[#9F531B]' : 'text-[#1A1615] hover:text-[#9F531B]'}
                                            after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                                            after:bg-[#9F531B] after:transition-all after:duration-300 text-base
                                            hover:after:w-[80px] ${isActive ? 'after:w-[80px]' : ''}`
                                        }
                                    >
                                        {item.text}
                                    </NavLink>
                                ) : (
                                    <button
                                        key={index}
                                        onClick={item.action}
                                        className={`relative py-2 font-[400] transition-colors duration-300 cursor-pointer text-left
                                        
                                        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                                        after:bg-[#9F531B] after:transition-all after:duration-300 text-base
                                        hover:after:w-[80px]`}
                                    >
                                        {item.text}
                                    </button>
                                )
                            ))
                    )}
                </nav>

                {/* Redes sociales en menú móvil */}
                <div className='mt-auto p-4 flex justify-center gap-6 border-t border-[#9F531B]'>
                    {[
                        { icon: FaFacebook, url: "https://www.facebook.com/share/1BaikYetVw/?mibextid=wwXIfr" },
                        { icon: FaInstagram, url: "https://www.instagram.com/drucken.promocionales?igsh=eGtjOHFldnR4aGE5" },
                        { icon: FaWhatsapp, url: "https://wa.me/523315876207" }
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl text-[#1A1615] hover:text-[#9F531B] transition-colors duration-300 hover:scale-110"
                        >
                            <social.icon className="h-4 w-4 lg:h-5 lg:w-5" />
                        </a>
                    ))}
                </div>
            </div>

        </>
    );
};
