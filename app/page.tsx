export default function Home() {
  return (
    <main>
      <nav aria-label="メインナビゲーション">
        <a className="brand" href="#top" aria-label="GitHub練習 ホーム">
          <span className="brandMark" aria-hidden="true">G</span>
          <span>GitHub練習</span>
        </a>
        <a className="navLink" href="#message">メッセージ</a>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow"><span aria-hidden="true" /> First publish</div>
        <h1><em>最初の一歩</em></h1>
        <p className="lead">
          このページは Codex と GitHub を使って作成・公開しました。
          今日の練習が、次のアイデアにつながります。
        </p>
        <a className="button" href="#message">
          今日の成果を見る <span aria-hidden="true">↓</span>
        </a>

        <div className="orbit orbitOne" aria-hidden="true" />
        <div className="orbit orbitTwo" aria-hidden="true" />
        <div className="spark sparkOne" aria-hidden="true">✦</div>
        <div className="spark sparkTwo" aria-hidden="true">✦</div>
      </section>

      <section className="message" id="message">
        <p className="sectionNumber">01 — TODAY&apos;S COMMIT</p>
        <div>
          <h2>公開できました！</h2>
          <p>
            コードを書く、変更を記録する、そしてWebに届ける。
            シンプルなページにも、確かな学びが詰まっています。
          </p>
        </div>
        <div className="statusCard">
          <span className="statusDot" aria-hidden="true" />
          <div><strong>LIVE</strong><small>ページは公開中です</small></div>
        </div>
      </section>

      <footer>
        <span>Built with curiosity.</span>
        <span>2026</span>
      </footer>
    </main>
  );
}
