import { useMutation, useQueryClient } from "@tanstack/react-query"
import request from "../../axios";
import Panda, { PandaPayload } from "../../models/Panda";

const fetchUpdatePanda = async (id: string, payload: PandaPayload): Promise<Panda> => {
    const response = await request.put(`/pandas/${id}`, payload);

    return response.data;
}

const useUpdatePanda = (id: string) => {
    const queryClient = useQueryClient();

    const mutation = useMutation((payload: PandaPayload) => fetchUpdatePanda(id, payload), {
        onSuccess: (data) => {
            queryClient.invalidateQueries(['pandaList']);
            queryClient.setQueryData(['panda', id], data);
        }
    });

    return mutation;
}

export default useUpdatePanda;
