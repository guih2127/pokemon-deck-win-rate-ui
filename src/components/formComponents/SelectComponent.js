const SelectComponent = ({ options, label, selectedOption, setSelectedOption }) => {
    const renderedSelectedOptions = options.map(option => {
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
        <select 
            className="ui selection dropdown" 
            onChange={e => onChange(e)}
        >
            {renderedSelectedOptions}
        </select>
    );
};

export default SelectComponent;