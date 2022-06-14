import './MyButton.css'

function MyButton(props) {

    return (
        <button className={`MyButton ${props.classTitle}`} onClick={props.action}>
            <div className="MyButton__circle">
                {props.svg}
            </div>
            {props.content}
        </button>
    )
}

export default MyButton;