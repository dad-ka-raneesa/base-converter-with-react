import React from 'react';
import BaseConverter from './BaseConverter';

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
export default BaseConverters;