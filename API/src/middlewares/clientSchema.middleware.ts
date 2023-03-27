import { NextFunction, Request, Response } from "express";
import { Schema } from "yup";

const clientSchemaMiddleware =
  (serializer: Schema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await serializer.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });

      req.validatedBody = validated;

      return next();
    } catch (error: any) {
      return res.status(400).json({ message: error.errors });
    }
  };

export { clientSchemaMiddleware };
