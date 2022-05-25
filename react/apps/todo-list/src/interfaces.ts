export interface ItemInterface {
  id: number;
  checked: boolean;
  task: string;
}

export interface ItemStatesInterface {
  items: ItemInterface[];
  setItems: Function;
}
