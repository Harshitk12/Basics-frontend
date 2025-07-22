
const Button=(props)=>{
    return(
        <button className={`btn ${props.className}`} onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Button;