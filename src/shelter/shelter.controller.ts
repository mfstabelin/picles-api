import { Body, Controller, Get, Inject, Patch, Post } from '@nestjs/common';
import getShelterDetailsUseCaseOutPut from './usecases/dtos/get.shelter.details.usecase.output';
import ShelterTokens from './Shelter.token';
import { IUseCase } from 'src/domain/iusecase.interface';
import updateShelterControllerInput from './dtos/update.shelter.controller.input';

@Controller('shelter')
export class ShelterController {

    @Inject(ShelterTokens.getShelterDetailsUseCase)
    private readonly getShelterDetailsUseCase: IUseCase<null, getShelterDetailsUseCaseOutPut>

    @Get()
    async getShelterDetails():Promise<getShelterDetailsUseCaseOutPut>
    {
        return await this.getShelterDetailsUseCase.run(null)
    }

    @Patch()
    async updateShelterDetails(@Body() input: updateShelterControllerInput){
        console.log(input);
    }
}
