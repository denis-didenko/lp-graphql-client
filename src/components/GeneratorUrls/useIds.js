import { useState } from 'react';

const useIds = () => {
    const [fieldValue, setFieldValue] = useState('');
    const [ids, setIds] = useState([]);

    const onChangeField = e => setFieldValue(e.target.value);

    const onChangeIds = (e, list) => {
        e.preventDefault();
        const splitted = list.split(/\n|\s/).filter(Boolean);

        setIds(splitted);
    };

    return { ids, onChangeIds, fieldValue, onChangeField };
};

export default useIds;
