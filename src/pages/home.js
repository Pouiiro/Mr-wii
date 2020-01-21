import React from 'react'
import Home from 'components/home/Home'
import { Layout, SEO } from 'components/common/'

export default () => {
  return (
    <Layout>
      <SEO title="Hello World!" type="Organization" />
      <Home />
    </Layout>
  )
}
