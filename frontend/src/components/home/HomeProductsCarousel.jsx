import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GlobalImage } from '../../helpers/Global';
import { useCarousel } from '../../hooks/useCarousel';
import { secondaryButton, thirdButton } from '../../helpers/StyleClasses';
import { motion } from "framer-motion"
import { slideInBottomInView } from "../../helpers/Motion"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

export const HomeProductsCarousel = () => {
  const { showLeftButton, showRightButton, products, carouselRef, scroll } = useCarousel();
  const navigate = useNavigate();

  return (
    <div className='mx-auto max-w-7xl'>
      <motion.div {...slideInBottomInView} className="mb-8">
        <span className="text-[11px] lg:text-[13px] font-semibold tracking-[0.18em] uppercase text-[#7C3E13]">
          Novedades
        </span>
        <h2 className='mt-2 font-semibold text-4xl lg:text-5xl tracking-tight text-[#9F531B]'>
          Productos Para ti
        </h2>
        <p className="mt-4 text-gray-700 text-base lg:text-lg leading-relaxed">
          Explora nuestra selección y encuentra el regalo corporativo ideal.
        </p>
      </motion.div>

      <div className="w-full mx-auto">
        <motion.div {...slideInBottomInView} className="relative">
          {/* Botones de navegación */}
          {showLeftButton && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#9F531B]/90 text-white p-2 rounded-full z-10 hover:bg-[#7C3E13] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-200 shadow-lg backdrop-blur-sm"
            >
              <FaAngleLeft className="h-4 w-4 lg:h-5 lg:w-5" />
            </button>
          )}

          <div
            ref={carouselRef}
            className="flex overflow-x-auto space-x-3 sm:space-x-4 lg:space-x-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth py-2"
          >
            {products.map((product) => (
              <div
                key={product._id}
                className="relative flex-shrink-0 w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] bg-transparen  rounded-lg transition-all duration-200 group"
              >
                <span className="absolute top-1 left-1 bg-[#9F531B] text-white text-[10px] lg:text-xs px-1 py-0 md:px-2 md:py-1 rounded z-10">
                  {product.span}
                </span>

                <div className='w-full aspect-[3/4] relative overflow-hidden rounded-lg group-hover:bg-black/50'>
                  <img
                    src={product.colors.length > 1 ? `${GlobalImage.url}${product.generalImage}` : `${GlobalImage.url}${product.colors[0].image}`}
                    alt={product.name}
                    className="absolute w-full h-full object-cover object-center group-hover:opacity-90 transition-opacity duration-200"
                  />
                  <button className={thirdButton}
                    onClick={() => {
                      navigate(`/producto/${product._id}`, {
                        state: {
                          productId: product._id
                        }
                      })
                    }}>
                    Ver Ahora
                  </button>
                </div>

                <div className="w-full pb-8">
                  <div className='min-h-[40px] lg:min-h-[50px] flex items-center'>
                    <h3 className="text-sm lg:text-base font-medium leading-tight uppercase line-clamp-2 text-[#1A1615]/75">
                      {product.name} ({product.key})
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showRightButton && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#9F531B]/90 text-white p-2 rounded-full z-10 hover:bg-[#7C3E13] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-200 shadow-lg backdrop-blur-sm"
            >
              <FaAngleRight className="h-4 w-4 lg:h-5 lg:w-5" />
            </button>
          )}
        </motion.div>

        <motion.div {...slideInBottomInView}>
          <Link to="/catalogo/todos/1" className='no-underline flex items-center justify-center'>
            <button className={secondaryButton}>
              Ver más productos
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
