import { getClientAccessToken } from "./client";

export const onRecruit = (data: object) => getClientAccessToken().post("/recruit", data);

export const getDetailRecruit = (id: string) => getClientAccessToken().get(`/recruit/detail/${id}`);

export const getRecruit = (page: number) => getClientAccessToken().get(`/recruit/admin?page=${page}`);

export const removeRecruit = (id: string | undefined) => getClientAccessToken().delete(`/recruit/${id}`);

export const updateRecruit = (id: string, data : object) => getClientAccessToken().put(`/recruit/${id}`, data);

export const onFileRecruit = (form: any, no: string) => getClientAccessToken("multipart-formdata").post(`/recruit/introduction/${no}`, form);

export const getDetailAdminRecruit = (id: string) => getClientAccessToken().get(`/recruit/admin/${id}`);
