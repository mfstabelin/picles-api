import { IUseCase } from "src/domain/iusecase.interface";
import UpdateShelterDetailsUseCaseInput from "./UpdateShelterDetilsUseCaseInput";
import UpdateShelterDetailsUseCaseOutput from "./UpdateShelterDetilsUseCaseOutput";
import { Injectable } from "@nestjs/common";

@Injectable()
export default class UpdateShelterDetailsUseCase implements IUseCase<UpdateShelterDetailsUseCaseInput, UpdateShelterDetailsUseCaseOutput>
{
    run(input: UpdateShelterDetailsUseCaseInput): Promise<UpdateShelterDetailsUseCaseOutput> {
        throw new Error("Method not implemented.")
    }
    
}