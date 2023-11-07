const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/hostel-management', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());


const RoomSchema = new mongoose.Schema({
  roomNumber: String,
  occupants: Number,
});
const Room = mongoose.model('Room', RoomSchema);


app.get('/api/rooms', async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
});

app.post('/api/rooms', async (req, res) => {
  const { roomNumber, occupants } = req.body;
  const room = new Room({ roomNumber, occupants });
  await room.save();
  res.json(room);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
