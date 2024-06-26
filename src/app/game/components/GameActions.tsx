'use client';

import { inventoryAtom } from '@/state/player/inventory';
import { playerRoomAtom } from '@/state/player/room';
import { useAtomValue } from 'jotai';

export function GameActions() {
  const playerRoom = useAtomValue(playerRoomAtom);
  const inventory = useAtomValue(inventoryAtom);

  const actions = [{ method: 'USE' }, ...playerRoom.actions];

  return (
    <section className="flex flex-col gap-8 rounded-lg border-2 border-neutral-7 p-8 md:flex-row">
      <div className="flex flex-1 flex-col gap-3">
        <div className="text-lg font-bold">Available actions</div>
        <ul className="flex gap-3">
          {actions.map((action) => (
            <li className="token" key={action.method}>
              {action.method}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="text-lg font-bold">Inventory</div>
        <ul className="flex gap-3">
          {!inventory.length && (
            <div className="text-neutral-11">No inventory items</div>
          )}
          {inventory.map((item) => (
            <li className="token" key={item.item}>
              {item.item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
