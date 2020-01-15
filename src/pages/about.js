import React from 'react'
import About from 'components/about/about'
import { Layout, SEO } from 'components/common/'

export default () => {
  return (
    <Layout>
      <SEO title="About" type="Organization" location="/about" />
      <About />
    </Layout>
  )
}
