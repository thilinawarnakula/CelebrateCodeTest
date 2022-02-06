import {useState} from 'react';

const useLoaderHook = (intialValue) => {
    const [value, setValue] = useState(intialValue);

    const setStateValue = (status) => {
        setValue(status);
    }

    return [value,setStateValue]
};

export default useLoaderHook;
