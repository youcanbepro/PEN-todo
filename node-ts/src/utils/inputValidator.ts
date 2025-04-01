import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const todoScheme = Joi.object({
  title: Joi.string().trim().min(50).required(),
  description: Joi.string().trim().min(100).required(),
  completed: Joi.boolean().required()
});

export const validateEntry = (req: Request, res: Response, next: NextFunction) => {
  const { error } = todoScheme.validate(req.body);
  if (error)
    res.status(400).json({
      status: 400,
      message: error.details[0].message
    });
  next();
};
