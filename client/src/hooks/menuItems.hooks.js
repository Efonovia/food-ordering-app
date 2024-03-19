const API_URL = "http://localhost:8000"


export const httpGetAllMenuItems = async () => {
    try {
        const response = await fetch(`${API_URL}/menuitems`)
        if (!response.ok) {
            throw new Error('Failed to fetch menu items. try again');
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

export const httpGetAllRestaurantMenuItems = async (restaurantId) => {
    try {
        const response = await fetch(`${API_URL}/menuitems/${restaurantId}`)
        if (!response.ok) {
            throw new Error('Failed to fetch menu items. try again');
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

export const httpGetMenuItem = async (menuItemId) => {
    try {
        const response = await fetch(`${API_URL}/menuitems/${menuItemId}`)
        if (!response.ok) {
            throw new Error('Failed to fetch menu item. try again');
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

export const httpSearchAndFilterMenuItems = async (query, nutritionalContent, minPrice, maxPrice) => {
    try {
        const response = await fetch(`${API_URL}/menuitems/search?query=${query}&nutritionalContent=${nutritionalContent}&minPrice=${minPrice}&maxPrice=${maxPrice}`)

        if (!response.ok) {
            throw new Error('Failed to fetch menu items. try again');
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