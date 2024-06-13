'use client'

import { sendEmail } from '../../../actions/sendEmail'

import React from 'react'
import toast from 'react-hot-toast'

import { useActiveSectionContext } from '@src/context/active-section-context'

import SubmitBtn from './submit-btn'

const Form: React.FC = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <form
      className="mt-5 flex flex-col p-4 sm:mt-0"
      action={async (formData) => {
        const { data, error } = await sendEmail(formData)
        if (error) {
          toast.error(error)
          return
        }
        toast.success('Form Submitted!')
        setActiveSection('LocalData')
        setTimeOfLastClick(Date.now())
      }}
    >
      <div className="flex justify-between items-center gap-4 mb-5 sm:flex-col">
        <input
          className="h-14 px-4 rounded-lg borderBlack  transition-all w-[100%] sm:h-10"
          name="senderName"
          type="text"
          required
          maxLength={500}
          placeholder="Your name"
        />
        <input
          className="h-14 px-4 rounded-lg borderBlack  transition-all w-[100%] sm:h-10"
          name="senderDesiredMarkets"
          type="text"
          required
          maxLength={500}
          placeholder="Your desired markets"
        />
      </div>

      <div className="flex justify-between items-center gap-4 sm:flex-col">
        <input
          className="h-14 px-4 rounded-lg borderBlack  transition-all w-[100%] sm:h-10"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <input
          className="h-14 px-4 rounded-lg borderBlack  transition-all w-[100%] sm:h-10"
          name="senderPhone"
          type="number"
          required
          maxLength={500}
          placeholder="Your phone number"
        />
      </div>

      <textarea
        className="h-52 my-5 rounded-lg borderBlack p-4  transition-all"
        name="additionalInfo"
        placeholder="Tell us a bit more about your request: markets, data types, additional information, etc."
        required
        maxLength={5000}
      />
      <SubmitBtn />
    </form>
  )
}

export default Form
