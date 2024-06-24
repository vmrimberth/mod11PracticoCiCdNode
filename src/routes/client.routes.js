import { Router } from "express";
import { getClients, getClient, createClient, deleteClient, updateClient } from "../controllers/client.controllers.js";

const router = Router();

router.get("/clients", getClients);

router.get("/clients/:id", getClient);

router.post("/clients", createClient);

router.delete("/client/:id", deleteClient);

router.put("/clients/:id", updateClient);

export default router;