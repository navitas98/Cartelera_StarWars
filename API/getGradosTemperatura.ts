type GradosTemperatura={
    grados:string,
    temperatura:string
}
export const GetGradosTemperatura=async(latitud:string, longitud:string):Promise<GradosTemperatura>=>{
    const BASE_URL = "http://api.weatherapi.com/v1";
    const WEATHERAPI_API_KEY = Deno.env.get("WEATHERAPI_API_KEY");
    if (!WEATHERAPI_API_KEY) {
      throw new Error("WEATHERAPI_API_KEY is not defined");
    }
  
    const url = `${BASE_URL}/current.json?key=${WEATHERAPI_API_KEY}&q=${latitud},${longitud}`;
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("Cannot fetch weather");
    }
    const data = await response.json();
    return {
      temperatura:data.current.condition.text,
      grados:data.current.temp_c
    };
}