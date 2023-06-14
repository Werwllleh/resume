import {$count, clear, decrement, increment} from "./index";

$count
    .on(increment, (currentCount: number, incrementValue: number) => (currentCount += incrementValue))
    .on(decrement, (currentCount: number, decrementValue: number) => (currentCount -= decrementValue))
    .reset(clear)
