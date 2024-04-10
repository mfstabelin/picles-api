import { BadRequestException, Body, Controller, Get, Inject, NotFoundException, Param, Post } from '@nestjs/common';
import CreatePetUseCaseInput from './usecase/dtos/create.pet.usecase.input';
import PetTokens from './pet.tokens';
import { IUseCase } from 'src/domain/iusecase.interface';
import CreatPetUseCaseOutput from './usecase/dtos/create.pet.usecase.output';
import CreatPetControllerInput from './dtos/create.pet.controller.input';
import GetPetByIdUseCaseInput from './usecase/dtos/get.pet.by.id.usecase.input';
import GetPetByIdUseCaseOutput from './usecase/dtos/get.pet.by.id.usecase.output';

@Controller('pet')
export class PetController {
    
    @Inject(PetTokens.createPetUseCase)
    private readonly createPetUseCase: IUseCase<CreatePetUseCaseInput, CreatPetUseCaseOutput>;

    @Inject(PetTokens.getPetByIdUseCase)
    private readonly getPetByIdUseCase: IUseCase<GetPetByIdUseCaseInput, GetPetByIdUseCaseOutput>;

    @Post()
    async creatPet(@Body() input: CreatPetControllerInput): Promise<CreatPetUseCaseOutput>{
        const useCaseInput = new CreatePetUseCaseInput({...input});
        return await this.createPetUseCase.run(useCaseInput);
    }
    
    @Get('.id')
    async getPetById(@Param('id') id: string): Promise<GetPetByIdUseCaseOutput>{
        try {
            const useCaseInput = new GetPetByIdUseCaseInput({id})
        return await this.getPetByIdUseCase.run(useCaseInput)
        } catch (error) {
            throw new NotFoundException(JSON.parse(error.message))
        }
    }
}