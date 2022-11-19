import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';
import { getFilter } from '../../redux/contacts/selectors';

import { FindLabel, FindInput } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleFilterInput = event => {
    const { value } = event.target;
    const action = setFilter(value);
    dispatch(action);
  };

  return (
    <FindLabel>
      Find contacts by name
      <FindInput
        type="text"
        value={filter}
        name="filter"
        onChange={handleFilterInput}
      ></FindInput>
    </FindLabel>
  );
};
