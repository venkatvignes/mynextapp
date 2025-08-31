import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const body = await req.formData();
  const email = body.get("email");
  const password = body.get("password");

  // fake auth check
  if (email === "admin@example.com" && password === "123456") {
    return Response.json({ success: true, message: "Login successful ✅" });
  }

  return Response.json(
    { success: false, message: "Invalid credentials ❌" },
    { status: 401 }
  );
}

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const { email, password } = req.body;

  // 🔹 Replace with DB check
  const user = {
    id: 1,
    email: "test@example.com",
    passwordHash: await bcrypt.hash("123456", 10),
  };

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  // Create JWT
  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: "1h",
  });

  return res.status(200).json({ token });
}
