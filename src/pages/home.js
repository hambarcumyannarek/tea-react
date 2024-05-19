import { Link } from 'react-router-dom';
// import { Navbar } from '../components/Navbar';
import { Header } from '../components/header';
import '../pages/css/home.css';


export function Home({productCount}) {
    return (
        <>
            {/* <Navbar valid={'home'} productCount={productCount} /> */}
            <Header />      
        </>
    )
}