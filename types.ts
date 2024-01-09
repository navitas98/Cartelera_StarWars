export type Pelicula={
    id:string,
    url:string,
    cine:Cine
}

export type Cine={
    id:string,
    nombre:string,
    codigo_postal:string,
    codigo_pais:string
    latitud:string,
    longitud:string,
    pelicula:Pelicula[],

}
export type PersonajeAPI={
    url:string
    nombre:string,
    altura:string,
    peso:string,
    color_pelo:string,
    color_piel:string,
    genero:Genero
}
enum Genero{
    Male="Male",
    Female="Female",
    unknown="unknown",
    na="n/a"
}