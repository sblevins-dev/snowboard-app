import axios from "axios"

const API_URL = '/me'

// Get user
const getUser = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data;
}

const userService = {
    getUser
}

export default userService