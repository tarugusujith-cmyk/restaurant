
import {
  X,
  CalendarDays,
  Clock,
  Users,
  ChevronDown,
} from "lucide-react";

import type { ReservationData } from "../../types/Reservation";
import { useNavigate } from "react-router-dom";

interface ReservationConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  date: string;
  time: string;
  partySize: string;
  reservationData: ReservationData;
}

function ReservationConfirmation({
  isOpen,
  onClose,
  onConfirm,
  date,
  time,
  partySize,
  reservationData,
}: ReservationConfirmationProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  
  const formattedDate = date
    ? new Date(`${date}T00:00:00`).toLocaleDateString(
        "en-US",
        {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      )
    : "Not selected";

  
  const formattedTime = time
    ? new Date(
        `1970-01-01T${time}`
      ).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    : "Not selected";

  const formattedPartySize = partySize
    ? `${partySize} ${
        partySize === "1" ? "person" : "people"
      } (Standard seating)`
    : "Not selected";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-5">

      <div className="relative max-h-[95vh] w-full max-w-[720px] overflow-y-auto bg-white px-5 py-6 shadow-2xl sm:px-8 sm:py-7">

        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-3
            top-3
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-md
            transition
            hover:bg-gray-100
          "
          aria-label="Close reservation confirmation"
        >
          <X size={18} />
        </button>

        <div className="flex items-center justify-between">

          <div className="text-sm font-bold text-[#ff8a00]">
            Dine
            <span className="text-[#311f09]">
              Now
            </span>
          </div>

          <div className="flex gap-2">

            <button
              type="button"
              onClick={() => navigate("/")}
              className="
                rounded-full
                bg-[#ff8a00]
                px-4
                py-1.5
                text-[9px]
                text-white
                transition hover:bg-[#e97b00]
              "
            >
              Sign in
            </button>

            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="
                rounded-full
                bg-green-600
                px-4
                py-1.5
                text-[9px]
                text-white
                transition hover:bg-green-700
              "
            >
              Sign up
            </button>

          </div>
        </div>

        <div className="mt-4 flex justify-center">

          <div className="h-24 w-24 overflow-hidden rounded-full">

            <img
              src="/images/restaurant.jpg"
              alt="Restaurant"
              className="h-full w-full object-cover"
            />

          </div>

        </div>

        <h2 className="mt-5 text-center text-sm font-semibold text-[#311f09]">
          Reservation detail
        </h2>

        <div className="mt-5 grid gap-3 text-[10px] text-gray-500 sm:grid-cols-3">

          <div className="flex items-center justify-center gap-2 sm:justify-start">

            <CalendarDays size={14} />

            <span>
              {formattedDate}
            </span>

          </div>

          <div className="flex items-center justify-center gap-2">

            <Clock size={14} />

            <span>
              {formattedTime}
            </span>

          </div>

          <div className="flex items-center justify-center gap-2 sm:justify-end">

            <Users size={14} />

            <span>
              {formattedPartySize}
            </span>

          </div>

        </div>

        <div className="mt-5 rounded-lg bg-cyan-100 px-4 py-3 text-center text-[10px] text-gray-600">

          Due to limited availability, we can hold this
          table for you for{" "}

          <span className="font-semibold text-gray-800">
            5:00 minutes
          </span>

        </div>

        <div className="mt-5">

          <h3 className="mb-3 text-sm font-semibold text-[#311f09]">
            Data order
          </h3>

          <div className="grid gap-3 sm:grid-cols-2">

            
            <div className="rounded-md bg-[#fafafa] px-4 py-3">

              <p className="text-[9px] text-gray-400">
                First name
              </p>

              <p className="mt-1 text-[11px] font-medium text-gray-700">
                {reservationData.firstName || "Not provided"}
              </p>

            </div>

            
            <div className="rounded-md bg-[#fafafa] px-4 py-3">

              <p className="text-[9px] text-gray-400">
                Last name
              </p>

              <p className="mt-1 text-[11px] font-medium text-gray-700">
                {reservationData.lastName || "Not provided"}
              </p>

            </div>

            
            <div className="rounded-md bg-[#fafafa] px-4 py-3">

              <p className="text-[9px] text-gray-400">
                Phone number
              </p>

              <p className="mt-1 text-[11px] font-medium text-gray-700">
                {reservationData.phone || "Not provided"}
              </p>

            </div>

            <div className="rounded-md bg-[#fafafa] px-4 py-3">

              <p className="text-[9px] text-gray-400">
                Email address
              </p>

              <p className="mt-1 break-all text-[11px] font-medium text-gray-700">
                {reservationData.email || "Not provided"}
              </p>

            </div>

          </div>

        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">

          <div className="relative">

            <div className="flex h-10 items-center justify-between rounded-md bg-[#fafafa] px-4 text-[10px] text-gray-500">

              <span>
                {reservationData.occasion ||
                  "Select an occasion (optional)"}
              </span>

              <ChevronDown
                size={13}
                className="text-gray-400"
              />

            </div>

          </div>

          <div className="min-h-[100px] rounded-md bg-[#fafafa] px-4 py-3">

            <p className="text-[9px] text-gray-400">
              Special request
            </p>

            <p className="mt-2 text-[10px] leading-4 text-gray-600">
              {reservationData.specialRequest ||
                "No special request"}
            </p>

          </div>

        </div>

        <div className="mt-5 space-y-3">

          <label className="flex items-start gap-2 text-[9px] text-gray-500">

            <input
              type="checkbox"
              defaultChecked
              className="mt-0.5"
              required
            />

            <span>
              I agree with what is stated above
            </span>

          </label>

          <label className="flex items-start gap-2 text-[9px] text-gray-500">

            <input
              type="checkbox"
              checked={reservationData.subscribe}
              readOnly
              className="mt-0.5"
            />

            <span>
              Sign me up to receive dining offers and
              news from this restaurant by email.
            </span>

          </label>

        </div>

        <div className="mt-6">

          <h3 className="mb-2 text-xs font-semibold text-[#311f09]">
            Restaurant informations
          </h3>

          <p className="text-[9px] leading-4 text-gray-500">
            Food is prepared using fresh ingredients and
            carefully selected products. Our restaurant
            offers a comfortable atmosphere for every
            occasion. Please contact us if you have any
            special requirements.
          </p>

          <p className="mt-2 text-[9px] leading-4 text-gray-500">
            We look forward to welcoming you and making
            your dining experience memorable.
          </p>

        </div>

        <button
          type="button"
          onClick={onConfirm}
          className="
            mt-6
            h-11
            w-full
            rounded-md
            bg-[#ff8a00]
            text-xs
            font-medium
            text-white
            transition
            hover:bg-[#e97b00]
            sm:w-[142px]
          "
        >
          Confirm reservation
        </button>

      </div>
    </div>
  );
}

export default ReservationConfirmation;