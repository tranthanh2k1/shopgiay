import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import HomePage from './pages/website/home'
import AboutPage from './pages/website/about'
import ProductPage from './pages/website/products'
import NotPoundPage from './pages/website/404'
import LayoutAdmin from './layouts/layoutAdmin/admin'
import LayoutWebsite from './layouts/layoutWebsite/website'
import ListProduct from './pages/admin/products'
import EditProduct from './pages/admin/products/editProduct'
import DetailProduct from './pages/website/detailProduct'
import AddProduct from './pages/admin/products/addProduct'
import SignIn from './user/SignIn'
import SignUp from './user/SignUp'
import ListCategory from './pages/admin/categories'
import AddCategory from './pages/admin/categories/addCategory'
import EditCategory from './pages/admin/categories/editCategory'
import PrivateRoute from './auth/privateRoute'
import UserDashboard from './user/UserDashboard'
import AdminRoute from './auth/adminRoute'
import AdminDashboard from './user/AdminDashboard'
import CategoryPage from './pages/website/categoryPage'

const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?">
                    <LayoutAdmin>
                        <Switch>
                            <Route exact path="/admin">
                                <Redirect to="/admin/dashboard" />
                            </Route>
                            <AdminRoute path="/admin/dashboard">
                                <AdminDashboard />
                            </AdminRoute>
                            <Route exact path="/admin/products">
                                <ListProduct {...props} />
                            </Route>
                            <Route exact path="/admin/products/add">
                                <AddProduct {...props} />
                            </Route>
                            <Route exact path="/admin/products/edit/:id">
                                <EditProduct {...props} />
                            </Route>
                            <Route exact path="/admin/products/detail">
                                <DetailProduct />
                            </Route>
                            <Route exact path="/admin/categories">
                                <ListCategory {...props} />
                            </Route>
                            <Route exact path="/admin/category/add">
                                <AddCategory {...props} />
                            </Route>
                            <Route exact path="/admin/category/edit/:id">
                                <EditCategory {...props} />
                            </Route>
                            <Route path="*">
                                <NotPoundPage />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route path="/:path?/:path?">
                    <LayoutWebsite {...props}>
                        <Switch>
                            <PrivateRoute exact path="/user/dashboard">
                                <UserDashboard />
                            </PrivateRoute>
                            <Route exact path="/">
                                <HomePage {...props} />
                            </Route>
                            <Route exact path="/about">
                                <AboutPage />
                            </Route>
                            <Route exact path="/product">
                                <ProductPage {...props} />
                            </Route>
                            <Route exact path="/product/:id">
                                <DetailProduct {...props} />
                            </Route>
                            <Route exact path="/category/:id">
                                <CategoryPage {...props} />
                            </Route>
                            <Route exact path="/signin">
                                <SignIn />
                            </Route>
                            <Route exact path="/signup">
                                <SignUp />
                            </Route>
                            <Route path="*">
                                <NotPoundPage />
                            </Route>
                        </Switch>
                    </LayoutWebsite>
                </Route>
            </Switch>
        </Router >
    )
}

export default Routes
