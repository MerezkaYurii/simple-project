/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Footer({ siteTitle }: any) {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto px-6 text-center">
        © {new Date().getFullYear()} {siteTitle} — сделано с ♥
      </div>
    </footer>
  );
}
