import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layout/DefaultLayout'
import { About } from './pages/About'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/about" element={<About />} />
        <Route path="/cases" element={<About />} />
        <Route path="/experiences" element={<About />} />
        <Route path="/education" element={<About />} />
      </Route>
    </Routes>
  )
}
