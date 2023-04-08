import React, { useState } from "react";

export default function Home() {
  const [gioBatDau, setGioBatDau] = useState("");
  const [gioKetThuc, setGioKetThuc] = useState("");

  const handleTimeChange = (event) => {
    const value = event.target.value;
    const [gioBD, gioKT] = value.split(" - ");
    setGioBatDau(gioBD);
    setGioKetThuc(gioKT);
  }
  return (
    <div>
      <select
        className="mt-1"
        id="timeKhoaTap"
        name="TimeKhoaTap"
        onChange={handleTimeChange}
      >
        <option>8:00 - 10:00</option>
        <option>10:00 - 12:00</option>
        <option>13:00 - 15:00</option>
        <option>15:00 - 17:00</option>
      </select>
      <div>
        Giờ bắt đầu: {gioBatDau}
      </div>
      <div>
        Giờ kết thúc: {gioKetThuc}
      </div>
    </div>
  )
}
