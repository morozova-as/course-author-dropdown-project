import { TriggerComponent } from 'components/dropdown-menu';
import { MoreVertical } from 'components/icons';
import { Button } from 'components/button';

const TriggerElement = () => (
  <Button>
    <MoreVertical />
  </Button>
);

export function App() {
  return (
    <div>
      <TriggerComponent TriggerElement={TriggerElement} />
    </div>
  );
}
