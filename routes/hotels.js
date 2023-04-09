import express from "express";
import Hotel from "../models/Hotel.js";
import { get } from "mongoose";
import { createError } from "../utlis/error.js";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controlers/hotel.js";

const router = express.Router();
// create 
router.post("/", createHotel);
// update 
router.put("/:id", updateHotel)
// Delete 
router.delete("/:id", deleteHotel)
// get
router.get("/:id", getHotel)
// get all 
router.get("/", getHotels);


export default router