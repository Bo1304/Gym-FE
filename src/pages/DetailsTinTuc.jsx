// import React, { useState, useEffect } from 'react';
// import {
//   Input,
//   Label,
//   FormGroup,
//   Button,
//   Card,
//   CardBody,
//   CardHeader,
// } from '@windmill/react-ui';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { actionFetchTinTucById } from '../redux/actions/listTinTucAction';

// function DetailsTinTuc(props) {
//   const dispatch = useDispatch()
//   const history = useHistory()
//   const { tinTuc } = useSelector((state) => state.listTINTUCGYM)

//   const [tenChuDe, setTenChuDe] = useState('')
//   const [theLoaiTinTuc, setTheLoaiTinTuc] = useState('')
//   const [imageTinTuc, setImageTinTuc] = useState('')
//   const [noiDungTinTuc, setNoiDungTinTuc] = useState('')

//   useEffect(() => {
//     dispatch(actionFetchTinTucById(props.match.params.id))
//   }, [dispatch, props.match.params.id])

//   useEffect(() => {
//     if (tinTuc) {
//       setTenChuDe(tinTuc.tenChuDe)
//       setTheLoaiTinTuc(tinTuc.theLoaiTinTuc)
//       setImageTinTuc(tinTuc.imageTinTuc)
//       setNoiDungTinTuc(tinTuc.noiDungTinTuc)
//     }
//   }, [tinTuc])

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const newTinTuc = {
//         tenChuDe,
//         theLoaiTinTuc,
//         imageTinTuc,
//         noiDungTinTuc,
//       }
//       await axios.put(
//         `http://localhost:3002/api/tintucs/${props.match.params.id}`,
//         newTinTuc
//       )
//       history.push('/listtintuc')
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   return (
//     <Card>
//       <CardHeader>
//         <p className="text-xl font-semibold">Chi tiết tin tức</p>
//       </CardHeader>
//       <CardBody>
//         <form onSubmit={handleSubmit}>
//           <FormGroup>
//             <Label>Tên chủ đề</Label>
//             <Input
//               className="mt-1"
//               type="text"
//               value={tenChuDe}
//               onChange={(e) => setTenChuDe(e.target.value)}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label>Thể loại tin tức</Label>
//             <Input
//               className="mt-1"
//               type="text"
//               value={theLoaiTinTuc}
//               onChange={(e) => setTheLoaiTinTuc(e.target.value)}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label>Ảnh tin tức</Label>
//             <Input
//               className="mt-1"
//               type="text"
//               value={imageTinTuc}
//               onChange={(e) => setImageTinTuc(e.target.value)}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label>Nội dung tin tức</Label>
//             <textarea
//               className="mt-1 form-textarea"
//               value={noiDungTinTuc}
//               onChange={(e) => setNoiDungTinTuc(e.target.value)}
//             />
//           </FormGroup>
//           <Button type="submit" className="mt-4">
//             Lưu
//           </Button>
//         </form>
//       </CardBody>
//     </Card>
//   );
// }

//   export default DetailsTinTuc;