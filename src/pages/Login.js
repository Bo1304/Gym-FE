import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import ImageLight from '../assets/img/login-office.jpeg'
import ImageDark from '../assets/img/login-office-dark.jpeg'
import { GithubIcon, TwitterIcon } from '../icons'
import { Label, Input, Button } from '@windmill/react-ui'

function Login() {
  const [credentials, setCredentials] = useState({ TenDangNhap: '', MatKhau: '' });
  const [error, setError] = useState('');

  const history = useHistory();
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3002/api/authentication/adminlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('Admin-GYM', JSON.stringify(data));
        // chuyển hướng đến trang khác khi đăng nhập thành công
        history.push('/app');

      } else {
        const data = await response.json();
        setError(data.msg);
      }
    } catch (err) {
      console.error(err);
      setError('Bạn chưa nhập mật khẩu và tên đăng nhập hoặc chưa chính xác !');
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <form onSubmit={handleLogin}>
                <div>
                  <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
                  <Label>
                    <span>Tên đăng nhập</span>
                    <Input type="text" id="TenDangNhap" name="TenDangNhap" value={credentials.TenDangNhap} onChange={handleInputChange} />
                  </Label>
                  <Label className="mt-4">
                    <span>Password</span>
                    <Input type="password" id="MatKhau" name="MatKhau" value={credentials.MatKhau} onChange={handleInputChange} />
                  </Label>
                  {error && <div className="text-orange-600 mt-3">{error}</div>}
                  <Button type="submit" className="mt-4" block>
                    Đăng nhập
                  </Button>
                </div>
              </form>
              <hr className="my-8" />


            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Login
