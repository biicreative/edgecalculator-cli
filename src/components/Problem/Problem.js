// @flow
import React, { Component } from "react";
import { Box, Color } from "ink";
import SelectInput from "ink-select-input";
import Spinner from "ink-spinner";
import { Answer } from "./Answer";

type KeyValue = {
  label: string,
  value: string
};

type Props = {
  client: any
};

type State = {
  stage: string,
  questions: Array<KeyValue>,
  selectedQuestion: string,
  answer: string
};

export class Problem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      stage: "",
      questions: [
        { label: "Question1", value: "Question1" },
        { label: "Question2", value: "Question2" }
      ],
      selectedQuestion: "",
      answer: ""
    };
  }

  handleQuestionSelect = (item: KeyValue) => {
    this.setState({ stage: "LOADING", selectedQuestion: item.value });
    this.solve(item.value);
  };

  solve = async (question: string) => {
    // create the problem
    const problem = this.props.client.problem(question);
    const answer = await problem.solve();
    this.setState({ stage: "ANSWER", answer: answer });
  };

  render() {
    return (
      <div>
        <SelectInput
          items={this.state.questions}
          onSelect={this.handleQuestionSelect}
        />
        {this.state.stage === "LOADING" && (
          <Color green>
            <Spinner type="dots" />
            Loading...
          </Color>
        )}
        {this.state.stage === "ANSWER" && (
          <Box>
            <Answer data={this.state.answer} />
          </Box>
        )}
      </div>
    );
  }
}
