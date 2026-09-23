
import aboutImage1 from "../../assets/about-page/about1.jpg"
import aboutImage2 from "../../assets/about-page/about2.jpg"

function AboutRestaurant() {

  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          
          <div className="flex justify-center">
            <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full bg-[#fafafa] sm:h-[390px] sm:w-[390px]">
              <div className="absolute inset-5 rounded-full border-[18px] border-[#f5f5f5] sm:inset-7 sm:border-[22px]" />

              <img
                src={aboutImage1}
                alt="Chef preparing food in the restaurant"
                className="relative z-10 h-[190px] w-[190px] rounded-full object-cover sm:h-[250px] sm:w-[250px]"
              />
            </div>
          </div>

          <div className="min-w-0 max-w-md">
            <h2 className="font-serif text-3xl font-bold leading-tight text-[#351f08] sm:text-4xl lg:text-5xl">
              <span className="block text-[#ff8a00]">Our</span>
              restaurant
            </h2>

            <p className="mt-6 text-[11px] leading-5 text-[#77716c] sm:text-xl sm:leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="mt-3 text-[11px] leading-5 text-[#77716c] sm:text-xs sm:leading-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse.
            </p>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-20">
          
          <div className="order-2 min-w-0 max-w-md lg:order-1 lg:ml-8">
            <p className="text-base leading-7 text-[#77716c] sm:text-xl sm:leading-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>

            <p className="mt-3 text-[11px] leading-5 text-[#77716c] sm:text-xl sm:leading-6">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit.
            </p>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full bg-[#fafafa] sm:h-[390px] sm:w-[390px]">
              <div className="absolute inset-5 rounded-full border-[18px] border-[#f5f5f5] sm:inset-7 sm:border-[22px]" />

              <img
                src={aboutImage2}
                alt="Fresh food served on a restaurant table"
                className="relative z-10 h-[190px] w-[190px] rounded-full object-cover sm:h-[250px] sm:w-[250px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutRestaurant;