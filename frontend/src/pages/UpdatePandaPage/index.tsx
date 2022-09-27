import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Path } from "../../App";
import Spinner from "../../components/Spinner";
import PandaForm from "../../components/PandaForm";
import { PandaPayload } from "../../models/Panda";
import usePanda from "./usePanda";
import useUpdatePanda from "./useUpdatePanda";

const UpdatePandaPage = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const pandaQuery = usePanda(id as string);
    const updatePandaMutation = useUpdatePanda(id as string);

    if (pandaQuery.isLoading) return <Spinner />;
    if (pandaQuery.isError) return <Navigate to='/error' />;

    const onSubmit = async (payload: PandaPayload) => {
        updatePandaMutation.mutateAsync(payload)
            .then(() => navigate(Path.PandalList));
    }

    return (
        <>
            <h1>Modification d'un panda</h1>
            <PandaForm
                defaultValues={pandaQuery.data}
                onSubmit={onSubmit}
                labelButton="Modifier"
            />
        </>
    );
};

export default UpdatePandaPage;
