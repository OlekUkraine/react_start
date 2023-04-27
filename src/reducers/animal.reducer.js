const animalActionTypes = {
    ADD_CAT: 'ADD_CAT',
    ADD_DOG: 'ADD_DOG',
    DEL_CAT: 'DEL_CAT',
    DEL_DOG: 'DEL_DOG'
}

const initState = {
    cats: [],
    dogs: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case animalActionTypes.ADD_CAT:
            const cat = action.payload;
            const catId = state.cats.slice(-1)[0]?.id + 1 || 1;
            cat.id = catId;
            return {...state, cats: [...state.cats, cat]};

        case animalActionTypes.ADD_DOG:
            const dog = action.payload;
            const dogId = state.dogs.slice(-1)[0]?.id + 1 || 1;
            dog.id = dogId;
            return {...state, dogs: [...state.dogs, dog]};

        case animalActionTypes.DEL_CAT:
            const idForDeleteCat = action.payload;
            const catIndexForDelete = state.cats.findIndex(value => value.id === idForDeleteCat);
            state.cats.splice(catIndexForDelete, 1);
            return {...state};

        case animalActionTypes.DEL_DOG:
            const idForDeleteDog = action.payload;
            const dogIndexForDelete = state.dogs.findIndex(value => value.id === idForDeleteDog);
            state.dogs.splice(dogIndexForDelete, 1);
            return {...state};

        default:
            return state;
    }
};

export {
    initState,
    reducer
}