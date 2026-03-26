export default function PageView({ page }) {
  return (
    <article>
      <h1 className="page-title">{page.title}</h1>
      {page.subtitle ? <p className="page-subtitle">{page.subtitle}</p> : null}

      {page.sections.map((section, index) => (
        <section className="section" key={`${section.heading}-${index}`}>
          <h2>{section.heading}</h2>
          {section.meta ? <p className="meta">{section.meta}</p> : null}
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.list ? (
            <ul>
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {section.links?.map((link) => (
            <p key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </p>
          ))}
        </section>
      ))}
    </article>
  );
}
