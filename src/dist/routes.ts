import { AddressAdd } from "../controllers/Adress/AddressAdd";
import { AddressDelete } from "../controllers/Adress/AdressDelete";
import { AddressGetAll } from "../controllers/Adress/AddressGetAll";
import { AddressGetById } from "../controllers/Adress/AddressGetById";
import { AddressUpdate } from "../controllers/Adress/AddressUpdate";


//for each of the routes, we need to create a new array of routes.
//This may be a bit overkill, but it's a good way to keep track of the routes. This can be reworked later.
const AddressRoutes = [
    {
        path: '/addresses/getall',
        method: 'get',
        action: AddressGetAll
    },
    {
        path: '/addresses/get',
        method: 'get',
        action: AddressGetById
    },
    {
        path: '/addresses/add',
        method: 'post',
        action: AddressAdd
    },
    {
        path: '/addresses/delete',
        method: 'post',
        action: AddressDelete
    },
    {
        path: '/addresses/update',
        method: "post",
        action: AddressUpdate
    },
]

//api routes merged here
export const ApiRoutes = [
    AddressRoutes
];