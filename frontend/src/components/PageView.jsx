export default function PageView({ page }) {
  return (
    <article className="text-[15px]">
      <h1 className="m-0 bg-gradient-to-r from-[#102553] to-[#2f63df] bg-clip-text text-[38px] leading-[1.15] font-semibold tracking-tight text-transparent max-md:text-[31px]">
        {page.title}
      </h1>
      {page.subtitle ? (
        <p className="mb-8 mt-2 text-[25px] leading-[1.3] font-normal text-[#5f6d8d] max-md:text-[21px]">
          {page.subtitle}
        </p>
      ) : null}

      {page.sections.map((section, index) => (
        <section
          className="mb-6 rounded-xl border border-[#e6ecff] bg-gradient-to-br from-[#ffffff] to-[#f8faff] p-5 shadow-[0_6px_20px_rgba(35,68,150,0.07)]"
          key={`${section.heading}-${index}`}
        >
          <h2 className="mb-2 mt-0 text-[26px] font-medium text-[#1a3166]">
            {section.heading}
          </h2>
          {section.meta ? (
            <p className="mb-2 text-[13px] font-medium text-[#627092]">{section.meta}</p>
          ) : null}
          {section.paragraphs?.map((paragraph) => (
            <p className="mb-2.5 leading-[1.7] text-[#2e3d5e]" key={paragraph}>
              {paragraph}
            </p>
          ))}
          {section.list ? (
            <ul className="m-0 list-disc space-y-1 pl-[18px] leading-[1.7] text-[#2e3d5e]">
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {section.links?.map((link) => (
            <p className="mb-2.5" key={link.href}>
              <a
                className="text-[#2f5fd7] no-underline hover:underline"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            </p>
          ))}
        </section>
      ))}
    </article>
  );
}
