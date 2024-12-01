import PropTypes from "prop-types";
import Features from "./Features";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-red-300 rounded-md flex flex-col p-4">
      <h2 className="text-center">
        <span className="text-2xl font-extrabold">{price}</span>{" "}
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-8">{name}</h4>
      <div className="pl-8 flex-grow">
        {features.map((feature, index) => (
          <Features key={index} feature={feature}></Features>
        ))}
      </div>
      <button className="mt-12 bg-green-600 w-full py-2 rounded-xl font-bold hover:bg-green-900 text-white">Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
