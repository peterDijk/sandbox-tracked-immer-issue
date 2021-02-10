import * as React from "react";
import { useTrackedState } from "./reducer";

export const App = () => {
  const state = useTrackedState();
  const { text } = state;

  return (
    <div>
      <div>
        <a
          href="https://github.com/peterDijk/sandbox-tracked-immer-issue"
          target="_blank"
        >
          <img src="images/GitHub-Mark-Light-32px.png" />
        </a>
      </div>
      {text}
    </div>
  );
};
