import classes from '../styles/SlideTwo.module.css'

function SlideTwo(props) {
    return (
        <div className={` ${classes.SlideTwo} ${props.display ? 'show' : 'hide'}`} id="SlideTwo">
            <img src="../../images/SlideTwo/sperm_1.png" className={`${classes.sperm} ${classes.sperm_1} ${props.show ? classes.spermAppears : ''}`} alt="sperm" />
            <img src="../../images/SlideTwo/sperm_2.png" className={`${classes.sperm} ${classes.sperm_2} ${props.show ? classes.spermAppears : ''}`} width="12vw" alt="sperm" />
            <img src="../../images/SlideTwo/sperm_main.png" className={`${classes.sperm} ${classes.sperm_main} ${props.show ? classes.spermMainAppears : ''}`} width="60vw" alt="sperm" />
            <img src="../../images/SlideTwo/sperm_3.png" className={`${classes.sperm} ${classes.sperm_3} ${props.show ? classes.spermAppears : ''}`} width="7vw" alt="sperm" />
            <img src="../../images/SlideTwo/sperm_4.png" className={`${classes.sperm} ${classes.sperm_4} ${props.show ? classes.spermAppears : ''}`} width="5vw" alt="sperm" />
            <div className={`${classes.mainContent} slideWrapper`}>
                <h2 className={classes.title}>текст сообщения</h2>
                <div className={classes.messageBox}>
                    <div id="scrollbar-container">
                        <div id="scrollbar"></div>
                    </div>
                    <div className={classes.messageWrapper} id="message">
                        <p className={classes.message}>
                            <strong> Lorem ipsum dolor sit,</strong> amet consectetur adipisicing elit. Quisquam sed voluptates natus autem officia ipsam itaque nobis quaerat nesciunt quod adipisci eveniet voluptatum, tempore iusto error distinctio officiis perferendis fugit magnam. Aperiam officia ut suscipit unde. Voluptas dolorum exercitationem, atque quidem sapiente quia eaque eligendi nobis est autem fugiat voluptatibus recusandae iusto molestias placeat ratione libero deserunt laudantium maiores? Hic culpa sapiente, optio ipsam ullam sed soluta consequuntur! Dolor porro aut exercitationem rerum quaerat. Eius libero porro cum accusamus possimus nihil. Libero aliquam, illo ab eum tempore ipsa est, nisi unde placeat, vitae sunt autem veniam praesentium ex. Eveniet rerum culpa voluptatem unde, vel quia numquam illum natus architecto a, maiores expedita veniam esse possimus mollitia libero soluta eligendi inventore eum quae nam qui cum! Consequuntur quasi delectus culpa laboriosam. Ex doloribus voluptatum sed dolor neque, nemo velit suscipit totam similique non iusto deleniti a natus repellendus animi consequatur aliquid ipsum pariatur eligendi itaque. Adipisci modi rerum ipsa eaque soluta id nulla distinctio asperiores quidem, hic, quod ea aperiam eum? Quod veniam amet atque qui deleniti a temporibus, in soluta quas, officiis minima omnis, corporis nostrum assumenda nesciunt. Dolore blanditiis tenetur culpa ad impedit deleniti possimus hic excepturi magni laudantium earum omnis, aliquam repudiandae aut quo iure cum accusantium corrupti delectus explicabo. Alias laudantium et impedit ratione est cumque accusamus dignissimos, recusandae omnis doloribus ipsa nulla, non, magnam tenetur atque praesentium eos cupiditate quibusdam suscipit expedita! Dolore praesentium sit nulla adipisci tempore corporis, neque inventore deleniti suscipit magni voluptate et dolores expedita eveniet possimus consequuntur ab libero, tenetur repudiandae minima maxime nemo ducimus? Vero quos nam ut laboriosam nesciunt recusandae! Incidunt, rerum! Ex nemo, earum sit necessitatibus tenetur, ea consequatur tempora omnis similique cumque expedita unde adipisci dolorem. Maxime consequuntur qui molestiae unde laudantium accusamus ratione quo eos, iste rerum error eveniet consequatur consectetur perspiciatis aliquid delectus iusto ipsam eum sunt impedit aspernatur quia maiores, voluptatibus tenetur. Vel aut placeat voluptatibus nemo corrupti est blanditiis sequi velit. Nam, sint odit! Pariatur doloribus, a reiciendis perspiciatis ipsam exercitationem nostrum culpa commodi quidem, magnam repellendus eius ipsum recusandae sunt alias nulla non.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SlideTwo;