import { Body, Controller, Inject, Post } from '@nestjs/common';
import CreatePetUseCaseInput from './usecase/dtos/create.pet.usecase.input';
import PetTokens from './pet.tokens';
import { IUseCase } from 'src/domain/iusecase.interface';
import CreatPetUseCaseOutput from './usecase/dtos/create.pet.usecase.output';
import CreatPetControllerInput from './dtos/create.pet.controller.input';

@Controller('pet')
export class PetController {
    
    @Inject(PetTokens.createPetUseCase)
    private readonly createPetUseCase: IUseCase<CreatePetUseCaseInput, CreatPetUseCaseOutput>;

    @Post()
    async creatPet(@Body() input: CreatPetControllerInput): Promise<CreatPetUseCaseOutput>{
        const useCaseInput = new CreatePetUseCaseInput({...input});
        return await this.createPetUseCase.run(useCaseInput);
    } 
}
