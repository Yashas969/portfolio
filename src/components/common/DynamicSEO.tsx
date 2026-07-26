import React from 'react';
import { Helmet } from 'react-helmet-async';
import { portfolioConfig } from '../../config/portfolio.config';

export interface DynamicSEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const DynamicSEO: React.FC<DynamicSEOProps> = ({
  title,
  description,
  image,
  url,
}) => {
  const metaTitle = title
    ? `${title} | ${portfolioConfig.author.name}`
    : portfolioConfig.siteTitle;
  const metaDesc = description || portfolioConfig.seo.description;
  const metaImage = image || portfolioConfig.seo.ogImage;
  const metaUrl = url || portfolioConfig.siteUrl;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={portfolioConfig.seo.keywords.join(', ')} />

      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={portfolioConfig.seo.twitterHandle} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};
