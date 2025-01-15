import { FC } from "react";
import { Helmet } from "react-helmet-async";

export type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
};

const SEO: FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
}) => {
  const defaultTitle = "Bengkel Kita - Perbaikan Kendaraan Terbaik";
  const defaultDescription =
    "Bengkel Kita adalah tempat perbaikan kendaraan terbaik di Indonesia";
  const defaultOgImage = "https://cdn.kita.blue/kita/thumbnail.png";

  return (
    <Helmet>
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      <meta property="og:title" content={ogTitle || title || defaultTitle} />
      <meta
        property="og:description"
        content={ogDescription || description || defaultDescription}
      />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title || defaultTitle} />
      <meta
        name="twitter:description"
        content={ogDescription || description || defaultDescription}
      />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />

      <link rel="canonical" href="https://bengkel.kita.blue" />
      <link rel="icon" href="https://cdn.kita.blue/kita/logo.png" />
    </Helmet>
  );
};

export default SEO;
