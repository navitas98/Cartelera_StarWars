import { getLatitudLongitud } from "../API/getLatitudLongitud.ts";
import { CineModel, CineModelType } from "../db/Cine.ts";
import { PeliculaModel, PeliculaModelType } from "../db/Pelicula.ts";

export const Mutation={
    nuevoCine:async(_:unknown,args:{nombre:string, codigo_postal:string, codigo_pais:string}):Promise<CineModelType>=>{
        const {nombre, codigo_pais, codigo_postal}=args;
        const {latitud, longitud}=await getLatitudLongitud(codigo_postal, codigo_pais);
        const cine={
            nombre,
            codigo_pais,
            codigo_postal,
            latitud,
            longitud
        }
        /*
        Los datos temperatura y grados los cargamos al hacer la peticion de obtener el cine ya que no son constantes y cambian
        dependiendo del dia
         */
        const nuevoCine=await CineModel.create(cine);
        return nuevoCine;
    },
    nuevaPelicula:async(_:unknown, args:{url:string, cine:string}):Promise<PeliculaModelType>=>{
        
        const pelicula={
            url:args.url,
            cine:args.cine
        }
        const nuevaPelicula=await PeliculaModel.create(pelicula);
        return nuevaPelicula;
    },
    borrarCine:async(_:unknown,args:{id:string}):Promise<CineModelType>=>{
        const cine=await CineModel.findByIdAndDelete(args.id);
        if(!cine)throw new Error("El id del cine no existe");
        return cine
    },
    borrarPelicula:async(_:unknown, args:{id:string}):Promise<PeliculaModelType>=>{
        const pelicula=await PeliculaModel.findByIdAndDelete(args.id);
        if(!pelicula)throw new Error("El id de la pelicula no existe");
        return pelicula
    },
    modificarPelicula:async(_:unknown,args:{id:string, url:string, cine:string}):Promise<PeliculaModelType>=>{
        const{id, url, cine}=args;
        const pelicula=await PeliculaModel.findByIdAndUpdate(id,{url, cine},{new:true, runValidators:true});
        if(!pelicula){throw new Error("El id de la pelicula es incorrecto")};
        return pelicula
    }
}
