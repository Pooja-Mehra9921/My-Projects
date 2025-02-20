export const DollarToIndianPrice = (doller) => {
  const INR = Number(doller * 87.81);
  return Math.trunc(INR);
};

export const GetDiscountFromPrice = (price, discount) => {
  const priceInINR = DollarToIndianPrice(price);
  const Discount = (priceInINR * Number(discount)) / 100;
  const FinalPrice = priceInINR - Discount; // Subtract the discount
  return Math.trunc(FinalPrice);
};
