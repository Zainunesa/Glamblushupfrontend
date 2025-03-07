import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import ProductsView from "@/views/ProductsView.vue";
import BookingView from "@/views/BookingView.vue";
import ContactView from "@/views/ContactView.vue";
import TermsAndConditonsView from "@/views/TermsAndConditonsView.vue";
import FaqsView from "@/views/FaqsView.vue";
import AboutView from "@/views/AboutView.vue";
import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue";
import CartView from "@/views/CartView.vue";
import WomensView from "@/views/WomensView.vue";
import MensView from "@/views/MensView.vue";
import KidsView from "@/views/KidsView.vue";
import LoginView from "@/views/LoginView.vue";
import ProfileView from "@/views/ProfileView.vue";
import ProductDetailsView from "@/views/ProductDetailsView.vue";
import ReviewStars from "@/components/ReviewStars.vue";
import SaleView from "@/views/SaleView.vue";
import AdminDashboard from "../components/AdminDashboard.vue";
import AdminCustomers from "../components/AdminCustomers.vue";
import AdminProducts from "../components/AdminProducts.vue";
import AdminOrders from "../components/AdminOrders.vue";
import AdminBooking  from "../components/AdminBooking.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import OrderConfirmation from "../components/OrderConfirmation.vue"; // Corrected import
import VideoPage from '@/components/VideoPage.vue'; 
const routes = [
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {path: '/customroutezainu',
  name: 'VideoPage',
  component: VideoPage
  },
  {
    path: "/booking",
    name: "booking",
    component: BookingView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/terms-conditions",
    name: "termsandconditions",
    component: TermsAndConditonsView,
  },
  {
    path: "/faqs",
    name: "faqs",
    component: FaqsView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/privacypolicy",
    name: "privacypolicy",
    component: PrivacyPolicyView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/womens",
    name: "womens",
    component: WomensView,
  },
  {
    path: "/mens",
    name: "mens",
    component: MensView,
  },
  {
    path: "/kids",
    name: "kids",
    component: KidsView,
  },
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/product/:id",
    name: "productdetails",
    component: ProductDetailsView,
    props: true,
  },
  {
    path: "/review",
    name: "review",
    component: ReviewStars,
  },
  {
    path: "/sale",
    name: "sale",
    component: SaleView,
  },
  {
    path: "/admincustomers",
    name: "admincustomers",
    component: AdminCustomers,
  },
  {
    path: "/adminproducts",
    name: "adminproducts",
    component: AdminProducts,
  },
  {
    path: "/adminbooking",
    name: "adminbooking",
    component: AdminBooking,
  },
  {
    path: "/adminorders",
    name: "adminorders",
    component: AdminOrders,
  },
  {
    path: "/admindashboard",
    name: "admindashboard",
    component: AdminDashboard,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: CheckoutView,
  },
  {
    path: "/order-confirmation",
    name: "OrderConfirmation",
    component: OrderConfirmation, 
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
