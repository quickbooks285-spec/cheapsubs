import { supabase } from "@/lib/supabase";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function logout() {
  "use server";
  const cookieStore = await cookies();
  cookieStore.delete("dashboard_session");
  redirect("/dashboard/login");
}

export default async function DashboardPage() {
  const { data: emails, error } = await supabase
    .from("emails")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen p-8" style={{ background: "oklch(0.97 0.02 250)" }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: "oklch(0.20 0.05 250)" }}>
              Email Dashboard
            </h1>
            <p className="text-sm mt-1" style={{ color: "oklch(0.45 0.012 250)" }}>
              {emails?.length ?? 0} subscriber{emails?.length !== 1 ? "s" : ""} collected
            </p>
          </div>
          <form action={logout}>
            <button
              type="submit"
              className="text-sm px-4 py-2 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 transition-colors"
              style={{ color: "oklch(0.45 0.012 250)" }}
            >
              Sign out
            </button>
          </form>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
          {error ? (
            <div className="p-8 text-center text-sm text-red-500">
              Failed to load emails. Check your Supabase connection.
            </div>
          ) : emails && emails.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr style={{ background: "oklch(0.97 0.02 250)" }}>
                  <th className="text-left text-xs font-semibold px-6 py-4 uppercase tracking-wide" style={{ color: "oklch(0.45 0.012 250)" }}>
                    Email
                  </th>
                  <th className="text-left text-xs font-semibold px-6 py-4 uppercase tracking-wide" style={{ color: "oklch(0.45 0.012 250)" }}>
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {emails.map((row, i) => (
                  <tr
                    key={row.id}
                    className="border-t border-neutral-100 hover:bg-neutral-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium" style={{ color: "oklch(0.20 0.05 250)" }}>
                      {row.email}
                    </td>
                    <td className="px-6 py-4 text-sm" style={{ color: "oklch(0.45 0.012 250)" }}>
                      {new Date(row.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-12 text-center text-sm" style={{ color: "oklch(0.55 0.01 250)" }}>
              No emails collected yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
