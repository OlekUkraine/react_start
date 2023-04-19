import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().max(20).required().messages({
        'string.max': 'Занадто довге ім\'я, максимум 20 літер!'
    }),
    username: Joi.string().max(20).required().messages({
        'string.max': 'Занадто довге ім\'я, максимум 20 літер!'
    }),
    email: Joi.string().max(30).required().messages({
        'string.max': 'Занадто довга назва, максимум 30 літер!'
    })
})

export {
    userValidator
}