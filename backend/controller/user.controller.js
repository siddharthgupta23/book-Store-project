import bcrypt from "bcryptjs";
import user from "../model/user.model.js";

export const SignUp = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;


    if (!fullname || !email || !password) {
      return res
        .status(400)
        .json({
          message: "All fields (fullname, email, password) are required",
        });
    }


    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

  
    const createdUser = new user({
      fullname,
      email,
      password: hashedPassword,
    });

    await createdUser.save();

    res
      .status(201)
      .json({
        message: "User created successfully",
        user: {
          _id: createdUser._id,
          fullname: createdUser.fullname,
          email: createdUser.email,
        },
      });
  } catch (error) {
    if (error.response) {
      console.log("Error: " + error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const existingUser = await user.findOne({ email });
//     const isMatch = await bcrypt.compare(password, existingUser.password);
//     if (!existingUser || !isMatch) {
//       return res.status(400).json({ message: "Invalid username or password " });
//     } else {
//       return res.status(400).json({
//         message: "Login successful",
//         existingUser: {
//           _id: existingUser._id,
//           fullname: existingUser.fullname,
//           email: existingUser.email,
//         },
//       });
//     }
//   } catch (error) {
//     console.log("Error" + error.message);
//     res.status(500).json({ message: "Internal Server error" });
//   }
// };
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const existingUser = await user.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    return res.status(200).json({
      message: "Login successful",
      existingUser: {
        _id: existingUser._id,
        fullname: existingUser.fullname,
        email: existingUser.email,
      },
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};