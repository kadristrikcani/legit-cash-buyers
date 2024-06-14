import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

import { Modal } from '@src/components'
import { ITestimonial } from '@src/components/testimonials'

interface ITestimonialModal {
  testimonial: ITestimonial
  isOpen: boolean
  closeModal: () => void
}

const TestimonialModal: React.FC<ITestimonialModal> = ({
  testimonial,
  isOpen,
  closeModal
}) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="mt-2 flex justify-center gap-20 sm:flex-col-reverse sm:items-center sm:gap-10">
        <video
          autoPlay
          loop
          width="350"
          height="200"
          controls
          className="rounded-md shadow-xl"
        >
          <source src={testimonial.video} type="video/mp4" />
        </video>

        <div className="my-[20px] max-w-[800px]">
          <Dialog.Title
            as="h1"
            className=" text-[60px] font-medium leading-[4rem] text-primary "
          >
            {testimonial.name}
          </Dialog.Title>

          <p className="text-break mt-10 whitespace-pre-line text-[16px] text-secondary">
            {testimonial.popup}
          </p>
        </div>
      </div>
    </Modal>
  )
}

export default TestimonialModal
