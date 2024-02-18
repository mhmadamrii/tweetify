'use client';

import React from 'react';
import { useEffect } from 'react';

export default function Search() {
  useEffect(() => {
    console.log('mounted');
  }, []);

  return (
    <main>
      <p className="text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        id provident optio nesciunt hic, minus, incidunt officiis
        rerum eligendi, dolore adipisci quae aliquam cum atque sit
        ducimus quia consequuntur beatae!
      </p>
      Search page
    </main>
  );
}
