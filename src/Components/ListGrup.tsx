import { useState } from "react";

interface Props {
  items: string[];
  hedding: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, hedding, onSelectItem }: Props) {
  // det er en hook som gør at variabler kan blive updater
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{hedding}</h1>
      {items.length == 0 && <p> no itme founde</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
