import { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
import ListItem from './ListItem';

const ListItems = () => {
  // context api
  const itemsList = useContext(ItemContext);
  if (!itemsList) return <p>No context yet</p>;
  const { items, setItems } = itemsList;

  const handleChecked = (id: number): void => {
    // update items checked status
    const updatedListItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    // update the list of items
    setItems(updatedListItems);
  };

  const handleDelete = (id: number): void => {
    // filter out all items not equal to the id being passed in
    const updatedListItems = items.filter((item) => item.id !== id);
    // update the list of items
    setItems(updatedListItems);
  };

  return (
    <>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              handleChecked={handleChecked}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      ) : (
        <p>The list is empty</p>
      )}
    </>
  );
};

export default ListItems;
