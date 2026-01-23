import Header from "@/components/Header";
import EnhancedFooter from "@/components/EnhancedFooter";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#253e35" }}>
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="font-dela text-4xl md:text-5xl mb-8 uppercase"
              style={{ color: "#F8FFE8" }}
            >
              Terms & <span style={{ color: "#d0e999" }}>Conditions</span>
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

              <section className="space-y-4">
                <h2
                  className="text-xl font-semibold uppercase"
                  style={{ color: "#F8FFE8" }}
                >
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing and using EyeLevel Growth Studio's website and
                  services, you accept and agree to be bound by the terms and
                  provisions of this agreement. If you do not agree to abide by
                  these terms, please do not use our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2
                  className="text-xl font-semibold uppercase"
                  style={{ color: "#F8FFE8" }}
                >
                  2. Services Description
                </h2>
                <p>
                  EyeLevel Growth Studio provides growth marketing, strategy
                  consulting, performance marketing, AI automation, and creative
                  branding services. The specific services provided will be
                  outlined in individual service agreements with clients.
                </p>
              </section>

              <section className="space-y-4">
                <h2
                  className="text-xl font-semibold uppercase"
                  style={{ color: "#F8FFE8" }}
                >
                  3. Client Responsibilities
                </h2>
                <p>
                  Clients agree to provide accurate and complete information
                  necessary for the delivery of services. Clients are
                  responsible for reviewing and approving deliverables within
                  agreed timelines.
                </p>
              </section>

              <section className="space-y-4">
                <h2
                  className="text-xl font-semibold uppercase"
                  style={{ color: "#F8FFE8" }}
                >
                  4. Payment Terms
                </h2>
                <p>
                  Payment terms will be outlined in individual service
                  agreements. All fees are non-refundable unless otherwise
                  specified in writing. Late payments may incur additional
                  charges.
                </p>
              </section>

              <section className="space-y-4">
                <h2
                  className="text-xl font-semibold uppercase"
                  style={{ color: "#F8FFE8" }}
                >
                  5. Intellectual Property
                </h2>
                <p>
                  Upon full payment, clients will own the rights to final
                  deliverables created specifically for them. EyeLevel Growth
                  Studio retains the right to use work samples in portfolios
                  unless otherwise agreed.
                </p>
              </section>

              <section className="space-y-4">
                <h2
                  className="text-xl font-semibold uppercase"
                  style={{ color: "#F8FFE8" }}
                >
                  6. Confidentiality
                </h2>
                <p>
                  Both parties agree to maintain the confidentiality of
                  proprietary information shared during the engagement. This
                  obligation survives the termination of any agreement.
                </p>
              </section>

              <section className="space-y-4">
                <h2
                  className="text-xl font-semibold uppercase"
                  style={{ color: "#F8FFE8" }}
                >
                  7. Limitation of Liability
                </h2>
                <p>
                  EyeLevel Growth Studio's liability is limited to the amount
                  paid for services. We are not liable for indirect, incidental,
                  or consequential damages arising from the use of our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2
                  className="text-xl font-semibold uppercase"
                  style={{ color: "#F8FFE8" }}
                >
                  8. Termination
                </h2>
                <p>
                  Either party may terminate services with 30 days written
                  notice. Upon termination, clients are responsible for payment
                  of services rendered up to the termination date.
                </p>
              </section>

              <section className="space-y-4">
                <h2
                  className="text-xl font-semibold uppercase"
                  style={{ color: "#F8FFE8" }}
                >
                  9. Governing Law
                </h2>
                <p>
                  These terms shall be governed by and construed in accordance
                  with the laws of India. Any disputes shall be subject to the
                  exclusive jurisdiction of the courts in Chennai.
                </p>
              </section>

              <section className="space-y-4">
                <h2
                  className="text-xl font-semibold uppercase"
                  style={{ color: "#F8FFE8" }}
                >
                  10. Contact Information
                </h2>
                <p>
                  For questions about these Terms & Conditions, please contact
                  us at:
                </p>
                <p style={{ color: "#d0e999" }}>hello@eyelevelstudio.in</p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <EnhancedFooter showCTA={false} />
    </div>
  );
};

export default Terms;
