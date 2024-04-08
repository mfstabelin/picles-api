import { IUseCase } from "src/domain/iusecase.interface";
import { Injectable } from "@nestjs/common";
import UpdateShelterDetailsUseCaseInput from "./dtos/UpdateShelterDetilsUseCaseInput";
import UpdateShelterDetailsUseCaseOutput from "./dtos/UpdateShelterDetilsUseCaseOutput";

@Injectable()
export default class UpdateShelterDetailsUseCase implements IUseCase<UpdateShelterDetailsUseCaseInput, UpdateShelterDetailsUseCaseOutput>
{
    run(input: UpdateShelterDetailsUseCaseInput): Promise<UpdateShelterDetailsUseCaseOutput> {
        throw new Error("Method not implemented.")
    }
    
}