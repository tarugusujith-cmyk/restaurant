
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";

import MenuCard from "./MenuCard";
import CategoryFilter from "../common/CategoryFilter";
import Pagination from "../common/Pagination";

import { menuItems } from "../../data/menuData";
import { addToCart } from "../../store/cartSlice";
import type { AppDispatch } from "../../store/store";

interface PopularMenuProps {
  title?: string;
  showPagination?: boolean;
}

function PopularMenu({
  title = "Our Popular Menu",
  showPagination = false,
}: PopularMenuProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    "All",
    "Pizza",
    "Pasta",
    "Salad",
    "Dessert",
    "Drinks",
  ];

  const itemsPerPage = 6;

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") {
      return menuItems;
    }

    return menuItems.filter(
      (item) => item.category === selectedCategory
    );
  }, [selectedCategory]);

  const displayedItems = showPagination
    ? filteredItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    : filteredItems.slice(0, 6);

  const totalPages = Math.ceil(
    filteredItems.length / itemsPerPage
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section
      id="menu"
      className="bg-[#fffaf3] py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
            Discover our menu
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#302014] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
        </div>

        <div className="mt-10">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onAdd={() => dispatch(addToCart(item))}
            />
          ))}
        </div>

        {showPagination && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </section>
  );
}

export default PopularMenu;

