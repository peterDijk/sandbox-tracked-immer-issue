import * as React from "react";
import { useTrackedState } from "./reducer";
const { useEffect, useState } = React;

export const App = () => {
  const state = useTrackedState();
  const { text } = state;

  return (
    <div>
      <div>
        <a
          href="https://github.com/peterDijk/react-typescript-rollup-starter"
          target="_blank"
        >
          <img src="images/GitHub-Mark-Light-32px.png" />
        </a>
      </div>
      {text}
    </div>
  );
};
