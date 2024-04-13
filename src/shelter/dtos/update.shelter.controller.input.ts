import { IsEmail, IsNotEmpty, IsNumberString, IsString, Length } from "class-validator"

export default class updateShelterControllerInput{
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    @Length(10,11)
    whatsapp: string;
    @IsNotEmpty()
    @IsString()
    @IsNumberString()
    @Length(10, 11)
    phone: string;
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
}