import { getInfoPelicula } from "../API/getInfoPelicula.ts";
import { GetInfoPersonaje } from "../API/getInfoPersonaje.ts";
import { CineModel, CineModelType } from "../db/Cine.ts";
import { PeliculaModelType } from "../db/Pelicula.ts";

export const Pelicula={
    titulo:async(parent:PeliculaModelType)=>{
        const info=await getInfoPelicula(parent.url);
        return info.titulo
    },
    director:async(parent:PeliculaModelType)=>{
        const info=await getInfoPelicula(parent.url);
        return info.director
    },
    cine:async(parent:PeliculaModelType):Promise<CineModelType>=>{
        const cine=await CineModel.findById(parent.cine);
        if(!cine)throw new Error("La url del cine no existe");
        return cine;
    },
    personajes:async(parent:PeliculaModelType)=>{
        const info=await getInfoPelicula(parent.url);
        const personaje=await Promise.all(
            info.personaje.map(async(e:string)=>{
                return await GetInfoPersonaje(e)
            })
        )
        return personaje
    }
}