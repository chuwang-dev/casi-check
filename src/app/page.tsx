export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <h1 className="text-4xl font-bold">Welcome to Casi Check</h1>
        <p className="mt-4 text-lg text-slate-600">
          Use this platform to register alumni profiles and verify pending accounts in the admin portal.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="/register"
            className="rounded-xl bg-slate-900 px-6 py-3 text-center text-white shadow hover:bg-slate-700"
          >
            Register Alumni
          </a>
          <a
            href="/admin/verifications"
            className="rounded-xl border border-slate-300 px-6 py-3 text-center text-slate-900 hover:bg-slate-50"
          >
            Admin Verifications
          </a>
        </div>
      </div>
    </main>
  );
}
