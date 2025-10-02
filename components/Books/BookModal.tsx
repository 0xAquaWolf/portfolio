'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  description: string;
  rating: number;
  genre: string;
}

interface BookModalProps {
  book: Book;
  onClose: () => void;
}

export default function BookModal({ book, onClose }: BookModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-gray-900/95 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 aspect-[3/4] md:aspect-auto relative">
            <Image
              src={book.image}
              alt={book.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="flex-1 p-6 overflow-y-auto">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white mb-2">
                {book.title}
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                by {book.author}
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full">
                  {book.genre}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm text-gray-300">{book.rating}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                About this book
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {book.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}