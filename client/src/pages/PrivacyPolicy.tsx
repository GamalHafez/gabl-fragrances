import { DocumentSection, EmailCard, LegalList } from "@/components/legal";
import { Container, MainHeading, PageWrapper } from "@/components/ui/common";
import { privacySections } from "@/data/privacyPolicy";

export const PrivacyPolicy = () => {
  return (
    <PageWrapper>
      <Container>
        <section className="mt-6 mb-14 flex max-w-4xl flex-col items-start px-2 md:mt-8 md:px-0">
          <MainHeading title="Privacy Policy" />

          {privacySections.map((section) => (
            <DocumentSection key={section.title} title={section?.title ?? ""}>
              <div className="space-y-2">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {section.email && <EmailCard email={section.email} />}
              </div>

              {section.list && (
                <ul className="mt-4 space-y-4">
                  {section.list.map((item) => (
                    <LegalList
                      key={item.title}
                      title={item.title}
                      content={item.content}
                    />
                  ))}
                </ul>
              )}
            </DocumentSection>
          ))}
        </section>
      </Container>
    </PageWrapper>
  );
};
