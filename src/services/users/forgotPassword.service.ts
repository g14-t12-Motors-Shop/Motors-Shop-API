import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";
import { compareSync, hash } from "bcrypt";
import "dotenv/config";
import { AppDataSource } from "../../data-source";
import { IUserForgotPassword } from "../../interfaces/user"

const forgotPasswordService = async({email, password}: IUserForgotPassword) => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({
        email: email
    })
    
    if (!user) {
        throw new AppError("User not found", 404)
    }

    const passwordMatch = compareSync(password, user.password);
    
    if (passwordMatch) {
        throw new AppError("You must use a password different from the previous ones", 403);
    }

    await userRepository.update(
        user.id,
        {
            password: password ? await hash(password, 10) : user.password
        }
    )

    const updatedPassword = await userRepository.findOneBy({
        email
    })

    return updatedPassword
}

export default forgotPasswordService;