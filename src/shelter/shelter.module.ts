import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterTokens from './Shelter.token';
import getShelterDetailsUseCase from './usecases/dtos/get.shelter.details.usecase';

@Module({
  controllers: [ShelterController],
  providers:[
    {
      provide: ShelterTokens.getShelterDetailsUseCase,
      useClass: getShelterDetailsUseCase
    }
  ]
})
export class ShelterModule {}
