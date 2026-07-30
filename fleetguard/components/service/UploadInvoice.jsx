export default function UploadInvoice() {
  return (
    <div className="bg-white rounded-2xl border p-6">
      <h2 className="text-xl font-semibold mb-6">
        Upload Invoice
      </h2>

      <div className="border-2 border-dashed rounded-xl p-10 text-center">
        <p className="text-gray-500">
          Drag & Drop invoice here
        </p>

        <p className="text-sm text-gray-400 mt-2">
          or click to browse files
        </p>

        <input
          type="file"
          className="mt-5"
        />
      </div>
    </div>
  );
}