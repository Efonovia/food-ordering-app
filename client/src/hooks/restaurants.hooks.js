const API_URL = "http://localhost:7000"


export const httpGetAllRestaurants = async () => {
    try {
        const response = await fetch(`${API_URL}/restaurants`)
        const result = await response.json()
        if (!result.ok) {
            throw new Error('Failed to fetch restaurants. try again');
        } 
        return result
    } catch (error) {
        console.log(error)
        alert(error.message)
        return
    }
}

export const httpGetRestaurant = async (restaurantId) => {
    try {
        const response = await fetch(`${API_URL}/restaurants/${restaurantId}`)
        const result = await response.json()
        if (!result.ok) {
            throw new Error('Failed to fetch restaurant. try again');
        } 
        return result
    } catch (error) {
        console.log(error)
        alert(error.message)
        return
    }
}

export const httpLoginRestaurant = async (loginDetails) => {
    try {
        const response = await fetch(`${API_URL}/restaurants/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(loginDetails)
        })

        const result = await response.json()
        if (!result.ok) {
            throw new Error(result.error);
        }
        return result;
    } catch (error) {
        console.log(error)
        alert(error.message)
        return
    }
}

export const httpPostRestaurantReview = async (reviewDetails) => {
    try {
        const response = await fetch(`${API_URL}/restaurants/reviews/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(reviewDetails)
        })

        const result = await response.json()
        if (!result.ok) {
            throw new Error(result.error);
        } 
        return result
    } catch (error) {
        console.log(error)
        alert(error.message)
        return
    }
}