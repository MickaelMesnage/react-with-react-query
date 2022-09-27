import { useMutation, useQueryClient } from "@tanstack/react-query"
import request from "../../axios";
import { PandaPayload } from "../../models/Panda";


const fetchCreatePanda = async (payload: PandaPayload): Promise<void> => {
    await request.post('/pandas', payload);
}

const useCreatePanda = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation((payload: PandaPayload) => fetchCreatePanda(payload), {
        onSuccess: () => {
            queryClient.invalidateQueries(['pandaList'])
        }
    });

    return mutation;
}

export default useCreatePanda;
