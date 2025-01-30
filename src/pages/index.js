import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx('hero__title', styles.hero__title)}>{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.hero__subtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--primary button--lg", styles.button)}
            to="/join">
            现在加入⚔
          </Link>
          <Link
            className={clsx("button button--secondary button--lg", styles.button)}
            to="/help">
            使用教程
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      description="是一个专注于玩家的Minecraft原版生存服务器，你可以在这里和好友畅快联机，举办你想要的活动，在这里创造属于你的世界。">
      <HomepageHeader />
      <main>
        <div className={clsx('container', styles.container)}>
          <h1 className={clsx('content', styles.content)}>欢迎来到DragonCraft菠萝俱乐部</h1>
          <p className={clsx('content', styles.content)}>这里是由DragonFly Club团队运营的Minecraft生存服，你可以在这里自由的与朋友生存在DragonCraft上，随心所欲，创造未来。</p>
          <p><b>现在就加入吧！</b></p>
          <h2>这里是属于你的服务器，我们的世界，从现在开始。</h2>
          { // <div className={clsx('aspect', styles.aspect)}>
            //padding
            //<iframe src="//dynmap.holger.net.cn/" className={clsx('iframe', styles.</div>iframe)}></iframe>
          //</div>
          }
        </div>
      </main>
    </Layout>
  );
}
