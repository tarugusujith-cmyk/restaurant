
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";

import type { MenuItem } from "../../types/Menu";

import CategoryFilter from "../common/CategoryFilter";
import PastaMenu from "./PastaMenu";
import PizzaMenu from "./PizzaMenu";
import CategoryMenu from "./CategoryMenu";
import { saladItems } from "../../data/saladData";
import { dessertItems } from "../../data/dessertData";
import { drinkItems } from "../../data/drinkData";

interface CartItem extends MenuItem {
  quantity: number;
}

const categories = [
  "All",
  "Pizza",
  "Pasta",
  "Salad",
  "Dessert",
  "Drinks",
];

function Menu() {

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [cartItems, setCartItems] = useState<CartItem[]>(
    []
  );


  const addToCart = (item: MenuItem) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return previousItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [
        ...previousItems,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };


  const updateQuantity = (
    id: number,
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };


  const removeFromCart = (id: number) => {
    setCartItems((previousItems) =>
      previousItems.filter(
        (item) => item.id !== id
      )
    );
  };


  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.1;

  const voucherDiscount =
    subtotal >= 50 ? 5 : 0;

  const total =
    subtotal + tax - voucherDiscount;


  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8 sm:px-8 sm:py-10 lg:px-12">
      <div className="mx-auto max-w-6xl">

        <div className="text-center">

          <h1 className="font-serif text-4xl font-bold text-[#351f08] sm:text-5xl">
            Menu
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#77716c] sm:text-base">
            Explore our delicious selection of Italian
            dishes, prepared with fresh ingredients and
            traditional flavors.
          </p>

          <div className="mt-8">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>

        </div>


        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">

          <div>

            {selectedCategory === "All" && (
              <div className="space-y-16">

                <PastaMenu
                  onAdd={addToCart}
                />

                <PizzaMenu
                  onAdd={addToCart}
                />

                <CategoryMenu
                  title="Salad"
                  items={saladItems}
                  onAdd={addToCart}
                />

                <CategoryMenu
                  title="Dessert"
                  items={dessertItems}
                  onAdd={addToCart}
                />

                <CategoryMenu
                  title="Drinks"
                  items={drinkItems}
                  onAdd={addToCart}
                />

              </div>
            )}


            {selectedCategory === "Pasta" && (
              <PastaMenu
                onAdd={addToCart}
              />
            )}


            {selectedCategory === "Pizza" && (
              <PizzaMenu
                onAdd={addToCart}
              />
            )}

            {selectedCategory === "Salad" && (
              <CategoryMenu
                title="Salad"
                items={saladItems}
                onAdd={addToCart}
              />
            )}

            {selectedCategory === "Dessert" && (
              <CategoryMenu
                title="Dessert"
                items={dessertItems}
                onAdd={addToCart}
              />
            )}

            {selectedCategory === "Drinks" && (
              <CategoryMenu
                title="Drinks"
                items={drinkItems}
                onAdd={addToCart}
              />
            )}


            {selectedCategory !== "All" &&
              selectedCategory !== "Pasta" &&
              selectedCategory !== "Pizza" &&
              selectedCategory !== "Salad" &&
              selectedCategory !== "Dessert" &&
              selectedCategory !== "Drinks" && (
                <div className="rounded-2xl bg-[#fafafa] py-16 text-center">

                  <p className="text-sm text-[#99918a]">
                    No{" "}
                    {selectedCategory.toLowerCase()}{" "}
                    menu available yet.
                  </p>

                </div>
              )}

          </div>


          <CartSummary
            cartItems={cartItems}
            subtotal={subtotal}
            tax={tax}
            voucherDiscount={voucherDiscount}
            total={total}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
          />

        </div>
      </div>
    </div>
  );
}


interface CartSummaryProps {
  cartItems: CartItem[];
  subtotal: number;
  tax: number;
  voucherDiscount: number;
  total: number;

  onUpdateQuantity: (
    id: number,
    quantity: number
  ) => void;

  onRemove: (id: number) => void;
}

