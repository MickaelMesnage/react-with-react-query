import { useParams } from "react-router-dom";
import usePanda from "./usePanda";

const PandaModification = () => {
    const { id } = useParams<{ id: string }>();
    const { isLoading, isError, data } = usePanda(id as string);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>An error occured</div>;

    return (
        <>
            <div>Name: {data.name}</div>
            <div>Age: {data.age}</div>
            <div>Gender: {data.gender}</div>
        </>
    );
};

export default PandaModification;