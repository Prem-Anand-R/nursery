import { ReactNode } from 'react';
import Image from 'next/image';
import Button from './Button';

interface CardProps {
  title: string;
  image: string;
  price: string;
  description?: string;
  children?: ReactNode;
}

export default function Card({ title, image, price, description, children }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-64 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {description && <p className="text-gray-600 mb-2">{description}</p>}
        <p className="text-green-600 font-bold mb-4">{price}</p>
        {children}
      </div>
    </div>
  );
} 