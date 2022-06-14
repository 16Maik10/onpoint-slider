import classes from '../styles/popUp.module.css'

function PopUpSlide(props) {
    return (
        <div className={classes.listsWrapper}>
             <ol className={`${classes.list} ${classes.list_next} ${props.nextSlide ? classes.list_appears : ''}`}>
                <li className={`${classes.list__item} ${classes.list__item_next}`}>Mi bibendum neque egestas congue quisque
                    egestas diam</li>
                <li className={`${classes.list__item} ${classes.list__item_next}`}>Venenatis lectus magna fringilla urna</li>
                <li className={`${classes.list__item} ${classes.list__item_next}`}>Venenatis lectus magna fringilla urna</li>
            </ol>
            <ol className={`${classes.list} ${props.nextSlide ? '' : classes.list_appears}`}>
                <li className={classes.list__item}>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit</li>
                <li className={classes.list__item}>Faucibus pulvinar elementum integer enim</li>
                <li className={classes.list__item}>Faucibus pulvinar elementum integer enim</li>
            </ol>
        </div>
    )
}

export default PopUpSlide;