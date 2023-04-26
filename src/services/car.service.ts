import {ICar} from "../interfaces/car.interface";
import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";
import {IRes} from "../types/res.type";

const carService = {
    getAll: (): IRes<ICar[]> => axiosService.get(urls.cars),
    create: (car: ICar): IRes<ICar> => axiosService.post(urls.cars, car),
    // getById: (id: number): IRes<ICar> => axiosService.get(`${urls.cars}/${id}`),
    updateById: (id: number, car: ICar): IRes<ICar> => axiosService.put(`${urls.cars}/${id}`, car),
    delete: (id: number): IRes<void> => axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}