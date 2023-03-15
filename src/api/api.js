import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.farmmaster.africa/api/v1/en',
    headers: {}
});

const responseBody = (response) => response.data;

const request = {
    get: (url) => instance.get(url).then(responseBody),
    post: (url, data) => instance.post(url, data).then(responseBody)
}

export const ProjectsApi = {
    getAll : () => request.get('/projects'),
    getBySlug: (slug) => request.get(`/projects/${slug}`), 
}

export const OrganicWaste = {
    getAll: () => request.get('/organic-waste'),
    getBySlug: (slug) => request.get(`/organic-waste/${slug}`)
}

export const Calendar = {
    save: (data) => request.post(`/farm-calendar`, data),
    getAll: () => request.get(`/farm-calendar`),
    getBySlug: (slug) => request.get(`/farm-calendar/${slug}`)
}