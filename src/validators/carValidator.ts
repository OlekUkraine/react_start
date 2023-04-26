import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[A-Za-z]+$/).max(20).required().messages({
        'string.pattern.base': 'Only letters',
        'string.max': 'Max 20 letters'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min': 'Min 1990',
        'number.max': `Max ${new Date().getFullYear()}`
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min': 'Min 0',
        'number.max': 'Max 1000000'
    })
})

export {
    carValidator
}