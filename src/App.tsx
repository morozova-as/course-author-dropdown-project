import { DropdownMenu, DropdownProvider } from 'components/dropdown-menu';
import { ExampleButton } from 'components/example-components';
import { EditIcon, ShareIcon, TrashIcon } from './components/icons';
import style from './styles.module.scss';

const menuMock = [
  {
    text: 'Поделиться в социальных сетях',
    Icon: ShareIcon,
    onClick: () => {
      console.log('Share...');
    },
  },
  {
    text: 'Редактировать страницу',
    Icon: EditIcon,
    onClick: () => {
      console.log('Edit...');
    },
  },
  {
    text: 'Удалить страницу',
    Icon: TrashIcon,
    onClick: () => {
      console.log('Delete...');
    },
  },
];
export function App() {
  return (
    <div className={style.container}>
      <DropdownProvider>
        <div className={style.item}>
          <DropdownMenu
            id="menu-1"
            TriggerElement={ExampleButton}
            triggerMove="onClick"
            menuElements={menuMock}
          />
        </div>
        <div className={style.item}>
          <DropdownMenu
            id="menu-2"
            TriggerElement={ExampleButton}
            triggerMove="onClick"
            menuElements={menuMock}
          />
        </div>
        <div className={style.item}>
          <DropdownMenu
            id="menu-3"
            TriggerElement={ExampleButton}
            triggerMove="onClick"
            menuElements={menuMock}
          />
        </div>
        <div className={style.item}>
          <DropdownMenu
            id="menu-4"
            TriggerElement={ExampleButton}
            triggerMove="onClick"
            menuElements={menuMock}
          />
        </div>
      </DropdownProvider>
    </div>
  );
}
