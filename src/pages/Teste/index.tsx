import { useEffect, useState } from 'react'

import { TestePageContainer } from './style'

export function Teste2() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      const sections = document.querySelectorAll('section')

      sections.forEach((section) => {
        const sectionTop = section.offsetTop

        if (scrollPosition >= sectionTop - 200) {
          setActiveSection(section.id)
        }
      })
    }

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll)

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) // Run this effect only once on component mount

  return (
    <TestePageContainer>
      <nav className="sticky">
        <ul>
          <li>
            <a
              href="#section1"
              className={activeSection === 'section1' ? 'active' : ''}
              onClick={() => setActiveSection('section1')}
            >
              Section 1
            </a>
          </li>
          <li>
            <a
              href="#section2"
              className={activeSection === 'section2' ? 'active' : ''}
              onClick={() => setActiveSection('section2')}
            >
              Section 2
            </a>
          </li>
          <li>
            <a
              href="#section3"
              className={activeSection === 'section3' ? 'active' : ''}
              onClick={() => setActiveSection('section3')}
            >
              Section 3
            </a>
          </li>
          <li>
            <a
              href="#section4"
              className={activeSection === 'section4' ? 'active' : ''}
              onClick={() => setActiveSection('section4')}
            >
              Section 4
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <section id="section1">
          <h2>Section 1</h2>
          <p>This is the content of section 1.</p>
        </section>

        <section id="section2">
          <h2>Section 2</h2>
          <p>This is the content of section 2.</p>
        </section>

        <section id="section3">
          <h2>Section 3</h2>
          <p>This is the content of section 3.</p>
        </section>
        <section id="section4">
          <h2>Section 3</h2>
          <p>This is the content of section 3.</p>
        </section>
      </div>
    </TestePageContainer>
  )
}
