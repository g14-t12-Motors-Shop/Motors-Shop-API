import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { hash } from "bcrypt";
import AppError from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/user";
import { Address } from "../../entities/address.entity";

const updateUSerService = async ({name, email, cpf, phone, birthdate, description, accountType, password, address: addressRequest}: IUserUpdate, id: string): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User);
    const addressRepository = AppDataSource.getRepository(Address)

    const findUser = await userRepository.findOne({
        where: {
            id
        },
        relations: {
            address: true
        }
    })

    if (!findUser) {
        throw new AppError("User not found", 404)
    }

    const newaddressObj = {
        state: addressRequest?.state ? addressRequest.state : findUser.address.state,
        city: addressRequest?.city ? addressRequest.city : findUser.address.city,
        street: addressRequest?.street ? addressRequest.street : findUser.address.street,
        zipCode: addressRequest?.zipCode ? addressRequest.zipCode: findUser.address.zipCode,
        number: addressRequest?.number ? addressRequest.number : findUser.address.number,
        complement: addressRequest?.complement ? addressRequest.complement : findUser.address.complement,
    };

    const newAddress = addressRepository.create(newaddressObj);

    const findAddress = await addressRepository.findOneBy({
        id:newAddress.id,
    })

    await userRepository.update(
        id,
        {
            name: name ? name : findUser.name,
            email: email ? email : findUser.email,
            cpf: cpf ? cpf : findUser.cpf,
            phone: phone ? phone : findUser.phone,
            birthdate: birthdate ? birthdate : findUser.birthdate,
            description: description ? description : findUser.description,
            accountType: accountType ? accountType : findUser.accountType,
            password: password ? await hash(password, 10) : findUser.password
        }
    )

    await addressRepository.update(
        findAddress!.id, newaddressObj
    )

    const updatedUser = await userRepository.findOneBy({
        id
    })

    return updatedUser!;
}

export default updateUSerService;