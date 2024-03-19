const API_URL = "http://localhost:8000"


export const httpGetUser = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/users/${userId}`)
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

export const httpSignUpUser = async (signUpDetails) => {
    try {
        const response = await fetch(`${API_URL}/users/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(signUpDetails)
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

export const httpLoginUser = async (loginDetails) => {
    try {
        const response = await fetch(`${API_URL}/users/login`, {
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

export const httpEditUserDetails = async (editDetails) => {
    try {
        const response = await fetch(`${API_URL}/users/edit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(editDetails)
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