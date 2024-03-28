import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layout/DefaultLayout'
import { About } from './pages/About'
import { Cases } from './pages/Cases'
import { Home } from './pages/Home'
import { Teste2 } from './pages/Teste2'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/experiences" element={<Teste2 />} />
        <Route path="/education" element={<About />} />
      </Route>
    </Routes>
  )
}
