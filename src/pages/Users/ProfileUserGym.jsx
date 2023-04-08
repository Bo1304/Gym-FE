import React, { useEffect, useState } from "react";
import _ from 'lodash';
import { NavLink, useHistory, useNavigate } from "react-router-dom";
import '../../assets/libUser/User_Gym/style.min.css'
import UserHeader from "../UI/UserHeader";
import UserFooter from "../UI/UserFooter";
// import '../../assets/libUser/User_Gym/style.min.css';
import carousel1 from "../../assets/libUser/img/carousel-1.jpg";
import carousel2 from "../../assets/libUser/img/carousel-2.jpg";
import about from "../../assets/libUser/img/about.jpg";
import team1 from "../../assets/libUser/img/team-1.jpg";
import team2 from "../../assets/libUser/img/team-2.jpg";
import team3 from "../../assets/libUser/img/team-3.jpg";
import team4 from "../../assets/libUser/img/team-4.jpg";
import { Helmet } from 'react-helmet';
import { Button, Form, Input, InputNumber } from 'antd';
import '../Users/Css/ProfileUsers.css'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};

export default function ProfileUserGym(props) {
  const [user1, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const userss = JSON.parse(localStorage.getItem('User-GYM'));
    if (userss) {
      setUser(userss);
    }
 

  }, [history]);
  console.log(user1)
  return (
    <div>

      <UserHeader />
      <div className="container-fluid page-header mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
          style={{
            minHeight: '400px'
          }}
        >
          <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Thông tin cá nhân</h4>
          <div className="d-inline-flex">
            <p className="m-0 text-white"><a className="text-white" href="">Home</a></p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">Profile</p>
          </div>
        </div>
      </div>
      <Form
        {...layout}
        
        name="nest-messages"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
          marginLeft:'450px',
          
        }}
        validateMessages={validateMessages}
      >
        {user1 && (
          <Form.Item
            name={['user', 'name']}
            label="Họ tên"
            rules={[{ required: true, },]}
           
          >
            <Input defaultValue={user1.HoTenHocVien} disabled
             style={{
              color:'black !important'
            }} />
          </Form.Item>
        )}
        {user1 && (
          <Form.Item
            name={['user', 'email']}
            label="Email"
            rules={[{ required: true, },]}
            style={{
              color:'black'
            }}
          >
            <Input defaultValue={user1.EmailHocVien} 
             style={{
              color:'black !important'
            }}
            disabled />
          </Form.Item>
        )}
     
     {user1 && (
          <Form.Item
            name={['gioitinh', 'sex']}
            label="Số điện thoại"
            rules={[{ required: true, },]}
            style={{
              color:'black'
            }}
          >
            <Input defaultValue={user1.SDTHocVien}
               style={{
                color:'black !important'
              }}
            disabled />
          </Form.Item>
        )}
        {user1 && (
          <Form.Item
            name={['gioitinh', 'sex']}
            label="Giới tính"
            rules={[{ required: true, },]}
            style={{
              color:'black'
            }}
          >
            <Input defaultValue={user1.GioiTinhHocVien === "1" ? "Nữ" : "Nam"}
               style={{
                color:'black !important'
              }}
            disabled />
          </Form.Item>
        )}
      {user1 && (
  <Form.Item
    name={['ngaysinh', 'brithday']}
    label="Ngày sinh"
    rules={[{ required: true, },]}
    style={{
      color:'black'
    }}
  >
    <Input defaultValue={new Date(user1.NgaySinhHocVien).toLocaleDateString("vi-VN")} 
       style={{
        color:'black !important'
      }}
    disabled />
  </Form.Item>
)}

        {/* <Form.Item name={['user', 'website']} label="Website">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'introduction']} label="Introduction">
      <Input.TextArea />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item> */}
      </Form>

      <UserFooter />
    </div>
  )

}