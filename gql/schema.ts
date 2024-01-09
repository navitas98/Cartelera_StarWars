export const typeDefs = `#graphql
type Cine{
    id:String!
    nombre:String!
    codigo_postal:String!
    codigo_pais:String!
    latitud:String!
    longitud:String!
    grados:String!
    temperatura:String!
    pelicula:[Pelicula!]!
}
type Pelicula{
    id:ID!
    url:String!
    titulo:String!
    director:String!
    cine:Cine!
    personajes:[Personaje!]!
}
type Personaje{
    url:String!
    nombre:String!
    altura:String!
    peso:String!
    color_pelo:String!
    color_piel:String!
    genero:Genero!
}
enum Genero {
    Male
    Female
    unknown
    na
}
type Mutation{
    nuevoCine(nombre:String!, codigo_postal:String!, codigo_pais:String!):Cine!
    nuevaPelicula(url:String!, cine:String!):Pelicula!
    borrarCine(id:ID!):Cine!
    borrarPelicula(id:ID!):Pelicula!
    modificarPelicula(id:ID!, url:String, cine:ID):Pelicula!
}
type Query{
    pelicula(id:ID!):Pelicula!
    cine(id:ID!):Cine!
}
`