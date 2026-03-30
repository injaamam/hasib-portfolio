import { pageData } from "@/lib/siteData";

export default function HomePage() {
  const { home, contact } = pageData;
  const helloSection = home.sections[0];
  const cvSection = home.sections[1];
  const interestsSection = home.sections[2];
  const contactSection = contact.sections[0];

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-gray-900">
          {home.title}
        </h1>
        <p className="text-base sm:text-lg font-semibold text-gray-700">
          {home.subtitle}
        </p>
      </header>

      <section aria-labelledby="hello-heading" className="space-y-4">
        <h2 id="hello-heading" className="text-xl sm:text-2xl font-bold text-gray-900">
          {helloSection.heading}
        </h2>
        <div className="space-y-3 text-gray-800 leading-relaxed">
          {helloSection.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby="cv-heading" className="space-y-4">
        <h2 id="cv-heading" className="text-xl font-bold text-gray-900">
          {cvSection.heading}
        </h2>
        <div className="flex flex-wrap gap-3">
          {cvSection.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section aria-labelledby="interests-heading" className="space-y-4">
        <h2 id="interests-heading" className="text-xl font-bold text-gray-900">
          {interestsSection.heading}
        </h2>
        <ul className="list-none space-y-2 text-gray-800 leading-relaxed">
          {interestsSection.list.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-gray-500 mt-0.5">▪</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="contact-heading" className="space-y-4">
        <h2 id="contact-heading" className="text-xl font-bold text-gray-900">
          {contactSection.heading}
        </h2>

        <div className="space-y-3">
          <ul className="space-y-2 text-gray-800">
            {contactSection.list.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed">
                <span className="text-gray-500 mt-0.5">▪</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {contactSection.links?.length ? (
            <div className="flex flex-wrap gap-3">
              {contactSection.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <div className="pt-4 text-xs text-gray-500">
          Site hits · Page updated · Google Sites · Report abuse
        </div>
      </section>
    </div>
  );
}
