import serigrafia from '../assets/images_services/serigrafia.webp';
import tampografia from '../assets/images_services/tampografia.webp';
import subliminado from '../assets/images_services/subliminado.webp';
import esmaltado2D from '../assets/images_services/esmaltado2D.webp';
import esmaltado2D2 from '../assets/images_services/esmaltado2D-2.webp';
import esmaltado2D3 from '../assets/images_services/esmaltado2D-3.webp';
import esmaltado2D4 from '../assets/images_services/esmaltado2D-4.webp';
import grabadoLaser from '../assets/images_services/grabadoLaser.webp';
import bordado from '../assets/images_services/bordado.webp';
import rotulosPublicitarios from '../assets/images_services/rotulosPublicitarios.webp';
import diseñosEspeciales3D from '../assets/images_services/diseñosEspeciales3D.webp';
import impresionDTFTextil from '../assets/images_services/impresionDTFTextil.webp';

export const catalogs = [
    {
        title: "General",
        href: "https://online.flippingbook.com/view/904760688/",
        icon: "📚"
    },
    {
        title: "Gorras",
        href: "https://drucken.com.mx/files/catalogo%20gorras.pdf",
        icon: "🧢"
    },
    {
        title: "Calendarios",
        href: "https://heyzine.com/flip-book/7c655c971b.html",
        icon: "📅"
    },
    {
        title: "Sellos",
        href: "https://drucken.com.mx/files/catalogo%20sellos.pdf",
        icon: "🔖"
    }
];

export const services = [
    {
        id: 1,
        name: "Serigrafía",
        description: "Técnica de impresión que te permite plasmar tu marca en la mayoría de las superficies, brindándote acabados de excelente calidad.",
        image: serigrafia,
        className: "col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2"
    },
    {
        id: 2,
        name: "Tampografía",
        description: "Si tu promocional tiene superficies irregulares, cilíndricas, esféricas, ángulos compuestos, texturas, superficies cóncavas, convexas o es un artículo blando, esta es la técnica ideal.",
        image: tampografia,
        className: "col-span-1 sm:col-span-2 sm:row-span-2 lg:col-span-4 lg:row-span-2"
    },
    {
        id: 3,
        name: "Subliminado",
        description: "Transfiere tus diseños en full color en tazas, reconocimientos, gorras, playeras, mochilas y cualquier tipo de textiles en una alta resolución, gran calidad y colorido.",
        image: subliminado,
        className: "col-span-1 sm:col-span-2 lg:col-span-2"
    },
    {
        id: 4,
        name: "Esmaltados 2D",
        description: "Imprime a todo color, con corte a la medida y gran durabilidad gracias a nuestras resinas de alta resitencia.",
        images: [esmaltado2D, esmaltado2D2, esmaltado2D3, esmaltado2D4],
        className: "col-span-1 sm:col-span-2 lg:col-span-2"
    },
    {
        id: 5,
        name: "Grabado Laser",
        description: "Da ese acabado elegante plasmando tu logo en una gran variedad de materiales como metales, orgánicos, madera, corcho, etc.",
        image: grabadoLaser,
        className: "col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2"
    },
    {
        id: 6,
        name: "Bordado",
        description: "Plasma tu logo con una de nuestra gran gama de Polisedas, es ideal para playeras, gorras, mochilas, cangureras u otros textiles.",
        image: bordado,
        className: "col-span-1 sm:col-span-2 lg:col-span-2"
    },
    {
        id: 7,
        name: "Rótulos Publicitarios",
        description: "Técnica de impresión que te permite plasmar tu marca en la mayoría de las superficies, brindándote acabados de excelente calidad.",
        image: rotulosPublicitarios,
        className: "col-span-1 sm:col-span-2 lg:col-span-2"
    },
    {
        id: 8,
        name: "Diseños Especiales 3D",
        description: "Técnica de impresión que te permite plasmar tu marca en la mayoría de las superficies, brindándote acabados de excelente calidad.",
        image: diseñosEspeciales3D,
        className: "col-span-1 sm:col-span-2 lg:col-span-4"
    },
    {
        id: 9,
        name: "Impresión DTF Textil",
        description: "Técnica de impresión que te permite plasmar tu marca en la mayoría de las superficies, brindándote acabados de excelente calidad.",
        image: impresionDTFTextil,
        className: "col-span-1 sm:col-span-2 lg:col-span-2"
    }
]

export const contactDetails = [
    {
        icon: 'fas fa-phone',
        label: 'Teléfono',
        value: '+52 33 1587 6207',
        href: 'tel:+523315876207',
    },
    {
        icon: 'fas fa-envelope',
        label: 'Email',
        value: 'drucken2016@hotmail.com',
        href: 'mailto:drucken2016@hotmail.com',
    },
    {
        icon: 'fas fa-location-dot',
        label: 'Dirección',
        value: 'Ramón Corona 454, Unidad República, Zapopan, Jalisco 45146',
    },
];