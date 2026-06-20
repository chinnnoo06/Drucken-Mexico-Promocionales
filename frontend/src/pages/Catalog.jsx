import { MapCatalog } from '../components/catalog/MapCatalog';
import { PaginationButtons } from '../components/catalog/PaginationButtons';
import { useCatalog } from '../hooks/useCatalog';
import CategoryDropdown from '../components/catalog/CategoryDropdown ';
import { useScrollElementFromLocation } from '../hooks/useScrollElementFromLocation';
import { CatalogsLinks } from '../components/catalog/CatalogsLinks';
import { input } from '../helpers/StyleClasses';
import { Seo } from '../components/seo/Seo';

export const Catalog = () => {
  const isAdmin = location.pathname.startsWith('/admin/catalogo')
  const { products, totalPages, currentPage, setPage, loading, searchQuery, setSearchQuery, currentCategory, selectCategory } = useCatalog(isAdmin);

  useScrollElementFromLocation({ products })

  return (
    <section className='max-w-7xl mx-auto px-4 pb-10 pt-[120px]'>
      <Seo
        title="Catálogo de Productos Promocionales | Drucken México"
        description="Explora nuestro catálogo de artículos promocionales y publicitarios: gorras, playeras, tazas, calendarios, sellos y más para personalizar con tu marca."
        path={`/catalogo/${currentCategory || 'todos'}/${currentPage || 1}`}
        noindex={isAdmin}
      />
      <div className="mb-8">
        <span className="text-[11px] lg:text-[13px] font-semibold tracking-[0.18em] uppercase text-[#7C3E13]">
          Catálogo
        </span>
        <h2 className='mt-2 font-semibold text-4xl lg:text-5xl tracking-tight text-[#9F531B]'>
          Nuestros Productos
        </h2>
        <p className="mt-4 text-[#1A1615]/75 text-base lg:text-lg leading-relaxed">
          Explora nuestros productos promocionales y revisa los catálogos completos en los siguientes enlaces.
        </p>

        <CatalogsLinks />
      </div>

      <div className='flex flex-col md:flex-row w-full gap-2 mb-8'>
        <div className="relative flex-grow">
          <span className="absolute top-1/2 left-4 -translate-y-1/2 text-[#1A1615]/75">
            <i className="fa-solid fa-magnifying-glass text-xs lg:text-sm"></i>
          </span>
          <input
            type="text"
            name="query"
            placeholder="Buscar por nombre o clave..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`${input} !pl-10 !pr-4`}
          />
        </div>

        <CategoryDropdown currentCategory={currentCategory} selectCategory={selectCategory} />

      </div>

      <MapCatalog products={products} loading={loading} currentPage={currentPage} currentCategory={currentCategory} isAdmin={isAdmin} />

      <PaginationButtons
        totalPages={totalPages}
        currentPage={currentPage}
        setPage={(p) => {
          setPage(p);
        }}
        bool={products.length > 0 && !loading}
      />
    </section>
  );
};