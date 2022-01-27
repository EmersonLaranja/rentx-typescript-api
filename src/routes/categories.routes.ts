import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoute = Router();
const createCategoryController = new CreateCategoryController();
const upload = multer({
  dest: "./tmp",
});

categoriesRoute.post("/", createCategoryController.handle);

categoriesRoute.post("/import", upload.single("file"), (req, res) => {
  importCategoryController.handle(req, res);
});

categoriesRoute.get("/", (req, res) =>
  listCategoriesController.handle(req, res)
);
export { categoriesRoute };
