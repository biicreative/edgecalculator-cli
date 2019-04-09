// @flow
import React, { Component } from "react";
import { Color, Box, Text } from "ink";

type Props = {
  data: string,
  question: { facts: Array<string>, question: string }
};

type State = {};

export class Answer extends Component<Props, State> {
  render() {
    const { data, question } = this.props;
    return (
      <div>
        {question.facts.map((fact, i) => (
          <Color grey key={i}>
            {fact}
          </Color>
        ))}
        <Box>
          <Text>{question.question}</Text>
        </Box>
        <Box>
          <Color blue>{data}</Color>
        </Box>
      </div>
    );
  }
}
