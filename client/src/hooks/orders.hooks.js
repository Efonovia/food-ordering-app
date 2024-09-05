const API_URL = "http://localhost:7000"


export const httpGetAllOrders = async () => {
    try {
        const response = await fetch(`${API_URL}/orders`)
        const result = await response.json()
        if (!result.ok) {
            throw new Error('Failed to fetch orders. try again');
        }
        return result;
    } catch (error) {
        console.log(error)
        alert(error.message)
        return
    }
}

export const httpGetAllRestaurantOrders = async (restaurantId) => {
    try {
        const response = await fetch(`${API_URL}/orders/restaurant/${restaurantId}`)
        const result = await response.json()
        if (!result.ok) {
            throw new Error('Failed to fetch orders. try again');
        }
        return result;
    } catch (error) {
        console.log(error)
        alert(error.message)
        return
    }
}

export const httpGetAllUserOrders = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/orders/user/${userId}`)
        const result = await response.json()
        if (!result.ok) {
            throw new Error('Failed to fetch orders. try again');
        }
        return result;
    } catch (error) {
        console.log(error)
        alert(error.message)
        return
    }
}

export const httpGetLatestUserOrders = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/orders/user/${userId}/latest`)
        const result = await response.json()
        if (!result.ok) {
            throw new Error('Failed to fetch orders. try again');
        }
        return result;
    } catch (error) {
        console.log(error)
        alert(error.message)
        return
    }
}

export const httpGetOrder = async (id) => {
    try {
        const response = await fetch(`${API_URL}/orders/id/${id}`)
        const result = await response.json()
        if (!result.ok) {
            throw new Error('Failed to fetch order. try again');
        }
        return result;
    } catch (error) {
        console.log(error)
        alert(error.message)
        return
    }
}

export const httpCompleteOrder = async (id) => {
    try {
        const response = await fetch(`${API_URL}/orders/complete/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
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

export const httpCreateOrder = async (orderDetails) => {
    try {
        const response = await fetch(`${API_URL}/orders/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(orderDetails)
        })

        const result = await response.json()
        if (!result.ok) {
            throw new Error('Failed to send order. try again');
        }
        return result;
    } catch (error) {
        console.log(error)
        alert(error.message)
        return
    }
}