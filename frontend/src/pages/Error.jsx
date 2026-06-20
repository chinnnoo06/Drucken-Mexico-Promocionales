import React from 'react';
import { useNavigate } from 'react-router-dom';
import { primaryButton } from '../helpers/StyleClasses';
import { Seo } from '../components/seo/Seo';

export const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <Seo
        title="Página no encontrada (404) | Drucken México"
        description="La página que buscas no existe. Vuelve al inicio para explorar nuestros artículos promocionales."
        noindex
      />
      <h1 className="font-semibold text-6xl lg:text-7xl tracking-tight text-[#9F531B]">404</h1>
      <p className="text-xl lg:text-2xl mt-4 mb-6 text-[#1A1615]/75 ">
        Oops! La página que buscas no existe.
      </p>
      <button
        onClick={() => navigate('/')}
        className={primaryButton}
      >
        Volver al inicio
      </button>
    </div>
  );
};
