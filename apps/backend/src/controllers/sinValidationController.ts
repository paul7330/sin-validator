import { Request, Response } from 'express';
import { validateSIN as validateSINUtil, ValidationResult } from 'shared-utils'

export const validateSIN = (req: Request, res: Response) => {
  const { sin } = req.body;
  
  const result: ValidationResult = validateSINUtil(sin);
  
  res.json(result);
};