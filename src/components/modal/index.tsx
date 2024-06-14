'use client'

import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

interface IModal {
  isOpen: boolean
  closeModal: () => void
  children: React.ReactNode
}

const Modal: React.FC<IModal> = ({ children, isOpen, closeModal }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-[40px] text-center sm:p-[20px]">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="max-w-[1440px] transform overflow-hidden rounded-2xl bg-background p-[25px] text-left align-middle shadow-xl transition-all">
                <button
                  className="tf-v1-close tf-v1-close-icon absolute right-[10px] top-0 text-[36px] text-secondary"
                  aria-label="Close"
                  onClick={closeModal}
                >
                  ×
                </button>

                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
