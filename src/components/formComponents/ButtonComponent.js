const ButtonComponent = ({ label, onClick }) => {
    return (
        <button 
            className="ui secondary button" 
            onClick={onClick}
            style={{marginTop: '15px'}}>
            {label}
        </button>
    );
};

export default ButtonComponent;