import React from 'react'

import { privacyPolicyString } from '@src/lib/data/privacy-policy'

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-[20px] mb-[200px] sm:p-[20px] sm:mb-[50px] md:p-[20px] md:mb-[70px]">
      <h1 className="text-center text-[28px] font-semibold pb-[15px] sm:text-[24px]">
        {privacyPolicyString.title}
      </h1>
      <p
        className="text-break whitespace-pre-line text-[16px] sm:text-[14px]"
        dangerouslySetInnerHTML={{ __html: privacyPolicyString.description }}
      ></p>
    </div>
  )
}

export default PrivacyPolicy
