import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoute = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoute.post("/", (req, res) =>
  createCategoryController.handle(req, res)
);

categoriesRoute.post("/import", upload.single("file"), (req, res) => {
  importCategoryController.handle(req, res);
});

categoriesRoute.get("/", (req, res) =>
  listCategoriesController.handle(req, res)
);
export { categoriesRoute };
