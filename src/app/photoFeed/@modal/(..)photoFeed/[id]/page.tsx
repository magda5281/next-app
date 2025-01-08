import Image from 'next/image';
import wondersImages, { WonderImage } from '@/app/photoFeed/wonders';
import Modal from '@/app/components/modal';

export default async function PhotoModal({
 params,
}: {
 params: { id: string };
}) {
 const { id } = await params;
 console.log('Modal route triggered with ID:', id); // Debugging log
 const photo: WonderImage = wondersImages.find((p) => p?.id === id)!;
 console.log('Modal route triggered photo:', photo); // Debugging log

 return (
  <Modal>
   <Image
    alt={photo.name}
    src={photo.src}
    className='w-full object-cover aspect-square p-4 background-green'
   />

   <div className='bg-white p-4'>
    <h2 className='text-xl font-semibold'>{photo.name}</h2>
    <h3>{photo.photographer}</h3>
    <h3>{photo.location}</h3>
   </div>
  </Modal>
 );
}
