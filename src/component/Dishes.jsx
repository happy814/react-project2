import { DISHES } from "../constants";
import DishesCard from "./DishesCard";
function Dishes() {
  return (
    <section className="container mx-auto py-16 select-none " id="dishes">
      <h2 className=" text-yellow-100 mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Dishes
      </h2>

      {/* main Dishes handeler by using grid */}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 ">
        {/* i have to use props here */}
        {DISHES.map((project, index) => (
          <DishesCard key={index} project={project}></DishesCard>
        ))}
      </div>
    </section>
  );
}

export default Dishes;
