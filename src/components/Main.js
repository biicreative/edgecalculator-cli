// @flow
import React, { Component } from "react";
import { Client } from "edgecalculator";
import { Problem } from "./Problem";

type Props = {
  config: any
};
type State = {
  client: any
};

class Main extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    //TODO: add config validation
    const client = new Client({
      baseUrl: props.config.url
    });
    this.state = {
      client: client
    };
  }

  render() {
    return (
      <div>
        <Problem client={this.state.client} />
      </div>
    );
  }
}

export default Main;
