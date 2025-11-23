import PrivacyPolicy from './PrivacyPolicy'; // Adjust path as needed

export const metadata = {
  title: 'Privacy Policy | Blute Technologies',
  description: 'Learn how Blute Technologies collects, uses, and protects your personal data. Read about your rights, data security, and our commitment to transparency.',
  keywords: [
    'Privacy Policy',
    'Data Protection',
    'Blute Technologies',
    'GDPR Compliance',
    'Data Security',
    'User Rights',
    'Cookie Policy'
  ],
  openGraph: {
    title: 'Privacy Policy | Blute Technologies',
    description: 'Transparency is core to our vision. Understand how we manage and secure your personal data.',
    url: 'https://www.blute.co.in/privacy-policy',
    siteName: 'Blute Technologies',
    images: [
      {
        url: '/images/og-privacy.jpg', // Ensure you have a default OG image
        width: 1200,
        height: 630,
        alt: 'Blute Technologies Privacy Policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Blute Technologies',
    description: 'Your Data, Our Promise. Read our full privacy and data protection policy.',
    images: ['/images/og-privacy.jpg'], // Same image as OG
  },
  alternates: {
    canonical: 'https://www.blute.co.in/privacy-policy',
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}