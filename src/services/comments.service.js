import {placeAxiosService} from "./axios.service";
import {urls} from "../constants";

const commentsService = {
    getAll: ()=>placeAxiosService.get(urls.comments),
    createComments: (comment)=>placeAxiosService.post(urls.comments, comment)
}

export {
    commentsService
}