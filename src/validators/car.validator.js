import Joi from "joi";

const carValidator = Joi.object({
    brand:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'Почекай... Тільки літери, та не більше 20-ти!',
        'string.required':'Ну то треба хоч щось написати!'
    }),
    price:Joi.number().min(0).max(1000000).required().messages({
        'number.min':'Хочешь доплатити? Так не піде, пиши щось більше ніж 0!',
        'number.max':`Елітні авто та бронетехніка то не сюди, максимум 1 мільйон!` ,
        'number.required':'Ну то треба хоч щось написати!'
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min':'Це занадто старе авто, має бути не старіше за 1990р!',
        'number.max':`Ти що, із майбутнього?! Зараз ${new Date().getFullYear()} рік!` ,
        'number.required':'Ну то треба хоч щось написати!'
    })
})

export {
    carValidator
}