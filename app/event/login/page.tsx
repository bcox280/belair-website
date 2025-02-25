'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { submitAndNavigate } from './submit-user-action';

const EventHomePage = () => {
  return (
    <form className="space-y-4" action={submitAndNavigate}>
      <Input type="text" required name="name" placeholder="Enter your name" />
      <Button type="submit">Enter</Button>
    </form>
  );
};

export default EventHomePage;
