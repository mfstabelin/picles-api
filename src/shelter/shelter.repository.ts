import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Shelter } from "./schemas/shelter.schemas";
import ISshelterRepository from "./interfaces/shelter.repository.interface";

export class ShelterRepository implements ISshelterRepository {
    constructor(
        @InjectModel(Shelter.name)
        private readonly shelterModel: Model<Shelter>
    ){}

    async get(): Promise<Shelter>{
        return await this.shelterModel.findOne()
    }
}