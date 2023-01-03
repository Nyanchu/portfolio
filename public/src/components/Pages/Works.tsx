// 画像インポート
import img_meishi_koukan from '../../assets/img/meishi_koukan.png';
import img_start_line from '../../assets/img/start_line.png';
import img_pc_tiping from '../../assets/img/pc_tiping.png';
import img_job_is_done from '../../assets/img/job_is_done.png';
import img_meeting from '../../assets/img/meeting.png';
import img_light from '../../assets/img/light.png';

export const Works = () => {
    return (
        <div className='main'>
            <section className='block'>
                <section>
                    <h2>はじめに</h2>
                    <p className='icon'>
                        <img src={img_meishi_koukan} alt="はじめに" />
                    </p>
                    <p>
                        このサイトは、酒井智弘の経歴・スキルを知ってもらうためのポートフォリオです。<br />
                        基本的な情報は全てこのページ1枚にまとまっています。
                    </p>
                </section>
                <section>
                    <h2>経歴要約</h2>
                    <p className='icon'>
                        <img src={img_start_line} alt="経歴要約" />
                    </p>
                    <p>
                        主にバックエンドエンジニアとして、大規模WEBサービスの新規立ち上げ・設計・開発・保守・運用・テストなど一通りの開発経験を10年以上積む。<br />
                        そのうち5年以上のマネージャー経験あり。現在約5名のチームを2つマネジメントしている。<br />
                        チームを改善しスピード感をもったプロダクトの開発に自信あり。
                    </p>
                </section>
                <section>
                    <h2>スキル</h2>
                    <p className='icon'>
                        <img src={img_pc_tiping} alt="スキル" />
                    </p>
                    <p>
                        PHP … 10年以上<br />
                        JavaScript, TypeScript … 3年以上<br />
                        MySQL, NoSQL, KVS … 10年以上<br />
                        Docker, docker-compose … 5年以上<br />
                        Git, Github Actions … 5年以上<br />
                        HTML, CSS … 1,2年レベル<br />
                        Firebase ... 1,2年レベル<br />
                        AWS … 触ったことあるレベル<br />
                    </p>
                </section>
            </section>
            <section className='block'>
                <section>
                    <h2>職歴</h2>
                    <p className='icon'>
                        <img src={img_job_is_done} alt="職歴" />
                    </p>
                    <p>
                        <h3>株式会社ドワンゴ</h3>
                        <p>
                            2010 年 03 月～現在<br />
                            ニコニコチャンネルの開発メンバーとして参加。
                            2,3年でチームリーダーになり、2016年からマネージャ役職になった。
                            その後、ニコニコミュニティや2chまとめブログ、ブロマガ、ニコニコモンズ、クリエイター奨励プログラム、クリエイターサポート機能など、数々のプロジェクトに携わる。
                        </p>
                    </p>
                    <p>
                        <h3>副業</h3>
                        <p>
                            受託開発で、ECサイトの決済プラグインの開発、各社のREST APIの開発、dockerでの開発環境構築など数々の作業を担当。
                        </p>
                    </p>
                </section>
                <section>
                    <h2>プロジェクト</h2>
                    <p className='icon'>
                        <img src={img_meeting} alt="プロジェクト" />
                    </p>
                    <p>
                        <h3>ニコニコチャンネル</h3>
                        <p>
                            90万人以上の会員数をもつ大規模WEBサービス。
                            マネージャとしてシステムの全責任をおう。
                            ユーザー向けのフロントページ、コンテンツプロバイダー向けの管理ツール、
                            社内向けの集計・管理ツールなど様々なシステムで構築される。
                            メイン言語はPHP。MySQLによる大量アクセス・大量データを扱うシステムの知見、決済システムの構築・運用の知見、レガシーシステムからモダンなシステムへの移行の知見などが得られた。
                        </p>
                        <h3>ブロマガ</h3>
                        <p>
                            プロジェクトマネージャとしてサービスの立ち上げから保守・運用までを担う。
                            ハードなスケジュールの中なんとかリリースまで漕ぎ着ける。
                            大きな文章を扱うノウハウや、大量のPVを集計するノウハウなどの知見を得る。
                        </p>
                        <h3>クリエイターサポート</h3>
                        <p>
                            クリエイターに対しファンがお金を支援するためのサービス。
                            マネージャとしてサービスの立ち上げから保守・運用までを担当。
                            世界基準の開発体制目標(週あたりのデプロイ数、ブランチの安定性、デプロイ時間)を掲げ、短い工期でサービスを立ち上げる。
                            モブプログラミングの導入、会議の効率化・削減、即日レビュー体制の導入、など泥臭く効率化を実施した。
                            システムはモダンでシンプルなものを目指した。新しい技術にこだわらず、スピードを維持しながらメンバーが保守可能なものを選定。
                            AWSを使ったインフラから、PHPのアプリケーションまで全員が触れることを目標とした。
                        </p>
                        <h3>マネージャとして</h3>
                        <p>
                            メンバー約10名をかかえる。ややクセのあるメンバーや年上のメンバーもいながら、トラブルも少なく安定したチーム運営をしてきた。
                        </p>
                    </p>
                </section>
                <section>
                    <h2>このサイトの技術</h2>
                    <p className='icon'>
                        <img src={img_light} alt="このサイトの技術" />
                    </p>
                    <p>
                        <p>
                            技術力をアピールするため、無駄にいろいろな技術を使ったサイトになっています。<br />
                            正直あとから「ただの静的サイトで良かったな」と思いました。
                        </p>
                        <h3>フロントエンド</h3>
                        <p>
                            WEBサーバ: Firebase Hosting<br />
                            使用言語: React(TypeScript) + HTML + CSS で SPA<br />
                            デザイン: ブートストラップなどは使わずにイチから書いています。
                        </p>
                        <h3>REST API</h3>
                        <p>
                            APIサーバ: Firebase Function<br />
                            使用言語: Node.js(TypeScript)<br />
                        </p>
                        <h3>DB</h3>
                        <p>
                            DBサーバ: Firestore(NoSQL)
                        </p>
                    </p>
                </section>
            </section>
        </div>
    );
};
