import React from 'react'
import Contact from 'components/contact/contact'
import { Layout, SEO } from 'components/common/'

export default () => {
  return (
    <Layout>
      <SEO title="Contact" type="Organization" location="/contact" />
      <Contact />
    </Layout>
  )
}
