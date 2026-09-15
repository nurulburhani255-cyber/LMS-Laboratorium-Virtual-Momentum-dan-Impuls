export async function POST(request) {
  const body = await request.json();

  const { email, password } = body;

  // Login sementara (tanpa database)
  const akun = {
    email: "nurulburhani255@gmail.com",
    password: "@Nurbul255"
  };

  if (
    email === akun.email &&
    password === akun.password
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
