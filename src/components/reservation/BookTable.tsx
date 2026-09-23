
import { useState } from "react";

import restaurantImage from "../../assets/reservation-page/table-image.jpg";

import ReservationModal from "./ReservationModal";
import ReservationConfirmation from "./ReservationConfirmation";
import ReservationSuccess from "./ReservationSuccess";
import ReservationCancellation from "./ReservationCancellation";

import type { ReservationData } from "../../types/Reservation";

function BookTable() {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [partySize, setPartySize] = useState("");

 
  const [isReservationOpen, setIsReservationOpen] =
    useState(false);

  const [showConfirmation, setShowConfirmation] =
    useState(false);

  const [showSuccess, setShowSuccess] =
    useState(false);

  const [showCancellation, setShowCancellation] =
    useState(false);

  const [reservationData, setReservationData] =
    useState<ReservationData>({
      firstName: "",
      lastName: "",
      country: "IN",
      phone: "",
      email: "",
      occasion: "",
      specialRequest: "",
      subscribe: false,
    });

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsReservationOpen(true);
  };

  const handleReservationConfirm = () => {
    setIsReservationOpen(false);
    setShowConfirmation(true);
  };

  const handleFinalConfirmation = () => {
    setShowConfirmation(false);
    setShowSuccess(true);
  };

  const handleModify = () => {
    setShowSuccess(false);
    setShowConfirmation(true);
  };

  const handleCancel = () => {
    setShowSuccess(false);
    setShowCancellation(true);
  };

  const handleCancelReservation = () => {
    setShowCancellation(false);

    console.log("Reservation cancelled");
  };

  return (
    <>
      <section className="overflow-hidden bg-white py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 sm:px-10 lg:flex-row lg:justify-between lg:gap-16 lg:px-16">

          <div className="relative flex h-[290px] w-full items-center justify-center sm:h-[350px] lg:h-[390px] lg:w-1/2">

            <div className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5f4f2] sm:h-[350px] sm:w-[350px] lg:h-[390px] lg:w-[390px]"/>

            <div className="absolute left-1/2 top-1/2 h-[235px] w-[235px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eeecea] sm:h-[285px] sm:w-[285px] lg:h-[315px] lg:w-[315px]"/>

            <img
              src={restaurantImage}
              alt="Restaurant table"
              className="relative z-10 h-[185px] w-[185px] rounded-full object-cover sm:h-[230px] sm:w-[230px] lg:h-[265px] lg:w-[265px]"/>
          </div>

          <div className="w-full max-w-md lg:w-1/2 lg:max-w-[390px]">

            <h2 className="font-serif text-3xl font-bold text-[#311f09] sm:text-4xl">
              Book a table
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">

              <input
                type="date"
                value={date}
                onChange={(event) =>
                  setDate(event.target.value)
                }
                className="h-12 w-full rounded-lg bg-[#faf9f8] px-4 text-sm text-[#8b8177] outline-none transition focus:ring-2 focus:ring-orange-400"required/>

              <input
                type="time"
                value={time}
                onChange={(event) =>
                  setTime(event.target.value)
                }
                className="h-12 w-full rounded-lg bg-[#faf9f8] px-4 text-sm text-[#8b8177] outline-none transition focus:ring-2 focus:ring-orange-400" required/>

              <select
                value={partySize}
                onChange={(event) =>
                  setPartySize(event.target.value)
                }
                className="h-12 w-full rounded-lg bg-[#faf9f8] px-4 text-sm text-[#8b8177] outline-none transition focus:ring-2 focus:ring-orange-400" required>
                <option value="" disabled>
                  Party size
                </option>

                <option value="1">
                  1 person
                </option>

                <option value="2">
                  2 people
                </option>

                <option value="4">
                  4 people
                </option>

                <option value="6">
                  6 people
                </option>

                <option value="8">
                  8 people
                </option>
              </select>

              <button
                type="submit"
                className="h-12 w-full rounded-lg bg-[#ff8a00] text-sm font-medium text-white transition hover:bg-[#e97b00]">
                Book now
              </button>

            </form>
          </div>
        </div>
      </section>

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() =>
          setIsReservationOpen(false)
        }
        onConfirm={handleReservationConfirm}
        date={date}
        time={time}
        partySize={partySize}
        reservationData={reservationData}
        setReservationData={setReservationData}
      />

      <ReservationConfirmation
        isOpen={showConfirmation}
        onClose={() =>
          setShowConfirmation(false)
        }
        onConfirm={handleFinalConfirmation}
        date={date}
        time={time}
        partySize={partySize}
        reservationData={reservationData}
      />

      <ReservationSuccess
        isOpen={showSuccess}
        onClose={() =>
          setShowSuccess(false)
        }
        onModify={handleModify}
        onCancel={handleCancel}
        date={date}
        time={time}
        partySize={partySize}
        occasion={reservationData.occasion}
        specialRequest={reservationData.specialRequest}
      />

      <ReservationCancellation
        isOpen={showCancellation}
        onClose={() =>
          setShowCancellation(false)
        }
        onCancel={handleCancelReservation}
        date={date}
        time={time}
        partySize={partySize}
      />
    </>
  );
}

export default BookTable;