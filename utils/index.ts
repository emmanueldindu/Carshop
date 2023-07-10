


export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '5abf4a4efemsh5079ec851d3106cp132fc7jsnb650f9a44519',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    })

    const result = await response.json()

    return result;

}

