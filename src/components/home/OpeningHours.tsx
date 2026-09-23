
import React from "react";
import ButtonLink from "../common/ButtonLink";

const OpeningHours: React.FC = () => {
  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8">
      <div className=" relative mx-auto flex min-h-[325px] w-full max-w-[645px] items-center justify-center overflow-hidden rounded-[55px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/restaurant-food.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className=" relative z-10 flex w-full flex-col items-center px-6 text-center text-white">
          
          <h2 className="font-serif text-[38px] font-bold leading-tight sm:text-[42px]">
            we are open from
          </h2>

          <h3 className="mt-4 text-[21px] font-bold sm:text-[23px]">
            Monday-Sunday
          </h3>

          <div className="mt-3 space-y-2 text-[11px] leading-[15px] text-white/90 sm:text-[12px]">
            <p>Launch : Mon-Sun : 11:00am-02:00pm</p>
            <p>Dinner : sunday : 04:00pm-08:00pm</p>
            <p>04:00pm-09:00pm</p>
          </div>

          <div className="mt-8 flex items-center gap-3">

            <ButtonLink href="/order">
              Order Now
            </ButtonLink>

            <ButtonLink href="/reservation" variant="outline">
              Reservation
            </ButtonLink>
              
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;