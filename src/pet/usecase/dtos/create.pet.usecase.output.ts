export default class CreatPetUseCaseOutput {
    id: string;
    name: string;
    type: string;
    size: string;
    gender: string;
    bio: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<CreatPetUseCaseOutput>){
        Object.assign(this, data);
    }
}