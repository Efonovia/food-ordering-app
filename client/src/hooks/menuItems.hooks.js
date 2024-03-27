const API_URL = "http://localhost:8000"
const limit = 10


export const httpGetAllMenuItems = async (page) => {
    try {
        const response = await fetch(`${API_URL}/menuitems?page=${page}&limit=${limit}`)
        const result = await response.json()
        if (!result.ok) {
            throw new Error('Failed to fetch menu items. try again');
        }
        return result;
    } catch (error) {
        console.log(error)
        alert(error.message)
        return
    }
}

export const httpGetAllRestaurantMenuItems = async (restaurantId) => {
    try {
        const response = await fetch(`${API_URL}/menuitems/restaurant/${restaurantId}`)
        const result = await response.json()
        if (!result.ok) {
            throw new Error('Failed to fetch menu items. try again');
        }
        return result;
    } catch (error) {
        console.log(error)
        alert(error.message)
        return
    }
}

export const httpGetMenuItem = async (menuItemId) => {
    try {
        const response = await fetch(`${API_URL}/menuitems/id/${menuItemId}`)
        const result = await response.json()
        if (!result.ok) {
            throw new Error('Failed to fetch menu item. try again');
        }
        return result;
    } catch (error) {
        console.log(error)
        alert(error.message)
        return
    }
}


export const httpSearchAndFilterMenuItems = async (locationSearch) => {
    try {
        const response = await fetch(`${API_URL}/menuitems/search${locationSearch}&limit=${limit}`)

        const result = await response.json()
        if (!result.ok) {
            throw new Error('Failed to fetch menu items. try again');
        }
        return result;
    } catch (error) {
        console.log(error)
        alert(error.message)
        return
    }
}