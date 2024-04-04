import { IUseCase } from "src/domain/iusecase.interface";
import getShelterDetailsUseCAseOutPut from "./get.shelter.details.usecase.output";

export default class getShelterDetailsUseCAse implements IUseCase<null, getShelterDetailsUseCAseOutPut>{
    run(input: null): Promise<getShelterDetailsUseCAseOutPut> {
        return Promise.resolve(new getShelterDetailsUseCAseOutPut({
            shelterName: 'Abrigo de Teste',
            shelterEmail: 'abrigoteste@gmail.com',
            shelterPhone: '19998854549',
            shelterWhatsApp: '19986652259',
            createdAt: new Date(),
            updatedAt: new Date()
        }))
    }
}