import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: { "API-KEY": "1de72b91-4649-437a-9226-0857e71878a9" }
});
export const userAPI = {
    requestUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    followUser(userId) {
        return instance.post(`follow/${userId}`,{})
            .then(response => {
                return response.data;
            });
    },

    unFollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    }, getProfile(userId) {
        return profileAPI.getProfile(userId);
    }

}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;

            });
    },
    login(email, password, rememberMe=false) {
        return instance.post(`auth/login`,{email, password, rememberMe})
            .then(response => {
                return response.data;
            });
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data;
            });
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/`+userId)
            .then(response => {
                return response.data;

            });
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data;

            });
    },
    updateStatus(status) {
        return instance.put(`profile/status`,{status:status})
            .then(response => {
                return response.data;

            });
    }
}