import { Link, Navigate } from "react-router-dom";
import { Path } from "../../App";
import PandaList from "../../components/PandaList"
import Spinner from "../../components/Spinner";
import TotalPandas from "../../components/TotalPandas";
import usePandaList from "./usePandaList";

const PandaListPage = () => {
    const { isLoading, isError, data } = usePandaList();

    if (isLoading) return <Spinner />;
    if (isError) return <Navigate to={Path.Error} />;

    return <>
        <h1>&hearts; Liste des pandas &hearts;</h1>
        <PandaList pandas={data} />
        <Link to={Path.PandaCreation}>Création d'un nouveau panda</Link>
        <TotalPandas />
    </>;
};

export default PandaListPage;
