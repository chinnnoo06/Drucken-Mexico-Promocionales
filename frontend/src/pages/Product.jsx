import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { ImgProduct } from '../components/product/ImgProduct';
import { InfoProduct } from '../components/product/InfoProduct';
import { InfoProductAdmin } from '../components/product/InfoProductAdmin';
import { Fetch } from '../helpers/Fetch';
import { Global } from '../helpers/Global';
import { Seo } from '../components/seo/Seo';

export const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [product, setProduct] = useState();
    const [selectedColor, setSelectedColor] = useState(0);
    const [loading, setLoading] = useState(true);
    const isAdmin = location.state?.isAdmin;

    const fetchProduct = async () => {
        setLoading(true);

        const data = await Fetch(`${Global.url}product/obtener-producto/${id}`, "GET");

        if (data.status === "success") {
            setProduct(data.product);
        } else {
            if (isAdmin) {
                navigate('/admin/scatalogo/todos/1')
            } else {
                navigate('/catalogo/todos/1')
            }
        }
        setLoading(false);
    };

    useLayoutEffect(() => {
        requestAnimationFrame(() => {
            window.scrollTo(0, 0);
        });
    }, [id]);
    
    useEffect(() => {
        fetchProduct();
    }, [id]);


    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <section className='max-w-7xl mx-auto px-4 pb-10 pt-[120px]'>
            {product ? (
                <>
                    <Seo
                        title={`${product.name} | Drucken México`}
                        description={(product.description || `Conoce ${product.name}, artículo promocional personalizable con tu marca.`).slice(0, 160)}
                        path={`/producto/${id}`}
                        noindex={isAdmin}
                    />
                    <nav className="border-b border-amber-700/25 pb-5">
                        <Link
                            to={isAdmin ? `/catalogo-admin/${location.state?.currentCategory || 'todos'}/${location.state?.page || 1}`
                                : `/catalogo/${location.state?.currentCategory || 'todos'}/${location.state?.page || 1}`}
                            className="text-amber-700 hover:text-amber-800 transition-colors duration-200"
                            state={{
                                page: location.state?.page || 1,
                                currentCategory: location.state?.currentCategory,
                                productId: location.state?.productId,
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <i className="fas fa-arrow-left text-xs lg:text-base"></i>
                                <span className="font-medium text-sm lg:text-base">Volver al catálogo</span>
                            </div>
                        </Link>
                    </nav>

                    <div className='flex flex-col md:flex-row justify-between gap-8 min-h-[550px] divide-y md:divide-x md:divide-y-0 divide-[#9F531B]/25'>
                        <ImgProduct product={product} selectedColor={selectedColor} />

                        {isAdmin ? <InfoProductAdmin product={product} selectedColor={selectedColor} setSelectedColor={setSelectedColor} /> : <InfoProduct product={product} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />}
                    </div>
                </>
            ) : (
                <LoadingSpinner />
            )}
        </section>
    );
}