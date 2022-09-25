import { useQuery } from "@tanstack/react-query"
import { getPanda } from "../../fetch";
import Panda from "../../models/Panda";

const usePandaList = (id: string) => {
    const query = useQuery<Panda>(['panda', id], () => getPanda(id));
    return query;
}

export default usePandaList;
