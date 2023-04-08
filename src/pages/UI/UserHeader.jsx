import React, { useEffect, useState } from "react";
import _ from 'lodash';
import { NavLink, useHistory, useNavigate } from "react-router-dom";
import '../../assets/libUser/User_Gym/style.min.css'
import { Button } from "antd";
import { Badge } from '@windmill/react-ui'
import './UserHeader.css';
const UserHeader = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };


  // xử lý login
  const [isLoggedIn, setIsLoggedIn] = useState(false); // xet sự kiện ẩn btn login và logout
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('User-GYM'));
    if (user) {
      setUser(user);
    }
    // else{
    //   history.push('/login-users');
    // }

  }, [history]);

  const handleLogout = () => {
    localStorage.removeItem('User-GYM');
    setUser(null);
    history.push('/homegym');
  };

  return (
    <div>
      <div className="container-fluid p-0 nav-bar">
        <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
          <a href="" className="navbar-brand">
            <h1 className="m-0 display-4 font-weight-bold text-uppercase text-white">Wibu GYM</h1>
          </a>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-between scrollNav ${isSticky ? 'sticky' : ''}`}
            style={{
              // position: "fixed",
              //  marginLeft:'705px'
            }}
            id="navbarCollapse">

            <div className="navbar-nav ml-auto p-4 bg-secondary" id="ScrollColor">

              {user ? <Badge type='success' className='mr-5' > <h4> Xin chào!!!    {user.HoTenHocVien} </h4> </Badge> : null}
              <NavLink exact to="/homegym" className="nav-item nav-link" activeClassName="active">Home</NavLink>
              <NavLink exact to="/aboutgym" className="nav-item nav-link" activeClassName="active">Chúng tôi</NavLink>
              <NavLink exact to="/clbgym" className="nav-item nav-link" activeClassName="active">Câu lạc bộ</NavLink>
              {/* <NavLink exact to="/calendargym" className="nav-item nav-link" activeClassName="active">Lịch Học</NavLink> */}
              <NavLink
                exact
                to={user ? "/calendargym" : "/login-users"}
                className="nav-item nav-link"
                activeClassName="active"
              >
                Lịch Học
              </NavLink>
              <NavLink exact to="/the-news" className="nav-item nav-link" activeClassName="active">Tin tức</NavLink>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Khách hàng</a>
                <div className="dropdown-menu text-capitalize">
                  <NavLink exact to="/profile-user-gym" className="dropdown-item">Thông tin khách hàng </NavLink>
                  <NavLink exact to="/cart-gym"  className="dropdown-item"
                  style={{
                    backgroundColor:'white',
                  }}
                  activeClassName="active">Mục Thanh Toán</NavLink>
                </div>
              </div>
              <NavLink exact to="/contactgym" className="nav-item nav-link" activeClassName="active">Liên hệ</NavLink>
              {user ? (
                <Button className="mt-1 text-red-600" onClick={handleLogout}>Đăng xuất</Button>
              ) : (
                <NavLink exact to="/login-users" className="nav-item nav-link hover:text-black text-gray-900 btn-info "
                  activeClassName="active"
                  style={{
                    borderRadius: '10px',
                    fontSize: '15px',
                    colorHover: 'white',
                    paddingBottom: '2px'
                  }}
                >Đăng nhập</NavLink>
              )}

            </div>
          </div>
        </nav>
      </div>
      {/* <h1>header</h1> */}
    </div>
  )
}
export default UserHeader;
