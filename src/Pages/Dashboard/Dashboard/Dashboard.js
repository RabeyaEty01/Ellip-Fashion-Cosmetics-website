import React from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import AddReview from '../AddReview/AddReview';
import DashboardHome from '../DashboardHome/DashboardHome';
import Pay from '../Pay/Pay';
import AddProduct from './../AddProduct/AddProduct';
import logo from '../../../images/logo.png';
import './Dashboard.css';
import MyOrders from '../MyOrders/MyOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';

const Dashboard = () => {
    const { logOut, admin } = useAuth();

    let { path, url } = useRouteMatch();  //for nesting route

    return (
        <>
            <div class="container-fluid">
                <div class="row min-vh-100 flex-column flex-md-row">
                    <aside class="col-12 col-md-3 col-xl-2 p-0 nav-background ">
                        <nav class="navbar navbar-expand-lg navbar-dark bd-dark flex-md-column flex-row align-items-center py-2 text-center sticky-top " id="sidebar">

                            <button type="button" class="navbar-toggler border-0  border-1" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse order-last" id="nav">
                                <ul class="navbar-nav flex-column w-100 justify-content-center">
                                    <li class="nav-item ">
                                        <Link as={HashLink} to="#" class="nav-link active nav-item-hover mt-3  fw-bold d-flex">
                                            <img src={logo} alt="" />
                                        </Link>
                                    </li>
                                    <li class="nav-item ">
                                        <Link as={HashLink} to={`${url}`} class="nav-link active nav-item-hover mt-5  fw-bold d-flex">
                                            <span className="icon">
                                                <i class="fas fa-user-shield"></i>
                                            </span>
                                            <span className="title "><h5 className="ms-3">DashBoard</h5></span>
                                        </Link>
                                    </li>

                                    <li class="nav-item">
                                        <Link as={HashLink} to="/home#home" class="nav-link  mt-3 d-flex ">
                                            <span className="icon">
                                                <i className="fa fa-home"></i>
                                            </span>
                                            <span className="title"><h5 className="ms-3">Home</h5></span>
                                        </Link>
                                    </li>

                                    {/* for normal users  */}
                                    {!admin &&
                                        <>

                                            < li class="nav-item">
                                                <Link as={HashLink} to={`${url}/pay`} class="nav-link  mt-3 d-flex ">
                                                    <span className="icon">
                                                        <i class="fab fa-cc-amazon-pay"></i>
                                                    </span>
                                                    <span className="title"><h5 className="ms-3">Pay</h5></span>
                                                </Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link as={HashLink} to={`${url}/myOrders`} class="nav-link  mt-3 d-flex ">
                                                    <span className="icon">
                                                        <i class="fas fa-shopping-bag"></i>
                                                    </span>
                                                    <span className="title"><h5 className="ms-3">My Orders</h5></span>
                                                </Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link as={HashLink} to={`${url}/addReview`} class="nav-link  mt-3 d-flex ">
                                                    <span className="icon">
                                                    <i class="fas fa-grin-stars"></i>
                                                    </span>
                                                    <span className="title"><h5 className="ms-3">Review</h5></span>
                                                </Link>
                                            </li>
                                        </>
                                    }

                                    {/* for admin  */}

                                    {
                                        admin &&
                                        <>
                                          <li class="nav-item">
                                                <Link as={HashLink} to={`${url}/addProduct`} class="nav-link  mt-3 d-flex ">
                                                    <span className="icon">
                                                        <i class="fas fa-plus-square"></i>
                                                    </span>
                                                    <span className="title"><h5 className="ms-3">Add A Product</h5></span>
                                                </Link>
                                            </li>

                                            <li class="nav-item">
                                                <Link as={HashLink} to={`${url}/makeAdmin`}class="nav-link  mt-3 d-flex ">
                                                    <span className="icon">
                                                    <i class="fas fa-user-plus"></i>
                                                    </span>
                                                    <span className="title"><h5 className="ms-3">Make Admin</h5></span>
                                                </Link>
                                            </li>

                                            <li class="nav-item">
                                                <Link as={HashLink} to={`${url}/manageOrders`} class="nav-link  mt-3 d-flex ">
                                                    <span className="icon">
                                                        <i class="fas fa-tasks"></i>
                                                    </span>
                                                    <span className="title"><h5 className="ms-3">Manage All Orders</h5></span>
                                                </Link>
                                            </li>

                                        
                                            <li class="nav-item">
                                                <Link as={HashLink} to={`${url}/manageProducts`}  class="nav-link  mt-3 d-flex ">
                                                    <span className="icon">
                                                        <i class="fas fa-tasks"></i>
                                                    </span>
                                                    <span className="title"><h5 className="ms-3">Manage Products</h5></span>
                                                </Link>
                                            </li>
                                        </>
                                    }



                                    <li class="nav-item">
                                        <Link as={HashLink} to="" class="nav-link  mt-3 d-flex ">
                                            <span className="icon">
                                                <i className="fa fa-sign-out"></i>
                                            </span>
                                            <span onClick={logOut} className="title"><h5 className="ms-3">Logout</h5></span>
                                        </Link>
                                    </li>


                                </ul>
                            </div>
                        </nav>
                    </aside>

                    <main className="col px-0 flex-grow-1">
                        <div className="container py-3">
                            <Switch>
                                <Route exact path={path}>
                                    <DashboardHome></DashboardHome>
                                </Route>
                                <Route path={`${path}/pay`}>
                                    <Pay></Pay>
                                </Route>
                                <Route path={`${path}/addReview`}>
                                    <AddReview></AddReview>
                                </Route>
                                <Route path={`${path}/myOrders`}>
                                    <MyOrders></MyOrders>
                                </Route>
                               
                                {/*for admin  */}
                                <AdminRoute path={`${path}/makeAdmin`}>
                                    <MakeAdmin></MakeAdmin>
                                </AdminRoute>
                                <AdminRoute path={`${path}/manageOrders`}>
                                    <ManageOrders></ManageOrders>
                                </AdminRoute>
                                <AdminRoute path={`${path}/manageProducts`}>
                                    <ManageProducts></ManageProducts>
                                </AdminRoute>
                                <AdminRoute path={`${path}/addProduct`}>
                                    <AddProduct></AddProduct>
                                </AdminRoute>


                            </Switch>


                        </div>

                    </main>
                </div>
            </div>




        </>
    );
};

export default Dashboard;





