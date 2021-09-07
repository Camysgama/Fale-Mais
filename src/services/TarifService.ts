interface TarifType {
    origin: number;
    destiny: number;
}
class TarifService{
    async calculate({origin, destiny}: TarifType) {
        if(origin === 11 && destiny === 16  || origin === 18 && destiny === 11){
            const tarif = 1.90
            return tarif;
        }
        else if(origin === 16 && destiny === 11){
            const tarif = 2.90
            return tarif;
        }
        else if(origin === 11 && destiny === 17){
     
           const tarif = 1.70
            return tarif;
        }
        else if(origin === 17 && destiny === 11){
            const tarif = 2.70
            return tarif;
        }
        else if(origin === 11 && destiny === 18){
            const tarif = 0.90
            return tarif;
        }
        else {
            return 0;
        }
    }
}

export { TarifService }