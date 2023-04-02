import React, {ChangeEvent} from 'react';
import {SortType} from "../../App";

const MySelect: React.FC<MySelectProps> = (props) => {
    const {options, defaultValue, value, sortPosts, ...restProps} = props
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.currentTarget.value === 'title' || e.currentTarget.value === 'body') {
            sortPosts(e.currentTarget.value);
        }

    }

    return (
        <select value = {value}
                onChange = {onChangeHandler}>
            <option disabled value = "">{defaultValue}</option>
            {
                options.map(option =>
                    <option key = {option.value} value = {option.value}>{option.name}</option>)
            }

        </select>
    );
};
type OptionType = {
    value: string
    name: string
}

type MySelectProps = {
    options: Array<OptionType>
    defaultValue: string
    value: string
    sortPosts: (sort: SortType) => void
}

export default MySelect;
