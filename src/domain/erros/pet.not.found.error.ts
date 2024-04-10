import { CustomError } from "./custom.error";

export default class PetNotFoundError extends CustomError{
    constructor(){
        super('Pet Not Found', '001');
    }
}