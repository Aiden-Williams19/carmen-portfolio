export default function ListerineLayout() {
  return (
    <div className="lis">
      {/* ===== SPREAD 1 ===== */}
      <section className="lis-spread">
        <div className="lis-spread-left">
          <img
            src="/images/listerine/asset-p1-1.png"
            alt="Listerine Fresh Burst print ad — Excuse my coffee breath"
          />
        </div>
        <div className="lis-spread-right lis-cream">
          <div className="lis-intro">
            <h1 className="lis-heading">
              <span className="lis-heading-shadow">TRADITIONAL</span>
              <span className="lis-heading-shadow">PRINT AD</span>
            </h1>
            <p className="lis-body">
              This magazine ad for Listerine Fresh Burst explores the confidence
              that comes with fresh breath. It is based on the insight that,
              regardless of how confident you are, bad breath can make you
              insecure and reserved, while fresh breath gives you the boldness
              to put yourself out there.
            </p>
            <p className="lis-body">
              The creative solution was to exaggerate this transformation,
              humorously portraying fresh breath as having almost unbelievable
              side effects, from commanding a room to winning people over.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SPREAD 2 ===== */}
      <section className="lis-spread">
        <div className="lis-spread-left lis-cream lis-type-wall">
          <div className="lis-repeater">
            {"LISTERINE\nLISTERINE\nLISTERINE\nLISTERINE\nLISTERINE\nLISTERINE\nLISTERINE"
              .split("\n")
              .map((word, i) => (
                <span key={i} className={`lis-word lis-word-${i + 1}`}>
                  {word}
                </span>
              ))}
          </div>
        </div>
        <div className="lis-spread-right lis-cream lis-mockup-panel">
          <img
            src="/images/listerine/asset-p2-1.png"
            alt="Listerine Fresh Burst — magazine mockup"
            className="lis-mockup"
          />
        </div>
      </section>
    </div>
  );
}
