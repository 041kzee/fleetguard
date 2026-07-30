"use client";

import Row from "./Row";
import Pagination from "./Pagination";

export default function Table({ users }) {
  return (
    <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden">
      {/* Table wrapper for horizontal scrolling */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-xs font-bold text-[#64748b] tracking-wider uppercase">
              <th className="px-6 py-4 font-bold">Profile</th>
              <th className="px-6 py-4 font-bold">Employee ID</th>
              <th className="px-6 py-4 font-bold">Role</th>
              <th className="px-6 py-4 font-bold">Status</th>
              <th className="px-6 py-4 font-bold">Last Login</th>
              <th className="px-6 py-4 text-right font-bold"></th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-[#f1f5f9]">
            {users.length > 0 ? (
              users.map((user) => (
                <Row key={user.id} user={user} />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-12 text-center text-sm text-[#64748b] font-medium">
                  No users found matching your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="border-t border-[#e2e8f0] px-6 py-4 flex items-center justify-between bg-white">
        <Pagination totalCount={users.length} />
      </div>
    </div>
  );
}
