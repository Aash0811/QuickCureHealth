const express = require("express");
const app = express();
const ejs = require("ejs");
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");
const aiModel = require("./aiModel.js"); 
const session=require("express-session");
const passport = require("passport");
const dotenv = require("dotenv");
const flash = require('connect-flash');
const Razorpay = require("razorpay");
const Test = require("./models/Test");
const TestBooking = require("./models/TestBooking");
const http = require("http").createServer(app);
const io = require("socket.io")(http);
dotenv.config();
const cors = require('cors');
app.use(cors());
const sendEmail = require("./utils/mailer.js");
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));
app.use(flash());

const mate = require("ejs-mate");
app.engine("ejs", mate);

const mongoose = require("mongoose");

const User = require("./models/user.js");

app.use(passport.initialize());
app.use(passport.session());


app.use((req, res, next) => {
  res.locals.currentUser = req.user || null;
  res.locals.loc = req.session.loc || null;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

async function init() {
  try {
    await mongoose.connect('mongodb+srv://quickcurehealth:quickcurehealth@main.crinndq.mongodb.net/?retryWrites=true&w=majority&appName=main', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}
init();
const Drug=require("./models/druglist.js");
const ChatRequest = require("./models/chat.js");
const ChatMessage = require("./models/chatMessage");

const Doctor = require("./models/doctor.js");
passport.use("doctor-local", Doctor.createStrategy());
passport.use("user-local", User.createStrategy());
passport.serializeUser(function(user, done) {
  
  const type = user && user.specialization !== undefined ? "doctor" : "user";
  done(null, { id: user._id, type });
});

passport.deserializeUser(async function(obj, done) {
  try {
    if (obj.type === "doctor") {
      const doctor = await Doctor.findById(obj.id);
      done(null, doctor);
    } else {
      const user = await User.findById(obj.id);
      done(null, user);
    }
  } catch (err) {
    done(err);
  }
});
http.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("home.ejs", { loc: req.session.loc || null });
});

app.get("/prediction", (req, res) => {
   res.render("idx1.ejs");
});

app.get("/list/:id", (req, res,next) => {
  let {id}=req.params;
  Doctor.find({city:id}).then((data) => {
    res.render("fields.ejs", { data: data, city: id, spec: "", sort: null });
  })
  .catch((err)=>{
    next(err);
  })
  });

  app.get("/list/:id1/:id2", (req, res) => {
    let {id1,id2}=req.params;
    Doctor.find({ specialization: id2, city: id1 }).then((results) => {
      res.render("fields.ejs", { data: results, city: id1, spec: id2, sort: null });
    });
  });

  app.post("/list/:id1/sort", (req, res) => {
    let {id1}=req.params;
    let {doctor,sort}=req.body;
   Doctor.find({ specialization: doctor, city: id1 }).sort({ [sort]: -1 }).then((results) => {
      res.render("fields.ejs", { data: results, city: id1, spec: doctor, sort: sort });
    });
  });


app.get("/patient-dashboard", async (req, res) => {
  if (!req.user) return res.redirect("/login");
  const requests = await ChatRequest.find({ patient: req.user._id }).populate("doctor");
  const error = req.flash("error");
  res.render("patientdashboard", { chatRequests: requests, user: req.user, error });
});

app.get("/doctor-dashboard", async (req, res) => {
  if (!req.user) return res.redirect("/doctor-login");
  const requests = await ChatRequest.find({ doctor: req.user._id }).populate("patient");
  res.render("docdashboard", { requests, error: null });
});
app.post("/request-appoint", async (req, res) => {
  const { doctorId, type, date, time } = req.body;
  const patientId = req.user._id;
  console.log("Requesting appointment with doctor:", doctorId, "for patient:", patientId, "on", date, "at", time);

  const existingRequest = await ChatRequest.findOne({
    doctor: doctorId,
    patient: patientId,
    status: { $in: ["pending", "accepted"] },
  });

  if (existingRequest) {
    req.flash("error", "You already have an active chat request with this doctor.");
    return res.redirect("/patient-dashboard");
  }

  // Otherwise, create a new request
  const newRequest = new ChatRequest({
    doctor: doctorId,
    patient: patientId,
    type,
    date,
    time,
    status: "pending",
  });

  await newRequest.save();
  res.redirect("/patient-dashboard");
});
app.post("/accept-appointment", async (req, res) => {
  try {
    const { requestId } = req.body; // <-- use body, not params
    const chatRequest = await ChatRequest.findByIdAndUpdate(
      requestId,
      { status: "accepted" },
      { new: true }
    ).populate("patient doctor"); // <-- correct fields

    if (!chatRequest) {
      req.flash("error", "Appointment not found.");
      return res.redirect("/doctor-dashboard");
    }

    const patientEmail = chatRequest.patient.email;
    const doctorName = chatRequest.doctor.name;
    const appointmentDate = chatRequest.date;
    const appointmentTime = chatRequest.time;

    const subject = "Your Appointment Has Been Accepted!";
    const html = `
      <h2>Appointment Confirmed</h2>
      <p>Dear ${chatRequest.patient.username || chatRequest.patient.name},</p>
      <p>Your appointment with Dr. ${doctorName} has been <b>accepted</b>.</p>
      <p><b>Date:</b> ${appointmentDate}</p>
      <p><b>Time:</b> ${appointmentTime}</p>
      <p><b>address:</b>${chatRequest.doctor.hospitalName},${chatRequest.doctor.city}</p>
      <p>Thank you for using QuickCureHealth.</p>
    `;

    await sendEmail(patientEmail, subject, html);

    req.flash("success", "Appointment accepted and patient notified by email.");
    res.redirect(`/chat/${requestId}`);
  } catch (err) {
    console.error("Error accepting appointment:", err);
    req.flash("error", "Failed to accept appointment.");
    res.redirect("/doctor-dashboard");
  }
});
app.post('/delete-appointment/:id', async (req, res) => {
  try {
    await ChatRequest.findByIdAndDelete(req.params.id);
    res.redirect('/doctor-dashboard');
  } catch (err) {
    console.error('Error deleting appointment:', err);
    res.status(500).send("Server error while deleting appointment");
  }
});




app.post("/request-chat", async (req, res) => {
  const { doctorId, type } = req.body;
  const patientId = req.user._id;

  const existingRequest = await ChatRequest.findOne({
    doctor: doctorId,
    patient: patientId,
    status: { $in: ["pending", "accepted"] },
  });

  if (existingRequest) {
    req.flash("error", "You already have an active chat request with this doctor.");
    return res.redirect("/patient-dashboard");
  }

  const newRequest = new ChatRequest({
    doctor: doctorId,
    patient: patientId,
    type,
    status: "pending",
  });

  await newRequest.save();
  res.redirect("/patient-dashboard");
});

app.post("/accept-chat", async (req, res) => {
  await ChatRequest.findByIdAndUpdate(req.body.requestId, { status: "accepted" });
  res.redirect(`/chat/${req.body.requestId}`);
});
app.post("/chat-request/:id/reject", async (req, res) => {
  try {
    await ChatRequest.findByIdAndDelete(req.params.id);
    req.flash("error", "Chat request has been deleted.");
    res.redirect("/doctor-dashboard");
  } catch (err) {
    console.error("Error deleting request:", err);
    res.status(500).send("Internal server error");
  }
});


app.get("/chat/:id", async (req, res) => {
  if (!req.isAuthenticated()) return res.redirect("/login");

  const chatRequest = await ChatRequest.findById(req.params.id)
    .populate("doctor")
    .populate("patient");

  if (!chatRequest) return res.status(404).send("Chat not found");

  const messages = await ChatMessage.find({ chatRequest: chatRequest._id });

  // Detect patient by model type
  const isPatient = req.user instanceof User;
  const currentUser = req.user;
  const currentModel = isPatient ? "User" : "Doctor";
  const otherUser = isPatient ? chatRequest.doctor : chatRequest.patient;
  const otherUserName = otherUser?.name || otherUser?.username || "Unknown";

  res.render("chatroom", {
    chatId: chatRequest._id,
    currentUser,
    userModel: currentModel,
    doctor: chatRequest.doctor,
    patient: chatRequest.patient,
    otherUserName,
    messages
  });
});



io.on("connection", (socket) => {
  socket.on("joinRoom", (chatId) => {
    socket.join(chatId);
  });

  // Real-time messaging
  socket.on("message", async ({ chatId, sender, senderModel, text }) => {
    if (!chatId || !sender || !text || !senderModel) return;

    const newMsg = new ChatMessage({
      chatRequest: chatId,
      senderName: sender,
      senderModel,
      text,
      timestamp: new Date().toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    });

    await newMsg.save();

    io.to(chatId).emit("message", {
      sender,
      senderModel,
      text,
      timestamp: newMsg.timestamp,
    });
  });

  // 🔁 File Sharing
 socket.on("file-share", async ({ chatId, fileName, fileData, sender, senderModel }) => {
  if (!chatId || !fileName || !fileData || !sender || !senderModel) {
    console.error("Missing data in file-share");
    return;
  }

  const timestamp = new Date().toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const newMsg = new ChatMessage({
    chatRequest: chatId,
    senderName: sender,
    senderModel,
    file: {
      fileName,
      fileData,
    },
    timestamp,
  });

  await newMsg.save();

  io.to(chatId).emit("file-share", {
    fileName,
    fileData,
    sender,
    senderModel,
    timestamp,
  });
});
  socket.on("start-call", (roomId) => {
    socket.to(roomId).emit("user-joined");
  });

  socket.on("offer", ({ offer, roomId }) => {
    socket.to(roomId).emit("offer", { offer });
  });

  socket.on("answer", ({ answer, roomId }) => {
    socket.to(roomId).emit("answer", { answer });
  });

  socket.on("ice-candidate", ({ candidate, roomId }) => {
    socket.to(roomId).emit("ice-candidate", { candidate });
  });
});



app.get("/booking", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "page2.html"));
});
app.get("/payment.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "payment.html"));
});
app.post("/book-test", async (req, res) => {
  const { testId, fullName, email, phone, age, date, time } = req.body;
  if (!testId || !fullName || !email || !phone || !age || !date || !time) {
    return res.status(400).send("All fields are required.");
  }
  try {
    const test = await Test.findById(testId);
    if (!test) {
      console.error("Test not found for testId:", testId);
      return res.status(404).send("Test not found");
    }
    let user = await User.findOne({ email });
    if (!user) {
      res.send("<h1>user not logged in </h1>");
      return; 
    }
    const booking = new TestBooking({
      test: test._id,
      user: user._id,
      date,
      time,
      paymentStatus: "pending"
    });
    await booking.save();
    res.json({ redirect: `/payment.html?bookingId=${booking._id}` });
    console.log(req.body);
  } catch (err) {
    console.error("Booking Error (main catch):", err);
    res.status(500).send("Error booking the test. Try again later.");
  }
});
app.post("/dummy-pay", async (req, res) => {
  const { bookingId } = req.body;
  if (!bookingId) return res.status(400).send("Missing bookingId");
  try {
    const booking = await TestBooking.findByIdAndUpdate(
      bookingId,
      { paymentStatus: "paid" },
      { new: true }
    ).populate("user test"); 

console.log(booking);
    if (!booking) {
      return res.status(404).send("Booking not found");
    }
    const user = booking.user;
    const test = booking.test;
    const email = user.email;
    const mailContent = `
      <h2>Test Booking Confirmation</h2>
      <p>Dear ${user.username || user.name || "User"},</p>
      <p>Your booking for the test <b>${test.name}</b> has been confirmed and payment received.</p>
      <p><b>Date:</b> ${booking.date}</p>
      <p><b>Time:</b> ${booking.time}</p>
      <p>Thank you for choosing QuickCure Health!</p>
    `;
    await sendEmail(email, "Your Test Booking is Confirmed - QuickCure Health", mailContent);
    res.json({ redirect: "/booking-success" });
  } catch (err) {
    console.error("Error in dummy-pay:", err);
    res.status(500).json({ error: "Failed to update booking status or send email" });
  }
});
app.get("/booking-success", (req, res) => {
  res.send('<h1>Booking Successful!</h1><p>Your test slot has been reserved and payment received.</p><a href="/">Go Home</a>');
});

