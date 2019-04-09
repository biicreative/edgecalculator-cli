// @flow
import React, { Component } from "react";
import { Color, Box } from "ink";

type Props = {
  data: any
};

type State = {};

export class Answer extends Component<Props, State> {
  render() {
    const { data } = this.props;
    return (
      <Box>
        <Color grey>{data}</Color>
      </Box>
    );
  }
}
