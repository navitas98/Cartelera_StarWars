import { CineModel, CineModelType } from "../db/Cine.ts";
import { PeliculaModel, PeliculaModelType } from "../db/Pelicula.ts";

export const Query={
    cine:async(_:unknown,args:{id:string}):Promise<CineModelType>=>{
        const cine=await CineModel.findById(args.id);
        if(!cine)throw new Error("El id del cine es incorrector");
        return cine
    },
    pelicula:async(_:unknown,args:{id:string}):Promise<PeliculaModelType>=>{
        const pelicula=await PeliculaModel.findById(args.id);
        if(!pelicula)throw new Error(("El id del la pelicula es incorrecto"))
        return pelicula        
    }
}
