
import { useState } from "react";

import MenuCard from "../../components/order/MenuCard";
import Pagination from "../common/Pagination";

import { pastaItems } from "../../data/pastaData";
import type { MenuItem } from "../../types/Menu";

interface PastaMenuProps {
  onAdd: (item: MenuItem) => void;
}

function PastaMenu({ onAdd }: PastaMenuProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;

  const totalPages = Math.ceil(
    pastaItems.length / itemsPerPage
  );

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const currentItems = pastaItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section>
     
      <div className="mb-6">
        <h2 className="inline-block border-b-2 border-[#ff8a00] pb-2 font-serif text-xl font-bold text-[#351f08]">
          PASTA
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {currentItems.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            onAdd={() => onAdd(item)}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}

export default PastaMenu;