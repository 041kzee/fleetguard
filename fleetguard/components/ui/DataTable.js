export default function DataTable({ headers, children, emptyMessage = "No records found" }) {
  return (
    <div className="bg-white rounded-xl border border-[#e2e8f0] shadow-xs overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-[#f8f9ff] border-b border-[#e2e8f0]">
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="px-6 py-3.5 font-semibold text-[#434655] uppercase tracking-wider text-[11px]"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e2e8f0]">
            {children ? (
              children
            ) : (
              <tr>
                <td colSpan={headers.length} className="px-6 py-8 text-center text-[#565e74]">
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
