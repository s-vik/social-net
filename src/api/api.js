import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'd3aed1f3-1ea4-42da-a8e8-950c8b512175'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&&count=${pageSize}`)
            .then((response) => response.data)
    },
    unFollow(userId) {
       return instance.delete(`follow/${userId}`)
    },
    follow(userId) {
       return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {})
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    }
}

export const authAPI = {
    getAuthUser() {
        return instance.get(`auth/me`)
    }
}
export const randomUserAPI = {
    getRandomUser() {
        return instance
            .get(`profile/${Math.ceil(Math.random() * 20)}`)
    }
}
