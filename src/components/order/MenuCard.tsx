
import { Heart, Plus, Star } from "lucide-react";
import type { MenuItem } from "../../types/Menu";

interface MenuCardProps {
  item: MenuItem;
  onAdd: () => void;
}

function MenuCard({ item, onAdd }: MenuCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl bg-[#fafafa]">
      <div className="relative px-3 pt-3">
        <img
          src={item.image}
          alt={item.name}
          onError={(event) => {
            event.currentTarget.style.visibility = "hidden";
          }}
          className="mx-auto aspect-square w-full max-w-[120px] rounded-full object-cover"
        />

        <button
          type="button"
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#351f08] shadow-sm"
          aria-label={`Add ${item.name} to favorites`}
        >
          <Heart size={13} />
        </button>
      </div>

      <div className="px-3 pb-3 pt-2 text-center">
        <h3 className="truncate text-xs font-semibold text-[#351f08]">
          {item.name}
        </h3>

        <div className="mt-1 flex items-center justify-center gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={8}
              fill={
                star <= Math.round(item.rating)
                  ? "currentColor"
                  : "none"
              }
              className="text-[#ff8a00]"
            />
          ))}
        </div>

        <p className="mt-2 line-clamp-2 text-[7px] leading-3 text-[#77716c]">
          {item.description}
        </p>

        <div className="mt-3 flex items-center justify-between gap-1">
          <span className="text-[10px] font-bold text-[#351f08]">
            ${item.price.toFixed(2)}
          </span>

          <button
            type="button"
            onClick={onAdd}
            className="flex items-center gap-1 rounded-full bg-[#ff8a00] px-2.5 py-1.5 text-[7px] font-medium text-white"
          >
            <Plus size={9} />
            Order now
          </button>
        </div>
      </div>
    </article>
  );
}

export default MenuCard;