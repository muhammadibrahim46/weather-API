// export     const  getPosts= async()=>{
//  const response= await fetch('https://jsonplaceholder.typicode.com/posts',{
//         method:'GET'
//     });
//     return await response.json();
// };
// export const GetrandomUser= async ()=>{
//     const response=await fetch('https://randomuser.me/api/',{
//        method:'GET' 
//     });
//     return await response.json();
// };
// export const getWeather= async()=>{
//     const response= await fetch('https://api.weatherapi.com/v1/current.json?key=a93f1f7517064786ad363334250208&q=London&aqi=yes',{
//     method:'GET'
//     });
//     return await response.json();
// };
// export async function getWeather(city) {
//   // ✅ Using public WeatherAPI endpoint (replace with your own key for full access)
//   const apiKey = "a93f1f7517064786ad363334250208"; // ← You can use this test key or get your own from weatherapi.com
//   const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}a93f1f7517064786ad363334250208&q=${city}Pakistan&aqi=yes`;

//   const response = await fetch(url);
//   if (response.ok) {
//     throw new Error("City not found");
//   }
//   const data = await response.json();
//   return data;
// }
export async function getWeather(city) {
  const apiKey = "a93f1f7517064786ad363334250208"; // 🔑 Replace this with your real key
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    console.log("API Data:", data); // 🧠 Check what comes back
    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
}

