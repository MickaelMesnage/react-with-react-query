import { useQuery } from "@tanstack/react-query"
import { getPandaList } from "../../fetch";
import { ShortPanda } from "../../models/Panda";

const usePandaList = () => {
    const query = useQuery<ShortPanda[]>(['pandaList'], () => getPandaList());

    return query;
}

export default usePandaList;
