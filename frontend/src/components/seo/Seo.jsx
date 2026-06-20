import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://drucken.com.mx';
const SITE_NAME = 'Drucken México Promocionales';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

/**
 * Metadatos por página (título, descripción, canonical, Open Graph y Twitter).
 * Sobrescribe los valores por defecto definidos en index.html en cada ruta.
 *
 * @param {string} title       Título de la pestaña/resultado de Google.
 * @param {string} description Descripción para buscadores (~150-160 caracteres).
 * @param {string} path        Ruta canónica (ej. "/catalogo/todos/1"). Por defecto "/".
 * @param {string} image       Imagen para compartir en redes. Por defecto el logo.
 * @param {boolean} noindex    Si es true, evita la indexación (páginas privadas/404).
 */
export const Seo = ({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  noindex = false,
}) => {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}
      />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
