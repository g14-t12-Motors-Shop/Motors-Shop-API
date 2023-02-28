import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/address.entity";
import { User } from "../../entities/user.entity";
import { Vehicle } from "../../entities/vehicle.entity";
import AppError from "../../errors/appError";

const deleteUserService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User);
    const addressRepository = AppDataSource.getRepository(Address);
    const vehicleRepository = AppDataSource.getRepository(Vehicle);
    const findUser = await userRepository.findOne({
        where: {
            id: id,
        },
        relations:{
            vehicle: true
        }
    })

    if(!findUser) {
        throw new AppError("Invalid id!", 404)
    }

    if (findUser.vehicle) {
        findUser.vehicle.map(async (vehicle) => {
            await vehicleRepository.delete(vehicle.id)
        })
    } 

    // const addressId = findUser?.address.id

    await userRepository.delete(id);
    // await addressRepository.delete(addressId!);

    return "User deleted with success!"
}

export default deleteUserService;