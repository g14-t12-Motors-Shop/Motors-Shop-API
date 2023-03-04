import { Request, Response, NextFunction } from "express";

const validationBodyPatchMiddleware = async (req: Request, res:Response, next: NextFunction) => {
    const bodyPatch = req.body;

    const keyValues = Object.keys(bodyPatch);

    if(keyValues.includes("isAdm") || keyValues.includes("createdAt") || keyValues.includes("id") || keyValues.includes("updatedAt")) {
        return res.status(401).json({
            message: "This property does not be modified!"
        })
    }

    return next();
}

export default validationBodyPatchMiddleware;
