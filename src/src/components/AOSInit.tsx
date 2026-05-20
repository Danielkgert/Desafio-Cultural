'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-quart',
      once: false,
      offset: 40,
      delay: 0,
    });
  }, []);

  return null;
}
