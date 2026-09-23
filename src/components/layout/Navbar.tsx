
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import Button from "../common/Button";

interface CartButtonProps {
  onClick?: () => void;
}

function CartButton({ onClick }: CartButtonProps) {
  const cartItems = useSelector(
    (state: RootState) => state.cart.items
  );

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <NavLink
      to="/order"
      onClick={onClick}
      aria-label={`Shopping cart with ${cartQuantity} items`}
      className={({ isActive }) =>
        `
        relative
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        transition-colors
        ${
          isActive
            ? "bg-orange-500 text-white"
            : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
        }
        `
      }
    >
      <ShoppingCart size={21} strokeWidth={2} />

      {cartQuantity > 0 && (
        <span
          className="
            absolute
            -right-1
            -top-1
            flex
            h-5
            min-w-5
            items-center
            justify-center
            rounded-full
            bg-red-500
            px-1
            text-[10px]
            font-bold
            leading-none
            text-white
            ring-2
            ring-white
          "
        >
          {cartQuantity > 99 ? "99+" : cartQuantity}
        </span>
      )}
    </NavLink>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", path: "/home" },
    { label: "Menu", path: "/menu" },
    { label: "About us", path: "/about" },
    { label: "Order Online", path: "/order" },
    { label: "Reservation", path: "/reservation" },
    { label: "Contact Us", path: "/contact" },
  ];

  const handleBookTable = () => {
    setIsMenuOpen(false);
    navigate("/reservation");
  };

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <NavLink
          to="/home"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">
            D
          </div>

          <span className="text-xl font-bold text-gray-900">
            Delizioso<span className="text-orange-500">.</span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `
                text-sm
                font-medium
                transition-colors
                ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }
                `
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <CartButton />

          <Button onClick={handleBookTable}>
            Book a Table
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <CartButton
            onClick={() => setIsMenuOpen(false)}
          />

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              text-gray-700
              transition
              hover:bg-gray-100
            "
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `
                  text-sm
                  font-medium
                  transition-colors
                  ${
                    isActive
                      ? "font-semibold text-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }
                  `
                }
              >
                {link.label}
              </NavLink>
            ))}

            <button
              type="button"
              onClick={handleBookTable}
              className="
                w-fit
                rounded-full
                bg-orange-500
                px-5
                py-2.5
                text-sm
                font-medium
                text-white
                transition
                hover:bg-orange-600
              "
            >
              Book a Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

