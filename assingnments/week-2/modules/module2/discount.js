 // Available coupons
 const coupons = {
    'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
    'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
    'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
                          };


export function validateCoupon(couponCode, cartTotal, cartItems) {
     // 1. Check if coupon exists
        const coupon=coupons[couponCode]
        if(!coupon)
        {
            return {valid:false,message:'Invalid coupon code.'};
        }
    // 2. Check minimum amount requirement

    if(cartTotal < coupon.minAmount)
    {
        return{
            valid:false,
            message:`Minimun order amount of Rs${coupon.minAmount} required for this coupon.`
        };
    }
    // 3. Check category requirement (if any)
    if(coupon.category)
    {
        const hasCategory=cartItems.some(item=>item.category==coupon.category);
        if(!hasCategory)
        {
            return{
                valid:false,
                message:`This coupon is only valid for ${coupon.category} items.`
            };
        }
    }
     // Return { valid: true/false, message: '...' }
    return {valid:true,message:"Coupon applied succesfully !"};                 
    
    }