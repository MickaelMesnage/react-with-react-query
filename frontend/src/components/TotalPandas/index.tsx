import { useQueryClient } from "@tanstack/react-query";
import Panda from "../../models/Panda";

const TotalPandas = () => {
    const queryClient = useQueryClient();
    const nbPandas = queryClient.getQueryData<Array<Panda>>(['pandaList'])?.length;

    return <p>Nombre total de panda(s) : {nbPandas}</p>;
};

export default TotalPandas;
