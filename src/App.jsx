import HomePage from './pages/homePage'
import WisataPage from './pages/wisataPage'
import MapPage from './pages/mapPage'
import ProfilPage from './pages/profilPage'
import BeritaPage from './pages/beritaPages'
import ArtikelPage from './pages/artikelPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import useFetch from '../hooks/useFetch'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




const App = () => {    
        const { data: articles, loading: articlesLoading, error: articlesError } = useFetch('http://localhost:1337/api/articles?populate=*')
        const { data: members, loading: membersLoading, error: membersError } = useFetch('http://localhost:1337/api/members?populate=*')
        const { data: tourisms, loading: tourismsLoading, error: tourismsError } = useFetch('http://localhost:1337/api/tourisms?populate=*')
        const { data: about, loading: aboutLoading, error: aboutError } = useFetch('http://localhost:1337/api/desc?populate=*')
        const { data: introduction, loading: introductionLoading, error: introductionError } = useFetch('http://localhost:1337/api/introduction?populate=*')
        const { data: carousels, loading: carouselsLoading, error: carouselsError } = useFetch('http://localhost:1337/api/carousel?populate=*')
        
        if(articlesLoading || membersLoading || tourismsLoading || aboutLoading || introductionLoading || carouselsLoading) return <p>Loading...</p>
        if(articlesError || membersError || tourismsError || aboutError ||introductionError || carouselsError) return <p>Error!</p>

        console.log('Articles: ', articles)
        console.log('Members: ', members)
        console.log('Wisatas: ', tourisms )
        console.log('About: ', about)
        console.log('Introduction: ', introduction)
        console.log('Carousels: ', carousels)

    return(
        <Router>  
            <Navbar />          
            <Routes>
                <Route path='/' element={<HomePage articles={articles}  tourisms={tourisms} about={about} carousels={carousels} />} />
                <Route path='/wisata' element={<WisataPage tourisms={tourisms} articles={articles}/>} />                
                <Route path='/peta' element={<MapPage />} />
                <Route path='/profil' element={<ProfilPage members={members} introduction={introduction}/>} />
                <Route path='/berita' element={<BeritaPage articles={articles} />} /> 
                <Route path='/berita/artikel/:id'element={<ArtikelPage articles={articles} />} />                                
            </Routes>
            <Footer />                            
        </Router>
    )
}
export default App