import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'd3aed1f3-1ea4-42da-a8e8-950c8b512175'
    }
});

export const usersAPI = {
    getUsers (currentPage,pageSize) {
       return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&&count=${pageSize}`)
       .then((response) => {
          return response.data
        })
    }
}