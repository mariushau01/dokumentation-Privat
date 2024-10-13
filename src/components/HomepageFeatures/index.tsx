import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Angewandte Programmierung',
    Svg: require('@site/public/images/programming.svg').default,
    description: (
      <>
        Im Fach Angewandte Programmierung werden <strong>grundlegende Programmierkonzepte</strong> und verschiedene 
        Programmiersprachen erlernt.
      </>
    ),
  },
  {
    title: 'Softwareentwicklung und Projektmanagement',
    Svg: require('@site/public/images/projectmanagement.svg').default,
    description: (
      <>
        Im Fach Softwareentwicklung wird <strong>Wissen in Bezug auf Software-Projektmanagement</strong> gelehrt. Software-Projekte 
        werden geplant und professionell umgesetzt.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
