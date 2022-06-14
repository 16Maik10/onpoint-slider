import './styles/index.css'
import Nav from './components/Nav'
import SlideOne from './components/SlideOne';
import SlideTwo from './components/SlideTwo';
import Footer from './components/Footer';
import React from 'react';
import SlideThree from './components/SlideThree';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 1,
      swipeStartX: 0,
      swipeEndX: 0,
      swipeStartY: 0,
      swipeEndY: 0,
      countOfSlides: 3
    }
  }

  setPosition = (posX, posY, varX, varY) => {
    this.setState({
      [varX]: posX,
      [varY]: posY,
    })
  }

  swapNext = () => {
    if (this.state.currentSlide === this.state.countOfSlides) {
      return
    }
    this.setState((state) => ({ currentSlide: state.currentSlide + 1 }));
    this.state.slides.scrollTo({
      left: this.state.slides.offsetWidth * this.state.currentSlide,
      behavior: 'smooth'
    })
  }

  swapPrev = () => {
    if (this.state.currentSlide === 1) {
      return
    }
    this.setState((state) => ({ currentSlide: state.currentSlide - 1 }));
    this.state.slides.scrollTo({
      left: this.state.slides.offsetWidth * (this.state.currentSlide - 2),
      behavior: 'smooth'
    })
  }

  home = () => {
    this.setState({ currentSlide: 1 });
    this.state.slides.scrollTo({
      left: 0,
      behavior: 'smooth'
    })
  }

  spermAppear = (miniSperms,mainSperm) => {
    const miniAppearFunc = el => {
      el.style.transition = 'opacity 4s, transform 4s';
      el.style.opacity = 0.5;
      el.style.transform = 'translate(0,0)'
    }
    const DisappearFunc = el => {
      setTimeout(() => {
        el.style.opacity = 0;
        el.style.transform = 'translate(10vw,5vw)';
        el.style.transition = 'unset';
      }, 300)
    }
    const mainAppearFunc = el => {
      el.style.transition = 'opacity 4s, transform 4s';
      el.style.opacity = 1;
      el.style.transform = 'translate(0,0)'
    }
    if (this.state.currentSlide === 2) {
      miniSperms.forEach(el => miniAppearFunc(el));
      mainAppearFunc(mainSperm);
    } else {
      miniSperms.forEach(el => DisappearFunc(el));
      DisappearFunc(mainSperm);
    }
  }

  componentDidMount() {
    let $ = document.getElementById.bind(document),
      container = $('scrollbar-container'),
      content = $('message'),
      scroll = $('scrollbar'),
      miniSperms = [$('sperm1'), $('sperm2'), $('sperm3'), $('sperm4')],
      mainSperm = $('mainSperm')

    this.setState({
      slides: document.querySelector('.slides'),
    });
    document.addEventListener('touchstart', (e) => {
      if (e.path.includes(scroll)) {
        return false
      }
      const posX = e.changedTouches[0].clientX;
      const posY = e.changedTouches[0].clientY;
      this.setPosition(posX, posY, 'swipeStartX', 'swipeStartY')
    });
    document.addEventListener('touchend', (e) => {
      if (e.path.includes(scroll)) {
        return false
      }
      const posX = e.changedTouches[0].clientX;
      const posY = e.changedTouches[0].clientY;
      this.setPosition(posX, posY, 'swipeEndX', 'swipeEndY')
      setTimeout(() => {
        const { swipeStartX, swipeEndX, swipeStartY, swipeEndY } = this.state;
        if (swipeStartX === swipeEndX || Math.abs(swipeEndY - swipeStartY) > Math.abs(swipeStartX - swipeEndX)) {
          return
        } else if (swipeStartX > swipeEndX) {
          this.swapNext();
        } else {
          this.swapPrev();
        }
      }, 10)
      setTimeout(() => this.spermAppear(miniSperms,mainSperm), 100)
    })


    function handleScroll(start) {
      start.preventDefault();
      let y = scroll.offsetTop;
      let onMoveByMouse = function (end) {
        let delta = end.pageY - start.pageY;
        scroll.style.top = Math.min(container.clientHeight - scroll.clientHeight, Math.max(0, y + delta)) + 'px';
        content.scrollTop = (content.scrollHeight * scroll.offsetTop / container.clientHeight);
      };
      let onMoveByTouch = function (end) {
        let delta = end.changedTouches[0].clientY - start.changedTouches[0].clientY;
        scroll.style.top = Math.min(container.clientHeight - scroll.clientHeight, Math.max(0, y + delta)) + 'px';
        content.scrollTop = (content.scrollHeight * scroll.offsetTop / container.clientHeight);
      };
      document.addEventListener('mousemove', onMoveByMouse);
      document.addEventListener('touchmove', onMoveByTouch);
      document.addEventListener('mouseup', function () {
        document.removeEventListener('mousemove', onMoveByMouse);
      });
      document.addEventListener('touchend', function () {
        document.removeEventListener('touchmove', onMoveByTouch);
      });
    }

    content.addEventListener('scroll', function (e) {
      scroll.style.height = container.clientHeight * content.clientHeight / content.scrollHeight + "px";
      scroll.style.top = container.clientHeight * content.scrollTop / content.scrollHeight + "px";
    });
    let event = new Event('scroll');

    window.addEventListener('resize', content.dispatchEvent.bind(content, event));
    content.dispatchEvent(event);

    scroll.addEventListener('mousedown', handleScroll);
    scroll.addEventListener('touchstart', handleScroll);
  }
  render() {
    return (
      <div className="App">
        <div className='Wrapper'>
          <Nav action={this.home} />
          <div className="slides">
            <SlideOne action={this.swapNext} />
            <SlideTwo />
            <SlideThree />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

}

export default App;
