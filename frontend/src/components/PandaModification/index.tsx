import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Panda, { Gender } from "../../models/Panda";
import usePanda from "./usePanda";

const PandaModification = () => {
    const { id } = useParams<{ id: string }>();
    const { isLoading, isError, data } = usePanda(id as string);
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number>(0);
    const [gender, setGender] = useState<Gender>(Gender.Male);

    useEffect(() => {
        if (data) {
            const { name, age } = data;
            setName(name);
            setAge(age);
        }
    }, [data, setName, setAge]);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>An error occured</div>;



    // const { name, age, gender } = data;



    return (
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
            {/* <input value={gender} onChange={(e) => setName(e.target.value)} /> */}
            {/* <div>Name: {data.name}</div>
            <div>Age: {data.age}</div>
            <div>Gender: {data.gender}</div> */}
        </>
    );
};

export default PandaModification;