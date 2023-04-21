import './Input.modules.css';

function Input({type, text, placeholder, name, value, handleOnChange}) {
    return (
        <div className="input_container">
            <label htmlFor={name}>{text}</label>
            <input type={type} 
            name={name} 
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
            autoComplete="off"></input>
        </div>
    );
}

export default Input; 