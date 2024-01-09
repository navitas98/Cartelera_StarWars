import mongoose from "mongoose"
import { Pelicula } from "../types.ts"
const Schema=mongoose.Schema;
const PeliculaSchema=new Schema({
    url:String,
    cine:Schema.Types.ObjectId
})
export type PeliculaModelType=mongoose.Document&Omit<Pelicula,"cine">&{
    cine:mongoose.Types.ObjectId
}
//validamos si el cine existe
PeliculaSchema.path("cine").validate(async function (value:mongoose.Types.ObjectId) {
    if(value===this.cine){return true}
    const cine=await mongoose.models.Cine.findById(value);
    if(!cine){throw new Error(`El cine con el id ${value} no existe`)};
    return true
})
export const PeliculaModel=mongoose.model<PeliculaModelType>("Pelicula",PeliculaSchema);