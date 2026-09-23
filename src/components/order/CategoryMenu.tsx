import { useState } from "react";
import MenuCard from "./MenuCard";
import Pagination from "../common/Pagination";
import type { MenuItem } from "../../types/Menu";

interface CategoryMenuProps {
  title: string;
  items: MenuItem[];
  onAdd: (item: MenuItem) => void;
}

function CategoryMenu({ title, items, onAdd }: CategoryMenuProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section>
      <div className="mb-6">
        <h2 className="inline-block border-b-2 border-[#ff8a00] pb-2 font-serif text-xl font-bold text-[#351f08]">
          {title.toUpperCase()}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:grid-cols-3">
        {currentItems.map((item) => (
          <MenuCard key={item.id} item={item} onAdd={() => onAdd(item)} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </section>
  );
}

export default CategoryMenu;
