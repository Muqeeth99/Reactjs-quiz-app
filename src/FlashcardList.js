import React from 'react'
import Flashcards from './Flashcards';

export default function FlashcardList({ flashcards }) {
  return (
    <div className='card-grid'>
        {flashcards.map(flashcard => {
            return <Flashcards flashcard={flashcard} key={flashcard.id} />
        })}
    </div>
  )
} 
