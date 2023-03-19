// import { useState, useEffect } from "react";

// export let response;
// // request: callback function để thực hiện thao tác gọi API
// function useRequest(request, depedencies = []) {
//   // Giá trị state lưu kết quả trả về từ API
//   const [data, setData] = useState();


//   const fetchData = async () => {
//     try {
//     response = await request(); // khởi tạo biến response: là biến để hứng data của API
//       // Call API thành công
//       setData(response);
      
//     } catch (error) {
//       console.log(error);
//     }   
//   };

//   useEffect(() => {
//     fetchData();
//   }, [...depedencies]);

//   return { data };
// }

// export default useRequest;
