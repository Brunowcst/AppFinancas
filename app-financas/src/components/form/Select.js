import './Select.modules.css';

function Select({text, options, name, value, handleOnChange}) {
    return (
        <div className="select_container">
            <label htmlFor={name}>{text}</label>
            <select name={name}
            id={name}
            required="required"
            onChange={handleOnChange}
            value={value || ''}>
               <option value="">Escolha uma categoria</option> 
               {options.map((option) => (
                   <option value={option.id} key={option.id}>{option.name}</option>
               ))}
            </select>
        </div>
    );
}

export default Select;