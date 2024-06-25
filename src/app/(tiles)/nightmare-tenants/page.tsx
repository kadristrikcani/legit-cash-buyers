import React from 'react'

import FAQ from '@src/app/(main)/faq'

import { nightmareTenantsFaqString } from '@src/lib/data/faq/nightmare-tenants'

const NightmareTenants: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <h1>NightmareTenants</h1>
      <FAQ faqString={nightmareTenantsFaqString} />
    </div>
  )
}

export default NightmareTenants
