import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterTokens from './Shelter.token';
import getShelterDetailsUseCase from './usecases/get.shelter.details.usecase';
import { MongooseModule } from '@nestjs/mongoose';
import { ShelterSchemas, Shelter} from './schemas/shelter.schemas';
import { ShelterRepository } from './shelter.repository';
import UpdateShelterDetailsUseCase from './usecases/update.shelter.details.usecase';

@Module({
  controllers: [ShelterController],

  imports: [MongooseModule.forFeature([{name: Shelter.name, schema: ShelterSchemas}])],

  providers:[
    {
      provide: ShelterTokens.getShelterDetailsUseCase,
      useClass: getShelterDetailsUseCase
    },
    {
      provide: ShelterTokens.shelterRepository,
      useClass: ShelterRepository,
    },
    {
      provide: ShelterTokens.updateShelterDetailsUseCase,
      useClass: UpdateShelterDetailsUseCase
    }
  ]
})
export class ShelterModule {}