function CartSummary({
  cartItems,
  subtotal,
  tax,
  voucherDiscount,
  total,
  onUpdateQuantity,
  onRemove,
}: CartSummaryProps) {
  const navigate = useNavigate();

  return (
    <aside className="rounded-2xl bg-white p-5 shadow-md lg:sticky lg:top-6">

      <div className="flex items-center justify-between">

        <h2 className="text-sm font-semibold text-[#351f08]">
          Order list
        </h2>

        <ShoppingBag
          size={17}
          className="text-[#ff8a00]"
        />

      </div>

      {cartItems.length === 0 ? (
        <div className="py-12 text-center">

          <ShoppingBag
            size={35}
            className="mx-auto text-[#d8d0c8]"
          />

          <p className="mt-3 text-xs text-[#99918a]">
            Your cart is empty
          </p>

        </div>
      ) : (
        <div className="mt-6 space-y-5">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border-b border-[#f0ece8] pb-4 last:border-0"
            >

              <div className="flex items-start justify-between gap-3">

                <div className="min-w-0">

                  <h3 className="truncate text-xs font-medium text-[#351f08]">
                    {item.name}
                  </h3>


                  <div className="mt-2 flex items-center gap-2">

                    <button
                      type="button"
                      onClick={() =>
                        onUpdateQuantity(
                          item.id,
                          item.quantity - 1
                        )
                      }
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f8f4ef] text-[#77716c] transition hover:bg-[#ff8a00] hover:text-white"
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      <Minus size={10} />
                    </button>

                    <span className="min-w-4 text-center text-[10px] text-[#77716c]">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        onUpdateQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f8f4ef] text-[#ff8a00] transition hover:bg-[#ff8a00] hover:text-white"
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      <Plus size={10} />
                    </button>

                  </div>

                </div>

                <div className="shrink-0 text-right">

                  <button
                    type="button"
                    onClick={() =>
                      onRemove(item.id)
                    }
                    className="text-red-400 transition hover:text-red-600"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 size={12} />
                  </button>

                  <p className="mt-2 text-xs font-medium text-[#ff8a00]">
                    $
                    {(
                      item.price *
                      item.quantity
                    ).toFixed(2)}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}


      <div className="mt-7">

        <label
          htmlFor="voucher"
          className="text-xs font-semibold text-[#351f08]"
        >
          Voucher Code
        </label>

        <div className="mt-3 flex gap-2">

          <input
            id="voucher"
            type="text"
            placeholder="Enter code"
            className="min-w-0 flex-1 rounded-md bg-[#fafafa] px-3 py-2 text-[10px] outline-none placeholder:text-[#b6aea6] focus:ring-1 focus:ring-[#ff8a00]"
          />

          <button
            type="button"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#5aa9df] text-white transition hover:bg-[#438fc5]"
          >
            <Plus size={15} />
          </button>

        </div>

        <p className="mt-2 text-[9px] text-[#99918a]">
          Spend $50 or more to receive a $5 discount.
        </p>

      </div>

      <div className="mt-7 space-y-3 border-t border-[#f0ece8] pt-5 text-xs">

        <div className="flex justify-between">

          <span className="text-[#351f08]">
            Subtotal
          </span>

          <span className="text-[#ff8a00]">
            ${subtotal.toFixed(2)}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-[#351f08]">
            Tax fee
          </span>

          <span className="text-[#ff8a00]">
            ${tax.toFixed(2)}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-[#351f08]">
            Voucher
          </span>

          <span className="text-[#ff8a00]">
            -${voucherDiscount.toFixed(2)}
          </span>

        </div>

        <div className="flex justify-between border-t border-[#f0ece8] pt-3 font-semibold">

          <span className="text-[#351f08]">
            Total
          </span>

          <span className="text-[#ff8a00]">
            ${total.toFixed(2)}
          </span>

        </div>

      </div>

      <button
        type="button"
        disabled={cartItems.length === 0}
        onClick={() => navigate("/checkout")}
        className="mt-6 w-full rounded-md bg-[#40c878] py-3 text-xs font-semibold text-white transition hover:bg-[#32b568] disabled:cursor-not-allowed disabled:opacity-50"
      >
        Checkout
      </button>

    </aside>
  );
}

export default Menu;