const API_URL = "http://localhost:8000"


export const httpGetAllRestaurants = async () => {
    try {
        const response = await fetch(`${API_URL}/restaurants`)
        if (!response.ok) {
            throw new Error('Failed to fetch restaurants. try again');
        } else {
            const result = await response.json()
            return result;
        }
    } catch (error) {
        console.log(error)
        alert(error.message)
        return
    }
}

export const httpGetRestaurant = async (restaurantId) => {
    try {
        const response = await fetch(`${API_URL}/restaurants/${restaurantId}`)
        if (!response.ok) {
            throw new Error('Failed to fetch restaurant. try again');
        } else {
            const result = await response.json()
            return result;
        }
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

        if (!response.ok) {
            throw new Error(response.error);
        } else {
            const result = await response.json()
            return result;
        }
    } catch (error) {
        console.log(error)
        alert(error.message)
        return
    }
}

export const httpPostRestaurantReview = async (reviewDetails) => {
    try {
        const response = await fetch(`${API_URL}/restaurants/reiews/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(reviewDetails)
        })

        if (!response.ok) {
            throw new Error(response.error);
        } else {
            const result = await response.json()
            return result;
        }
    } catch (error) {
        console.log(error)
        alert(error.message)
        return
    }
}