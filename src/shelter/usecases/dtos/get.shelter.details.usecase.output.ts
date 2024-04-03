export default class getShelterDetailsUseCaseOutPut{
    shelterName: string
    shelterWhatsApp: string
    shelterEmail: string
    shelterPhone: string
    createdAt: Date
    updatedAt: Date

    constructor(data:Partial<getShelterDetailsUseCaseOutPut>){
        Object.assign(this, data)
    }
}