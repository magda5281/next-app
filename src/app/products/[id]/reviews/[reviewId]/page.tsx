import React from 'react';

export default function ReviewDetail({
 params,
}: {
 params: { id: string; reviewId: string };
}) {
 return (
  <h3>
   Review {params.reviewId} for product {params.id}
  </h3>
 );
}
