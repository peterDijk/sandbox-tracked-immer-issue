import { useReducer, useEffect } from 'react';
import produce from 'immer';
import { createContainer } from 'react-tracked';

interface State {
  text: string;
}

interface SetTextAction {
  type: 'SET_TEXT_ACTION',
  payload: {
    text: string;
  }
}

type Actions = SetTextAction

export function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case 'SET_TEXT_ACTION': {
      return produce(state, (draft) => {
        draft.text = action.payload.text
      })
    }
    default: {
      return state;
    }
  }
}

const useValue = (props: { initialState?: State }): [State, React.Dispatch<Actions>] => {
	const [state, dispatch] = useReducer(reducer, props.initialState ? props.initialState : { text: 'initial' });

  useEffect(() => {
    dispatch({ type: 'SET_TEXT_ACTION', payload: { text: 'from useEffect'}})
  }, [])

	return [state, dispatch];
};

export const {
	Provider: TrackedProvider,
	useTrackedState: useTrackedState,
	useUpdate: useDispatch,
} = createContainer<State, React.Dispatch<Actions>, { initialState?: State }>(useValue);
