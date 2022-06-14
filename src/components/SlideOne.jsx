import classes from '../styles/slideOne.module.css'
import MyButton from '../UI/MyButton/MyButton';

function SlideOne(props) {

    const svgForSlideOne = (<svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 330 330"
    >
        <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
    </svg>)


    return (
        <div className={`${classes.SlideOne} ${props.display ? 'show' : 'hide'}`} id="SlideOne">
            <div className="slideWrapper">
                <h2 className={`title ${classes.title_slide1}`}>
                    привет,
                </h2>
                <p className={`text`}>
                    это <span className={`text text_bold`}>не</span>
                    коммерческое
                    задание
                    <MyButton content="Что дальше?" svg={svgForSlideOne} action={props.action} classTitle={classes.MyButton_slideOne}/>
                </p>
            </div>
            <img src="../../images/SlideOne/bio1.png" width="71px" height="68px" className={`${classes.bio} ${classes.bio_topRight}`} alt="bio" />
            <img src="../../images/SlideOne/bio2.png" width="125px" height="115px" className={`${classes.bio} ${classes.bio_topLeft}`} alt="bio" />
            <img src="../../images/SlideOne/pink_sperm_top.png" className={`${classes.bio} ${classes.bio_spermTop}`} alt="sperm" />
            <img src="../../images/SlideOne/bio_bottom_left.png" width="73px" height="71px" className={`${classes.bio} ${classes.bio_bottomLeft}`} alt="bio" />
            <img src="../../images/SlideOne/pink_sperm_bottom.png" height="124px" className={`${classes.bio} ${classes.bio_spermBottom}`} alt="sperm" />
            <img src="../../images/SlideOne/bio_bottom_center.png" width="73px" height="71px" className={`${classes.bio} ${classes.bio_bottomCenter}`} alt="bio" />
            <img src="../../images/SlideOne/big_bio.png" width="227px" height="127px" className={`${classes.bio} ${classes.bio_big}`} alt="bio" />
            <img src="../../images/SlideOne/bio_top_active.png" width="55px" height="55px" className={`${classes.bio} ${classes.bio_topActive}`} alt="bio" />
            <img src="../../images/SlideOne/bio_right.png" width="95px" height="95px" className={`${classes.bio} ${classes.bio_right}`} alt="bio" />
        </div>
    )
}

export default SlideOne;