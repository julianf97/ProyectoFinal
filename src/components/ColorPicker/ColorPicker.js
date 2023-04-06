import "./colorPicker.scss"


export const ColorPicker = ({setColor, options}) => {

    /* 
    
    Es muy comun traer el value de un nodo a traves del objeto evento de la propiedad target
    
    */

    const handleSelect = (e) => {
        console.log(e.target.value)
        setColor(e.target.value)
    }

    return(
        <select onChange={handleSelect}>
            {
                options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))
            }
        </select>
    )
}
