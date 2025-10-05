import ThemeToggle from "./ThemeToggle";

type HeaderProps = {
  siteTitle: string;
  phone: string;
};

export default function Header({ siteTitle, phone }: HeaderProps) {
  return (
    <header className="bg-gray-300 shadow-sm dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">{siteTitle}</div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
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
