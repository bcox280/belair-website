'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface Props {
  key: number;
  event: {
    id: number;
    active: boolean;
    name: string;
  };
}

export const EventList: React.FC<Props> = ({ event, key }) => {
  return (
    <div key={'event_' + key} className="flex flex-row space-x-4">
      <div>{event.active}</div>
      <div>{event.name}</div>

      <Link href={`./${event.id}`}>
        <Button>Select Event</Button>
      </Link>
    </div>
  );
};
