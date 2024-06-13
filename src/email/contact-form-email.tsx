import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'
import React from 'react'

type ContactFormEmailProps = {
  additionalInfo: string
  senderName: string
  senderDesiredMarkets: string
  senderEmail: string
  senderPhone: string
}

export default function ContactFormEmail({
  additionalInfo,
  senderName,
  senderDesiredMarkets,
  senderEmail,
  senderPhone
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your Niche AI site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the subscribe form
              </Heading>
              <Text>{additionalInfo}</Text>
              <Hr />
              <Text>The sender&apos;s name is: {senderName}</Text>
              <Hr />
              <Text>The sender&apos;s desired markets are: {senderDesiredMarkets}</Text>

              <Hr />
              <Text>The sender&apos;s email is: {senderEmail}</Text>

              <Hr />
              <Text>The sender&apos;s phone number is: {senderPhone}</Text>

              <Hr />
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
