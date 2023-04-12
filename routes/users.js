import  express  from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controlers/user";

const router =express.Router();
// create 
router.post("/", createUser);
// update 
router.put("/:id", updateUser)
// Delete 
router.delete("/:id", deleteUser)
// get
router.get("/:id", getUser)
// get all 
router.get("/", getUsers);
 
export default router