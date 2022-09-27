import { v4 as uuidv4 } from 'uuid';
import Panda, { Gender, PandaPayload } from "./type";

const data: Array<Panda> = [{
    id: "1254",
    name: "Hector",
    age: 7,
    gender: Gender.Male
}, {
    id: "3421",
    name: "Paloma",
    age: 12,
    gender: Gender.Female
}, {
    id: "6543",
    name: "José",
    age: 12,
    gender: Gender.Male
}, {
    id: "4432",
    name: "Gaston",
    age: 4,
    gender: Gender.Male
}, {
    id: "88798",
    name: "Florence",
    age: 15,
    gender: Gender.Female
}];

export const getPandaById = (id: string): Panda => {
    const panda = data.find((panda) => panda.id === id);
    if (!panda) throw Error("Panda not found");

    return panda;
}

export const updatePanda = (id: string, payload: PandaPayload) => {
    const index = data.findIndex((panda) => panda.id === id);
    if (!index) throw Error("Panda not found");
    data[index] = { id, ...payload};
}

export const getPandaList = (): Array<Panda> => {
    return data;
}

export const createPanda = (payload: PandaPayload) => {
    const newPanda = { ...payload, id: uuidv4() };
    data.push(newPanda);
}
