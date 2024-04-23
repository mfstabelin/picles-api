import {Body, Controller, Delete, Get, Inject, NotFoundException, Param, Patch, Post, Put, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import CreatePetUseCaseInput from './usecase/dtos/create.pet.usecase.input';
import PetTokens from './pet.tokens';
import { IUseCase } from 'src/domain/iusecase.interface';
import CreatPetUseCaseOutput from './usecase/dtos/create.pet.usecase.output';
import CreatPetControllerInput from './dtos/create.pet.controller.input';
import GetPetByIdUseCaseInput from './usecase/dtos/get.pet.by.id.usecase.input';
import GetPetByIdUseCaseOutput from './usecase/dtos/get.pet.by.id.usecase.output';
import updatePetControllerInput from './dtos/update.pet.controller.input';
import UpadatePetByIdUsecaseInput from './usecase/dtos/update.pet.by.id.usecase.input';
import UpadatePetByIdUsecaseOutPut from './usecase/dtos/update.pet.by.id.usecase.output';
import DeletePetByIdUseCase from './usecase/delete.pet.by.id.usecase';
import DeletePetByIdUseCaseInput from './usecase/dtos/delete.pet.by.id.usecase.input';
import { FileInterceptor } from '@nestjs/platform-express';
import multerConfig from 'src/config/multer.config';
import UpdatePetPhotoByIdUseCaseInput from './usecase/dtos/update.pet.photo.by.id.usecase.input';
import UpdatePetPhotoByIdUseCaseOutput from './usecase/dtos/update.pet.photo.by.id.usecase.output';
import GetPetsUseCaseInput from './usecase/dtos/get.pets.usecase.input';
import GetPetUseCaseOutPut from './usecase/dtos/get.pets.usecase.output';

@Controller('pet')
export class PetController {
    
    @Inject(PetTokens.createPetUseCase)
    private readonly createPetUseCase: IUseCase<CreatePetUseCaseInput, CreatPetUseCaseOutput>;

    @Inject(PetTokens.getPetsUseCase)
    private readonly getPetsUseCase: IUseCase<GetPetsUseCaseInput, GetPetUseCaseOutPut>;

    @Inject(PetTokens.getPetByIdUseCase)
    private readonly getPetByIdUseCase: IUseCase<GetPetByIdUseCaseInput, GetPetByIdUseCaseOutput>;

    @Inject(PetTokens.updatePetByIdUseCase)
    private readonly updatePetByIdUseCase: IUseCase<UpadatePetByIdUsecaseInput, UpadatePetByIdUsecaseOutPut>;

    @Inject(PetTokens.DeletePetByIdUseCase)
    private readonly deletePetByIdUseCase: IUseCase<GetPetByIdUseCaseInput, GetPetByIdUseCaseOutput>;

    @Inject(PetTokens.UpdatePetPhotoByIdUseCase)
    private readonly UpdatePetPhotoByIdUseCase: IUseCase<UpdatePetPhotoByIdUseCaseInput, UpdatePetPhotoByIdUseCaseOutput>;

    @Post()
    async creatPet(@Body() input: CreatPetControllerInput): Promise<CreatPetUseCaseOutput>{
        const useCaseInput = new CreatePetUseCaseInput({...input});
        return await this.createPetUseCase.run(useCaseInput);
    }
    
    
    @Get()
    async getPets(
        @Query('type') type?: string,
        @Query('size') size?: string,
        @Query('gender') gender?: string,
        @Query('page') page?: string,
        @Query('itemPerPage') itemPerPage?: string,
    ){
        const FIRST_PAGE = 1
        const DEFAULT_ITENS_PER_PAGE = 10
        const useCaseInput = new GetPetsUseCaseInput({
            type: !!type ? type : null,
            size: !!size ? size : null,
            gender: !!gender ? gender : null,
            page: !!page ? parseInt(page): FIRST_PAGE,
            itemPerPage: !!itemPerPage ? parseInt(itemPerPage) : DEFAULT_ITENS_PER_PAGE
        });
        return await this.getPetsUseCase.run(useCaseInput);
    }
    
    @Get(':id')
    async getPetById(@Param('id') id: string): Promise<GetPetByIdUseCaseOutput>{
        try {
            const useCaseInput = new GetPetByIdUseCaseInput({id})
        return await this.getPetByIdUseCase.run(useCaseInput)
        } catch (error) {
            throw new NotFoundException(JSON.parse(error.message))
        }
    }

    @Put(':id')
    async updatePet(@Body() input: updatePetControllerInput, @Param('id') id: string){
        const useCaseInput = new UpadatePetByIdUsecaseInput ({...input, id});
        return await this.updatePetByIdUseCase.run(useCaseInput);
    }

    @Delete(':id')
    async deletePet(@Param('id') id:string){
        try {
            const useCaseInput = new DeletePetByIdUseCaseInput({id})
            return await this.deletePetByIdUseCase.run(useCaseInput)
        } catch (error) {
            throw new NotFoundException(JSON.parse(error.message)) 
        }
    }

    @Patch(':id/photo')
    @UseInterceptors(FileInterceptor('photo', multerConfig))
    async updatePhoto(
        @UploadedFile() photo: Express.Multer.File,
        @Param('id') id: string,
    ): Promise<UpdatePetPhotoByIdUseCaseOutput>{
        try {
            const useCaseInput = new UpdatePetPhotoByIdUseCaseInput({
                id,
                photoPath: photo.path
            })
            return await this.UpdatePetPhotoByIdUseCase.run(useCaseInput) 
        } catch (error) {
            throw new NotFoundException(JSON.parse(error.message))
        }
        
    }
}
