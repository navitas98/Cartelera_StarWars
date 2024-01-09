type Pelicula={
    titulo:string,
    director:string,
    personaje:string[]
}
export const getInfoPelicula=async(url:string):Promise<Pelicula>=>{
    const response=await fetch(url);
    if(response.status!==200){throw new Error("La url de la pelicula es erronea")}
    const data=await response.json();
    return{
        titulo:data.title,
        director:data.director,
        personaje:data.characters.map((e:string)=>e)
    }
}