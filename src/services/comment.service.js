import {axiosService} from "./axsios.service";
import {urls} from "../configs/urls";

const commentService = {
    getAll:()=>axiosService.get(urls.comments),
    create: (comment) => axiosService.post(urls.comments, comment),
    getById: (id) => axiosService.get(`${urls.comments}/${id}`),
    updateById: (id, comment) => axiosService.put(`${urls.comments}/${id}`, comment),
    deleted: (id) => axiosService.delete(`${urls.comments}/${id}`)
}

export {
    commentService
}