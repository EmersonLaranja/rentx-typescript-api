import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  handle(req: Request, res: Response) {
    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUseCase
    );
    const { name, description } = req.body;

    createSpecificationUseCase.execute({ name, description });

    return res.status(201).send();
  }
}

export { CreateSpecificationController };
