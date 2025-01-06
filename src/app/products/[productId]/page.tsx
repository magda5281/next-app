import React from 'react';

export default function ProductDetails({ params }: { params: { id: string } }) {
 return <h2>Product Details:{params.id}</h2>;
}
