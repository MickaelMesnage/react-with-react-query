import { useNavigate, useParams } from "react-router-dom";
import { Path } from "../../App";
import PandaForm from "../../components/PandaForm";
import { PandaPayload } from "../../models/Panda";
import useCreatePanda from "./useCreatePanda";

const CreatePandaPage = () => {
    const navigate = useNavigate();

    const createPandaMutation = useCreatePanda();

    const onSubmit = async (payload: PandaPayload) => {
        createPandaMutation.mutateAsync(payload)
            .then(() => navigate(Path.PandalList));
    }

    return (
        <>
            <h1>Création d'un panda</h1>
            <PandaForm onSubmit={onSubmit} labelButton="Créer" />
        </>
    );
};

export default CreatePandaPage;
