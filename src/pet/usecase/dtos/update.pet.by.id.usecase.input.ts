import CreatePetUseCaseInput from "./create.pet.usecase.input";

export default class UpadatePetByIdUsecaseInput extends CreatePetUseCaseInput{
    id: string

    constructor(data: Partial<UpadatePetByIdUsecaseInput>){
        super(data)
        Object.assign(this, data)
    }
}