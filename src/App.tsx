import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import {lazy,Suspense} from "react";
import Loader from "./components/loader";
import Header from"./components/header";
const Home=lazy(()=>import("./pages/home"));
const Search=lazy(()=>import("./pages/home"));
const Cart=lazy(()=>import("./pages/cart"));//watch (code step by step) lazy loading video

// Admin Routes Importing
const Dashboard = lazy(() => import("./pages/pages/admin/dashboard"));
const Products = lazy(() => import("./pages/pages/admin/products"));
const Customers = lazy(() => import("./pages/pages/admin/customers"));
const Transaction = lazy(() => import("./pages/pages/admin/transaction"));
const BarCharts = lazy(() => import("./pages/pages/admin/charts/barcharts"));
const PieCharts = lazy(() => import("./pages/pages/admin/charts/piecharts"));
const LineCharts = lazy(() => import("./pages/pages/admin/charts/linecharts"));
const Coupon = lazy(() => import("./pages/pages/admin/apps/coupon"));
const Stopwatch = lazy(() => import("./pages/pages/admin/apps/stopwatch"));
const Toss = lazy(() => import("./pages/pages/admin/apps/toss"));
const NewProduct = lazy(() => import("./pages/pages/admin/management/newproduct"));
const ProductManagement = lazy(
  () => import("./pages/pages/admin/management/productmanagement")
);
const TransactionManagement = lazy(
  () => import("./pages/pages/admin/management/transactionmanagement")
);
const App=()=>{
return(
  <Router>
    <Header/>
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/cart" element={<Cart/>}/>
    
    {/* Admin Routes */}
  
          
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/customer" element={<Customers />} />
            <Route path="/admin/transaction" element={<Transaction />} />
            {/* Charts */}
            <Route path="/admin/chart/bar" element={<BarCharts />} />
            <Route path="/admin/chart/pie" element={<PieCharts />} />
            <Route path="/admin/chart/line" element={<LineCharts />} />
            {/* Apps */}
            <Route path="/admin/app/coupon" element={<Coupon />} />
            <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
            <Route path="/admin/app/toss" element={<Toss />} />

            {/* Management */}
            <Route path="/admin/product/new" element={<NewProduct />} />

            <Route path="/admin/product/:id" element={<ProductManagement />} />

            <Route
              path="/admin/transaction/:id"
              element={<TransactionManagement />}
            />
         </Routes>
      </Suspense>
      
    </Router>
);
};
export default App;