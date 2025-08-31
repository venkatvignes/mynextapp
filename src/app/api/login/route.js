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
