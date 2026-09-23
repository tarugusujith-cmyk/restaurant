
import {
  X,
  CalendarDays,
  Clock,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ReservationCancellationProps {
  isOpen: boolean;
  onClose: () => void;
  onCancel: () => void;
  date: string;
  time: string;
  partySize: string;
}

function ReservationCancellation({
  isOpen,
  onClose,
  onCancel,
  date,
  time,
  partySize,
}: ReservationCancellationProps) {
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
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 px-4 py-5">
      <div className="relative max-h-[95vh] w-full max-w-[720px] overflow-y-auto bg-white shadow-2xl">

        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-3
            top-3
            z-10
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
          aria-label="Close cancellation popup"
        >
          <X size={18} />
        </button>

        <div
          className="
            flex
            items-center
            justify-between
            px-5
            py-6
            sm:px-8
          "
        >
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

        <div
          className="
            relative
            overflow-hidden
            bg-[#ff8a00]
            px-6
            py-5
            text-white
            sm:px-8
          "
        >

          <div
            className="
              absolute
              -right-5
              -top-8
              h-20
              w-20
              rounded-full
              border-[10px]
              border-orange-300/30
            "
          />

          <div
            className="
              absolute
              right-20
              top-5
              h-10
              w-10
              rounded-full
              bg-orange-300/20
            "
          />

          <div
            className="
              absolute
              bottom-3
              right-7
              h-6
              w-6
              rounded-full
              bg-orange-300/20
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-1/2
              h-2
              w-2
              rounded-full
              bg-orange-300/30
            "
          />

          {/* Content */}
          <div className="relative z-10">

            <h2
              className="
                max-w-[360px]
                text-lg
                font-semibold
                leading-tight
                sm:text-xl
              "
            >
              Are you sure you want to cancel
              the reservation?
            </h2>

            <p className="mt-3 text-[9px] text-white/90">
              ▣ &nbsp; Booking ID: #123456
            </p>

          </div>
        </div>

        <div className="px-6 py-6 sm:px-8 sm:py-8">

          <div className="flex flex-col gap-7 sm:flex-row">

            <div className="flex justify-center sm:justify-start">

              <div
                className="
                  flex
                  h-[120px]
                  w-[120px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#faf6f2]
                "
              >
                <div className="h-[90px] w-[90px] overflow-hidden rounded-full">

                  <img
                    src="/images/restaurant.jpg"
                    alt="Restaurant"
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />

                </div>
              </div>

            </div>

            <div className="flex-1">

              <h3
                className="
                  mb-4
                  text-sm
                  font-semibold
                  text-[#311f09]
                "
              >
                Reservation detail
              </h3>

              <div className="space-y-4">

                <div className="flex items-center gap-3">

                  <CalendarDays
                    size={15}
                    className="text-gray-700"
                  />

                  <span className="text-[10px] text-gray-500">
                    {formattedDate}
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <Clock
                    size={15}
                    className="text-gray-700"
                  />

                  <span className="text-[10px] text-gray-500">
                    {formattedTime}
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <Users
                    size={15}
                    className="text-gray-700"
                  />

                  <span className="text-[10px] text-gray-500">
                    {formattedPartySize}
                  </span>

                </div>

              </div>

            </div>

          </div>

          <div className="mt-8 flex justify-center sm:justify-end">

            <button
              type="button"
              onClick={onCancel}
              className="
                h-11
                w-full
                rounded-md
                bg-[#ff3b3b]
                px-8
                text-xs
                font-medium
                text-white
                transition
                hover:bg-[#e52f2f]
                sm:w-[168px]
              "
            >
              Cancel reservation
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ReservationCancellation;