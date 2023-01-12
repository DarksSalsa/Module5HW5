import apiClient from "../client";

export const getById = (id: string) => apiClient({
  path: `users/${id}`,
  method: 'GET'
})

export const getByPage = (page: number) => apiClient({
  path: `users?page=${page}`,
  method: 'GET'
})

export const createObject = (creationData: object) => apiClient({
    path: `users`,
    method: 'POST',
    data: creationData
});

export const updateObjectById = (id: string, creationData: object) => apiClient({
  path: `users/${id}`,
  method: 'PUT',
  data: creationData
})