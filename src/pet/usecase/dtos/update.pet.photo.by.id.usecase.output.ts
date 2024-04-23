import CreatPetUseCaseOutput from "./create.pet.usecase.output";

export default class UpdatePetPhotoByIdUseCaseOutput extends CreatPetUseCaseOutput {

    constructor(data: Partial<UpdatePetPhotoByIdUseCaseOutput>){
        super(data)
        Object.assign(this, data)
    }
}