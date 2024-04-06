import { Body, Controller, Get, Inject, Patch, Post, Put } from '@nestjs/common';
import getShelterDetailsUseCaseOutPut from './usecases/dtos/get.shelter.details.usecase.output';
import ShelterTokens from './Shelter.token';
import { IUseCase } from 'src/domain/iusecase.interface';
import updateShelterControllerInput from './dtos/update.shelter.controller.input';
import UpdateShelterDetailsUseCaseInput from './usecases/dtos/UpdateShelterDetilsUseCaseInput';
import UpdateShelterDetailsUseCaseOutput from './usecases/dtos/UpdateShelterDetilsUseCaseOutput';

@Controller('shelter')
export class ShelterController {

    @Inject(ShelterTokens.getShelterDetailsUseCase)
    private readonly getShelterDetailsUseCase: IUseCase<null, getShelterDetailsUseCaseOutPut>

    @Inject(ShelterTokens.updateShelterDetailsUseCase)
    private readonly updateShelterDetailsUseCase: IUseCase<UpdateShelterDetailsUseCaseInput, UpdateShelterDetailsUseCaseOutput>

    @Get()
    async getShelterDetails():Promise<getShelterDetailsUseCaseOutPut>
    {
        return await this.getShelterDetailsUseCase.run(null)
    }

    @Put()
    async updateShelterDetails(@Body() input: updateShelterControllerInput){
        const useCaseInput = new UpdateShelterDetailsUseCaseInput({...input });
        return await this.updateShelterDetailsUseCase.run(useCaseInput);
    }
}
