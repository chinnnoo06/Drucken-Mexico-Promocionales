import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import { slideInBottomInView } from "../../../helpers/Motion"

export const ServiceCard = ({ service }) => {
  const [currentImage, setCurrentImage] = useState(
    service.images ? service.images[0] : service.image
  );

  useEffect(() => {
    if (!service.images || service.images.length === 0) return;

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % service.images.length;
      setCurrentImage(service.images[index]);
    }, 3000); // cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [service.images]);

  return (
    <motion.div {...slideInBottomInView}
      className={`group relative overflow-hidden rounded-lg border border-[#9F531B]/25 shadow-md hover:shadow-xl transition-shadow duration-300 ${service.className}`}
    >
      <img
        src={currentImage}
        alt={service.name}
        className="absolute inset-0 w-full h-full object-cover saturate-[0.95] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
      />

      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#1A1615]/70 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

      <h3 className="absolute left-5 bottom-4 z-10 font-semibold text-lg lg:text-xl text-[#FFF9F5] drop-shadow transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
        {service.name}
      </h3>

      <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 bg-gradient-to-t from-[#1A1615]/95 via-[#1A1615]/55 to-transparent to-75% opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <h3 className="mt-1.5 font-semibold text-lg lg:text-2xl text-[#FFF9F5]">
          {service.name}
        </h3>
        <p className="mt-1.5 text-xs lg:text-sm leading-relaxed text-[#FFF9F5]/85 line-clamp-4">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};
