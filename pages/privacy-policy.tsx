import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Gihan Sanjeewa</title>
        <meta name="description" content="Privacy policy of Gihan Sanjeewa portfolio site." />
      </Head>

      <main className="min-h-screen bg-yellow-50 dark:bg-black text-gray-900 dark:text-gray-100 px-6 py-12 md:px-20 lg:px-40">
        <section className="container mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">Effective Date: March 11, 2026</p>

          <p className="mb-4">
            Welcome to <strong>Gihan Sanjeewa</strong>. We respect your privacy and are committed to protecting your information.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
          <p className="mb-4">
            We do not collect personal information directly on this site. Analytics data may be processed by the hosting provider as part of standard web operations.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Public profile information</li>
            <li>Facebook Page information</li>
            <li>Access tokens required for posting or page management</li>
            <li>Basic app usage data needed for functionality</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Information</h2>
          <p className="mb-4">
            We use collected information only to support site functionality and connected services.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Connect your Facebook Page to the app</li>
            <li>Automatically publish posts</li>
            <li>Manage and improve functionality</li>
            <li>Provide support when needed</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Sharing</h2>
          <p className="mb-4">
            We do <strong>not sell, rent, or trade</strong> your personal data. We only use data necessary for the app’s intended functionality.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Storage and Security</h2>
          <p className="mb-4">
            Reasonable steps are taken to protect your data. However, no online service is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">5. Data Deletion</h2>
          <p className="mb-4">
            If you want your data removed, contact us using the information below.
          </p>
          <p className="mb-4">
            <strong>Data deletion requests:</strong> your@email.com
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">6. Third-Party Services</h2>
          <p className="mb-4">This site may interact with third-party services such as:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Meta / Facebook APIs</li>
            <li>Hosting providers</li>
            <li>Automation tools used for posting or content delivery</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">7. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            Policy updates are posted on this page with the updated effective date.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
          <p>
            For questions about this Privacy Policy, email: <strong>your@email.com</strong>
          </p>
        </section>
      </main>
    </>
  );
}
