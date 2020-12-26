import React from 'react';

class GameDiv extends React.Component {

  state ={click: false};

  onFormSubmit = (e) => {
    e.preventDefault();
    this.setState({click: true});
    this.props.onSubmit(this.state.click);
  }

  render() {
    return (
        <div class="col">
          <p>{this.props.text}</p>
          <form onSubmit={this.onFormSubmit}>
            <button
              type="submit"
              className="btn btn-primary">{this.props.buttonText}</button>
          </form>
        </div>
    );
  }
}

export default GameDiv;
