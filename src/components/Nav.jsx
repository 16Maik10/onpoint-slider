import '../styles/nav.css'

function Nav (props) {

    return (
        <header className="nav container">
            <button className="nav__home" onClick={props.action}/>
        </header>
    )
}

export default Nav;