import styled from "styled-components";

const SelectComponent = ({
    options,
    label,
    selectedOption,
    setSelectedOption
}) => {

    const SelectDiv = styled.div`
        display: grid;
    `

    const renderSelectOptions = options.map(option => {
        return (
            <option key={option.id} value={option.id}>
                {option.name}
            </option>
        );
    });

    const onChange = event => {
        let option = options.filter(option => {
            return option.id === parseInt(event.target.value);
        })[0];

        setSelectedOption(option);
    }

    return (
        <SelectDiv>
            <h4>
                {label}
            </h4>
            <select
                className="ui selection dropdown"
                onChange={e => onChange(e)}
                defaultValue={selectedOption.id}
            >
                {renderSelectOptions}
            </select>
        </SelectDiv>
    );
};

export default SelectComponent;