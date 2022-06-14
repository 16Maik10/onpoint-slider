import { useState } from 'react';
import classes from '../styles/slideThree.module.css'
import MyButton from '../UI/MyButton/MyButton';
import PopUp from './PopUp';

function SlideThree(props) {
    const svgForSlideThree = (<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 455 455" >
        <polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 
        455,242.5 "/>
    </svg>)

    const [showPopUp, setShowPopUp] = useState(false);
    return (
        <div className={classes.SlideThree} id="SlideThree">
            <div className={`${classes.mainContent} slideWrapper`}>
                <h2 className="title">ключевое сообщение</h2>
                <p className={`text ${classes.text_slide3}`}>
                    brend<span className="text text_bold">xy</span>
                </p>
                <div className={classes.cards}>
                    <p className={`${classes.cards__item} ${classes.cards__item_bigger}`}>
                        Ehicula ipsum a arcu
                        cursus vitae. Eu non
                        diam phasellus
                        vestibulum lorem sed
                        risus ultricies
                    </p>
                    <div className={classes.cards__rightPart}>
                        <p className={`${classes.cards__item} ${classes.cards__item_less}`}>
                            A arcu
                            cursus vitae
                        </p>
                        <MyButton
                            classTitle={classes.MyButton_slideThree}
                            content="Подробнее"
                            svg={svgForSlideThree}
                            action={() => {
                                setShowPopUp(true);
                            }} />
                    </div>
                </div>
            </div>
            <img src="../../images/SlideThree/bottle.png" alt="bottle" width="22%" className={classes.bottle} />
            <img src="../../images/SlideThree/blueBubble.png" alt="bubble" className={`${classes.bubble} ${classes.bubble_blue1}`} />
            <img src="../../images/SlideThree/blueBubble.png" alt="bubble" className={`${classes.bubble} ${classes.bubble_blue2}`} />
            <img src="../../images/SlideThree/pinkBubble.png" alt="bubble" className={`${classes.bubble} ${classes.bubble_pink1}`} />
            <img src="../../images/SlideThree/blueBubble.png" alt="bubble" className={`${classes.bubble} ${classes.bubble_blue3}`} />
            <img src="../../images/SlideThree/pinkBubble.png" alt="bubble" className={`${classes.bubble} ${classes.bubble_pink2}`} />
            <img src="../../images/SlideThree/blueBubble.png" alt="bubble" className={`${classes.bubble} ${classes.bubble_blue4}`} />
            <img src="../../images/SlideThree/cutBlueBubble.png" alt="bubble" className={`${classes.bubble} ${classes.bubble_cutBlue}`} />
            <PopUp
                show={showPopUp}
                close={() => {
                    setShowPopUp(false);
                }} />
        </div>
    )
}

export default SlideThree;