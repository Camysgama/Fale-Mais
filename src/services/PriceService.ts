
interface PriceType {
    time: number;
    plan: number;
    tarifa: number;
}

class PriceService{
    async resultate ({time, plan, tarifa}: PriceType){
        const withouPlan = (tarifa * time);
        
        if (plan >= time ){
            const withPlan = 0;

            return {withPlan, withouPlan};
            
        }else if(plan <= time){
            const withPlan = (time - plan) * (tarifa + ((tarifa/100) * 10));

            return {withPlan , withouPlan};   
        }     
    }
}

export {PriceService}