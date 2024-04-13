import { Pet } from "../schemas/pet.schema";
import FindByFilterAndTotal from "../usecase/dtos/find.by.filter.and.total";
import GetPetsUseCaseInput from "../usecase/dtos/get.pets.usecase.input";


export default interface IPetRepository {
    create(data: Partial<Pet>): Promise<Pet>
    getById(id: string): Promise<Pet>
    updateById(data: Partial<Pet>): Promise<void>
    deleteById(id: string): Promise<void>
    findByFilter(input: GetPetsUseCaseInput): Promise<FindByFilterAndTotal>;
}