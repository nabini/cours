import Topbar from "./components/Topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar";
import './app.css'
import Home from "./pages/home/Home";
import { Routes, Route} from 'react-router-dom'
import UseList from "./pages/usersList/UseList";
import User from "./pages/user/User";
import Newuser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
function App() {

  return (
    <div>
      <Topbar />
    <div className="container">
    <Sidebar />
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route  path="/users" element={<UseList />}/>
      <Route path="/user/:userId" element={<User />}/>
      <Route path="/newUser" element={<Newuser />}/>
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/:productId" element={<Product/>} />
      <Route path="/products/:productsId" element={<User />} />
      <Route path="/newproduct" element={<NewProduct />} />
    </Routes> 
      
    

      </div>
    </div>

  );
}

export default App;
