import { GoCheckCircleFill } from "react-icons/go";

const Features = ({ feature }) => {
  return (
    <div className="flex items-center ">
      <p className="flex items-center gap-2">
        <div className="text-sky-600">
          <GoCheckCircleFill></GoCheckCircleFill>
        </div>
        {feature}
      </p>
    </div>
  );
};

export default Features;
