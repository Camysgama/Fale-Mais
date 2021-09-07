import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository"
interface  IUserRequest{
     origin: number;
     destiny: number;
     time: number;
     plan: number
 }
 class CalculateService{ 
     async execute({origin, destiny, time, plan}: IUserRequest) {
        const userRepository = getCustomRepository(UserRepository);
        if(!origin || !destiny ||  !time || !plan) {
            throw new Error("Insert the field correctly");
        }else if(time <=0){
            throw new Error("Please insert a valid time!")
        }
        else {
         const passData = userRepository.create({
            origin,
            destiny,
            time,
            plan
        })

        await userRepository.save(passData);
        return passData;
        }
     }
 }

 export { CalculateService }