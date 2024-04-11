import {Body, Controller, Delete, Get, Inject, NotFoundException, Param, Patch, Post, Put } from '@nestjs/common';
import CreatePetUseCaseInput from './usecase/dtos/create.pet.usecase.input';
import PetTokens from './pet.tokens';
import { IUseCase } from 'src/domain/iusecase.interface';
import CreatPetUseCaseOutput from './usecase/dtos/create.pet.usecase.output';
import CreatPetControllerInput from './dtos/create.pet.controller.input';
import GetPetByIdUseCaseInput from './usecase/dtos/get.pet.by.id.usecase.input';
import GetPetByIdUseCaseOutput from './usecase/dtos/get.pet.by.id.usecase.output';
import updatePetControllerInput from './dtos/update.pet.controller.input';
import UpadatePetByIdUsecaseInput from './usecase/dtos/update.pet.by.id.usecase.input';
import UpadatePetByIdUsecaseOutPut from './usecase/dtos/update.pet.by.id.usecase.output';
import DeletePetByIdUseCase from './usecase/delete.pet.by.id.usecase';
import DeletePetByIdUseCaseInput from './usecase/dtos/delete.pet.by.id.usecase.input';

@Controller('pet')
export class PetController {
    
    @Inject(PetTokens.createPetUseCase)
    private readonly createPetUseCase: IUseCase<CreatePetUseCaseInput, CreatPetUseCaseOutput>;

    @Inject(PetTokens.getPetByIdUseCase)
    private readonly getPetByIdUseCase: IUseCase<GetPetByIdUseCaseInput, GetPetByIdUseCaseOutput>;

    @Inject(PetTokens.updatePetByIdUseCase)
    private readonly updatePetByIdUseCase: IUseCase<UpadatePetByIdUsecaseInput, UpadatePetByIdUsecaseOutPut>;

    @Inject(PetTokens.DeletePetByIdUseCase)
    private readonly deletePetByIdUseCase: IUseCase<GetPetByIdUseCaseInput, GetPetByIdUseCaseOutput>;

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

    @Put('.id')
    async updatePet(@Body() input: updatePetControllerInput, @Param('id') id: string){
        const useCaseInput = new UpadatePetByIdUsecaseInput ({...input, id});
        return await this.updatePetByIdUseCase.run(useCaseInput);
    }

    @Delete(':id')
    async deletePet(@Param('id') id:string){
        try {
            const useCaseInput = new DeletePetByIdUseCaseInput({id})
            return await this.deletePetByIdUseCase.run(useCaseInput)
        } catch (error) {
            throw new NotFoundException(JSON.parse(error.message)) 
        }
    }
}
