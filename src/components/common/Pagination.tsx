
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="mt-10 flex items-center justify-center gap-3 mb-[30px]">
      
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex h-8 w-8 items-center justify-center rounded-md bg-[#351f08] text-white transition hover:bg-[#ff8a00] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={15} />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`h-8 w-8 rounded-md text-xs transition ${
            currentPage === page
              ? "bg-[#351f08] text-white"
              : "bg-[#fff3e5] text-[#ff8a00] hover:bg-[#ff8a00] hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex h-8 w-8 items-center justify-center rounded-md bg-[#351f08] text-white transition hover:bg-[#ff8a00] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight size={15} />
      </button>
    </div>
  );
}

export default Pagination;