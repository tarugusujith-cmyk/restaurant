
import foodImage from "../../assets/home-page/food-image.jpg";
import Button from "../common/Button"

function AboutSection() {
  return (
    <section id="about" className="bg-[#eef9f0] py-20 min-h-[860px]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        
        <div className="flex justify-center">
          <img
            src={foodImage}
            alt="Fresh Italian food"
            className="h-72 w-72 rounded-full object-cover shadow-lg sm:h-96 sm:w-96"
          />
        </div>

        <div className="max-w-xl">

          <h2 className="text-3xl font-bold leading-tight text-[#302014] sm:text-4xl lg:text-5xl">
            Welcome to
            <span className="block text-orange-500">
              delicious
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600">
            We believe that great food brings people together.
            Our restaurant combines traditional Italian recipes
            with fresh ingredients to create delicious meals
            that you will love.
          </p>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Every dish is prepared with care, passion, and
            attention to detail.
          </p>

          <Button className="mt-8">
            Discover More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;