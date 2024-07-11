import React from 'react'

import { privacyPolicyString } from '@src/lib/data/privacy-policy'

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="mx-auto mb-[200px] mt-[20px] flex flex-col items-center justify-center sm:mb-[50px] sm:p-[20px] md:mb-[70px] md:p-[20px]">
      <h1 className="pb-[15px] text-center text-[28px] font-semibold sm:text-[24px]">
        {privacyPolicyString.title}
      </h1>
      <p className="text-[14px] italic">{privacyPolicyString.effectiveDate}</p>
      <div
        className="text-break whitespace-pre-line text-[16px] sm:text-[14px]"
        dangerouslySetInnerHTML={{ __html: privacyPolicyString.description }}
      ></div>
    </div>
  )
}

export default PrivacyPolicy
