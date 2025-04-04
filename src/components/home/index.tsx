import Categories from "./customs/categories";
import CategorySet from "./customs/category-set";
import DiscountProduct from "./customs/discount-product";
import Flayer from "./customs/flayer";
import NewArrival from "./customs/new-arrival";
import OurProducts from "./customs/our-products";
import Service from "./customs/service";
import ThisMonth from "./customs/this-month";
import Today from "./customs/today";

const Home = () => {
  return (
    <div>
      <div className="flex gap-[64px] h-[384px] w-[90%] m-auto">
        <Categories />
        <div className="h-full border-r border-solid" />
        <Flayer />
      </div>
      <Today />
      <CategorySet />
      <ThisMonth />
      <DiscountProduct />
      <OurProducts />
      <NewArrival />
      <Service />
    </div>
  );
};

export default Home;
