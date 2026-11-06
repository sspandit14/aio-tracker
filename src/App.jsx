import { Routes, Route } from 'react-router'

import SiteLayout from './components/layout/SiteLayout'

import Home from './pages/Home'
import About from './pages/About'
import Library from './pages/Library'

export default function App() {
  return(
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />} />
        <Route path="library" element={<Library />} />
      </Route>
    </Routes>
  )
}
