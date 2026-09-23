
 import {
  X,
  CalendarDays,
  Clock,
  Users,
} from "lucide-react";

import type { ReservationData } from "../../types/Reservation";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  date: string;
  time: string;
  partySize: string;

  reservationData: ReservationData;

  setReservationData: React.Dispatch<
    React.SetStateAction<ReservationData>
  >;
}

function ReservationModal({
  isOpen,
  onClose,
  onConfirm,
  date,
  time,
  partySize,
  reservationData,
  setReservationData,
}: ReservationModalProps) {
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

  const updateReservationData = (
    field: keyof ReservationData,
    value: string | boolean
  ) => {
    setReservationData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6">

      <div className="relative max-h-[95vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl sm:p-8">

        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-4
            top-4
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-gray-100
            text-gray-600
            transition
            hover:bg-gray-200
          "
          aria-label="Close reservation modal"
        >
          <X size={18} />
        </button>

        <div className="text-center">

          <h2 className="font-serif text-2xl font-bold text-[#311f09] sm:text-3xl">
            Reservation
          </h2>

          <p className="mt-4 rounded-lg bg-cyan-100 px-4 py-3 text-xs text-gray-600">
            Due to limited availability, we can hold this
            table for you for{" "}
            <span className="font-semibold">
              9:00 minutes
            </span>
          </p>

        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            onConfirm();
          }}
          className="mt-6"
        >

          <div className="grid gap-8 md:grid-cols-2">

            <div>

              <h3 className="mb-4 text-sm font-semibold text-[#311f09]">
                Data order
              </h3>

              <div className="space-y-3">

                <input
                  type="text"
                  placeholder="First name"
                  value={reservationData.firstName}
                  onChange={(event) =>
                    updateReservationData(
                      "firstName",
                      event.target.value
                    )
                  }
                  required
                  className="
                    h-11
                    w-full
                    rounded-md
                    bg-[#fafafa]
                    px-4
                    text-xs
                    outline-none
                    focus:ring-2
                    focus:ring-orange-400
                  "
                />

                <input
                  type="text"
                  placeholder="Last name"
                  value={reservationData.lastName}
                  onChange={(event) =>
                    updateReservationData(
                      "lastName",
                      event.target.value
                    )
                  }
                  required
                  className="
                    h-11
                    w-full
                    rounded-md
                    bg-[#fafafa]
                    px-4
                    text-xs
                    outline-none
                    focus:ring-2
                    focus:ring-orange-400
                  "
                />

                <div className="flex gap-3">

                  <select
                    value={reservationData.country}
                    onChange={(event) =>
                      updateReservationData(
                        "country",
                        event.target.value
                      )
                    }
                    className="
                      h-11
                      w-20
                      rounded-md
                      bg-[#fafafa]
                      px-3
                      text-xs
                      outline-none
                    "
                  >
                    <option value="IN">
                      🇮🇳
                    </option>

                    <option value="US">
                      🇺🇸
                    </option>

                    <option value="UK">
                      🇬🇧
                    </option>
                  </select>

                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={reservationData.phone}
                    onChange={(event) =>
                      updateReservationData(
                        "phone",
                        event.target.value
                      )
                    }
                    required
                    className="
                      h-11
                      flex-1
                      rounded-md
                      bg-[#fafafa]
                      px-4
                      text-xs
                      outline-none
                      focus:ring-2
                      focus:ring-orange-400
                    "
                  />

                </div>

                <input
                  type="email"
                  placeholder="Email address"
                  value={reservationData.email}
                  onChange={(event) =>
                    updateReservationData(
                      "email",
                      event.target.value
                    )
                  }
                  required
                  className="
                    h-11
                    w-full
                    rounded-md
                    bg-[#fafafa]
                    px-4
                    text-xs
                    outline-none
                    focus:ring-2
                    focus:ring-orange-400
                  "
                />

                <select
                  value={reservationData.occasion}
                  onChange={(event) =>
                    updateReservationData(
                      "occasion",
                      event.target.value
                    )
                  }
                  className="
                    h-11
                    w-full
                    rounded-md
                    bg-[#fafafa]
                    px-4
                    text-xs
                    text-gray-500
                    outline-none
                  "
                >
                  <option value="">
                    Select an occasion
                  </option>

                  <option value="Birthday">
                    Birthday
                  </option>

                  <option value="Anniversary">
                    Anniversary
                  </option>

                  <option value="Business dinner">
                    Business dinner
                  </option>
                </select>

                <textarea
                  placeholder="Add a special request"
                  rows={4}
                  value={reservationData.specialRequest}
                  onChange={(event) =>
                    updateReservationData(
                      "specialRequest",
                      event.target.value
                    )
                  }
                  className="
                    w-full
                    resize-none
                    rounded-md
                    bg-[#fafafa]
                    px-4
                    py-3
                    text-xs
                    outline-none
                    focus:ring-2
                    focus:ring-orange-400
                  "
                />

              </div>

              <label className="mt-4 flex items-start gap-2 text-[10px] text-gray-500">

                <input
                  type="checkbox"
                  checked={reservationData.subscribe}
                  onChange={(event) =>
                    updateReservationData(
                      "subscribe",
                      event.target.checked
                    )
                  }
                  className="mt-0.5"
                />

                <span>
                  Sign me up to receive dining offers and news
                  from this restaurant by email.
                </span>

              </label>

            </div>

            <div>

              <h3 className="mb-4 text-sm font-semibold text-[#311f09]">
                Reservation detail
              </h3>

              <div className="space-y-4 text-xs text-gray-600">

                <div className="flex items-center gap-3">

                  <CalendarDays size={15} />

                  <span>
                    {formattedDate}
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <Clock size={15} />

                  <span>
                    {formattedTime}
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <Users size={15} />

                  <span>
                    {partySize
                      ? `${partySize} ${
                          partySize === "1"
                            ? "person"
                            : "people"
                        } (Standard seating)`
                      : "Not selected"}
                  </span>

                </div>

              </div>

              <h3 className="mb-3 mt-8 text-sm font-semibold text-[#311f09]">
                Restaurant information
              </h3>

              <p className="text-xs leading-5 text-gray-500">
                Food is prepared using fresh ingredients and
                carefully selected products. Our restaurant
                offers a comfortable atmosphere for every
                occasion. Please contact us if you have any
                special requirements.
              </p>

            </div>

          </div>

          <button
            type="submit"
            className="
              mt-8
              h-11
              w-full
              rounded-md
              bg-[#ff8a00]
              text-sm
              font-medium
              text-white
              transition
              hover:bg-[#e97b00]
              sm:w-56
            "
          >
            Confirm Reservation
          </button>

        </form>
      </div>
    </div>
  );
}

export default ReservationModal;