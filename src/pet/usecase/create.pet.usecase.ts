import { IUseCase } from "src/domain/iusecase.interface";
import CreatPetUseCaseOutput from "./dtos/create.pet.usecase.output";
import CreatePetUseCaseInput from "./dtos/create.pet.usecase.input";

export default class CreatePetUseCase implements IUseCase<CreatePetUseCaseInput, CreatPetUseCaseOutput>{
    run(input: CreatePetUseCaseInput): Promise<CreatPetUseCaseOutput>{
        throw new Error("Method not implemented");
    }
}