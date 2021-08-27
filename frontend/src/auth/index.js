import { API } from '../config';

export const signUp = (data) => {
    return fetch(`${API}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}
export const signIn = (data) => {
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}
export const signOut = (next) => {
    if (typeof window != "undefined") {
        localStorage.removeItem("user");
        next();
        return fetch(`${API}/signout`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
}
export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(data))
        next();
    }
}
export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false
    }
    if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"))
    } else {
        return false
    }
}