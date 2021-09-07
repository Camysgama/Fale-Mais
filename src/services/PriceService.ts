interface PriceType {
    time: number;
    plan: number;
    tarif: number;
}
class PriceService{
    async resultate ({time, plan, tarif}: PriceType){
        const withouPlan = (tarif * time);
        
        if (plan >= time ){
            const withPlan = 0;

            return {withPlan, withouPlan};
            
        }else if(plan <= time){
            const withPlan = (time - plan) * (tarif + ((tarif/100) * 10));

            return {withPlan, withouPlan};   
        }     
    }
}

export { PriceService }