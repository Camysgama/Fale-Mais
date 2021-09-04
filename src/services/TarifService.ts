
interface TarifType {
    origin: number;
    destiny: number;
}
class TarifService{

    async calculate({origin, destiny}: TarifType) {
        
        if(origin === 11 && destiny === 16){
            const tarifa = 1.90
            return tarifa;
        }
        else if(origin === 16 && destiny === 11){
            const tarifa = 2.90
            return tarifa;
        }
        else if(origin === 11 && destiny === 17){
     
           const tarifa = 1.70
            return tarifa;
        }
        else if(origin === 17 && destiny === 11){
            const tarifa = 2.70
            return tarifa;
        }
        else if(origin === 11 && destiny === 18){
            const tarifa = 0.90
            return tarifa;
        }
        else if(origin === 18 && destiny === 11){
            const tarifa = 1.90
            return tarifa;
        }     
    }
}

export {TarifService};