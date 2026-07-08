import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'CompliancePilot — Nothing expires quietly.',
  description:
    'One register for every license, renewal, and filing across every client. Built for CA firms, compliance consultants, manufacturers, and growing MSMEs across India.',
  keywords: [
    'compliance management software', 'GST tracker', 'license renewal software',
    'CA firm software', 'MSME compliance', 'factory license renewal', 'PF ESI compliance',
  ],
  openGraph: {
    title: 'CompliancePilot — Nothing expires quietly.',
    description: 'One platform to manage every license, renewal, document, and regulatory task — across every client.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-parchment text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
