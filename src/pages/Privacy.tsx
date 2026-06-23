import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion } from "framer-motion";
import SEO from "@/components/utils/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <SEO
        title="Privacy Policy | Eyelevel Growth Studio"
        description="Privacy policy for Eyelevel Growth Studio. Learn how we collect, use, and protect your personal information when you use our website and services."
        keywords={[
          "privacy policy",
          "data privacy",
          "personal data protection",
          "website privacy",
        ]}
        canonical="https://theeyelevelstudio.com/privacy-policy"
        url="https://theeyelevelstudio.com/privacy-policy"
      />
      <Header />

      <main className="px-4 ] pt-32 pb-[100px]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="font-dela text-4xl md:text-5xl mb-8 uppercase text-foreground"
            >
              Privacy <span className="text-primary">Policy</span>
            </h1>

            <div
              className="font-bricolage space-y-8"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              <p
                className="text-sm"
                style={{ color: "rgba(248, 255, 232, 0.5)" }}
              >
                Last updated: January 2026
              </p>

              <section className="space-y-4 py-[100px]">
                <h2
                  className="text-xl font-semibold uppercase text-foreground"
                >
                  1. Introduction
                </h2>
                <p>
                  Eyelevel Growth Studio ("we," "our," or "us") is committed to
                  protecting your privacy. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when
                  you visit our website or use our services.
                </p>
              </section>

              <section className="space-y-4 py-[100px]">
                <h2
                  className="text-xl font-semibold uppercase text-foreground"
                >
                  2. Information We Collect
                </h2>
                <p>We may collect information about you in various ways:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Personal Data:</strong> Name, email address, phone
                    number, company name, and other contact details you provide
                    through our forms.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you use
                    our website, including pages visited, time spent, and
                    navigation patterns.
                  </li>
                  <li>
                    <strong>Technical Data:</strong> IP address, browser type,
                    device information, and cookies.
                  </li>
                </ul>
              </section>

              <section className="space-y-4 py-[100px]">
                <h2
                  className="text-xl font-semibold uppercase text-foreground"
                >
                  3. How We Use Your Information
                </h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, operate, and maintain our services</li>
                  <li>
                    Respond to your inquiries and provide customer support
                  </li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve and personalize your experience</li>
                  <li>Analyze usage patterns and optimize our website</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="space-y-4 py-[100px]">
                <h2
                  className="text-xl font-semibold uppercase text-foreground"
                >
                  4. Information Sharing
                </h2>
                <p>
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your explicit consent</li>
                </ul>
              </section>

              <section className="space-y-4 py-[100px]">
                <h2
                  className="text-xl font-semibold uppercase text-foreground"
                >
                  5. Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational security
                  measures to protect your personal information. However, no
                  method of transmission over the Internet is 100% secure, and
                  we cannot guarantee absolute security.
                </p>
              </section>

              <section className="space-y-4 py-[100px]">
                <h2
                  className="text-xl font-semibold uppercase text-foreground"
                >
                  6. Cookies
                </h2>
                <p>
                  We use cookies and similar tracking technologies to enhance
                  your experience on our website. You can control cookie
                  preferences through your browser settings.
                </p>
              </section>

              <section className="space-y-4 py-[100px]">
                <h2
                  className="text-xl font-semibold uppercase text-foreground"
                >
                  7. Your Rights
                </h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section className="space-y-4 py-[100px]">
                <h2
                  className="text-xl font-semibold uppercase text-foreground"
                >
                  8. Data Retention
                </h2>
                <p>
                  We retain your personal information only for as long as
                  necessary to fulfill the purposes outlined in this policy,
                  unless a longer retention period is required by law.
                </p>
              </section>

              <section className="space-y-4 py-[100px]">
                <h2
                  className="text-xl font-semibold uppercase text-foreground"
                >
                  9. Third-Party Links
                </h2>
                <p>
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices of these external
                  sites and encourage you to review their privacy policies.
                </p>
              </section>

              <section className="space-y-4 py-[100px]">
                <h2
                  className="text-xl font-semibold uppercase text-foreground"
                >
                  10. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page and updating the "Last updated" date.
                </p>
              </section>

              <section className="space-y-4 py-[100px]">
                <h2
                  className="text-xl font-semibold uppercase text-foreground"
                >
                  11. Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <p className="text-primary">hello@eyelevelstudio.in</p>
                <p>Phone: +91 97890 99499</p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <EnhancedFooter mascotBgClass="bg-secondary" showCTA={false} />
    </div>
  );
};

export default Privacy;



