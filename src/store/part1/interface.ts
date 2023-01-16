import {CaseReducer, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';
import {User} from '../../api/part1';

export interface StatePart1 {
  isLoading: boolean;
  data: User[];
}

export interface SlicePart1Reducer extends SliceCaseReducers<StatePart1> {
  setLoading: CaseReducer<StatePart1, PayloadAction<boolean>>;
  setData: CaseReducer<StatePart1, PayloadAction<User[]>>;
}
