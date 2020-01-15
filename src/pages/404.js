import React from 'react'
import NotFound from 'components/404/NotFound'
import { Layout, SEO } from 'components/common/'

export default () => {
  return (
    <Layout>
      <SEO
        location="/404"
        type="Organization"
        title="404"
        description="404 page not found"
      />
      <NotFound />
    </Layout>
  )
}
