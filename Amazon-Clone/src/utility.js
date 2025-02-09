export const DollerToIndianPrice =(doller)=>{
const INR = Number(doller * 87.81 );
return INR.toFixed(2);
}


export const GetDisscountFromPrice =(price, discount)=>{
const Discount = (Number(price) / Number(discount) ) * 100;

}