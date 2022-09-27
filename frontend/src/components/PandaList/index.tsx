import { Link } from "react-router-dom";
import { ShortPanda } from "../../models/Panda";
import "./styles.css";

type Props = {
    pandas: Array<ShortPanda>,
}

const PandaList = ({ pandas }: Props) => (
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

export default PandaList;