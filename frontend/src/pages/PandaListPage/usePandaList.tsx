import { useQuery } from "@tanstack/react-query"
import request from "../../axios";
import { ShortPanda } from "../../models/Panda";

export const PandaListQueryKey = ['pandaList'];

const fetchPandaList = async (): Promise<ShortPanda[]> => {
    const response = await request.get('/pandas');
    const data = response.data;
    console.log({data});

    return data;
}

const usePandaList = () => {
    const query = useQuery<ShortPanda[]>(['pandaList'], () => fetchPandaList());

    return query;
}

export default usePandaList;
