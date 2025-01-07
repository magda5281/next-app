import Link from 'next/link';
import React from 'react';

export default function Products() {
 const productId = 100;
 return (
  <>
   <Link href='/'>Home</Link>
   <h2>Product list</h2>
   <h3>
    <Link href={'/products/1'}>Product 1</Link>
   </h3>
   <h3>
    <Link href={'/products/2'}>Product 2</Link>
   </h3>
   <h3>
    <Link href={'/products/3'} replace>
     {' '}
     {/* replace clears a history entry Product 3 . */}
    </Link>
   </h3>
   <h3>
    <Link href={`/products/${productId}`}>Product {productId}</Link>
   </h3>
  </>
 );
}
