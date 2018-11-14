import React, { Component } from 'react';
import Quiz from './Quiz/Quiz'
import './App.css';

import Slider from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


class App extends Component {

  slider

  constructor(props) {
    super(props)
    this.state = {
      content: [
        { text: 'hello' },
        { text: 'hello' },
        { text: 'hello' },
        { text: 'hello' }
      ],
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      autoplay: true,
      slideIndex: 0
    }
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };


  render() {
    const { content } = this.state
    return (
      <div className="container-fluid">
        <Row>
          <Col span={12}>
            <Button bsStyle="primary" onClick={this.slidePrev}>
              Slider prev
            </Button>
            <Button bsStyle="primary" onClick={this.slideNext}>
              Slider next
            </Button>
          </Col>
          <Col span={12} style={{ paddingTop: "20px" }}>
            <Slider
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={2000}
              onSelect={this.onSelect}
              ref={r => (this.slider = r)}
              version={4}
            >
              {content.map((article, index) =>
                <div key={index}>
                  <Quiz />
                </div>
              )}
            </Slider>
          </Col>
        </Row>
      </div>
    );
  }
}

/**
 *  Boostrap Component
 */
const Row = props => <div className="row">{props.children}</div>;
const Col = props => (
  <div className={`col-${props.span}`} style={props.style}>
    {props.children}
  </div>
);
const Button = props => {
  const { style, bsStyle, onClick } = props;
  const className = bsStyle ? `btn btn-${bsStyle}` : "btn";
  return (
    <button style={style} className={className} onClick={onClick}>
      {props.children}
    </button>
  );
};

const styles = { height: 400, width: "100%" };


export default App;
