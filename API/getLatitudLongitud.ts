type LatitudLongitud={
    latitud:string,
    longitud:string
}
export const getLatitudLongitud=async(codigo_postal:string, codigo_pais:string):Promise<LatitudLongitud>=>{
    const API_URL = "https://zip-api.eu/api/v1";
    const url = `${API_URL}/info/${codigo_pais.toUpperCase()}-${codigo_postal}`;
    const response=await fetch(url);
    if(response.status!=200){
        throw new Error("Codigo postal o codigo pais incorrecto")
    };
    const datos=await response.json();
    return{
        latitud:datos.lat,
        longitud:datos.lng
    }
}