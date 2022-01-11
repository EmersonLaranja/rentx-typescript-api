import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoute = Router();

specificationsRoute.post("/", (req, res) =>
  createSpecificationController.handle(req, res)
);

// specificationsRoute.get("/", (req, res) => {
//   const allSpecifications = specificationsRepository.list();
//   return res.json(allSpecifications);
// });
export { specificationsRoute };
