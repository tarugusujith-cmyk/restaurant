
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  MapPin,
  X,
} from "lucide-react";

interface Address {
  id: number;
  address: string;
}

function Checkout() {
  const [isAddressOpen, setIsAddressOpen] = useState(false);

  const navigate = useNavigate();

  const [selectedAddress, setSelectedAddress] = useState(
    "1931 Golden Ave, Bronx, NY 10462, America"
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const [orderTime, setOrderTime] = useState("Order now");
  const [orderMethod, setOrderMethod] = useState("Delivery");
  const [paymentMethod, setPaymentMethod] =
    useState("Cash On Delivery");

  const addresses: Address[] = [
    {
      id: 1,
      address:
        "1931 Golden Ave, Bronx, NY 10462, America",
    },
    {
      id: 2,
      address:
        "25 Main Street, New York, NY 10001, America",
    },
    {
      id: 3,
      address:
        "45 Park Avenue, New York, NY 10016, America",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] px-4 py-6">
      <div className="mx-auto w-full max-w-[520px]">

        <div className="relative mb-8 flex items-center justify-center">

          <button
            type="button"
            onClick={() => navigate("/order")}
            className="absolute left-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#351f08] text-white"
          >
            <ArrowLeft size={13} />
          </button>

          <h1 className="font-serif text-xl font-bold text-[#351f08]">
            Checkout
          </h1>

        </div>


        <section className="mb-6">

          <h2 className="mb-3 text-[10px] font-semibold text-[#351f08]">
            Shipping address
          </h2>

          <div className="flex items-center gap-2">

            <div className="flex min-h-[38px] flex-1 items-center rounded-md bg-white px-4 shadow-sm">
              <MapPin
                size={12}
                className="mr-2 shrink-0 text-[#ff8a00]"
              />

              <p className="truncate text-[9px] text-[#77716c]">
                {selectedAddress}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsAddressOpen(true)}
              className="h-[38px] rounded-md bg-[#70a3e5] px-5 text-[9px] font-medium text-white transition hover:bg-[#5c92d9]"
            >
              Change
            </button>

          </div>

        </section>


        <section className="mb-6">

          <h2 className="mb-3 text-[10px] font-semibold text-[#351f08]">
            Order data
          </h2>

          <div className="grid grid-cols-2 gap-2">

            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) =>
                setFirstName(e.target.value)
              }
              className="h-9 rounded-md border-0 bg-white px-3 text-[9px] text-[#351f08] shadow-sm outline-none placeholder:text-[#bcb8b4] focus:ring-1 focus:ring-[#ff8a00]"
            />

            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) =>
                setLastName(e.target.value)
              }
              className="h-9 rounded-md border-0 bg-white px-3 text-[9px] text-[#351f08] shadow-sm outline-none placeholder:text-[#bcb8b4] focus:ring-1 focus:ring-[#ff8a00]"
            />


            <div className="flex h-9 overflow-hidden rounded-md bg-white shadow-sm">

              <button
                type="button"
                className="flex w-10 items-center justify-center border-r border-[#f0ece8]"
              >
                <span className="text-sm">🇮🇳</span>
                <ChevronDown
                  size={8}
                  className="ml-1 text-[#99918a]"
                />
              </button>

              <input
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                className="min-w-0 flex-1 px-2 text-[9px] outline-none placeholder:text-[#bcb8b4]"
              />

            </div>

            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="h-9 rounded-md border-0 bg-white px-3 text-[9px] text-[#351f08] shadow-sm outline-none placeholder:text-[#bcb8b4] focus:ring-1 focus:ring-[#ff8a00]"
            />

          </div>


          <textarea
            placeholder="Note"
            value={note}
            onChange={(e) =>
              setNote(e.target.value)
            }
            rows={4}
            className="mt-2 w-full resize-none rounded-md bg-white px-3 py-3 text-[9px] text-[#351f08] shadow-sm outline-none placeholder:text-[#bcb8b4] focus:ring-1 focus:ring-[#ff8a00]"
          />

        </section>


        <section className="mb-6">

          <h2 className="mb-3 text-[10px] font-semibold text-[#351f08]">
            Order time
          </h2>

          <div className="flex gap-6">

            <label className="flex cursor-pointer items-center gap-2 text-[9px] text-[#351f08]">
              <input
                type="radio"
                name="orderTime"
                value="Order now"
                checked={orderTime === "Order now"}
                onChange={(e) =>
                  setOrderTime(e.target.value)
                }
                className="accent-[#40c878]"
              />
              Order now
            </label>

            <label className="flex cursor-pointer items-center gap-2 text-[9px] text-[#351f08]">
              <input
                type="radio"
                name="orderTime"
                value="Order later"
                checked={orderTime === "Order later"}
                onChange={(e) =>
                  setOrderTime(e.target.value)
                }
                className="accent-[#40c878]"
              />
              Order later
            </label>

          </div>

        </section>

        <section className="mb-6">

          <h2 className="mb-3 text-[10px] font-semibold text-[#351f08]">
            Order method
          </h2>

          <div className="flex gap-8">

            <label className="flex cursor-pointer items-center gap-2 text-[9px] text-[#351f08]">
              <input
                type="radio"
                name="orderMethod"
                value="Delivery"
                checked={orderMethod === "Delivery"}
                onChange={(e) =>
                  setOrderMethod(e.target.value)
                }
                className="accent-[#40c878]"
              />
              Delivery
            </label>

            <label className="flex cursor-pointer items-center gap-2 text-[9px] text-[#351f08]">
              <input
                type="radio"
                name="orderMethod"
                value="Take away"
                checked={orderMethod === "Take away"}
                onChange={(e) =>
                  setOrderMethod(e.target.value)
                }
                className="accent-[#ff8a00]"
              />
              Take away
            </label>

          </div>

        </section>


        <section className="mb-8">

          <h2 className="mb-3 text-[10px] font-semibold text-[#351f08]">
            Payment method
          </h2>

          <div className="grid grid-cols-2 gap-2">

            <PaymentOption
              label="Cash On Delivery"
              value="Cash On Delivery"
              selected={paymentMethod}
              onChange={setPaymentMethod}
            />

            <PaymentOption
              label="BCA Virtual Account"
              value="BCA Virtual Account"
              selected={paymentMethod}
              onChange={setPaymentMethod}
            />

            <PaymentOption
              label="Credit Card"
              value="Credit Card"
              selected={paymentMethod}
              onChange={setPaymentMethod}
            />

            <PaymentOption
              label="Transfer Bank"
              value="Transfer Bank"
              selected={paymentMethod}
              onChange={setPaymentMethod}
            />

          </div>

        </section>

        <label className="mb-5 flex cursor-pointer items-start gap-2 text-[8px] leading-3 text-[#77716c]">

          <input
            type="checkbox"
            defaultChecked
            className="mt-[1px] accent-[#351f08]"
          />

          <span>
            Choose to indicate that you have read and agree
            to our{" "}
            <span className="font-semibold text-[#351f08]">
              Terms of Use
            </span>{" "}
            &{" "}
            <span className="font-semibold text-[#351f08]">
              Privacy Policy.
            </span>
          </span>

        </label>


        <button
          type="button"
          className="mx-auto block w-[160px] rounded-md bg-[#ff8a00] py-3 text-[9px] font-semibold text-white transition hover:bg-[#e87900]"
        >
          Order now
        </button>

      </div>


      {isAddressOpen && (
        <ShoppingAddressModal
          addresses={addresses}
          selectedAddress={selectedAddress}
          onSelect={(address) => {
            setSelectedAddress(address);
            setIsAddressOpen(false);
          }}
          onClose={() => setIsAddressOpen(false)}
        />
      )}

    </div>
  );
}

