
import {
  X,
  CalendarDays,
  Clock,
  Users,
  ExternalLink,
} from "lucide-react";

import restaurantImage from "../../assets/reservation-page/table-image.jpg";
import { useNavigate } from "react-router-dom";

interface ReservationSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  onModify: () => void;
  onCancel: () => void;
  date: string;
  time: string;
  partySize: string;
  occasion: string;
  specialRequest: string;
}

function ReservationSuccess({
  isOpen,
  onClose,
  onModify,
  onCancel,
  date,
  time,
  partySize,
  occasion,
  specialRequest,
}: ReservationSuccessProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const formattedDate = date
    ? new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Not selected";

  const formattedTime = time
    ? new Date(`1970-01-01T${time}`).toLocaleTimeString("en-US", {
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
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 px-4 py-5">
      <div className="relative max-h-[95vh] w-full max-w-[720px] overflow-y-auto bg-white shadow-2xl">

        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition hover:bg-gray-100 sm:right-[-1px] sm:top-[-42px]"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-5">
          
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ff8a00] text-[9px] font-bold text-white">
              D
            </div>

            <span className="text-[10px] font-semibold text-[#311f09]">
              Delizio<span className="text-[#ff8a00]">zo</span>
            </span>
          </div>

          <div className="flex w-full gap-2 sm:w-auto">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="min-h-9 flex-1 rounded-full bg-[#ff8a00] px-4 py-1.5 text-[9px] font-medium text-white transition hover:bg-[#e97b00] sm:flex-none"
            >
              Sign in
            </button>

            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="min-h-9 flex-1 rounded-full bg-green-600 px-4 py-1.5 text-[9px] font-medium text-white transition hover:bg-green-700 sm:flex-none"
            >
              Sign up
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden bg-[#3dcc70] px-6 py-5 sm:px-8">

          <div className="absolute -right-5 -top-8 h-20 w-20 rounded-full bg-white/10" />
          <div className="absolute right-16 top-7 h-10 w-10 rounded-full bg-white/10" />
          <div className="absolute left-2 bottom-2 h-6 w-6 rounded-full bg-white/10" />
          <div className="absolute left-1/2 bottom-0 h-2 w-2 rounded-full bg-white/20" />

          <div className="relative z-10">
            <h2 className="text-lg font-semibold text-white sm:text-xl">
              Reservation has been confirmed
            </h2>

            <div className="mt-2 space-y-1 text-[9px] text-white/90">
              <p className="flex items-center gap-2">
                <span className="flex h-3 w-3 items-center justify-center rounded-sm border border-white/70 text-[7px]">
                  ✓
                </span>
                The confirmation result has been sent to your email
              </p>

              <p className="flex items-center gap-2">
                <span className="flex h-3 w-3 items-center justify-center rounded-sm border border-white/70 text-[7px]">
                  #
                </span>
                Booking ID : #123456
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-7 sm:px-8 sm:py-8">

          <div className="flex flex-col gap-7 sm:flex-row">

            <div className="flex justify-center sm:w-[95px] sm:shrink-0">
              <div className="flex h-[105px] w-[105px] items-center justify-center rounded-full bg-[#faf4ef]">
                <div className="h-[82px] w-[82px] overflow-hidden rounded-full">
                  <img
                    src={restaurantImage}
                    alt="Restaurant table"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1">

              <div className="flex flex-col justify-between gap-5 sm:flex-row">

                <div>
                  <h3 className="text-xs font-bold text-[#311f09]">
                    Reservation detail
                  </h3>

                  <div className="mt-4 space-y-3 text-[9px] text-gray-600">

                    <div className="flex items-center gap-3">
                      <CalendarDays
                        size={14}
                        className="text-gray-600"
                      />
                      <span>{formattedDate}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock
                        size={14}
                        className="text-gray-600"
                      />
                      <span>{formattedTime}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Users
                        size={14}
                        className="text-gray-600"
                      />
                      <span>{formattedPartySize}</span>
                    </div>

                  </div>
                </div>

                <div className="flex w-full flex-row gap-2 sm:w-auto sm:flex-col">

                  <button
                    type="button"
                    onClick={onModify}
                    className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-blue-100 sm:h-8 sm:w-[90px] text-[8px] font-medium text-blue-600 transition hover:bg-blue-200"
                  >
                    Modify
                    <ExternalLink size={12} />
                  </button>

                  <button
                    type="button"
                    onClick={onCancel}
                    className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-red-100 sm:h-8 sm:w-[90px] text-[8px] font-medium text-red-500 transition hover:bg-red-200"
                  >
                    Cancel
                    <X size={12} />
                  </button>

                </div>

              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">

            <div className="space-y-3">

              <div className="flex h-10 items-center justify-between rounded-md bg-[#fafafa] px-4 text-[9px] text-gray-400">
                <span>
                  {occasion || "Select an occasion (optional)"}
                </span>

                <span>⌄</span>
              </div>

              <div className="min-h-[130px] rounded-md bg-[#fafafa] px-4 py-4 text-[9px] text-gray-400">
                {specialRequest || "Add a special request"}
              </div>

            </div>

            <div>
              <h3 className="text-xs font-bold text-[#311f09]">
                Restaurant
                <br />
                informations
              </h3>

              <p className="mt-3 text-[9px] leading-4 text-gray-500">
                Sed ut perspiciatis unde omnis iste natus
                error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo.
              </p>

              <p className="mt-3 text-[9px] leading-4 text-gray-500">
                Neque porro quisquam est, qui dolorem ipsum
                quia dolor sit amet, consectetur, adipisci velit,
                sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam
                quaerat voluptatem.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationSuccess;