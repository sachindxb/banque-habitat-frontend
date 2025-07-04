import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Purchase from './pages/Purchase'
import RenovationUSD from './pages/RenovationUSD'
import Construction from './pages/Construction'
import RenovationLBP from './pages/RenovationLBP'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/hero/Purchase.jpg" element={<Purchase />} />
        <Route path="/home/hero/RenovationUSD.jpg" element={<RenovationUSD />} />
        <Route path="/home/hero/Construction.jpg" element={<Construction />} />
        <Route path="/home/hero/RenovationUSD.jpg" element={<RenovationLBP />} />
      </Routes>
    </Layout>
  )
}
