import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../../redux/features/contact/contactSlice';
import css from './Filter.module.css';
import { selectFilter } from 'redux/features/contact/selectors';

const Filter = () => {
  const dispatch = useDispatch();
   const  filter = useSelector(selectFilter);
  const onValueChange = (e) => {
    dispatch(addFilter(e.target.value));
  };
  return (
    <div className={css.filterWrapper}>
      <h2>Find contacts by name</h2>
      <input type="text" value={filter} onChange={onValueChange} />
    </div>
  );
};

export default Filter;
