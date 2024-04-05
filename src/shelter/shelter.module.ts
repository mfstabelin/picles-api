import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterTokens from './Shelter.token';
import getShelterDetailsUseCase from './usecases/dtos/get.shelter.details.usecase';
import { MongooseModule } from '@nestjs/mongoose';
import { ShelterSchemas, Shelter} from './schemas/shelter.schemas';

@Module({
  controllers: [ShelterController],

  imports: [MongooseModule.forFeature([{name: Shelter.name, schema: ShelterSchemas}])],

  providers:[
    {
      provide: ShelterTokens.getShelterDetailsUseCase,
      useClass: getShelterDetailsUseCase
    }
  ]
})
export class ShelterModule {}
