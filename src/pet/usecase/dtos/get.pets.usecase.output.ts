import PetResponse from "src/pet/dtos/pet.response";

export default class GetPetUseCaseOutPut{
    currentPage: number;
    totalPage: number;
    items: PetResponse[];

    constructor (data: Partial<GetPetUseCaseOutPut>){
        Object.assign(this, data);
    }
}