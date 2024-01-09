import { Cine } from "../types.ts";
import mongoose from "mongoose"
const Schema=mongoose.Schema;
const CineSchema=new Schema({
    nombre:String,
    codigo_postal:String,
    codigo_pais:String,
    latitud:String,
    longitud:String
})
export type CineModelType=mongoose.Document&Omit<Cine,"pelicula">
export const CineModel=mongoose.model<CineModelType>("Cine",CineSchema);