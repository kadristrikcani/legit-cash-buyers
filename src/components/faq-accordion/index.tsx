'use client'

import { useState } from 'react'

import Image from 'next/image'

import minusIcon from '/public/icon-minus.svg'
import plusIcon from '/public/icon-plus.svg'

interface IFAQAccordion {
  questions: {
    question: string
    answer: string
  }[]
}

const FAQAccordion: React.FC<IFAQAccordion> = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [answerHeights, setAnswerHeights] = useState<number[]>(
    Array(questions.length).fill(0)
  )
  const [showAll, setShowAll] = useState(false)

  const toggleQuestion = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx)
    const newAnswerHeights = Array(questions.length).fill(0)
    if (activeIndex !== idx)
      newAnswerHeights[idx] = document.getElementById(`answer-${idx}`)?.scrollHeight
    setAnswerHeights(newAnswerHeights)
  }

  const displayedQuestions = showAll ? questions : questions.slice(0, 5)

  return (
    <div className="container max-w-3xl rounded-xl bg-neutral60/10 px-8 py-2">
      {/* Questions */}
      <div className="flex flex-col divide-y divide-neutral60/20">
        {displayedQuestions.map(({ question, answer }, idx) => (
          <div key={idx} className="py-6">
            <div
              className="flex items-center justify-between hover:cursor-pointer"
              onClick={() => toggleQuestion(idx)}
            >
              {/* Title */}
              <h2 className="text-lg font-bold leading-6 text-secondary/90 sm:text-[16px]">
                {question}
              </h2>
              {/* Toggle Button */}
              <Image
                src={activeIndex === idx ? minusIcon : plusIcon}
                alt="toggle question"
              />
            </div>
            {/* Answer */}
            <div
              id={`answer-${idx}`}
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: `${answerHeights[idx] || 0}px` }}
            >
              <p className="pt-6 text-neutral60 sm:text-[16px]">{answer}</p>
            </div>
          </div>
        ))}
      </div>
      {/* See More / See Less Button */}
      {questions.length > 5 && (
        <div className="py-4 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="font-bold text-primary hover:underline"
          >
            {showAll ? 'See Less' : 'See More'}
          </button>
        </div>
      )}
    </div>
  )
}

export default FAQAccordion
