import { IsEmail, IsNotEmpty, IsNumber, IsNumberString, IsString, Length } from "class-validator"

export default class updateShelterControllerInput{
    @IsString()
    @IsNotEmpty()
    name: string
    @IsString()
    @IsNotEmpty()
    @Length(10,11)
    whatsapp: string
    @IsNotEmpty()
    @IsString()
    @IsNumberString()
    phone: string
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string
}