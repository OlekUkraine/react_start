import {ICar} from "../interfaces/car.interface";
import {axiosService, IRes} from "./axios.service";
import {urls} from "../configs/urls";

const carService = {
    getAll: (): IRes<ICar[]> => axiosService.get(urls.cars),
    create: (car: ICar): IRes<ICar> => axiosService.post(urls.cars, car),
    getById: (id: number): IRes<ICar> => axiosService.get(`${urls.cars}/${id}`),
    updateById: (id: number, car: ICar): IRes<ICar> => axiosService.put(`${urls.cars}/${id}`, car),
    delete: (id: number): IRes<void> => axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}