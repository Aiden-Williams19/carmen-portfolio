export default function ListerineLayout() {
  return (
    <div className="lis">
      {/* ===== SPREAD 1 ===== */}
      <section className="lis-spread">
        <div className="lis-ad">
          <img
            src="/images/listerine/asset-p1-1.png"
            alt="Listerine Fresh Burst print ad"
          />
        </div>
        <div className="lis-info">
          <div className="lis-info-inner">
            <h2 className="lis-title">
              <span>TRADITIONAL</span>
              <span>PRINT AD</span>
            </h2>
            <p className="lis-desc">
              This magazine ad for Listerine Fresh Burst explores the confidence
              that comes with fresh breath. It is based on the insight that,
              regardless of how confident you are, bad breath can make you
              insecure and reserved, while fresh breath gives you the boldness
              to put yourself out there.
            </p>
            <p className="lis-desc">
              The creative solution was to exaggerate this transformation,
              humorously portraying fresh breath as having almost unbelievable
              side effects, from commanding a room to winning people over.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SPREAD 2 ===== */}
      <img
        src="/images/listerine/2.png"
        alt="Listerine Fresh Burst — Magazine Mockup"
        className="lis-full"
        loading="lazy"
      />
    </div>
  );
}
