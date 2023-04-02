import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../../redux/features/contact/contactSlice';
import css from './Filter.module.css';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => {
    return state.contact.filter;
  });
  const onValueChange = e => {
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
