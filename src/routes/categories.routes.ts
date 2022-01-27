import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";

const categoriesRoute = Router();
const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();
const upload = multer({
  dest: "./tmp",
});

categoriesRoute.post("/", createCategoryController.handle);

categoriesRoute.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

categoriesRoute.get("/", listCategoriesController.handle);
export { categoriesRoute };
