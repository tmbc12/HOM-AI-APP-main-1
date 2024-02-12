import { memo } from 'react';

import { genSize, useStyles } from './style';

const Hero = memo<{ mobile?: boolean; width: number }>(({ width, mobile }) => {
  const size: any = {
    base: genSize(width / 3.5, 240),
    desc: genSize(width / 50, 14),
    logo: genSize(width / 2.5, 180),
    title: genSize(width / 20, 32),
  };

  size.marginTop = mobile ? -size.logo / 9 : -size.logo / 3;
  size.marginBottom = mobile ? -size.logo / 9 : -size.logo / 4;

  const { styles } = useStyles(size.base);

  return (
    <>
      {/* <Flexbox
        style={{
          height: size.logo,
          marginBottom: size.marginBottom,
          marginTop: size.marginTop,
          position: 'relative',
        }}
      >
        {mobile ? <LogoThree size={size.logo} /> : <LogoSpline height={'100%'} width={'100%'} />}
      </Flexbox> */}
      <div className={styles.title} style={{ fontSize: size.title }}>
        {/* <strong style={mobile ? { fontSize: '1.2em' } : {}}>LobeChat</strong> */}
        {mobile ? <br /> : ' '}
        {'Ready to redefine your store?'}
      </div>
      <div className={styles.desc} style={{ fontSize: size.desc }}>
        {'The House of Models is an ensemble of AI agents, helping you sell better.'}
      </div>
    </>
  );
});

export default Hero;
