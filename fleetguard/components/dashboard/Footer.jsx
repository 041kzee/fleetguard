export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 py-6 flex justify-between items-center text-sm text-gray-500">
      <p>© 2026 FleetGuard. All rights reserved.</p>

      <div className="flex gap-6">
        <button className="hover:text-blue-600">
          Privacy
        </button>

        <button className="hover:text-blue-600">
          Terms
        </button>

        <button className="hover:text-blue-600">
          Support
        </button>
      </div>
    </footer>
  );
}