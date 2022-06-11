import './MyButton.css'

function MyButton(props) {

    return (
        <button className="MyButton MyButton_SlideOne" onClick={props.action}>
            <div className="MyButton__circle">
                {props.svg}
            </div>
            {props.content}
        </button>
    )
}

export default MyButton;