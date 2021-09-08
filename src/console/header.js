import React, { Component } from "react";
import Resume from "../Images/BaluResume.pdf";
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      wordIndex: 0,
      isDeleting: false,
      isWaiting: false,
    };
  }

  componentDidMount() {
    window.addEventListener("load", this.type());
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.type());
  }

  type = () => {
    const { wordIndex, isDeleting, text } = this.state;
    const currentIndex = wordIndex % this.props.words.length;
    const currentWord = this.props.words[currentIndex];

    this.setState({ isWaiting: false });

    if (isDeleting) {
      this.setState({
        text: currentWord.substring(0, text.length - 1),
      });
    } else {
      this.setState({
        text: currentWord.substring(0, text.length + 1),
      });
    }

    let typeSpeed = 200;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!isDeleting && text === currentWord) {
      typeSpeed = Math.random() * Math.floor(3) * 1000;

      this.setState({
        isWaiting: true,
        isDeleting: true,
      });
    } else if (isDeleting && text === "") {
      this.setState({
        isDeleting: false,
        wordIndex: this.state.wordIndex + 1,
      });
      typeSpeed = 400;
    }

    setTimeout(() => this.type(), typeSpeed);
  };

  render() {
    const { text, isWaiting } = this.state;
    return (
      <div className="typewriter">
        <p className="text">
          Hi, my name is{" "}
          <span style={{ color: "#35b4a9" }}>Balachander Rao Palepu</span>
        </p>
        <div className="textContainer">
          <span>I'm a </span>{" "}
          <span className={`dynamic-text ${isWaiting ? "fade" : ""}`}>
            {text}
          </span>
        </div>
        <p className="statement">
          A passionate individual who loves to design and create visual stories
          that <br />
          educate and entertain.
        </p>
        <div className="buttons">
          <a href="#about" className="button">
            Know more
          </a>
          <a href={Resume} target="_blank" rel="noreferrer" className="button">
            Download Resume
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
