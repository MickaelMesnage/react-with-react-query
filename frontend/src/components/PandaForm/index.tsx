import { useState } from "react";
import { Gender, PandaPayload } from "../../models/Panda";

interface Props {
    onSubmit: (data: PandaPayload) => Promise<void>;
    defaultValues?: PandaPayload;
    labelButton: string;
}

const PandaForm = ({ defaultValues, onSubmit, labelButton }: Props) => {
    const [name, setName] = useState<string>(defaultValues?.name || '');
    const [age, setAge] = useState<number | undefined>(defaultValues?.age);
    const [gender, setGender] = useState<Gender>(defaultValues?.gender || Gender.Male);

    const [error, setError] = useState<string>('');

    const onFormSubmit = async (e: React.SyntheticEvent): Promise<void> => {
        e.preventDefault();
        if (!name || !age) {
            setError('Erreur sur l\'un des champs du formulaire');
        } else {
            await onSubmit({ name, age, gender })
                .then(() => setError(''))
                .catch(() => setError('Erreur serveur'));
        }
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label>
                Nom :
                <br />
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Age :
                <br />
                <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
            </label>
            <label>
                <input
                    type="radio"
                    value={Gender.Female}
                    checked={gender === Gender.Female}
                    onChange={(e) => setGender(Gender.Female)}
                />
                Female
            </label>
            <label>
                <input
                    type="radio"
                    value={Gender.Female}
                    checked={gender === Gender.Male}
                    onChange={(e) => setGender(Gender.Male)}
                />
                Male
            </label>
            {error && <p>{error}</p>}
            <button type="submit">{labelButton}</button>
        </form>
    );
};

export default PandaForm;