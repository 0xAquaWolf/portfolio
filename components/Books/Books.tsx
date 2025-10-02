'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import BookCard from './BookCard';
import BookModal from './BookModal';

interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  description: string;
  rating: number;
  genre: string;
}

const placeholderBooks: Book[] = [
  {
    id: '1',
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    image: '/images/books/pragmatic-programmer.jpg',
    description: 'Your journey to mastery. This classic programming book examines the core process of software development and provides practical advice on how to become a better programmer and build better software.',
    rating: 4.8,
    genre: 'Programming'
  },
  {
    id: '2',
    title: 'The Lean Startup',
    author: 'Eric Ries',
    image: '/images/books/lean-startup-real.jpg',
    description: 'How today\'s entrepreneurs use continuous innovation to create radically successful businesses. Ries shows how to build a sustainable business with maximum acceleration through validated learning and rapid experimentation.',
    rating: 4.6,
    genre: 'Entrepreneurship'
  },
  {
    id: '3',
    title: 'Zero to One',
    author: 'Peter Thiel',
    image: '/images/books/zero-to-one.jpg',
    description: 'Notes on startups, or how to build the future. Thiel shows how to build companies that create new things, from the co-founder of PayPal and first investor in Facebook. A contrarian guide to startup success.',
    rating: 4.4,
    genre: 'Entrepreneurship'
  },
  {
    id: '4',
    title: 'Atomic Habits',
    author: 'James Clear',
    image: '/images/books/atomic-habits.jpg',
    description: 'An easy and proven way to build good habits and break bad ones. Clear reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.',
    rating: 4.8,
    genre: 'Self-Development'
  },
  {
    id: '5',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    image: '/images/books/clean-code.jpg',
    description: 'A handbook of agile software craftsmanship. Uncle Bob teaches the principles of writing clean, readable, and maintainable code. Essential reading for any serious developer who wants to improve their craft.',
    rating: 4.7,
    genre: 'Programming'
  },
  {
    id: '6',
    title: 'You Don\'t Know JS Yet',
    author: 'Kyle Simpson',
    image: '/images/books/lean-startup.jpg',
    description: 'A deep dive into the core mechanisms of the JavaScript language. Simpson demystifies JavaScript\'s most confusing concepts and helps you become a more confident and capable JavaScript developer.',
    rating: 4.6,
    genre: 'Programming'
  }
];

export default function Books() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          heading="Books I'm Reading" 
          subheading="A collection of books that have shaped my thinking and continue to inspire my growth as a developer and person"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {placeholderBooks.map((book) => (
            <BookCard 
              key={book.id} 
              book={book} 
              onClick={() => handleBookClick(book)} 
            />
          ))}
        </div>
      </div>

      {selectedBook && (
        <BookModal book={selectedBook} onClose={handleCloseModal} />
      )}
    </section>
  );
}