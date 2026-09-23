
import ownerImage from "../../assets/about-page/owner.jpg"


function AboutOwner() {

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-6 sm:px-8">
        <div className="grid w-full max-w-3xl items-center gap-8 sm:grid-cols-[240px_1fr] sm:gap-10 lg:grid-cols-[280px_1fr] lg:gap-12">
          
          <div className="mx-auto w-full max-w-[280px] sm:mx-0">
            <img
              src={ownerImage}
              alt="Ismail Marzuki, owner and executive chef"
              className="h-[350px] w-full object-cover sm:h-[390px] lg:h-[420px]"
            />
          </div>

          <div className="max-w-md">
            <h2 className="font-serif text-3xl font-bold leading-[1.15] text-[#351f08] sm:text-4xl">
              <span className="text-[#ff8a00]">Owner</span>{" "}
              <span>&amp;</span>
              <br />
              Executive Chef
            </h2>

            <h3 className="mt-5 text-sm font-semibold text-[#20170f]">
              Ismail Marzuki
            </h3>

            <div className="relative mt-8">
              
              <span className="absolute -left-1 -top-5 font-serif text-3xl text-[#ffdfb8]">
                “
              </span>

              <p className="max-w-[290px] text-xl italic leading-6 text-[#77716c]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <span className="absolute -bottom-7 right-0 font-serif text-3xl text-[#ffdfb8]">
                ”
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutOwner;