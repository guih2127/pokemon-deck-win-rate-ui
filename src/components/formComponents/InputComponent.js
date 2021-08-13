const InputComponent = ({ label, value, setValue, type }) => {
    return (
        <div className="ui input">
            <input 
                placeholder={label}
                value={value}
                type={type}
                onChange={e => setValue(e.target.value)}
                style={{ marginTop: '15px' }}
            />
        </div>
    );
}

export default InputComponent;