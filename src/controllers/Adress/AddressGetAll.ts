import { Address } from '../../entities/Address';
import { Request, Response } from 'express';
import { OrmDataSource } from '../../../ormconfig';
import FailResult from '../../utils/result/failResult';
import SuccessDataResult from '../../utils/result/successDataResult';

export async function AddressGetAll(request: Request, response: Response) {

    const addressRepository = OrmDataSource.getRepository(Address);

    // load all adresses
    const addresses = await addressRepository.find();

    // if adresses were not found return 404 to the client
    if (!addresses) {
        response.status(404);
        response.send(new FailResult("Addresses not found"));
        response.end();
        return;
    }

    // return loaded adresse
    response.send(new SuccessDataResult(addresses, "Addresses found successfully"));
}