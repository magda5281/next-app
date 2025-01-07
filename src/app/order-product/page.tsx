'use client';
import { useRouter } from 'next/navigation';

export default function OrderProduct() {
 const rauter = useRouter();
 const handleClick = () => {
  //use any valid raute to redirect
  rauter.push('/');
  //  rauter.replace('/');
  //  rauter.back();
  rauter.forward();
 };

 return (
  <>
   <h2>Order Product</h2>
   <button style={{ background: 'gray' }} onClick={handleClick}>
    Order product
   </button>
  </>
 );
}
