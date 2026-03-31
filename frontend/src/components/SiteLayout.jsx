"use client";

export default function SiteLayout({ children }) {
  return (
    <div>
      <header className="py-4 px-6 fixed top-0 left-0 right-0 z-10">
        <h1 className="text-lg text-white font-bold uppercase">
          Hasib Cheragee
        </h1>
      </header>

      <div className="min-h-screen bg-[#f5f5f2] text-gray-900">{children}</div>

      <footer className="mt-auto border-t py-4 px-6">
        <div className="max-w-3xl mx-auto text-sm text-gray-500">
          © 2026 Hasib Cheragee. All rights reserved.
        </div>
      </footer>
    </div>
  );

  // return (
  //   <div className="min-h-screen bg-gray-50 text-gray-900">
  //     <header className="bg-white border-b py-4 px-6">
  //       <h1 className="text-lg font-bold">Hasib Cheragee</h1>
  //     </header>

  //     <main className="max-w-3xl mx-auto p-6">{children}</main>

  //     <footer className="mt-auto border-t py-4 px-6">
  //       <div className="max-w-3xl mx-auto text-sm text-gray-500">
  //         © 2026 Hasib Cheragee. All rights reserved.
  //       </div>
  //     </footer>
  //   </div>
  // );
}