app.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, 
    currency: "INR",
    receipt: "receipt_order_" + uuidv4(),
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json({ orderId: order.id });
  } catch (err) {
    console.error("Razorpay Error:", err);
    res.status(500).send("Error creating Razorpay order");
  }
});
app.get("/tests", async (req, res) => {
  try {
    const tests = await Test.find({});
    res.json(tests);
  } catch (err) {
    console.error("Error fetching tests:", err);
    res.status(500).json({ error: "Failed to fetch tests" });
  }
});
app.post("/sym", async (req, res) => {
  const { age, gender, occupation, symptoms } = req.body;

  if (!age || !gender || !occupation || !symptoms) {
    return res.status(400).send("All fields are required.");
  }

  const query = `I am ${age} ${gender} and working as ${occupation} and I am suffering from ${symptoms}. Provide a detailed analysis including predicted diseases, temporary relief measures, future complications, possible causes, and preventive measures.`;
  try {
    const result = await aiModel.aiModel(query);
    res.send(result);
  } catch (error) {
    console.error("Error:", error.message || error);
    res.status(500).send("An error occurred while processing your request. Please try again later.");
  }
});
app.get("/drug",(req,res)=>{
  let {name}=req.query;
    Drug.findOne({name:name})
    .then((data)=>{
      res.render("DrugShow.ejs",{data:data});
    })
    .catch((err)=>{
res.send("no data found");
    })
})
app.post("/cart/remove/:drugId", async (req, res) => {
  if (!req.user) {
    return res.send("<h4>User is not logged in</h4>");
  }
  const { drugId } = req.params;
  try {
    await User.findByIdAndUpdate(
      req.user._id,
      { $pull: { cart: drugId } }
    );
    res.redirect("/cart");
  } catch (err) {
    console.error("Error removing from cart:", err);
    res.status(500).send("Error removing item from cart.");
  }
});

