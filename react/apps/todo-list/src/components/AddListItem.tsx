import { ChangeEvent, FormEvent, useState, useContext } from 'react';
import { ItemContext } from '../context/ItemContext';

const AddListItem = () => {
  const [inputValue, setInputValue] = useState<string>('');
  // context api
  const itemsList = useContext(ItemContext);
  if (!itemsList) return <p>No context yet</p>;
  const { items, setItems } = itemsList;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // create new item object
  const addItem = (item: string) => {
    // set the id for the new item
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    // create the new item object
    const newItem = {
      id: id,
      checked: false,
      task: item,
    };

    // add the new item to the items list array
    const updatedListItems = [...items, newItem];
    // update the items list state
    setItems(updatedListItems);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // prevent page refresh
    e.preventDefault();
    // err check
    if (!inputValue) return;
    // add the new item to the items list
    addItem(inputValue);
    // reset the input value
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="add-item">
        <input
          type="text"
          name="add-item"
          placeholder="Add an item..."
          value={inputValue}
          onChange={handleChange}
          required
        />
        <button type="submit">Add</button>
      </label>
    </form>
  );
};

export default AddListItem;
