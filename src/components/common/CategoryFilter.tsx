
interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          className={`min-h-11 rounded-full px-4 py-2.5 text-sm sm:px-5 font-medium transition ${
            selectedCategory === category
              ? "bg-orange-500 text-white"
              : "bg-white text-gray-600 hover:bg-orange-100 hover:text-orange-500"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;