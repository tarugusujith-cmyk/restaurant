
import heroImage from "../../assets/home-page/hero-image.png";
import ButtonLink from "../common/ButtonLink";


function HeroSection() {
  return (
    <section id="home" className="overflow-hidden bg-[#fffaf3]">
      <div className="mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Welcome to our restaurant
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[#302014] sm:text-5xl lg:text-6xl">
              Taste the
              <span className="block text-orange-500">
                Italian
              </span>
              tradition
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-gray-600">
              Enjoy delicious Italian cuisine made with fresh
              ingredients, traditional recipes, and a passion
              for great food.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href="/order">
                Order Now
              </ButtonLink>

              <ButtonLink href="/reservation" variant="outline">
                Reservation
              </ButtonLink>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Delicious Italian pasta"
              className="relative z-10 h-72 w-72 rounded-full object-cover shadow-xl sm:h-96 sm:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;