// import React, { useEffect, useState } from "react";
// import _ from 'lodash';
// import { NavLink, useNavigate } from "react-router-dom";
// import '../../assets/libUser/User_Gym/style.min.css'
// import UserHeader from "../UI/UserHeader";
// import UserFooter from "../UI/UserFooter";
// // import '../../assets/libUser/User_Gym/style.min.css';
// import carousel1 from "../../assets/libUser/img/carousel-1.jpg";
// import carousel2 from "../../assets/libUser/img/carousel-2.jpg";


// import {Helmet} from 'react-helmet';
// export default function CalendarGym(props) {
//     const [timetableData, setTimetableData] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await axios.get('http://localhost:3002/api/thoikhoabieu/642d32692657541a8a9932f5');
//           const { idKhoaTap } = response.data;
//           const { ChonNgayTap } = idKhoaTap;
//           const timetableData = [
//             {
//               timeSlot: '8:00 - 10:00',
//               className: ''
//             },
//             {
//               timeSlot: '10:00 - 12:00',
//               className: ''
//             },
//             {
//               timeSlot: '13:00 - 15:00',
//               className: ''
//             },
//             {
//               timeSlot: '15:00 - 17:00',
//               className: ''
//             }
//           ];

//           // Fill class names based on ChonNgayTap
//           ChonNgayTap.forEach((day) => {
//             switch (day) {
//               case 'Mon':
//                 timetableData[2].className = idKhoaTap.TenKhoaTap;
//                 break;
//               case 'Tue':
//                 timetableData[0].className = idKhoaTap.TenKhoaTap;
//                 break;
//               case 'Wed':
//                 timetableData[2].className = idKhoaTap.TenKhoaTap;
//                 break;
//               case 'Thu':
//                 timetableData[1].className = idKhoaTap.TenKhoaTap;
//                 break;
//               case 'Fri':
//                 timetableData[3].className = idKhoaTap.TenKhoaTap;
//                 break;
//               case 'Sat':
//                 timetableData[2].className = idKhoaTap.TenKhoaTap;
//                 break;
//               case 'Sun':
//                 timetableData[0].className = idKhoaTap.TenKhoaTap;
//                 break;
//               default:
//                 break;
//             }
//           });

//           setTimetableData(timetableData);
//           setIsLoading(false);
//         } catch (error) {
//           console.error(error);
//           setIsLoading(false);
//         }
//       };

//       fetchData();
//     }, []);
//    return (
//    <div>

//         <UserHeader/>
//         <div className="container-fluid page-header mb-5">
//         <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" 
//         style={{
//             minHeight:'400px'
//         }}
//         >
//             <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Lịch học</h4>
//             <div className="d-inline-flex">
//                 <p className="m-0 text-white"><a className="text-white" href="">Home</a></p>
//                 <p className="m-0 text-white px-2">/</p>
//                 <p className="m-0 text-white">lịch học</p>
//             </div>
//         </div>
//     </div>

