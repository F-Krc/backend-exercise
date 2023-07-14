import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

const initialForm = {
  guestName: '',
  room: '',
  checkInDate: '',
  checkOutDate: '',
};
const App = () => {
  const [reservations, setReservations] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [formData, setFormData] = useState(initialForm);
  const [selectedReservation, setSelectedReservation] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:4000/rooms');
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []);

//  console.log(rooms);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedReservation) {
      await handleUpdateSubmit();
    } else {
      try {
        const response = await axios.post('http://localhost:4000/reservations', formData);
        console.log('Reservation added:', response.data);
        setFormData(initialForm);
        fetchReservations();
      } catch (error) {
        console.error('Error adding reservation:', error);
      }
    }
  };

  const fetchReservations = async () => {
    try {
      const response = await axios.get('http://localhost:4000/reservations');
      setReservations(response.data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const handleUpdate = (reservation) => {
    setSelectedReservation(reservation);
    setFormData({
      guestName: reservation.guestName,
      room: reservation.room,
      checkInDate: reservation.checkInDate,
      checkOutDate: reservation.checkOutDate,
    });
  };

  const handleUpdateSubmit = async () => {
    try {
      const response = await axios.put(`http://localhost:4000/reservations/${selectedReservation._id}`, formData);
      console.log('Reservation updated:', response.data);

      setFormData(initialForm);
      setSelectedReservation(null);
      fetchReservations();
    } catch (error) {
      console.error('Error updating reservation:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/reservations/${id}`);
      fetchReservations();
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };

  return (
    <div className="reservation-container">
      <h2 className="reservation-title">Reservation Form</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <label className="reservation-label">
          Guest Name:
          <input
            type="text"
            name="guestName"
            value={formData.guestName}
            onChange={handleChange}
            className="reservation-input-text"
          />
        </label>
     
        <label className="reservation-label">
          Room Type:
          <select name="room" value={formData.room} onChange={handleChange} className="reservation-select">
            <option value="">Select a room</option>
            {rooms.map((room) => (
              <option key={room._id} value={room._id}>
                {room.roomType}
              </option>
            ))}
          </select>
        </label>

        <label className="reservation-label">
          Check-in Date:
          <input
            type="date"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            className="reservation-input-date"
          />
        </label>

        <label className="reservation-label">
          Check-out Date:
          <input
            type="date"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            className="reservation-input-date"
          />
        </label>

        <button type="submit" className="reservation-submit-button">
          {selectedReservation ? 'Update Reservation' : 'Add Reservation'}
        </button>
      </form>
      <h2 className="reservation-title">Reservations</h2>
      {reservations.map((reservation) => (
        <div key={reservation._id} className="reservation-item">
          <p>Guest Name: {reservation.guestName}</p>
          <p>Room Type: {rooms.find((item) => item._id === reservation.room).roomType}</p>
          <p>Check-in Date: {new Date(reservation.checkInDate).toLocaleDateString('en-GB')}</p>
          <p>Check-out Date: {new Date(reservation.checkOutDate).toLocaleDateString('en-GB')}</p>
          <button onClick={() => handleUpdate(reservation)} className="reservation-update-button">
            Update
          </button>
          <button onClick={() => handleDelete(reservation._id)} className="reservation-delete-button">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
