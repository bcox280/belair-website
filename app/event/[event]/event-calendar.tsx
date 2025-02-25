'use client';

import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';

import { submitDates } from './submit-dates-action';

interface Props {
  event_id: string;
}

// need this exact same thing, but instead of having the dates like, well this. we have them prefilled from the db!
export const Event: React.FC<Props> = ({ event_id }) => {
  const [dates, setDates] = useState<Date[] | undefined>([new Date()]);

  const submitDatesHydrated = submitDates.bind(null, dates, event_id);
  const [fullDayMode, setFullDayMode] = useState(true);
  return (
    <form
      className="flex h-full w-2/5 flex-col items-center justify-center space-y-4"
      action={submitDatesHydrated}
    >
      <div className="flex flex-row space-x-2 self-start">
        <Checkbox
          className="self-center"
          onClick={() => setFullDayMode(!fullDayMode)}
        ></Checkbox>
        <div>{fullDayMode ? 'Full Day' : 'Half Day'}</div>
      </div>
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="flex flex-col items-center justify-center rounded-md border"
      />
      <Button type="submit" className="self-end">
        Submit
      </Button>
    </form>
  );
};
