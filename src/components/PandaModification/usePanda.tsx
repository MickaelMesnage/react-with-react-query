import { useQuery } from "@tanstack/react-query"
import request from "../../axios";
import Panda from "../../models/Panda";

const fetchPandaById = async (id: string): Promise<Panda> => {
    const response = await request.get(`/pandas/${id}`);
    const data = response.data;
    console.log({data});

    return data;
}

const usePandaList = (id: string) => {
    const query = useQuery<Panda>(['panda', id], () => fetchPandaById(id));
    return query;
}

export default usePandaList;
