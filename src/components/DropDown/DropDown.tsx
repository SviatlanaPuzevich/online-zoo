import styles from './dropdown.module.css';
import { useState } from 'react';
import type { DropDownOption } from '../../types/types.ts';

interface DropDownProps {
  title?: string;
  items?: DropDownOption[];
  name: string;
  valueName: string;
  selectedItem?: DropDownOption;
}

const DropDown: React.FC<DropDownProps> = ({ title='', items, name, valueName, selectedItem }) => {
  const [selected, setSelected] = useState<DropDownOption | null>(selectedItem || null);
  const [isOpen, setIsOpen] = useState(false);

  const onSelect = (item: DropDownOption) => {
    setSelected(item);
    setIsOpen(false);
  }

  return (
    <div className={styles.dropdown} id="animal-dropdown">
      <input type="hidden" name={name} value={selected?.id || ''} />

      <button className={styles.dropdown__trigger}>
        <input name={valueName} className={styles.dropdown__value} disabled={true} value={selected?.value || title} />
        <span className={styles.dropdown__arrow}>
                            <svg width="17" height="10" viewBox="0 0 17 10">
                                <path d="M0.359375 0.359375L8.11695 8.35938L16.3594 0.359375"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      fill="none" />
                            </svg>
                                </span>
      </button>
      {isOpen &&
      <div className={styles.dropdown__menu}>
        {items && items.map((item, index) => (
          <DropDownItem key={item.id || index} id={item.id || index} value={item.value || ''} onClick={onSelect} />
        ))}
      </div>
      }
    </div>
  )
    ;
};

export default DropDown;



interface DropDownItemProps {
  id?: string | number;
  value: string;
  onClick: (item: DropDownOption) => void;
}

const DropDownItem: React.FC<DropDownItemProps> = ({ id, value, onClick }) => {
  return <a href="#" onClick={(e) => {
    e.preventDefault();
    onClick({ id, value });
  }}>{value}</a>;

};