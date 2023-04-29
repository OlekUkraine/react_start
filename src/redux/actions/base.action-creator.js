import {DEC, INC, RES} from "./base.actions";

const incFn = () => {
  return {type: INC}
}
const decFn = () => {
    return {type: DEC}
}
const resFn = () => {
    return {type: RES}
}

export {
    incFn,
    decFn,
    resFn
}