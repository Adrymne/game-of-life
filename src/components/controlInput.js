import React from 'react';

export default WrappedComponent =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: props.value };
    }

    handleChange = value => {
      this.setState({ value });
    };

    render() {
      const { value } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          value={value}
          onChange={this.handleChange}
        />
      );
    }
  };
