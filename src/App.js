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
      swipeStart: 0,
      swipeEnd: 0,
      countOfSlides: 4
    }
  }

  setPosition = (pos, variable) => {
    this.setState({ [variable]: pos })
  }

  swapNext = () => {
    if(this.state.currentSlide === this.state.countOfSlides) {
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
    console.log('i did')
    this.setState({
      slides: document.querySelector('.slides'),
    });
    document.addEventListener('touchstart', (e) => {
      const pos = e.changedTouches[0].clientX;
      this.setPosition(pos, 'swipeStart')
    });
    document.addEventListener('touchend', (e) => {
      const pos = e.changedTouches[0].clientX;
      this.setPosition(pos, 'swipeEnd');
      setTimeout(()=> {if(this.state.swipeStart === this.state.swipeEnd){
        return
      } else if (this.state.swipeStart > this.state.swipeEnd){
        this.swapNext();
      } else {
        this.swapPrev();
      }}, 10)
      
    })
}
  render() {
    return (
      <div className="App">
        <div className='Wrapper'>
          <Nav action={this.home} />
          <div className="slides">
            <SlideOne action={this.swapNext} />
            <SlideTwo />
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
