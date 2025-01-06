import React from 'react';
import { notFound } from 'next/navigation';
export default function ReviewDetail({
 params,
}: {
 params: { productId: string; reviewId: string };
}) {
 if (parseInt(params.reviewId) > 1000) {
  notFound();
 }
 return (
  <h3>
   Review {params.reviewId} for product {params.productId}
  </h3>
 );
}
