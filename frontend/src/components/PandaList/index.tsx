import { Link, Navigate } from "react-router-dom";
import "./styles.css";
import usePandaList from "./usePandaList";


const PandaList = () => {
    const { isLoading, isError, data } = usePandaList();

    if (isLoading) return <span>Loading...</span>;
    if (isError) return <Navigate to='/error' />;

    const pandas = data;

    return (
        <table className="styled-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Modification</th>
                </tr>
            </thead>
            <tbody>
                {pandas.map(({ id, name }) => (
                    <tr key={id}>
                        <td>{name}</td>
                        <td><Link to={`/panda/${id}`}>open</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PandaList;