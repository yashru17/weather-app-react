const baseURl = 'https://api.weatherapi.com/v1/current.json?key=d7f7bebdc3b74531ae6200258241301&q=';

export const weatherInfo =async (city) => {
    const response = await fetch(`${baseURl}${city}&aqi=yes`)
    return await response.json();
}

export const weatherInfoOfLocation = async (lat, lon) => {
    const response = await fetch(`${baseURl}${lat},${lon}&aqi=yes`)
    return await response.json()
}