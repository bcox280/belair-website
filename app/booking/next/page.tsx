'use client';

import React, { FormEvent } from 'react';
import { redirect } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import NavigationBar from '@/components/navigation-bar';

interface Props {
  // Define your props here
}

const BookingHomePage: React.FC<Props> = (
  {
    /* destructured props */
  }
) => {
  return (
    <div className="flex h-screen flex-col overflow-hidden overscroll-none">
      <NavigationBar />
      <div className="flex h-full flex-col items-center justify-center">Hi</div>
    </div>
  );
};

export default BookingHomePage;
