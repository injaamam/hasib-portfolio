"use client";

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white border-b py-4 px-6">
        <h1 className="text-lg font-bold">Hasib Cheragee</h1>
      </header>

      <main className="max-w-3xl mx-auto p-6">{children}</main>

      <footer className="mt-auto border-t py-4 px-6">
        <div className="max-w-3xl mx-auto text-sm text-gray-500">
          © 2026 Hasib Cheragee. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
