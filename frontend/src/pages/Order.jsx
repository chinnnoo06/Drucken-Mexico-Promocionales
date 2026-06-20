import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapOrder } from '../components/order/MapOrder';
import { OrderSummary } from '../components/order/OrderSummary';
import { primaryButton } from '../helpers/StyleClasses';
import { Seo } from '../components/seo/Seo';
import { FaBagShopping } from 'react-icons/fa6';

export const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getOrders = () => {
    const storedOrders = JSON.parse(localStorage.getItem("order")) || [];
    setOrders(Array.isArray(storedOrders) ? storedOrders : [storedOrders]);
    return storedOrders;
  }

  useEffect(() => {
    getOrders();
  }, [])

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(orders));
  }, [orders]);

  return (
    <section className='max-w-7xl mx-auto px-4 pb-10 pt-[120px]'>
      <Seo
        title="Tu Pedido | Drucken México Promocionales"
        description="Revisa los artículos promocionales que has seleccionado y solicita tu cotización con Drucken México."
        path="/pedido"
      />
      <div className="mb-8">
        <span className="text-[11px] lg:text-[13px] font-semibold tracking-[0.18em] uppercase text-[#7C3E13]">
          Pedido
        </span>
        <h2 className='mt-2 font-semibold text-4xl lg:text-5xl tracking-tight text-[#9F531B]'>
          Tu Pedido
        </h2>
        <p className="mt-4 text-[#1A1615]/75 text-base lg:text-lg leading-relaxed">
          Todo lo que has elegido está aquí, listo para ti.
        </p>
      </div>

      {orders.length >= 1 ? (
        <div className="flex flex-col gap-2 lg:flex-row">

          <MapOrder orders={orders} setOrders={setOrders} />

          <OrderSummary orders={orders} />

        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-center p-8 ">

          <FaBagShopping className="h-12 w-12 lg:h-14 lg:w-14 mb-2 text-[#9F531B]" />

          <h3 className="text-[#9F531B] font-medium text-base lg:text-lg mb-2">Tu pedido está vacío</h3>
          <p className="text-[#1A1615]/75 max-w-md mx-auto text-sm lg:text-base mb-2">Parece que no has agregado ningún producto a tu carrito todavía.</p>

          <Link to="/catalogo/todos/1" className='no-underline'>
            <button className={primaryButton} >
              Explorar productos
            </button>
          </Link>

        </div>
      )}

    </section>
  );
};
