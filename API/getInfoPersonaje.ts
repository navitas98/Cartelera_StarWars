export type Personaje={
    url:string,
    nombre:string,
    altura:string,
    peso:string,
    color_pelo:string,
    color_piel:string,
    genero:string
}
export const GetInfoPersonaje=async(url:string):Promise<Personaje>=>{
    const response=await fetch(url);
    if(response.status!==200)throw new Error("Error al introducir la url del personaje");
    const data=await response.json();
    return{
        url:data.url,
        nombre:data.name,
        altura:data.height,
        peso:data.mass,
        color_pelo:data.hair_color,
        color_piel:data.skin_color,
        genero:data.gender 
    }
}