app.get("/cart", async (req, res) => {
  if (!req.user) {
    return res.send("<h4>User is not logged in</h4>");
  }
  try {
    const user = await User.findById(req.user._id).populate('cart');
    res.render("cartdetail.ejs", { cart: user.cart });
  } catch (err) {
    console.error("Error fetching cart:", err);
    res.status(500).send("Error fetching cart.");
  }
});
app.post("/drug/:id", async (req, res) => {
  if (!req.user) {
    return res.send("<h4>User is not logged in</h4>");
  }
  const { id } = req.params;
  try {
    await User.findByIdAndUpdate(
      req.user._id,
      { $addToSet: { cart: id } }, 
      { new: true }
    );
    res.redirect("/drugs"); 
  } catch (err) {
    console.error("Error adding to cart:", err);
    res.status(500).send("Error adding drug to cart.");
  }
});

app.get("/drugs", async (req, res) => {
  Drug.find({}).then((data) => {
    res.render("idx4.ejs", { drugs: data });
  })
  .catch((err) => {
    console.error("Error fetching drugs:", err);
    res.status(500).send("An error occurred while fetching the drug list.");
  });
});
app.post("/address", async (req, res) => {
  const { firstName, lastName, number, address, price } = req.body;

  if (!req.user) {
    return res.send("<h4>User is not logged in</h4>");
  }

  try {
    const user = await User.findById(req.user._id).populate('cart');
    const email = user.email;
  
    let cartHtml = "<ul>";
    user.cart.forEach(drug => {
      cartHtml += `<li>${drug.name} - ${drug.medSelling}</li>`;
        Drug.findByIdAndUpdate(drug._id,{$inc:{stock:-1}},{new:true}).then(()=>{
          console.log(`${drug.name} - ${drug.medSelling}`);
        })
        .catch((err)=>{
          console.log("error");
        })
      
    });
    cartHtml += "</ul>";

    const mailContent = `
      <h2>Order Confirmation</h2>
      <p>Dear ${firstName} ${lastName},</p>
      <p>Your order has been placed successfully!</p>
      <h3>Delivery Address:</h3>
      <p>${address}</p>
      <h3>Contact Number:</h3>
      <p>${number}</p>
      <h3>Products:</h3>
      ${cartHtml}
      <h3>Total Price: ₹${price}</h3>
      <p>Thank you for shopping with QuickCure Health!</p>
    `;

    await sendEmail(email, "Your Order is Placed - QuickCure Health", mailContent);
  
user.orders = user.orders.concat(user.cart.map(drug => drug._id));
user.cart = [];
await user.save();

    res.send("<h1>Order placed successfully! A confirmation email has been sent to your email address.<a href='/'><button></button></a></h1>");
  } catch (err) {
    console.error("Error placing order:", err);
    res.status(500).send("Error placing order.");
  }
});
app.get("/address",(req,res)=>{
  let {price}=req.query;
  res.render("address.ejs",{price, WHEATHER_API : process.env.WHEATHER_API})
})


