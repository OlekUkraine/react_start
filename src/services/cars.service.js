import {carsAxiosService} from "./axios.service";
import {urls} from "../constants";

const carsService = {
    getAll: () => carsAxiosService.get(urls.cars.cars),
    createCar: (car) => carsAxiosService.post(urls.cars.cars, car),
    deleteCar: (id) => carsAxiosService.delete(urls.cars.byId(id)),
    updateCar: (id, car) => carsAxiosService.put(urls.cars.byId(id), car)
}

export {
    carsService
}