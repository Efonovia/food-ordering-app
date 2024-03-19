const API_URL = "http://localhost:8000"


export const httpGetAllOrders = async () => {
    try {
        const response = await fetch(`${API_URL}/orders`)
        if (!response.ok) {
            throw new Error('Failed to fetch orders. try again');
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

export const httpGetAllRestaurantOrders = async (restaurantId) => {
    try {
        const response = await fetch(`${API_URL}/orders/restaurant/${restaurantId}`)
        if (!response.ok) {
            throw new Error('Failed to fetch orders. try again');
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

export const httpGetAllUserOrders = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/orders/user/${userId}`)
        if (!response.ok) {
            throw new Error('Failed to fetch orders. try again');
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

export const httpGetOrder = async (id) => {
    try {
        const response = await fetch(`${API_URL}/orders/${id}`)
        if (!response.ok) {
            throw new Error('Failed to fetch order. try again');
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

export const httpCompleteOrder = async (id) => {
    try {
        const response = await fetch(`${API_URL}/orders/complete/${id}`)
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

export const httpCreateOrder = async (orderDetails) => {
    try {
        const response = await fetch(`${API_URL}/orders/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(orderDetails)
        })

        if (!response.ok) {
            throw new Error('Failed to send order. try again');
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