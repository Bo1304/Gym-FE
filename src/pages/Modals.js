import React, { useState } from 'react'

import PageTitle from '../components/Typography/PageTitle'
import CTA from '../components/CTA'
import { Modal,Label,Input, ModalHeader, ModalBody, ModalFooter, Button } from '@windmill/react-ui'

function Modals() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <>
      <PageTitle>Modals</PageTitle>
      <CTA />

      <div>
        <Button onClick={openModal}>Open modal</Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader>Modal header</ModalHeader>
        <ModalBody>
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae
          voluptatem tempore! */}
           <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
            style={{
                paddingBottom: "65px",
                paddingTop: "25px"
            }}
            >
                <Label className="mb-4">
                    <span>Tên câu lạc bộ</span>
                    <Input className="mt-1" id="nameCLB" name="NameCLB" placeholder="Nhập tên CLB" />
                </Label>

                <Label className="mb-4">
                    <span>Địa chỉ</span>
                    <Input className="mt-1" id="addressCLB" name="AddressCLB" placeholder="Nhập địa chỉ" />
                </Label>
                <Label className="mb-4">
                    <span>Số điện thoại</span>
                    <Input className="mt-1" type="tel" id="phoneCLB" name="PhoneCLB" placeholder="Nhập SĐT" />
                </Label>

                <Label className="mb-4">
                    <span>Image</span>
                    <Input type="file" id="fileImageCLB" name="FileImageCLB" />
                </Label>
            </div>

        </ModalBody>
        <ModalFooter>
          {/* I don't like this approach. Consider passing a prop to ModalFooter
           * that if present, would duplicate the buttons in a way similar to this.
           * Or, maybe find some way to pass something like size="large md:regular"
           * to Button
           */}
          <div className="hidden sm:block">
            <Button layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>

          <div className="hidden sm:block">
            <Button>Accept</Button>
          </div>


            
          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          
          <div className="block w-full sm:hidden">
            <Button block size="large">
              Accept
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Modals
