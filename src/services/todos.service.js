import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const todosService = {
    getAll: ()=>axiosService.get(urls.todos)
}

export {
    todosService
}