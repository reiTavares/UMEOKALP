import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  imageUrl?: string;
  keywords?: string;
}

const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Clínica Som Infantil",
  "description": "Especializada em diagnóstico auditivo infantil precoce, oferecendo um ambiente lúdico, acolhedor e com acessibilidade total para o cuidado da audição das crianças.",
  "telephone": "+556137720825",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "SGAS 915 Conjunto O, SN Sala 31 andar -1 Edifício Advance 2, Asa Sul",
    "addressLocality": "Brasília",
    "addressRegion": "DF",
    "postalCode": "70390-150",
    "addressCountry": "BR"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "image": "https://images.unsplash.com/photo-1604905697592-22082d012992?auto=format&fit=crop&w=1200&q=80", // Hero image
  "url": "https://www.clinicasominfantil.com.br", // Substituir pela URL real
  "priceRange": "$$", // Estimativa, pode ser ajustado ou removido
  "medicalSpecialty": "Pediatric Audiology", // Especialidade médica
  "hasMap": "https://www.google.com/maps/search/?api=1&query=SGAS+915+Edificio+Advance+2+Brasilia+DF" // Link para o mapa
};

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonicalUrl,
  imageUrl,
  keywords,
}) => {
  const siteName = "Clínica Som Infantil";
  const fullTitle = `${title} | ${siteName}`;
  const defaultImageUrl = "https://images.unsplash.com/photo-1604905697592-22082d012992?auto=format&fit=crop&w=1200&q=80"; // Imagem padrão para OG

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={imageUrl || defaultImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl || defaultImageUrl} />
      {/* <meta name="twitter:site" content="@seuTwitterHandle" /> */} {/* Opcional */}

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(clinicJsonLd)}
      </script>
    </Helmet>
  );
};

export default Seo;