//     <div class="container gym-feature py-5">
//         <div className="d-flex flex-column text-center mb-5">
//             <h4 className="text-primary font-weight-bold">className Timetable</h4>
//             <h4 className="display-4 font-weight-bold">Working Hours and className Time</h4>
//         </div>
//         <div className="tab-className">
//             <ul className="nav nav-pills justify-content-center mb-4">
//                 <li className="nav-item">
//                     <a className="nav-link active" data-toggle="pill" href="#className-all">All classNamees</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" data-toggle="pill" href="#className-cardio">Cardio</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" data-toggle="pill" href="#className-crossfit">Crossfit</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" data-toggle="pill" href="#className-powerlifting">Powerlifting</a>
//                 </li>
//             </ul>
//             <div className="tab-content">
//                 <div id="className-all" className="container tab-pane p-0 active">
//                     <div className="table-responsive">
//                         <table className="table table-bordered table-lg m-0">
//                             <thead className="bg-secondary text-white text-center">
//                                 <tr>
//                                     <th>Time</th>
//                                     <th>Monday</th>
//                                     <th>Tuesday</th>
//                                     <th>Wednesday</th>
//                                     <th>Thursday</th>
//                                     <th>Friday</th>
//                                     <th>Saturday</th>
//                                     <th>Sunday</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="text-center">
//                                 <tr>
//                                     <th className="bg-secondary text-white align-middle">8.00 - 10.00</th>
//                                     <td><h5>Cardio</h5>John Deo</td>
//                                     <td></td>
//                                     <td><h5>Crossfit</h5>Adam Phillips</td>
//                                     <td></td>
//                                     <td><h5>Power Lifting</h5>James Alien</td>
//                                     <td></td>
//                                     <td><h5>Cardio</h5>John Deo</td>
//                                 </tr>
//                                 <tr>
//                                     <th className="bg-secondary text-white align-middle">10.00 - 12.00</th>
//                                     <td></td>
//                                     <td><h5>Power Lifting</h5>James Alien</td>
//                                     <td></td>
//                                     <td><h5>Cardio</h5>John Deo</td>
//                                     <td></td>
//                                     <td><h5>Crossfit</h5>Adam Phillips</td>
//                                     <td></td>
//                                 </tr>
//                                 <tr>
//                                     <th className="bg-secondary text-white align-middle">13.00 - 15.00</th>
//                                     <td><h5>Crossfit</h5>Adam Phillips</td>
//                                     <td></td>
//                                     <td><h5>Power Lifting</h5>James Alien</td>
//                                     <td></td>
//                                     <td><h5>Cardio</h5>John Deo</td>
//                                     <td></td>
//                                     <td><h5>Crossfit</h5>Adam Phillips</td>
//                                 </tr>
//                                 <tr>
//                                     <th className="bg-secondary text-white align-middle">15.00 - 17.00</th>
//                                     <td></td>
//                                     <td><h5>Cardio</h5>John Deo</td>
//                                     <td></td>
//                                     <td><h5>Crossfit</h5>Adam Phillips</td>
//                                     <td></td>
//                                     <td><h5>Power Lifting</h5>James Alien</td>
//                                     <td></td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//                 <div id="className-cardio" className="container tab-pane fade p-0">
//                     <div className="table-responsive">
//                         <table className="table table-bordered table-lg m-0">
//                             <thead className="bg-secondary text-white text-center">
//                                 <tr>
//                                     <th>Time</th>
//                                     <th>Monday</th>
//                                     <th>Tuesday</th>
//                                     <th>Wednesday</th>
//                                     <th>Thursday</th>
//                                     <th>Friday</th>
//                                     <th>Saturday</th>
//                                     <th>Sunday</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="text-center">
//                                 <tr>
//                                     <th className="bg-secondary text-white align-middle">6.00am - 8.00am</th>
//                                     <td className="bg-primary text-white"><h5 className="text-white">Cardio</h5>John Deo</td>
//                                     <td></td>
//                                     <td><h5>Crossfit</h5>Adam Phillips</td>
//                                     <td></td>
//                                     <td><h5>Power Lifting</h5>James Alien</td>
//                                     <td></td>
//                                     <td className="bg-primary text-white"><h5 className="text-white">Cardio</h5>John Deo</td>
//                                 </tr>
//                                 <tr>
//                                     <th className="bg-secondary text-white align-middle">10.00am - 12.00am</th>
//                                     <td></td>
//                                     <td><h5>Power Lifting</h5>James Alien</td>
//                                     <td></td>
//                                     <td className="bg-primary text-white"><h5 className="text-white">Cardio</h5>John Deo</td>
//                                     <td></td>
//                                     <td><h5>Crossfit</h5>Adam Phillips</td>
//                                     <td></td> 
//                                 </tr>
//                                 <tr>
//                                     <th className="bg-secondary text-white align-middle">5.00pm - 7.00pm</th>
//                                     <td><h5>Crossfit</h5>Adam Phillips</td>
//                                     <td></td>
//                                     <td><h5>Power Lifting</h5>James Alien</td>
//                                     <td></td>
//                                     <td className="bg-primary text-white"><h5 className="text-white">Cardio</h5>John Deo</td>
//                                     <td></td>
//                                     <td><h5>Crossfit</h5>Adam Phillips</td>
//                                 </tr>
//                                 <tr>
//                                     <th className="bg-secondary text-white align-middle">7.00pm - 9.00pm</th>
//                                     <td></td>
//                                     <td className="bg-primary text-white"><h5 className="text-white">Cardio</h5>John Deo</td>
//                                     <td></td>
//                                     <td><h5>Crossfit</h5>Adam Phillips</td>
//                                     <td></td>
//                                     <td><h5>Power Lifting</h5>James Alien</td>
//                                     <td></td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//                 <div id="className-crossfit" className="container tab-pane fade p-0">
//                     <div className="table-responsive">
//                         <table className="table table-bordered table-lg m-0">
//                             <thead className="bg-secondary text-white text-center">
//                                 <tr>
//                                     <th>Time</th>
//                                     <th>Monday</th>
//                                     <th>Tuesday</th>
//                                     <th>Wednesday</th>
//                                     <th>Thursday</th>
//                                     <th>Friday</th>
//                                     <th>Saturday</th>
//                                     <th>Sunday</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="text-center">
//                                 <tr>
//                                     <th className="bg-secondary text-white align-middle">6.00am - 8.00am</th>
//                                     <td><h5>Cardio</h5>John Deo</td>
//                                     <td></td>
//                                     <td className="bg-primary text-white"><h5 className="text-white">Crossfit</h5>Adam Phillips</td>
//                                     <td></td>
//                                     <td><h5>Power Lifting</h5>James Alien</td>
//                                     <td></td>
//                                     <td><h5>Cardio</h5>John Deo</td>
//                                 </tr>
//                                 <tr>
//                                     <th className="bg-secondary text-white align-middle">10.00am - 12.00am</th>
//                                     <td></td>
//                                     <td><h5>Power Lifting</h5>James Alien</td>
//                                     <td></td>
//                                     <td><h5>Cardio</h5>John Deo</td>
//                                     <td></td>
//                                     <td className="bg-primary text-white"><h5 className="text-white">Crossfit</h5>Adam Phillips</td>
//                                     <td></td> 
//                                 </tr>
//                                 <tr>
//                                     <th className="bg-secondary text-white align-middle">5.00pm - 7.00pm</th>
//                                     <td className="bg-primary text-white"><h5 className="text-white">Crossfit</h5>Adam Phillips</td>
//                                     <td></td>
//                                     <td><h5>Power Lifting</h5>James Alien</td>
//                                     <td></td>
//                                     <td><h5>Cardio</h5>John Deo</td>
//                                     <td></td>
//                                     <td className="bg-primary text-white"><h5 className="text-white">Crossfit</h5>Adam Phillips</td>
//                                 </tr>
//                                 <tr>
//                                     <th className="bg-secondary text-white align-middle">7.00pm - 9.00pm</th>
//                                     <td></td>
//                                     <td><h5>Cardio</h5>John Deo</td>
//                                     <td></td>
//                                     <td className="bg-primary text-white"><h5 className="text-white">Crossfit</h5>Adam Phillips</td>
//                                     <td></td>
//                                     <td><h5>Power Lifting</h5>James Alien</td>
//                                     <td></td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//                 <div id="class-powerlifting" className="container tab-pane fade p-0">
//                     <div className="table-responsive">
//                         <table className="table table-bordered table-lg m-0">
//                             <thead className="bg-secondary text-white text-center">
//                                 <tr>
//                                     <th>Time</th>
//                                     <th>Monday</th>
//                                     <th>Tuesday</th>
//                                     <th>Wednesday</th>
//                                     <th>Thursday</th>
//                                     <th>Friday</th>
//                                     <th>Saturday</th>
//                                     <th>Sunday</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="text-center">
//                                 <tr>
//                                     <th className="bg-secondary text-white align-middle">6.00am - 8.00am</th>
//                                     <td><h5>Cardio</h5>John Deo</td>
//                                     <td></td>
//                                     <td><h5>Crossfit</h5>Adam Phillips</td>
//                                     <td></td>
//                                     <td className="bg-primary text-white"><h5 className="text-white">Power Lifting</h5>James Alien</td>
//                                     <td></td>
//                                     <td><h5>Cardio</h5>John Deo</td>
//                                 </tr>
//                                 <tr>
//                                     <th className="bg-secondary text-white align-middle">10.00am - 12.00am</th>
//                                     <td></td>
//                                     <td className="bg-primary text-white"><h5 className="text-white">Power Lifting</h5>James Alien</td>
//                                     <td></td>
//                                     <td><h5>Cardio</h5>John Deo</td>
//                                     <td></td>
//                                     <td><h5>Crossfit</h5>Adam Phillips</td>
//                                     <td></td> 
//                                 </tr>
//                                 <tr>
//                                     <th className="bg-secondary text-white align-middle">5.00pm - 7.00pm</th>
//                                     <td><h5>Crossfit</h5>Adam Phillips</td>
//                                     <td></td>
//                                     <td className="bg-primary text-white"><h5 className="text-white">Power Lifting</h5>James Alien</td>
//                                     <td></td>
//                                     <td><h5>Cardio</h5>John Deo</td>
//                                     <td></td>
//                                     <td><h5>Crossfit</h5>Adam Phillips</td>
//                                 </tr>
//                                 <tr>
//                                     <th className="bg-secondary text-white align-middle">7.00pm - 9.00pm</th>
//                                     <td></td>
//                                     <td><h5>Cardio</h5>John Deo</td>
//                                     <td></td>
//                                     <td><h5>Crossfit</h5>Adam Phillips</td>
//                                     <td></td>
//                                     <td className="bg-primary text-white"><h5 className="text-white">Power Lifting</h5>James Alien</td>
//                                     <td></td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

