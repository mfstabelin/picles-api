import { IUseCase } from "src/domain/iusecase.interface";
import { Inject, Injectable } from "@nestjs/common";
import UpdateShelterDetailsUseCaseInput from "./dtos/UpdateShelterDetilsUseCaseInput";
import UpdateShelterDetailsUseCaseOutput from "./dtos/UpdateShelterDetilsUseCaseOutput";
import ShelterTokens from "../Shelter.token";
import IShelterRepository from "../interfaces/shelter.repository.interface";

@Injectable()
export default class UpdateShelterDetailsUseCase implements IUseCase<UpdateShelterDetailsUseCaseInput, UpdateShelterDetailsUseCaseOutput>{

constructor(
    @Inject(ShelterTokens.shelterRepository)
    private readonly shelterRepository: IShelterRepository
){}

async run(input: UpdateShelterDetailsUseCaseInput): Promise<UpdateShelterDetailsUseCaseOutput>{
    await this.shelterRepository.update(input)

    const shelter = await this.shelterRepository.get()

    return new UpdateShelterDetailsUseCaseOutput({
        name: shelter.name,
        phone: shelter.phone,
        whatsapp: shelter.whatsapp,
        email: shelter.email,
        createdAt: shelter.createdAt,
        updatedAt: shelter.updatedAt
    })
}
} 