let otpStore = {}; 
app.post('/send-otp', async (req, res) => {
  const { username, password, email } = req.body;
  const user = await User.findOne({ email });
  if (user) return res.send('User already exists');

  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStore[email] = otp;

  req.session.signupData = { username, password, email };

  await sendEmail(email, 'Your OTP Code', `
    <p>Your OTP is: <strong>${otp}</strong></p>
    <p>It is valid for 5 minutes.</p>
  `);
  res.render("otp-verify.ejs", { email });
});

app.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  if (!otpStore[email] || otpStore[email].toString() !== otp.toString()) {
    return res.send('Invalid OTP');
  }

  delete otpStore[email];

  const signupData = req.session.signupData;
  if (!signupData || signupData.email !== email) {
    return res.send('Signup session expired or invalid');
  }
  try {
    const user = await User.register(
      new User({ username: signupData.username, email: signupData.email }),
      signupData.password
    );
    req.login(user, (err) => {
      if (err) return res.send('Login error after registration');
      delete req.session.signupData;
      return res.redirect("/");
    });
  } catch (err) {
    return res.send('Registration failed: ' + err.message);
  }
});

app.get("/login", (req, res) => res.render("dual.ejs"));

app.get("/signin", (req, res) => {
  res.render("signin.ejs");
});
app.get("/doctor-login", (req, res) => res.render("doctorlogin.ejs"));

