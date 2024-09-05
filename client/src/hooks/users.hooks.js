const API_URL = "https://nutriease-api.vercel.app"


export const httpGetUser = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/users/${userId}`)
        const result = await response.json()
        if (!result.ok) {
            throw new Error('Failed to fetch restaurant. try again');
        }
        return result;
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
        const result = await response.json()
        if (!result.ok) {
            throw new Error(result.error);
        }
        return result;
    } catch (error) {
        console.log(error.message)
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

export const httpEditUserDetails = async (editDetails) => {
    try {
        const response = await fetch(`${API_URL}/users/edit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(editDetails)
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