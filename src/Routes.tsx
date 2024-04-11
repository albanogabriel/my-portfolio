import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layout/DefaultLayout'
import { About } from './pages/About'
import { Experiences } from './pages/Experiences'
import { Home } from './pages/Home'
import { Projetos } from './pages/Projetos'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/education" element={<About />} />
      </Route>
    </Routes>
  )
}
