import {useState} from 'react';


const useSearchInputHook = (intialValue) => {
    const [value, setValue] = useState(intialValue);

    const reset = () => {
        setValue(intialValue);
    }

    const onChangeValue = (text) => {
        setValue(text)
    }

    return [value,onChangeValue,reset]
};

export default useSearchInputHook;
