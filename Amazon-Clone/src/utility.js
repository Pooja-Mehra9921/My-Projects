export const DollarToIndianPrice =(doller)=>{
const INR = Number(doller * 87.81 );

return Math.trunc(INR);
}


export const GetDiscountFromPrice = (price, discount) => {
    const priceInINR = DollarToIndianPrice(price); // Convert to INR first
    const Discount = (priceInINR * Number(discount)) / 100; // Apply discount in INR
    const FinalPrice = priceInINR + Discount; // adding discount
  
    return Math.trunc(FinalPrice) // Removing  decimal places
  };
