import {placeAxiosService} from "./axios.service";
import {urls} from "../constants";

const usersService = {
    getAll: ()=>placeAxiosService.get(urls.users),
    createUser: (user)=>placeAxiosService.post(urls.users, user)
}

export {
    usersService
}