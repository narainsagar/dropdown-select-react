import React, { useRef, useState } from "react";
import { DropdownContainer, DropdownHeader, DropdownListContainer, DropdownList, DropdownListItem } from './Dropdown.styled';

interface Props {
  defaultItem?: string;
  items: string[];
}

function Dropdown(props: Props) {
    const defaultProps = {
        defaultItem: undefined,
        items: []
    };

  const { defaultItem, items } = props.items && props.items.length === 0 ? defaultProps : props;

  const [isOpen, toggle] = useState(false);
  const [selected, setSelected] = useState(defaultItem);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function onItemClicked(value: string) {
    setSelected(value);
    toggle(false);
    // console.log(selected);
  };

  return (
      <DropdownContainer ref={dropdownRef}>
        <DropdownHeader onClick={() => toggle(!isOpen)}>
          { selected }
        </DropdownHeader>
        {isOpen && (
          <DropdownListContainer>
            <DropdownList>
              {items.map((item) => (
                <DropdownListItem key={item}>
                    <button type="button" onClick={() => onItemClicked(item)}>
                        {item}
                    </button>
                </DropdownListItem>
              ))}
            </DropdownList>
          </DropdownListContainer>
        )}
      </DropdownContainer>
  );
}

export default Dropdown;