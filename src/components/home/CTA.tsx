
import React from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  message: string;
}

const testimonial: Testimonial = {
  id: 1,
  name: "Starla Virgoun",
  role: "Financial advisor",
  image: "/images/customer.png",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam",
};

const CTA: React.FC = () => {
  return (
    <section className="relative min-h-[640px] w-full overflow-hidden bg-[#fcfbfb]">
      
      <span className="absolute left-[4.5%] top-[45px] h-12 w-12 rounded-full bg-[#cef1c8]"/>

      <span className="absolute right-[7%] top-[85px] h-6 w-6 rounded-full bg-[#f5f5f5]"/>

      <span className="absolute left-[12.5%] top-[165px] h-[22px] w-[22px] rounded-full bg-[#e4f4fb]"/>

      <span className="absolute left-[2.7%] top-[353px] h-[33px] w-[33px] rounded-full bg-[#ffbe73]"/>

      <span className="absolute right-[14%] top-[242px] h-[49px] w-[49px] rounded-full bg-[#fde9e9]"/>

      <span className="absolute right-[-2px] top-[310px] h-[37px] w-[37px] rounded-full bg-[#f2c7ff]"/>

      <span className="absolute left-[10%] top-[594px] h-[35px] w-[35px] rounded-full bg-[#fce4c8]"/>

      <span className="absolute right-[4%] top-[628px] h-[23px] w-[23px] rounded-full bg-[#f7f7f7]"/>

      

      <div className="relative mx-auto flex min-h-[240px] w-full max-w-[900px] flex-col items-center px-2">

        <h2 className=" mt-[85px] text-center font-serif text-[38px] font-bold leading-tight text-[#352416] sm:text-[42px]">
          Our customers say
        </h2>

        <div className="mt-[45px] flex h-[132px] w-[132px] items-center justify-center overflow-hidden rounded-full bg-[#c6c6c6]">
          
        </div>

        <h3
          className="mt-7 text-[16px] font-bold text-[#352416]">
          {testimonial.name}
        </h3>

        <p className="mt-2 text-[12px] text-[#806f60]">
          {testimonial.role}
        </p>

        <div className="relative mt-7 w-full max-w-[350px] text-center">

          <span
            className=" absolute -left-7 -top-2 font-serif text-[60px] font-bold leading-none text-[#352416]">
            “
          </span>

          <p
            className="text-[11px] leading-[20px] text-[#806f60]">
            {testimonial.message}
          </p>

          <span
            className="absolute -right-6 bottom-[-18px] font-serif text-[40px] font-bold leading-none text-[#352416]">
            ”
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTA;