import { db } from '@/lib/db';
import { updateVerificationStatus } from '@/app/actions';

export default async function AdminVerificationsPage() {
  const pendingUsers = await db.user.findMany({
    where: { status: 'PENDING' },
    include: { profile: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">GICOSA Admin — Pending Verifications</h1>

      {pendingUsers.length === 0 ? (
        <div className="bg-white p-6 rounded-lg border text-gray-500 text-center">
          🎉 No pending alumni verifications at the moment!
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-md border border-gray-200">
          <ul className="divide-y divide-gray-200">
            {pendingUsers.map((user) => (
              <li key={user.id} className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {user.profile?.firstName} {user.profile?.lastName}
                  </h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <div className="mt-2 flex items-center space-x-4 text-xs text-gray-600">
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                      Class of {user.profile?.graduationYear}
                    </span>
                    <span>{user.profile?.degree} in {user.profile?.major}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <form
                    action={async () => {
                      'use server';
                      await updateVerificationStatus(user.id, 'VERIFIED');
                    }}
                  >
                    <button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-2 rounded transition"
                    >
                      Approve
                    </button>
                  </form>

                  <form
                    action={async () => {
                      'use server';
                      await updateVerificationStatus(user.id, 'REJECTED');
                    }}
                  >
                    <button
                      type="submit"
                      className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded transition"
                    >
                      Reject
                    </button>
                  </form>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
