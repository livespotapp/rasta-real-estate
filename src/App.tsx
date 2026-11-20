import { useState } from 'react'
import { About } from './components/About'
import { Advantages } from './components/Advantages'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MobileCTABar } from './components/MobileCTABar'
import { Properties } from './components/Properties'
import { Services } from './components/Services'
import { uiCopy } from './data/content'
import { useHashFocus } from './hooks/useHashFocus'
import type { RequestType } from './types'

export default function App() {
  const [requestType, setRequestType] = useState<RequestType | ''>('')
  useHashFocus()

  return (
    <>
      <a className="skip-link" href="#main">
        {uiCopy.skipLink}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services onSelectRequest={setRequestType} />
        <Properties />
        <Advantages />
        <Contact requestType={requestType} onRequestTypeChange={setRequestType} />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  )
}
