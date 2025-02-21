'use client';

import React, { FormEvent } from 'react';
import router from 'next/router';

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
  const submitAndNavigate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    });

    console.log(await response.json());

    // fix with redir
    router.push('/booking/next');
  };

  return (
    <div className="flex h-screen flex-col overflow-hidden overscroll-none">
      <NavigationBar />
      <div className="flex h-full flex-col items-center justify-center">
        <form className="space-y-4" onSubmit={submitAndNavigate}>
          <Input
            type="text"
            required
            name="name"
            placeholder="Enter your name"
          />
          <Button type="submit">Enter</Button>
        </form>
      </div>
    </div>
  );
};

export default BookingHomePage;
