import { IUseCase } from "src/domain/iusecase.interface";
import CreatPetUseCaseOutput from "./dtos/create.pet.usecase.output";
import CreatePetUseCaseInput from "./dtos/create.pet.usecase.input";
import { Inject, Injectable } from "@nestjs/common";
import PetTokens from "../pet.tokens";
import IPetRepository from "../interfaces/pet.repository.interface";

@Injectable()
export default class CreatePetUseCase implements IUseCase<CreatePetUseCaseInput, CreatPetUseCaseOutput>{
    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository
    ){}
    
    async run(input: CreatePetUseCaseInput): Promise<CreatPetUseCaseOutput>{
        const newPet = await this.petRepository.create(input)
        return new CreatPetUseCaseOutput({
            id: newPet._id,
            name: newPet.name,
            type: newPet.type,
            size: newPet.size,
            gender: newPet.gender,
            bio: newPet.bio,
            photo: newPet.photo,
            createdAt: newPet.createdAt,
            updatedAt: newPet.updatedAt,
        })
    }
}