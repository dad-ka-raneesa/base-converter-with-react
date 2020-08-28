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

class BaseConverters extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.base = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    const baseConverters = this.base.map((base) => (
      <BaseConverter
        base={base}
        value={this.state.value}
        onChange={this.handleChange}
        key={base}
      />
    ));
    return <div style={{ margin: '30px' }}>
      <h2>Base Converters</h2>
      {baseConverters}
    </div>;
  }
}

const App = () => {
  return <BaseConverters />
}

export default App;
