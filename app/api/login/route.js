export async function POST(request) {
  const body = await request.json();

  const { email, password } = body;

  if (
    email === "nurulburhani255@gmail.com" &&
    password === "@Nurbul255"
  ) {
    return Response.json({
      success: true,
      message: "Login berhasil"
    });
  }

  return Response.json({
    success: false,
    message: "Email atau password salah"
  });
}
