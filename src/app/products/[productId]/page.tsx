import React from 'react';

export default function ProductDetails({
 params,
}: {
 params: { productId: string };
}) {
 return <h2>Product Details for:{params?.productId}</h2>;
}
