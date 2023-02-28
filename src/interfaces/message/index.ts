import { IUser } from "../user";
import { IVehicle } from "../vehicle";

export interface IMessage {
    id: string;
    message: string;
}

export interface IMessageRequest {
    message: string;
    owner: IUser;
    vehicle: IVehicle;
}