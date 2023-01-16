import {useCallback, useEffect} from 'react';
import {part1Actions} from '.';
import {fetchRandomUsers} from '../../api/part1';
import {useAppDispatch, useAppSelector} from '../hooks';
import part1Selectors from './selectors';

export function useRandomUsers() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(part1Selectors.selectIsLoading);
  const data = useAppSelector(part1Selectors.selectData);

  const fetchData = useCallback(async () => {
    dispatch(part1Actions.setLoading(true));
    const users = await fetchRandomUsers();
    console.log('users', users);
    dispatch(part1Actions.setData(users));
    dispatch(part1Actions.setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {isLoading, data, fetchData};
}
