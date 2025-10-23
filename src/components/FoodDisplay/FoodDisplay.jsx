import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreCountext";
import FoodItems from "../FoodItem/FoodItems";

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display mt-8" id="food-display">
      <h2 className="text-3xl font-medium">Top dishes near you</h2>
      <div className="food-display-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-8 gap-8 ">
        {food_list.map((item, i) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItems
                key={i}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
