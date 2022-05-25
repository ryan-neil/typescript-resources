import { FC } from 'react';
import { ItemInterface } from '../interfaces';

interface ListItemInterface {
  item: ItemInterface;
  handleChecked: (id: number) => void;
  handleDelete: (id: number) => void;
}

const ListItem: FC<ListItemInterface> = ({
  item,
  handleChecked,
  handleDelete,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleChecked(item.id)}
      />
      <label>{item.task}</label>
      <button type="submit" onClick={() => handleDelete(item.id)}>
        Delete
      </button>
    </li>
  );
};

export default ListItem;
