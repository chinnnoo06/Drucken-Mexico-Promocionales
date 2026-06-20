import React from 'react'

export const PaginationButtons = ({ totalPages, currentPage, setPage, bool }) => {

    const goToPage = (pageNumber) => {
        if (pageNumber < 1) pageNumber = 1;
        else if (pageNumber > totalPages) pageNumber = totalPages;
       
        setPage(pageNumber);

        window.scrollTo(0, 0);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        let startPage, endPage;

        if (totalPages <= 5) {
            // Si hay 5 páginas o menos, mostrar todas
            startPage = 1;
            endPage = totalPages;
        } else {
            // Más de 5 páginas → mover el rango
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 2 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={`px-4 py-1.5 text-xs lg:text-sm font-medium rounded-lg  ${currentPage === i
                        ? 'bg-[#9F531B] text-[#EEEEEF] hover:bg-[#7C3E13]'
                        : 'bg-transparent border border-[#9F531B] text-[#1A1615]/75 hover:bg-[#9F531B] hover:text-[#EEEEEF] transition'
                        }`}
                >
                    {i}
                </button>
            );
        }

        return pageNumbers;
    };

    return (
        <>
            {bool && (
                <div className="flex justify-center items-center gap-2 mt-8">
                    {/* Botón anterior */}
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-1 text-xs lg:text-sm font-medium rounded-lg ${currentPage === 1 ? 'bg-[#9F531B]/50 text-[#EEEEEF]/50 cursor-not-allowed' : 'bg-[#9F531B] text-[#EEEEEF] hover:bg-[#7C3E13]'}`}
                    >
                        &lt;
                    </button>

                    {/* Botones de página */}
                    {renderPageNumbers()}

                    {/* Botón siguiente */}
                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-1 text-xs lg:text-sm font-medium rounded-lg  ${currentPage === totalPages ? 'bg-[#9F531B]/50 text-[#EEEEEF]/50 cursor-not-allowed' : 'bg-[#9F531B] text-[#EEEEEF] hover:bg-[#7C3E13]'}`}
                    >
                        &gt;
                    </button>
                </div>
            )}
        </>

    )
}
