import { Address } from '../../entities/Address';
import { Request, Response } from "express";
import { OrmDataSource } from "../../../ormconfig";
import FailDataResult from "../../utils/result/failDataResult";
import SuccessDataResult from "../../utils/result/successDataResult";

export async function AddressAdd(request: Request, response: Response) {

    const addressRepository = OrmDataSource.getRepository(Address);
    
    const address = addressRepository.create(request.body);

    if (!address) {
        response.status(404);
        response.send(new FailDataResult(address, "Address couldn't be created"));
        response.end();
        return;
    }

    await addressRepository.save(address);

    response.send(new SuccessDataResult(address, "address created successfully"));
    response.end();
}