const placeBaseURL = 'https://jsonplaceholder.typicode.com';
const carsBaseURL = 'http://owu.linkpc.net/carsAPI/v1';


const cars = '/cars';

const urls = {
    users: '/users',
    comments: '/comments',
    cars: {
        cars,
        byId: (id) => `${cars}/${id}`
    }
}

export {
    placeBaseURL,
    carsBaseURL,
    urls
}