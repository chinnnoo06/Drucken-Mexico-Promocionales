import React, { useEffect } from 'react';
import heroBg from '../assets/image-background.webp';
import { HomeProductsCarousel } from '../components/home/HomeProductsCarousel';
import { HomeMainContent } from '../components/home/HomeMainContent';
import { OurServices } from '../components/home/ourServices/OurServices';
import { Contact } from '../components/home/contact/Contact';
import { About } from '../components/home/about/About';
import { Seo } from '../components/seo/Seo';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Seo
        title="Drucken México | Artículos Promocionales y Regalos Corporativos"
        description="Artículos promocionales y regalos corporativos en México. Especialistas en serigrafía, bordado, sublimado, grabado láser y publicidad para tu marca desde 2016."
        path="/"
      />
      <div id="inicio" className="relative isolate bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true"></div>
        <HomeMainContent />
      </div>

      <div className=' px-4 py-10 lg:py-20'>
        <HomeProductsCarousel />
      </div>

      <section id="nosotros" className="bg-gray-50 py-10 lg:py-20">
        <About />
      </section>

      <section id="servicios" className='py-10 lg:py-20'>
        <OurServices />
      </section>

      <section id="contacto" className=" bg-gray-50 py-10 lg:py-20">
        <Contact />
      </section>
    </>
  );
}
