import { Request, Response } from "express";
import { OrmDataSource } from "../../../ormconfig";
import { Address } from "../../entities/Address";
import FailDataResult from "../../utils/result/failDataResult";
import SuccessDataResult from "../../utils/result/successDataResult";

export async function AddressDelete(request:Request, response:Response) {
    
    const addressRepository = OrmDataSource.getRepository(Address);

    const address = await addressRepository.findOne({where : {id : parseInt(request.query["id"] as string)}});

    if (!address) {
        response.status(404);
        response.send(new FailDataResult(address, "Address not found"));
        response.end();
        return;
    }

    try {
        addressRepository.remove(address);
    } catch (e) {
        response.status(500);
        response.send(new FailDataResult(address.id, "Address couldn't be deleted"));
        response.send(`Error: ${e}`);
    }

    response.send(new SuccessDataResult(address.id, "Address deleted successfully"));
    
}