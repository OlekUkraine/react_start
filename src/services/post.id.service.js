import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const postIdService = {
    getById:(id)=>axiosService.get(`${urls.posts}/${id}`)
}

export {
    postIdService
}