//         <UserFooter/>
//     </div>
//    )
// }
import React, { useEffect, useState } from "react";
import _ from 'lodash';
import { NavLink, useHistory, useNavigate } from "react-router-dom";
import '../../assets/libUser/User_Gym/style.min.css'
import UserHeader from "../UI/UserHeader";
import UserFooter from "../UI/UserFooter";
// import '../../assets/libUser/User_Gym/style.min.css';
import carousel1 from "../../assets/libUser/img/carousel-1.jpg";
import carousel2 from "../../assets/libUser/img/carousel-2.jpg";
import axios from "axios";
import './Css/CelendarGym.css';

function CalendarGym() {
    const history = useHistory();
    const [usertkb, setusertkb] = useState(null);
    useEffect(() => {
      const userTKB = JSON.parse(localStorage.getItem('User-GYM'));
      if (userTKB) {
        setusertkb(userTKB);
      }
      // else{
      //   history.push('/login-users');
      // }
  
    }, [history]);
    console.log(usertkb?.HoTenHocVien)
    console.log(usertkb?._id)
    const idUserByTKB = usertkb?._id;
    // console.log(idUserByTKB)
    const [scheduleData, setScheduleData] = useState([]);

    useEffect(() => {
        const idUserByTKB = usertkb?._id;
        axios
          .get(`http://localhost:3002/api/thoikhoabieu/${idUserByTKB}`)
          .then((response) => setScheduleData(response.data));
      }, [usertkb]);
      

    const renderSchedule = () => {
        const timeSlots = [
            "8:00 - 10:00",
            "10:00 - 12:00",
            "13:00 - 15:00",
            "15:00 - 17:00",
        ];

        const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

        const schedule = [];
        for (let i = 0; i < timeSlots.length; i++) {
            const timeSlot = timeSlots[i];
            const row = [];
            for (let j = 0; j < weekdays.length; j++) {
                const weekday = weekdays[j];
                const matchingCourse = scheduleData.find((course) =>
                    course.idKhoaTap.ChonNgayTap.includes(weekday) &&
                    course.idKhoaTap.GioBatDau === timeSlot.split(" - ")[0]
                );
                row.push(
                    <td key={`${i}-${j}`}>
                        {matchingCourse ? matchingCourse.idKhoaTap.TenKhoaTap : ""}
                    </td>
                );
            }
            schedule.push(<tr key={i}><td>{timeSlot}</td>{row}</tr>);
        }
        return schedule;
    };

    return (
        <div>
            <UserHeader />
            <div className="container-fluid page-header mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
                    style={{
                        minHeight: '400px'
                    }}
                >
                    <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Lịch học</h4>
                    <div className="d-inline-flex">
                        <p className="m-0 text-white"><a className="text-white" href="">Home</a></p>
                        <p className="m-0 text-white px-2">/</p>
                        <p className="m-0 text-white">lịch học</p>
                    </div>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                        <th>Sun</th>
                    </tr>
                </thead>
                <tbody>{renderSchedule()}</tbody>
            </table>
            <UserFooter />
        </div>

    );
}

export default CalendarGym;