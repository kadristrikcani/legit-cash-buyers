import React from 'react'

import FAQ from '@src/app/(main)/faq'

import { divorceFaqString } from '@src/lib/data/faq/divorce'

const Divorce: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <h1>Divorce</h1>
      <FAQ faqString={divorceFaqString} />
    </div>
  )
}

export default Divorce
