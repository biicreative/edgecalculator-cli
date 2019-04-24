// @flow
import React, { Component } from "react";
import { Box, Color } from "ink";
import SelectInput from "ink-select-input";
import Spinner from "ink-spinner";
import { Answer } from "./Answer";
import { questions } from "./data";

type KeyValue = {
  label: string,
  value: string
};

type Props = {
  client: any
};

type State = {
  isLoading: boolean,
  questions: Array<KeyValue>,
  selectedQuestion: { facts: Array<string>, question: string },
  answer: string
};

export class Problem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: false,
      questions: questions,
      selectedQuestion: { facts: [], question: "" },
      answer: ""
    };
  }

  handleQuestionSelect = (item: KeyValue) => {
    // create the problem
    const problem = this.props.client.problem(item.value);
    const question = problem.parse();
    this.setState({ isLoading: true, selectedQuestion: question, answer: "" });
    this.solve(problem);
  };

  solve = async (problem: any) => {
    const answer = await problem.solve();
    this.setState({ isLoading: false, answer: answer });
  };

  render() {
    const { answer, questions, selectedQuestion, isLoading } = this.state;
    return (
      <div>
        <SelectInput items={questions} onSelect={this.handleQuestionSelect} />
        <Box>--- ---- ---</Box>
        <Box>
          <Answer data={answer} question={selectedQuestion} />
        </Box>
        {isLoading && (
          <Color green>
            <Spinner type="dots" />
            Loading...
          </Color>
        )}
      </div>
    );
  }
}
