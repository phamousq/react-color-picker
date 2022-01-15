const ColorInput = ({color, setColor}) => {
    return (
        <input 
            autofocus
            role='searchbox'
            type="text" 
            id='colorInput'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='type any HTML color e.g. royalblue'
        />
    )
}

export default ColorInput
