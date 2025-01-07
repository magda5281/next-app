import React from 'react';
import { Metadata } from 'next';

export const generateMetadata = async ({
 params,
}: Props): Promise<Metadata> => {
 const title = await new Promise((resolve) => {
  setTimeout(() => {
   resolve(`iphone ${params?.productId}`);
  }, 100);
 });
 return {
  title: `Product ${title}`,
 };
};

type Props = { params: { productId: string } };

export default function ProductDetails({ params }: Props) {
 return <h2>Product Details for:{params?.productId}</h2>;
}