app.post("/login", passport.authenticate("user-local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
}));


app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

app.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const user = await User.register(new User({ username, email }), password);
    req.login(user, (err) => {
      if (err) return res.status(500).send("Login failed");
      res.redirect("/");
    });
  } catch (err) {
    res.status(500).send("Signup error");
  }
});
app.post("/doctor-login", (req, res, next) => {
  console.log("Doctor login POST body:", req.body);
  passport.authenticate("doctor-local", (err, doctor, info) => {
    if (err) return next(err);
    if (!doctor) {
      return res.render("doctorlogin.ejs", { error: info && info.message ? info.message : "Invalid credentials" });
    }
    req.logIn(doctor, (err) => {
      if (err) return next(err);
      return res.redirect("/doctor-dashboard");
    });
  })(req, res, next);
});
app.get("/signout", (req, res) => {
  req.logout(function(err) {
    if (err) {
      console.error("Logout error:", err);
      return res.status(500).send("Logout failed.");
    }
    res.redirect("/");
  });
});
app.use((req, res) => {
  res.status(404).send("<h1>404, Page Not Found</h1>");
});

app.post('/set-location', (req, res) => {
  req.session.location = req.body.location;
  res.sendStatus(200);
});

app.get("/doctor-signup", (req, res) => {
  res.render("doctorSignup.ejs");
});

app.post("/doctor-signup", async (req, res) => {
  const { name, email, password, specialization, city, hospitalName, study, workExperience } = req.body;
  try {
    const doctor = await Doctor.register(
      new Doctor({ name, email, specialization, city, hospitalName, study, workExperience }),
      password
    );
    req.login(doctor, (err) => {
      if (err) return res.status(500).send("Login failed");
      res.redirect("/doctor-dashboard");
    });
  } catch (err) {
    res.status(500).send("Doctor signup error: " + err.message);
  }
});
