// @flow
import React, { Component } from "react";
import { Color, Box, Text } from "ink";

type Props = {
  data: string,
  question: { facts: Array<string>, question: string }
};

type State = {};

const toEmoji = (text: string) => {
  return text
    .replace("cats", "😺")
    .replace("cat", "😺")
    .replace("dogs", "🐶")
    .replace("dog", "🐶");
};

export class Answer extends Component<Props, State> {
  render() {
    const { data, question } = this.props;
    return (
      <div>
        {question.facts.map((fact, i) => (
          <Color grey key={i}>
            {toEmoji(fact)}
          </Color>
        ))}
        <Box>
          <Text>{toEmoji(question.question)}</Text>
        </Box>
        <Box>
          <Color blue>{data}</Color>
        </Box>
      </div>
    );
  }
}