interface PaymentOptionProps {
  label: string;
  value: string;
  selected: string;
  onChange: (value: string) => void;
}

function PaymentOption({
  label,
  value,
  selected,
  onChange,
}: PaymentOptionProps) {
  return (
    <label
      className={`flex h-9 cursor-pointer items-center gap-2 rounded-md bg-white px-3 text-[8px] shadow-sm transition ${
        selected === value
          ? "ring-1 ring-[#40c878]"
          : ""
      }`}
    >
      <input
        type="radio"
        name="paymentMethod"
        value={value}
        checked={selected === value}
        onChange={() => onChange(value)}
        className="accent-[#40c878]"
      />

      <span className="text-[#351f08]">
        {label}
      </span>
    </label>
  );
}

interface ShoppingAddressModalProps {
  addresses: Address[];
  selectedAddress: string;
  onSelect: (address: string) => void;
  onClose: () => void;
}

function ShoppingAddressModal({
  addresses,
  selectedAddress,
  onSelect,
  onClose,
}: ShoppingAddressModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">

      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#f8f4ef] text-[#351f08] transition hover:bg-[#ff8a00] hover:text-white"
        >
          <X size={14} />
        </button>


        <div className="mb-5">

          <h2 className="font-serif text-xl font-bold text-[#351f08]">
            Shopping Address
          </h2>

          <p className="mt-1 text-xs text-[#99918a]">
            Select your delivery address
          </p>

        </div>

        <div className="space-y-3">

          {addresses.map((address) => {
            const isSelected =
              selectedAddress === address.address;

            return (
              <button
                key={address.id}
                type="button"
                onClick={() =>
                  onSelect(address.address)
                }
                className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition ${
                  isSelected
                    ? "border-[#40c878] bg-[#f3fff7]"
                    : "border-[#eee8e2] hover:border-[#ff8a00]"
                }`}
              >

                <div
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                    isSelected
                      ? "bg-[#40c878] text-white"
                      : "bg-[#f5f1ed] text-[#99918a]"
                  }`}
                >
                  {isSelected ? (
                    <Check size={13} />
                  ) : (
                    <MapPin size={13} />
                  )}
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#351f08]">
                    Address {address.id}
                  </p>

                  <p className="mt-1 text-[10px] leading-4 text-[#77716c]">
                    {address.address}
                  </p>
                </div>

              </button>
            );
          })}

        </div>

        <button
          type="button"
          className="mt-5 w-full rounded-md border border-dashed border-[#ff8a00] py-3 text-xs font-medium text-[#ff8a00] transition hover:bg-[#fff7ed]"
        >
          + Add New Address
        </button>

      </div>

    </div>
  );
}

export default Checkout;