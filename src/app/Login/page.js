// No "use client" here → this runs on server

export default function LoginPage() {
  return (
    <div className="flex justify-center bg-teal-600 items-center min-h-screen ">
      <form
        method="POST"
        action="/api/login"
        className="bg-red-600 p-6 rounded-2xl shadow-xl w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-white text-center">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border bg-white rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border  bg-white rounded"
          required
        />

        <button
          type="submit"
          className="w-1/2 text-center bg-stone-600 text-white p-2 rounded-2xl hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
