import UpdatePetByIdUseCase from "../update.pet.by.id.usecase";
import CreatPetUseCaseOutput from "./create.pet.usecase.output";
import UpdatePetPhotoByIdUseCaseInput from "./update.pet.photo.by.id.usecase.input";

export default class UpdatePetPhotoByIdUseCaseOutput extends CreatPetUseCaseOutput {

    constructor(data: Partial<UpdatePetPhotoByIdUseCaseOutput>){
        super(data)
        Object.assign(this, data)
    }
}