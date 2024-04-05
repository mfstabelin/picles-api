import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydrateOptions, HydratedDocument } from "mongoose"

export type shelterDocument = HydratedDocument<Shelter>

@Schema({versionKey:false})
export class Shelter {
    @Prop({required:true})
    name:String
    @Prop({required:true})
    whatsapp:String
    @Prop({required:true})
    email:String
    @Prop({required:true})
    phone:String
    @Prop({required:true})
    createdAt: Date
    @Prop({required:true})
    updatedAt: Date
}

export const ShelterSchemas = SchemaFactory.createForClass(Shelter)