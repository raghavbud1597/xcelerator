export const login = () => {
    return {
        type: 'LOG_IN'
    }
}

export const logout = () => {
    return {
        type: 'LOG_OUT'
    }
}

export const userDetails = (details) => {
    return {
        type: 'USER_DETAILS',
        payload: details
    }
}