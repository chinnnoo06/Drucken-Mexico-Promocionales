import LoadingSpinner from '../ui/LoadingSpinner'
import { useNavigate } from 'react-router-dom';
import { GlobalImage } from '../../helpers/Global';
import { thirdButton } from '../../helpers/StyleClasses';
import { FaCircleExclamation } from 'react-icons/fa6';

export const MapCatalog = ({ products, loading, currentPage, currentCategory, isAdmin }) => {
    const navigate = useNavigate();

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <>
            {products && products.length > 0 ? (
                <div className="grid grid-cols-2 min-[480px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5  w-full">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            data-product-id={product._id}
                            className="relative w-full bg-transparent flex flex-col items-center transition-all duration-200 group"
                        >
                            <span className="absolute top-1 left-1 bg-[#9F531B] text-[#EEEEEF] text-[10px] lg:text-xs px-1 py-0 md:px-2 md:py-1 rounded z-10">
                                {product.span}
                            </span>

                            <div className='w-full aspect-[3/4] relative overflow-hidden rounded-md '>
                                <img
                                    src={product.colors.length > 1 ? `${GlobalImage.url}${product.generalImage}` : `${GlobalImage.url}${product.colors[0].image}`}
                                    alt={product.name}
                                    loading="lazy"
                                    width={600}
                                    height={800}
                                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-200"
                                />
                                <button className={thirdButton}
                                    onClick={() => {
                                        navigate(isAdmin ? `/admin/producto/${product._id}` : `/producto/${product._id}`, {
                                            state: {
                                                currentCategory,
                                                page: currentPage,
                                                productId: product._id,
                                                isAdmin
                                            }
                                        })
                                    }}>
                                    Ver Ahora
                                </button>
                            </div>

                            <div className="w-full">
                                <div className='min-h-[40px] lg:min-h-[50px] flex items-center'>
                                    <h3 className="text-sm lg:text-base font-medium leading-tight uppercase line-clamp-2 text-[#1A1615]/75">
                                        {product.name} ({product.key})
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='flex flex-col justify-center items-center h-52 text-[#9F531B]'>
                    <FaCircleExclamation className="h-12 w-12 lg:h-14 lg:w-14 mb-2" aria-hidden="true" />
                    <h3 className="font-medium text-base lg:text-lg">No hay resultados</h3>
                </div>
            )}

        </>

    )
}