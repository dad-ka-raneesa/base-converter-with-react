import React from 'react';

class BaseConverter extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const value = event.target.value;
    const lastNumber = value.split('').slice(-1);
    const lastKey = parseInt(lastNumber, this.props.base);
    if (isNaN(lastKey) && value.length !== 0) return;
    this.props.onChange(parseInt(value, this.props.base));
  }

  render() {
    const value = isNaN(this.props.value) ? '' : this.props.value;
    return (
      <div>
        <label>
          Base {this.props.base} :
        <input
            type='text'
            value={value.toString(this.props.base)}
            onChange={this.handleClick}></input>
        </label>
      </div>
    );
  }
}

export default BaseConverter;