const ColorBox = ({color, setColor}) => {
    return (
        <div id='colorBox' style={{backgroundColor: `${color}`}}>
            {color}
        </div>
    )
}

export default ColorBox
