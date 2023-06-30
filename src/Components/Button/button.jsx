import "./button.css"
function Button(props){

    return(
        <div className="num_button">
                {props.name}
        </div>
    );
}

export default Button