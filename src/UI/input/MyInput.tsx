import React, {ChangeEvent} from 'react';
import c from './MyInput.module.css'

const MyInput: React.FC<MyInputProps> = (props) => {
    return (
        <input {...props} className = {c.myInput} />
    );
};
type MyInputProps = {
    type: string
    placeholder: string
    value?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default MyInput;
