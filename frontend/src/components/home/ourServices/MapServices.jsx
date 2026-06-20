import React from 'react';
import { ServiceCard } from './ServiceCard';
import { services } from '../../../data/constants.';

export const MapServices = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 grid-flow-dense auto-rows-[280px] sm:auto-rows-[350px] gap-4">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};