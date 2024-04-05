import { Shelter } from "../schemas/shelter.schemas";

export default interface ISshelterRepository{
    get(): Promise<Shelter>;
    
}