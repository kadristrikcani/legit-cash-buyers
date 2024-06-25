import React from 'react'

import FAQ from '@src/app/(main)/faq'

import { expensiveRepairsFaqString } from '@src/lib/data/faq/expensive-repairs'

const ExpensiveRepairs: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <h1>ExpensiveRepairs</h1>
      <FAQ faqString={expensiveRepairsFaqString} />
    </div>
  )
}

export default ExpensiveRepairs
