import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:4000/Travel");

const bookingSchema = new mongoose.Schema(
   {
      userId: {
         type: String
      },
      userEmail: {
         type: String
      },
      tourName: {
         type: String,
         required: true,
      },
      fullName: {
         type: String,
         required: true,
      },
      guestSize: {
         type: Number,
         required: true
      },
      phone: {
         type: Number,
         required: true
      },
      bookAt: {
         type: Date,
         required: true
      },
   },
   { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
