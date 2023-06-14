import {createEvent, createStore} from "effector";

export const $count = createStore(0);

export const increment = createEvent<number>();
export const decrement = createEvent<number>();

export const clear = createEvent<void>();


