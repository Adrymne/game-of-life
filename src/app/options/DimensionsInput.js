import React from 'react';
import './DimensionsInput.css';
import { Form, Button, Input } from 'reactstrap';
import { applySpec } from 'ramda';
import { connect } from 'react-redux';
import { boardSize } from 'store/selectors';
import { resizeBoard } from 'store/actions';

class DimensionsInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { rows: props.size.rows, cols: props.size.cols };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.resizeBoard(
      parseInt(this.state.rows, 10),
      parseInt(this.state.cols, 10)
    );
  };
  updateRows = event => {
    this.setState({ rows: event.target.value });
  };
  updateCols = event => {
    this.setState({ cols: event.target.value });
  };

  render() {
    const { rows, cols } = this.state;
    return (
      <Form className="options__dimensions-input" onSubmit={this.handleSubmit}>
        <Input
          name="rows"
          type="number"
          min={2}
          value={rows}
          onChange={this.updateRows}
        />
        <div className="options__dimensions-input-label">x</div>
        <Input
          name="cols"
          type="number"
          min={2}
          value={cols}
          onChange={this.updateCols}
        />
        <Button type="submit" color="primary">
          Update
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = applySpec({ size: boardSize });
const mapDispatchToProps = { resizeBoard };
export default connect(mapStateToProps, mapDispatchToProps)(DimensionsInput);
