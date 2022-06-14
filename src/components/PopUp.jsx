import { useState } from 'react'
import classes from '../styles/popUp.module.css'
import PopUpSlide from './PopUpSlide';

function PopUp(props) {

    const [nextSlide,setNextSlide] = useState(false)

    if (props.show) {
        return (
            <div className={classes.popUpWrapper}>
                <div className={classes.popUp}>
                    <header className={classes.popUp__header}>
                        <p className="title">преимущества</p>
                        <button className={classes.closeBtn} onClick={()=>{
                            setNextSlide(false);
                            props.close();
                            }} />
                    </header>
                   <PopUpSlide nextSlide={nextSlide}/>
                    <nav className={classes.nav}>
                        <button className={classes.nav__btn} onClick={()=>setNextSlide(false)}/>
                        <button className={`${classes.nav__circleBtn} ${nextSlide ? '' : classes.nav__circleBtn_active}`} onClick={()=>setNextSlide(false)}/>
                        <button className={`${classes.nav__circleBtn} ${nextSlide ? classes.nav__circleBtn_active : ''}`} onClick={()=>setNextSlide(true)}/>
                        <button className={classes.nav__btn} onClick={()=>setNextSlide(true)}/>
                    </nav>
                </div>
            </div>
        )
    } else {
        return (
            <div className={`${classes.popUpWrapper} ${classes.popUpWrapper_closed}`} >
                <div className={classes.popUp}>
                    <header className={classes.popUp__header}>
                        <p className="title">преимущества</p>
                        <button className={classes.closeBtn} onClick={()=>{
                            setNextSlide(false);
                            props.close();
                            }} />
                    </header>
                   <PopUpSlide nextSlide={nextSlide}/>
                    <nav className={classes.nav}>
                        <button className={classes.nav__btn} onClick={()=>setNextSlide(false)}/>
                        <button className={`${classes.nav__circleBtn} ${nextSlide ? '' : classes.nav__circleBtn_active}`} onClick={()=>setNextSlide(false)}/>
                        <button className={`${classes.nav__circleBtn} ${nextSlide ? classes.nav__circleBtn_active : ''}`} onClick={()=>setNextSlide(true)}/>
                        <button className={classes.nav__btn} onClick={()=>setNextSlide(true)}/>
                    </nav>
                </div>
            </div>
        )
    }

}

export default PopUp