import Panda, { ShortPanda } from "../models/Panda";
import initialData from "./initialData";

const data = [...initialData];

const getItem = (id: string): Panda => {
    const item = data.find((panda) => panda.id === id);
    if (!item) throw Error("Panda not found");

    return item;
}

const updateData = (newPanda: Panda): void => {
    const index = data.findIndex((panda) => panda.id === newPanda.id);
    if (index < 0) throw Error("Panda not found");

    data[index] = newPanda;
};

// simulation of fetching list (timeout of 3 sec)
export const getPandaList = async (): Promise<Array<ShortPanda>> => {
    console.log('Get list called');
    const list = data.map((panda) => ({ id: panda.id, name: panda.name }));

    return new Promise(resolve => setTimeout(() => resolve(list), 3000));
}

// simulation of fetching panda (timeout of 3 sec)
export const getPanda = async (id: string): Promise<Panda> => {
    console.log('Get item called');

    return new Promise(resolve => setTimeout(() => resolve(getItem(id)), 3000));
}

// simulation of update panda (timeout of 3 sec)
export const updatePanda = async (newPanda: Panda): Promise<void> => {
    updateData(newPanda);

    return new Promise(resolve => setTimeout(() => resolve(), 3000));
}

// simulation of error
export const fetchError = async (): Promise<void> => {
    throw Error();
}
