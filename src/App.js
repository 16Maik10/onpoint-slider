import './styles/index.css'
import Nav from './components/Nav'
import SlideOne from './components/SlideOne';
import SlideTwo from './components/SlideTwo';
import Footer from './components/Footer';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: '',
      currentSlide: 1,
      swipeStartX: 0,
      swipeEndX: 0,
      swipeStartY: 0,
      swipeEndY: 0,
      countOfSlides: 4
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
    console.log(this.state.currentSlide)
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
    console.log(this.state.currentSlide)
  }

  home = () => {
    this.setState({ currentSlide: 1 });
    this.state.slides.scrollTo({
      left: 0,
      behavior: 'smooth'
    })
  }

  componentDidMount() {
    let $ = document.getElementById.bind(document),
      container = $('scrollbar-container'),
      content = $('message'),
      scroll = $('scrollbar');

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
    })

    console.log('Start');

    function handleScroll (start) {
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
    console.log('Done');
  }
  render() {
    return (
      <div className="App">
        <div className='Wrapper'>
          <Nav action={this.home} />
          <div className="slides">
            <SlideOne action={this.swapNext} />
            <SlideTwo show={this.state.currentSlide === 2} />
            <SlideOne action={this.swapNext} />
            <SlideTwo />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

}

export default App;
