import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
 title: {
  absolute: 'My blog',
 },
};
export default function Blog() {
 return <h2>My blog</h2>;
}
