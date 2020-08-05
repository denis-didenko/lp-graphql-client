import { useState } from 'react';

const useValues = () => {
    const [textarea, setTextarea] = useState('');
    const [select, setSelect] = useState('ids');
    const [values, setValues] = useState([]);

    const onChangeTextarea = e => setTextarea(e.target.value);
    const onChangeSelect = e => setSelect(e.target.value);
    const onSubmitForm = (e, list) => {
        e.preventDefault();
        const splitted = list.split(/\n|\s/).filter(Boolean);

        setValues(splitted);
    };

    return { values, textarea, onChangeTextarea, select, onChangeSelect, onSubmitForm };
};

export default useValues;
