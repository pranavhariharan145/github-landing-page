import React from "react";
import App from "../App";
const Navbar = () => {
    return (
        <div className="background">
            <div className="navbox">
                <div className="nav">
                    <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">Navbar</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">About</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Our Tours
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Spain, Benidorm</a></li>
                                            <li><a class="dropdown-item" href="#">Mauritius Island, Africa</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Testimonals</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Blog</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Contacts</a>
                                    </li>
                                </ul>
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button type="button" class="btn btn-outline-light">Search</button>
                                </form>
                            </div>
                        </div>

                    </nav>
                </div>
            </div>
            <div className="text">
                <div className="main-text">
                Enjoy the best travel destinations with our agency
                </div>
                <div className="sub-text">
                    Explore <b>The World</b>
                </div>
                <button type="button" class="btn btn-outline-light btn-lg">Explore</button>



            </div>
        </div>
    );
}
export default Navbar;