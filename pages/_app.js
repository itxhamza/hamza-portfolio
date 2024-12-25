import { useRouter } from 'next/router'

import SwiperCore, { Navigation, Pagination, Parallax } from 'swiper'

import ErrorPage from '../pages/404'
import About from '../pages/about'
import Blog from '../pages/blog'
import BlogLeftThumb from '../pages/blog/blog-left-thumb'
import BlogRandomThumb from '../pages/blog/blog-random-thumb'
import BlogRightSidebar from '../pages/blog/blog-right-sidebar'
import BlogRightThumb from '../pages/blog/blog-right-thumb'
import Contact from '../pages/contact'
import Home from '../pages/home'
import HomeTwo from '../pages/home-2'
import HomeThree from '../pages/home-3'
import HomeFour from '../pages/home-4'
import HomeFive from '../pages/home-5'
import HomeSix from '../pages/home-6'
import Shop from '../pages/shop'
import ProductDetails from '../pages/shop/[slug]'
import CartPage from '../pages/shop/cart'
import CheckoutPage from '../pages/shop/checkout'
import Team from '../pages/team'
import SinglePost from './blog/[slug]'
import ImageGallery from './image-gallery'
import Service from './services'
import MyAccount from './shop/account'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/parallax'
import 'swiper/scss/scrollbar'

import '../src/scss/style.scss'

SwiperCore.use([Navigation, Pagination, Parallax])

function Layout({ children }) {
  const router = useRouter()

  if (router.pathname === '/') {
    return <Home />
  } else if (router.pathname === '/home-2') {
    return <HomeTwo />
  } else if (router.pathname === '/home') {
    return <HomeThree />
  } else if (router.pathname === '/home-4') {
    return <HomeFour />
  } else if (router.pathname === '/home-5') {
    return <HomeFive />
  } else if (router.pathname === '/home-6') {
    return <HomeSix />
  } else if (router.pathname === '/about') {
    return <About />
  } else if (router.pathname === '/services') {
    return <Service />
  } else if (router.pathname === '/image-gallery') {
    return <ImageGallery />
  } else if (router.pathname === '/team') {
    return <Team />
  } else if (router.pathname === '/blog') {
    return <Blog />
  } else if (router.pathname === '/blog/blog-left-sidebar') {
    return <BlogLeftSidebar />
  } else if (router.pathname === '/blog/blog-right-sidebar') {
    return <BlogRightSidebar />
  } else if (router.pathname === '/blog/blog-left-thumb') {
    return <BlogLeftThumb />
  } else if (router.pathname === '/blog/blog-right-thumb') {
    return <BlogRightThumb />
  } else if (router.pathname === '/blog/blog-random-thumb') {
    return <BlogRandomThumb />
  } else if (router.pathname.startsWith('/blog/')) {
    return <SinglePost />
  } else if (router.pathname === '/shop') {
    return <Shop />
  } else if (router.pathname === '/shop/cart') {
    return <CartPage />
  } else if (router.pathname === '/shop/checkout') {
    return <CheckoutPage />
  } else if (router.pathname === '/shop/account') {
    return <MyAccount />
  } else if (router.pathname.startsWith('/shop/')) {
    return <ProductDetails />
  } else if (router.pathname === '/contact') {
    return <Contact />
  } else if (router.pathname === '/404') {
    return <ErrorPage />
  }

  return <div>{children}</div>
}

export default Layout
