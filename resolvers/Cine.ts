import { GetGradosTemperatura } from "../API/getGradosTemperatura.ts";
import { CineModelType } from "../db/Cine.ts";
import { PeliculaModel, PeliculaModelType } from "../db/Pelicula.ts";

export const Cine={
    grados:async(parent:CineModelType)=>{
        const info=await GetGradosTemperatura(parent.latitud, parent.longitud);
        return info.grados
    },
    temperatura:async(parent:CineModelType)=>{
        const info=await GetGradosTemperatura(parent.latitud, parent.longitud);
        return info.temperatura
    },
    pelicula:async(parent:CineModelType):Promise<Array<PeliculaModelType>>=>{
        const pelicula=await PeliculaModel.find({cine:parent._id})
        return pelicula
    }
}