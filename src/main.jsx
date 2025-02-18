import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router';
import Blog from './pages/Blog.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Layout from './layout/Layout.jsx'; 
import Hero from './components/Hero.jsx';
import Products from './pages/Products.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Home from './pages/Home.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* Dhaka */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="home" element={<Hero />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="products/:id" element={<ProductDetails />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>
      <App />
    </BrowserRouter>
  </StrictMode>
);
