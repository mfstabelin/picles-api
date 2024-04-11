import { IUseCase } from "src/domain/iusecase.interface";
import UpadatePetByIdUsecaseInput from "./dtos/update.pet.by.id.usecase.input";
import UpadatePetByIdUsecaseOutPut from "./dtos/update.pet.by.id.usecase.output";
import { Inject, Injectable } from "@nestjs/common";
import PetTokens from "../pet.tokens";
import IPetRepository from "../interfaces/pet.repository.interface";
import PetNotFoundError from "src/domain/erros/pet.not.found.error";
import { Pet } from "../schemas/pet.schema";

@Injectable()
export default class UpdatePetByIdUseCase implements IUseCase<UpadatePetByIdUsecaseInput, UpadatePetByIdUsecaseOutPut>{
    
    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository
    ){}

    async run(input: UpadatePetByIdUsecaseInput): Promise<UpadatePetByIdUsecaseOutPut> {
        let pet = await this.getPetById(input.id)
        
        if(!pet){
            throw new PetNotFoundError()
        }
        await this.petRepository.updateById({
            ...input,
            _id: input.id
        });

        pet = await this.getPetById(input.id)

        return new UpadatePetByIdUsecaseInput({
            id: pet._id,
            name: pet.name,
            type: pet.type,
            size: pet.size,
            gender: pet.gender,
            bio: pet.bio,
            photo: pet.photo,
            createdAt: pet.createdAt,
            updatedAt: pet.updatedAt,
        })
    }
    private async getPetById(id: string): Promise<Pet>{
        try{
            return await this.petRepository.getById(id)
        } catch (error) {
            return null
        }
    }
}