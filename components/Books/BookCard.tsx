import React from 'react';
import Image from 'next/image';

interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  description: string;
  rating: number;
  genre: string;
}

interface BookCardProps {
  book: Book;
  onClick: () => void;
}

export default function BookCard({ book, onClick }: BookCardProps) {
  return (
    <div 
      className="group cursor-pointer rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/20"
      onClick={onClick}
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <Image
          src={book.image}
          alt={book.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-white text-lg mb-1 line-clamp-2 group-hover:text-blue-300 transition-colors">
          {book.title}
        </h3>
        <p className="text-gray-400 text-sm mb-2">
          by {book.author}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 bg-white/10 px-2 py-1 rounded-full">
            {book.genre}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-gray-300">{book.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}