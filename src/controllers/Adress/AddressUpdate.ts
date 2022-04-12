import { Request, Response } from "express";
import { OrmDataSource } from "../../../ormconfig";
import { Address } from "../../entities/Address";
import FailDataResult from "../../utils/result/failDataResult";
import SuccessDataResult from "../../utils/result/successDataResult";
import { AddressAdd } from "./AddressAdd";

export async function AddressUpdate(request:Request, response:Response) {

    const addressRepository = OrmDataSource.getRepository(Address);

    const addressToBeUpdated = await addressRepository.findOne({where : {id : parseInt(request.body.id as string)}});

    const address = addressRepository.create(request.body);

    addressRepository.update(addressToBeUpdated.id, address as unknown as Address);

    if (!addressToBeUpdated) {
        response.status(404);
        response.send(new FailDataResult(addressToBeUpdated, "Address not found"));
        response.end();
        return;
    }
    
    if (!address) {
        response.status(404);
        response.send(new FailDataResult(address, "Address couldn't be updated"));
        response.end();
        return;
    }
    
    response.send(new SuccessDataResult(address, "address updated successfully"));
}