exports.getUsers = (req, res) => {
  res.json([
    { id: 1, name: "Jack" },
    { id: 2, name: "Ripper" }
  ]);
};

exports.addUser = (req, res) => {
  res.json({ message: "Add user success!" });
};
const User = require("../models/userModel");

// สมัครผู้ใช้
exports.registerUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const userExists = await User.findOne({ username });
        if(userExists) return res.status(400).json({ message: "ผู้ใช้นี้มีอยู่แล้ว!" });

        const user = await User.create({ username, password });
        res.status(201).json({ message: "สมัครสมาชิกสำเร็จ!", userId: user._id });
    } catch (error) {
        res.status(500).json({ message: "เกิดข้อผิดพลาด", error });
    }
};

// เข้าสู่ระบบ
exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if(!user) return res.status(400).json({ message: "ไม่พบผู้ใช้" });

        const isMatch = await user.matchPassword(password);
        if(!isMatch) return res.status(400).json({ message: "รหัสผ่านไม่ถูกต้อง" });

        res.status(200).json({ message: "เข้าสู่ระบบสำเร็จ", userId: user._id });
    } catch (error) {
        res.status(500).json({ message: "เกิดข้อผิดพลาด", error });
    }
};
