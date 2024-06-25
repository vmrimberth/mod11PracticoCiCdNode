import { Router } from "express";
import { getEmployes, getEmploye, createEmploye, deleteEmploye, updateEmploye } from "../controllers/employe.controllers.js";

const router = Router();

router.get("/employes", getEmployes);

router.get("/employes/:id", getEmploye);

router.post("/employes", createEmploye);

router.delete("/employes/:id", deleteEmploye);

router.put("/employes/:id", updateEmploye);

export default router;