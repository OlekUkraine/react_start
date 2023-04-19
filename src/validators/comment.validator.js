import Joi from "joi";

const commentValidator = Joi.object({
    name: Joi.string().max(20).required().messages({
        'string.max':'Занадто довге ім\'я, я не запам\'ятаю!'
    }),
    email: Joi.string().max(30).required().messages({
        'string.max':'Занадто довге ім\'я, я не запам\'ятаю!'
    }),
    body: Joi.string().min(20).max(500).required().messages({
        'string.min':'Трохи більше треба написати.',
        'string.max':'Занадто довге ім\'я, я не запам\'ятаю!'
    }),
})

export {
    commentValidator
}