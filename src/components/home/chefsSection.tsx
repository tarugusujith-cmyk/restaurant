
import React from "react";
import chef1 from "../../assets/home-page/chef1.png";
import chef2 from "../../assets/home-page/chef2.png";
import chef3 from "../../assets/home-page/chef3.png";
import Button from "../common/Button";

interface Chef {
  id: number;
  name: string;
  role: string;
  image: string;
}

const chefs: Chef[] = [
  {
    id: 1,
    name: "Betran Komar",
    role: "Head chef",
    image: chef1,
  },
  {
    id: 2,
    name: "Ferry Sauwi",
    role: "Chef",
    image: chef2,
  },
  {
    id: 3,
    name: "Iswan Dracho",
    role: "Chef",
    image: chef3,
  },
];

const ChefsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
        <div className="mx-auto min-h-[940px] w-full max-w-[1112px] px-6 sm:px-10 lg:px-[60px]">
           
            <h2 className="text-center font-serif text-4xl font-bold text-[#2d2118] sm:text-5xl">
                Our greatest chef
            </h2>

            <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-5">
                {chefs.map((chef) => (
                    <div key={chef.id} className="flex flex-col items-center text-center">
                    
                    <div className="w-full overflow-hidden rounded-[24px] bg-[#d9d9dc] aspect-[174/275]">
                        <img
                        src={chef.image}
                        alt={chef.name}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"/>
                    </div>

                    <h3
                        className=" mt-6 text-[13px] font-bold text-[#33271e]">
                        {chef.name}
                    </h3>

                    <p
                        className="mt-5 text-[13px] text-[#aa9a8a]">
                        {chef.role}
                    </p>
                    </div>
                ))}
            </div>

            <div className="mt-20 flex justify-center">
                <Button variant="outline">
                    View All
                </Button>
            </div>
        </div>
    </section>
  );
};

export default ChefsSection;