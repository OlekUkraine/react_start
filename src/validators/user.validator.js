import Joi from "joi";

const objectSchema = Joi.object({
    name: Joi.string().max(20).required().messages({
    'string.max':'Занадто довге ім\'я, я не запам\'ятаю!',
    'required':'Потрібно хоча б щось написати!'
    }),
    username: Joi.string().max(20).required().messages({
        'string.max':'Занадто довге ім\'я, я не запам\'ятаю!',
        'required':'Потрібно хоча б щось написати!'
    }),
    email: Joi.string().max(20).required().messages({
        'string.max':'Занадто довге ім\'я, я не запам\'ятаю!',
        'required':'Потрібно хоча б щось написати!'
    }),
    address: Joi.string().max(50).required().messages({
        'string.max':'Занадто довге ім\'я, я не запам\'ятаю!',
        'required':'Потрібно хоча б щось написати!'
    }),
})

export {
    objectSchema
}