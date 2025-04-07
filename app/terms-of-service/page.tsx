export default function TermsOfServicePage() {
  return (
    <div className="container max-w-3xl py-12 md:py-16 lg:py-24">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Terms of Service
        </h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <p>
              Welcome to eUNITA ("Company", "we", "our", "us"). These Terms of
              Service ("Terms", "Terms of Service") govern your use of our
              website and services operated by eUNITA.
            </p>
            <p>
              By accessing or using our services, you agree to be bound by these
              Terms. If you disagree with any part of the terms, you may not
              access our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">2. Services</h2>
            <p>
              eUNITA provides software development services including but not
              limited to web development, mobile application development, custom
              software development, database solutions, cloud services, and
              DevOps services.
            </p>
            <p>
              The Company reserves the right to modify, suspend or discontinue,
              temporarily or permanently, the services with or without notice
              and without liability to you.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">3. Project Agreements</h2>
            <p>
              All projects undertaken by eUNITA will be governed by a separate
              Project Agreement that outlines the specific scope, deliverables,
              timeline, and payment terms for each project.
            </p>
            <p>
              In the event of any conflict between these Terms of Service and a
              Project Agreement, the terms of the Project Agreement shall
              prevail with respect to that specific project.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">4. Intellectual Property</h2>
            <p>
              Upon full payment of all applicable fees, the client will own all
              rights to the deliverables specifically created for the client as
              part of the services, except for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Third-party materials incorporated into the deliverables</li>
              <li>Company's pre-existing intellectual property</li>
              <li>
                General programming techniques, algorithms, methods, or
                processes developed by the Company
              </li>
            </ul>
            <p>
              The Company retains the right to use and incorporate any general
              knowledge, skills, or experience acquired during the provision of
              services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">5. Payment Terms</h2>
            <p>
              Payment terms will be specified in each Project Agreement. Unless
              otherwise stated:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                A non-refundable deposit may be required before work begins
              </li>
              <li>Payments are due within 30 days of invoice date</li>
              <li>Late payments may incur interest charges</li>
              <li>
                The Company reserves the right to suspend services for overdue
                accounts
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">6. Client Responsibilities</h2>
            <p>The client agrees to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Provide timely and accurate information necessary for the
                project
              </li>
              <li>
                Review and provide feedback on deliverables within agreed
                timeframes
              </li>
              <li>Obtain any necessary third-party permissions or licenses</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">7. Limitation of Liability</h2>
            <p>
              In no event shall eUNITA, its directors, employees, partners,
              agents, suppliers, or affiliates be liable for any indirect,
              incidental, special, consequential or punitive damages, including
              without limitation, loss of profits, data, use consequential or
              punitive damages, including without limitation, loss of profits,
              data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use or inability to use our services</li>
              <li>Any changes made to the services</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Statements or conduct of any third party on our services</li>
            </ul>
            <p>
              The Company's total liability to the client for any claim arising
              from or related to the services shall not exceed the total amount
              paid by the client to the Company during the six (6) months
              preceding the claim.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">8. Warranty and Disclaimer</h2>
            <p>
              The Company warrants that the services will be performed in a
              professional and workmanlike manner in accordance with generally
              accepted industry standards.
            </p>
            <p>
              EXCEPT AS EXPRESSLY PROVIDED HEREIN, THE SERVICES ARE PROVIDED "AS
              IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">9. Confidentiality</h2>
            <p>
              Each party agrees to keep confidential all non-public information
              disclosed by the other party during the provision of services.
              This includes but is not limited to business plans, customer data,
              technical specifications, and proprietary methodologies.
            </p>
            <p>
              This confidentiality obligation shall survive the termination of
              services for a period of two (2) years.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">10. Termination</h2>
            <p>
              Either party may terminate services as specified in the applicable
              Project Agreement. Upon termination:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                The client shall pay for all services rendered up to the
                termination date
              </li>
              <li>
                The Company shall deliver all completed work and work in
                progress
              </li>
              <li>All confidentiality obligations shall remain in effect</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the State of California, without regard to its
              conflict of law provisions.
            </p>
            <p>
              Any dispute arising from or relating to these Terms shall be
              subject to the exclusive jurisdiction of the courts located within
              San Francisco County, California.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will
              provide notice of any material changes by posting the updated
              Terms on our website or by email.
            </p>
            <p>
              Your continued use of our services after such modifications will
              constitute your acknowledgment and agreement to the modified
              Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">13. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="font-medium">
              eUNITA
              <br />
              123 Tech Avenue, Suite 400
              <br />
              San Francisco, CA 94107
              <br />
              Email: legal@eunita.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
