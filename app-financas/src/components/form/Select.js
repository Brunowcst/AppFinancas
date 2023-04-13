import './Select.modules.css';

function Select({text, options, name, value, handleOnChange}) {
    return (
        <div className="select_container">
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
               <option>
                    Escolha
                </option> 
            </select>
        </div>
    );
}

export default Select;