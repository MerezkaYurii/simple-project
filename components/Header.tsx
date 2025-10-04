type HeaderProps = {
  siteTitle: string;
  phone: string;
};

export default function Header({ siteTitle, phone }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">{siteTitle}</div>
        <div className="flex items-center gap-4">
          <a href={`tel:${phone}`} className="text-sm">
            {phone}
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Заказать
          </a>
        </div>
      </div>
    </header>
  );
}
