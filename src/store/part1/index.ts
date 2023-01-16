import {createSlice} from '@reduxjs/toolkit';
import {SlicePart1Reducer, StatePart1} from './interface';

const slicePart1 = createSlice<StatePart1, SlicePart1Reducer>({
  name: 'part1',
  initialState: {data: [], isLoading: false},
  reducers: {
    setData(state, {payload}) {
      state.data = payload;
    },
    setLoading(state, {payload}) {
      state.isLoading = payload;
    },
  },
});

const part1Reducer = slicePart1.reducer;
const part1Actions = slicePart1.actions;

export {part1Actions, part1Reducer, slicePart1};
