import React from 'react'
import Helmet from 'react-helmet'
import Thumbnail from 'assets/images/mrWii.webp'
import {
  url,
  defaultTitle,
  defaultDescription,
  social,
  socialLinks,
  address,
  contact,
  legalName,
  foundingDate,
  logo
} from 'data/config/config'

export const SEO = ({ title, type, description, location = '', readTime }) => {
  const structuredDataOrganization = `{
		"@context": "http://schema.org",
		"@type": "${type}",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.twitter}",
			"${socialLinks.youtube}",
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
			"${socialLinks.github}"
		]
    }`

  return (
    <Helmet>
      <meta name="description" content={description || defaultDescription} />
      <meta name="image" content={`${url}${Thumbnail}`} />

      <meta property="og:url" content={`${url}${location}/?ref=smakosh.com`} />
      <meta
        property="og:type"
        content={type === 'NewsArticle' ? 'NewsArticle' : 'website'}
      />
      <meta
        property="og:title"
        content={title ? `Mr Wii | ${title}` : defaultTitle}
      />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={`${url}${Thumbnail}`} />
      <meta property="fb:app_id" content={social.facebook} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={socialLinks.twitter} />
      <meta name="twitter:site" content={social.twitter} />
      <meta
        name="twitter:title"
        content={title ? `Mr Wii | ${title}` : defaultTitle}
      />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image:src" content={`${url}${Thumbnail}`} />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <link rel="publisher" href={socialLinks.google} />
      <title>{title ? `Mr Wii | ${title}` : defaultTitle}</title>
      {type === 'NewsArticle' && (
        <meta name="twitter:label1" value="Reading time" />
      )}
      {type === 'NewsArticle' && (
        <meta name="twitter:data1" value={`${readTime} min read`} />
      )}
      {type === 'NewsArticle' && (
        <meta name="author" content="Ouail Bni" data-react-helmet="true" />
      )}
      <html lang="en" dir="ltr" />
    </Helmet>
  )
}
