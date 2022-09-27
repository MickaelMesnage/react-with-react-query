export enum Gender {
    Male = "MALE",
    Female = "FEMALE",
}

type Panda = {
    id: string;
    name: string;
    age: number;
    gender: Gender;
}

export type PandaPayload = Omit<Panda, "id">;

export type ShortPanda = Pick<Panda, 'id' | 'name'>;

export default Panda;
