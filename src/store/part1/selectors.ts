import {RootState} from '..';

function selectIsLoading(state: RootState) {
  return state.part1.isLoading;
}

function selectData(state: RootState) {
  return state.part1.data;
}

const part1Selectors = {
  selectIsLoading,
  selectData,
};

export default part1Selectors;
