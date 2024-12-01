import PriceOption from "./PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 29.99,
      billingCycle: "Monthly",
      features: ["Access to gym floor", "Locker facilities", "Free Wi-Fi"],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 49.99,
      billingCycle: "Monthly",
      features: [
        "Access to gym floor",
        "Locker facilities",
        "Group fitness classes",
        "1 complimentary personal training session per month",
        "Free Wi-Fi",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 79.99,
      billingCycle: "Monthly",
      features: [
        "Access to gym floor",
        "Locker facilities",
        "Unlimited group fitness classes",
        "4 personal training sessions per month",
        "Access to spa facilities",
        "Free Wi-Fi",
        "Priority customer support",
      ],
    }
  ];

  return (
    <div>
      <h2 className="text-5xl font-bold mb-10">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={priceOptions.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
