import React from 'react'

import CTA from '../components/CTA'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import { Button } from '@windmill/react-ui'

import { MailIcon } from '../icons'

function FormKhoaTap() {
  return (
    <>
      <PageTitle>FormKhoaTap</PageTitle>
      <CTA />
      <SectionTitle>Elements</SectionTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Tên khóa tập</span>
          <Input className="mt-1" id="nameKhoaTap" name="NameKhoaTap" placeholder="Nhập tên khóa tập ii" />
        </Label>

        {/* <Label className="mt-4">
          <span>Disabled</span>
          <Input disabled className="mt-1" placeholder="Jane Doe" />
        </Label> */}
        <Label className="mt-4">
          <span>Mô tả</span>
          <Textarea className="mt-1" rows="3" id="descriptionKhoaTap" name="DescriptionKhoaTap" 
          placeholder="Mô tả khóa tập ở đây" />
        </Label>


           {/* TODO: Check if this label is accessible, or fallback */}
          {/* <span className="text-sm text-gray-700 dark:text-gray-400">Account Type</span> */}
        {/* <div className="mt-4">
       
          <Label>Account Type</Label>
          <div className="mt-2">
            <Label radio>
              <Input type="radio" value="personal" name="accountType" />
              <span className="ml-2">Personal</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="radio" value="business" name="accountType" />
              <span className="ml-2">Business</span>
            </Label>
            <Label disabled className="ml-6" radio>
              <Input disabled type="radio" value="disabled" name="accountType" />
              <span className="ml-2">Disabled</span>
            </Label>
          </div>
        </div> */}

     

        <Label>
          <span>Giá tiền</span>
          <Input type="number" className="mt-1" id ="priceKhoaTap" name="PriceKhoaTap" placeholder="Nhập giá tiền" />
        </Label>

        <Label className="mt-4">
          <span>Chọn PT hướng dẫn tập</span>
          <Select className="mt-1" id="namePT" name="NamePT" multiple>
            <option>Không</option>
            <option>PT 1</option>
            <option>PT 2</option>
            <option>PT 3</option>
            <option>PT 4</option>
            <option>PT 5</option>
          </Select>
        </Label>

        <Label className="mt-4">
          <span>Chọn ngày</span>
          <div className="flex justify-evenly ">
          <div className="form-check form-check-inline">
            <div className="custom-control custom-checkbox">
              <Input type="checkbox" className="custom-control-input" id="MaThu_1" name="MaThu[]" value="1" />
                <label className="custom-control-label" for="MaThu_1">Thứ 2</label>
            </div>
          </div>
          <div className="form-check form-check-inline">
            <div className="custom-control custom-checkbox">
              <Input type="checkbox" className="custom-control-input" id="MaThu_2" name="MaThu[]" value="2" />
                <label className="custom-control-label" for="MaThu_2">Thứ 3</label>
            </div>
          </div>
          <div className="form-check form-check-inline">
            <div className="custom-control custom-checkbox">
              <Input type="checkbox" className="custom-control-input" id="MaThu_3" name="MaThu[]" value="3" />
                <label className="custom-control-label" for="MaThu_3">Thứ 4</label>
            </div>
          </div>
          </div>

          <div className="flex justify-evenly mt-6">
          <div className="form-check form-check-inline">
            <div className="custom-control custom-checkbox">
              <Input type="checkbox" className="custom-control-input" id="MaThu_4" name="MaThu[]" value="4" />
                <label className="custom-control-label" for="MaThu_4">Thứ 5</label>
            </div>
          </div>
          <div className="form-check form-check-inline">
            <div className="custom-control custom-checkbox">
              <Input type="checkbox" className="custom-control-input" id="MaThu_5" name="MaThu[]" value="5" />
                <label className="custom-control-label" for="MaThu_5">Thứ 6</label>
            </div>
          </div>
          <div className="form-check form-check-inline">
            <div className="custom-control custom-checkbox">
              <Input type="checkbox" className="custom-control-input" id="MaThu_6" name="MaThu[]" value="6" />
                <label className="custom-control-label" for="MaThu_6">Thứ 7</label>
            </div>
          </div>
          </div>
       
        </Label>

        <Label className="mt-4">
          <span>Thời gian</span>
          <Select className="mt-1" id="timeKhoaTap" name="TimeKhoaTap">
            <option>8:00 - 10:00</option>
            <option>10:00 - 12:00</option>
            <option>13:00 - 15:00</option>
            <option>15:00 - 17:00</option>
          </Select>
        </Label>

        <Label className="mt-4">
          <span>Image</span>
          <Input type = "file" id = "fileImage" name="fileImage" />
        </Label>


       

        {/* <Label className="mt-6" check>
          <Input type="checkbox" />
          <span className="ml-2">
            I agree to the <span className="underline">privacy policy</span>
          </span>
        </Label> */}
      </div>

      {/* <SectionTitle>Validation</SectionTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Invalid input</span>
          <Input className="mt-1" valid={false} placeholder="Jane Doe" />
          <HelperText valid={false}>Your password is too short.</HelperText>
        </Label>

        <Label className="mt-4">
          <span>Valid input</span>
          <Input className="mt-1" valid={true} placeholder="Jane Doe" />
          <HelperText valid={true}>Your password is strong.</HelperText>
        </Label>

        <Label className="mt-4">
          <span>Helper text</span>
          <Input className="mt-1" placeholder="Jane Doe" />
          <HelperText>Your password must be at least 6 characters long.</HelperText>
        </Label>
      </div> */}

      {/* <!-- Inputs with icons --> */}
      <SectionTitle>Icons</SectionTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex gap-5">
        <Label>
          <span>Ngày bắt đầu</span>
          <Input type = "date" id = "ngayBatDau" name="NgayBatDau" />
        </Label>
        <Label>
          <span>Ngày kết thúc</span>
          <Input type = "date" id = "ngayKetThuc" name="NgayKetThuc" />
        </Label>
        </div>
      </div>

      <div className="mb-8">
          <Button>Tạo mới</Button>
        </div>
      {/* <!-- Inputs with buttons --> */}
      {/* <SectionTitle>Buttons</SectionTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Button left</span>
          <div className="relative">
            <input
              className="block w-full pl-20 mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe"
            />
            <button className="absolute inset-y-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-l-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
              Click
            </button>
          </div>
        </Label>

        <Label className="mt-4">
          <span>Button right</span>
          <div className="relative text-gray-500 focus-within:text-purple-600">
            <input
              className="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe"
            />
            <button className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
              Click
            </button>
          </div>
        </Label>
      </div> */}
    </>
  )
}

export default FormKhoaTap
