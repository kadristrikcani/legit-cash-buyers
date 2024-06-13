'use server'

import { Resend } from 'resend'

import React from 'react'

import ContactFormEmail from '@src/email/contact-form-email'

import { getErrorMessage, validateString } from '@src/lib/utils'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get('senderName')
  const senderDesiredMarkets = formData.get('senderDesiredMarkets')
  const senderEmail = formData.get('senderEmail')
  const senderPhone = formData.get('senderPhone')
  const additionalInfo = formData.get('additionalInfo')

  // simple server-side validation
  if (!validateString(senderName, 500)) {
    return {
      error: 'Invalid sender name'
    }
  }

  if (!validateString(senderDesiredMarkets, 500)) {
    return {
      error: 'Invalid sender desired markets'
    }
  }

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email'
    }
  }

  if (!validateString(senderPhone, 500)) {
    return {
      error: 'Invalid sender phone number'
    }
  }

  if (!validateString(additionalInfo, 5000)) {
    return {
      error: 'Invalid message'
    }
  }

  let data
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'keyinnovativesolutions2024@gmail.com',
      subject: 'Message from subscription form',
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        additionalInfo: additionalInfo,
        senderName: senderName,
        senderDesiredMarkets: senderDesiredMarkets,
        senderEmail: senderEmail,
        senderPhone: senderPhone
      })
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }

  return {
    data
  }
}
