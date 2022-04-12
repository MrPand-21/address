import { Request, Response } from "express";
import { OrmDataSource } from "../../../ormconfig";
import { Address } from "../../entities/Address";
import FailDataResult from "../../utils/result/failDataResult";
import SuccessDataResult from "../../utils/result/successDataResult";

export async function AddressGetById(request: Request, response: Response) {

    const addressRepository = OrmDataSource.getRepository(Address);
    const address = await addressRepository.find({
        where: {
            id: parseInt(request.query.id as string)
        }
    });

    if (!address) {
        response.status(404);
        response.send(new FailDataResult(address,"Address not found"));
        response.end();
        return;
    }

    response.send(new SuccessDataResult(address, "address found successfully"));

} 


