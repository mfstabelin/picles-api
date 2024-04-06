import { IUseCase } from "src/domain/iusecase.interface";

import ISshelterRepository from "src/shelter/interfaces/shelter.repository.interface";
import { Inject } from "@nestjs/common";
import ShelterTokens from "src/shelter/Shelter.token";
import getShelterDetailsUseCaseOutPut from "./get.shelter.details.usecase.output";

export default class getShelterDetailsUseCAse implements IUseCase<null, getShelterDetailsUseCaseOutPut>{
    
    constructor(
        @Inject(ShelterTokens.shelterRepository)
        private readonly shelterRepository: ISshelterRepository,
    ){}
    
    async run(input: null): Promise<getShelterDetailsUseCaseOutPut> {
      const shelter= await this.shelterRepository.get();
      return new getShelterDetailsUseCaseOutPut({
        shelterName: shelter.name,
        shelterEmail: shelter.email,
        shelterPhone: shelter.phone,
        shelterWhatsApp: shelter.whatsapp,
        createdAt:shelter.createdAt,
        updatedAt:shelter.updatedAt,
      }); 
    }
}