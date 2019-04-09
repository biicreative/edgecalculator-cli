#!/usr/bin/env node

import "@babel/polyfill";
import React from "react";
import meow from "meow";
import { render } from "ink";
import Main from "./components/Main";

const cli = meow(
  `
    Usage
      $ edgecalculator-cli  

    Options
      --url, -u   Set the calculator gateway
  `,
  {
    flags: {
      url: {
        type: "string",
        alias: "u"
      }
    }
  }
);

const main = () => {
  let unmount; // eslint-disable-line prefer-const

  const onError = () => {
    unmount();
    process.exit(1);
  };

  const onExit = () => {
    unmount();
    process.exit();
  };

  unmount = render(<Main config={cli.flags} />, { onError, onExit });
};

main();
