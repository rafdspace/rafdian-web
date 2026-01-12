export default function HelpPage() {
  return (
    <div className="flex-1 flex gap-10 flex-col">
      {/* ---------- INTRO ---------- */}
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">Quran Verse Help</h1>
        <p className="text-gray-700">
          <strong>Quran Verse</strong> helps you easily explore, select, and
          insert verses from the Holy Quran into your Canva designs. Choose a
          chapter, verse number, and optional translation to generate
          beautifully formatted Quranic text for your creative needs.
        </p>
      </div>

      {/* ---------- FAQ ---------- */}
      <div id="faq" className="space-y-6">
        <h2 className="text-2xl font-semibold">FAQ</h2>

        <div className="space-y-1">
          <p className="font-medium">Q1: What is Quran Verse?</p>
          <p className="text-gray-700">
            A: Quran Verse is a Canva app that allows you to select verses from
            the Quran by chapter and verse number, with optional translations,
            and insert them directly into your design.
          </p>
        </div>

        <div className="space-y-1">
          <p className="font-medium">Q2: How do I use the app?</p>
          <p className="text-gray-700">
            A: Select a chapter (Surah), choose a verse number, optionally
            select a translation, then click "Generate" to insert the verse into
            your Canva design.
          </p>
        </div>

        <div className="space-y-1">
          <p className="font-medium">
            Q3: Can I generate verses without translation?
          </p>
          <p className="text-gray-700">
            A: Yes. Choose the “No translation” option to display only the
            original Arabic text.
          </p>
        </div>

        <div className="space-y-1">
          <p className="font-medium">Q4: Which translations are supported?</p>
          <p className="text-gray-700">
            A: We support multiple translations in different languages. The
            available options depend on the selected language and translator.
          </p>
        </div>

        <div className="space-y-1">
          <p className="font-medium">
            Q5: What should I do if the verse doesn’t load?
          </p>
          <p className="text-gray-700">
            A: Please try selecting the verse again or wait a moment. If the
            issue persists, ensure you have a stable internet connection.
          </p>
        </div>

        <div className="space-y-1">
          <p className="font-medium">Q6: Is this app free to use?</p>
          <p className="text-gray-700">A: Yes, Quran Verse is free to use.</p>
        </div>
      </div>

      {/* ---------- CREDITS ---------- */}
      <div id="credits" className="space-y-3">
        <h2 className="text-2xl font-semibold">Credits</h2>
        <p className="text-gray-700">
          <strong>Quran Foundation API:</strong> Quran verses, chapters, and
          translations are provided by{" "}
          <a
            href="https://quran.foundation/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Quran Foundation
          </a>
          , ensuring accurate and authentic Quranic content.
        </p>
      </div>

      {/* ---------- PRIVACY ---------- */}
      <div id="privacy-policy" className="space-y-3">
        <h2 className="text-2xl font-semibold">Privacy Policy</h2>
        <p className="text-gray-700">
          <strong>Quran Verse</strong> respects your privacy. We do not store or
          collect any personal data, selected verses, or designs. All data is
          fetched in real time and used only to generate content within your
          Canva session.
        </p>
      </div>

      {/* ---------- TERMS ---------- */}
      <div id="terms-of-use" className="space-y-3">
        <h2 className="text-2xl font-semibold">Terms of Use</h2>
        <p className="text-gray-700">
          Quran Verse is provided “as is” without warranties. You are
          responsible for how the generated Quranic content is used in your
          designs. We do not claim ownership of any generated content. Continued
          use of the app indicates acceptance of these terms.
        </p>
      </div>

      {/* ---------- CONTACT ---------- */}
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="text-gray-700">
          For questions, feedback, or support, please contact us at{" "}
          <a
            href="mailto:rafdian.ramadhan@gmail.com"
            className="text-blue-600 hover:underline"
          >
            rafdian.ramadhan@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
