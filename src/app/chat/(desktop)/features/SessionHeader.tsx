import { createStyles } from 'antd-style';
import React, { memo, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

// import { useSessionStore } from '@/store/session';

import { Maximize, Video, Settings2 } from 'lucide-react';
import Upload from "../../components/ImgUpload/imgupload"
import TabOne from "../../components/Tabs/tabOne";
import TabTwo from "../../components/Tabs/tabsTwo";
import TabThree from "../../components/Tabs/tabsThree";
import Tabs from "../../components/Tabs/tabs";



export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    fill: ${token.colorText};
  `,
  top: css`
    position: sticky;
    top: 0;
  `,
}));

const Header = memo(() => {
  const { styles } = useStyles();
  // const {  } = useTranslation('chat');
  // const [createSession] = useSessionStore((s) => [s.createSession]);


  type TabsType = {
    Component: React.FC<{ index: number }>;
    icons: React.FC;
    index: number;
    label: string;
  }[];

  // Tabs Array
  const tabs: TabsType = [
    {
      Component: TabOne,
      icons: Maximize,
      index: 1,
      label: "Tab One",
    },
    {
      Component: TabTwo,
      icons: Video,
      index: 2,
      label: "Tab Two",
    },
    {
      Component: TabThree,
      icons: Settings2,
      index: 3,
      label: "Tab Three",
    }
  ];

  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

  return (
    <Flexbox className={styles.top} gap={16} padding={16}>
      <h1 className='' style={{ color: "white" }}>Dynamic</h1>
      <Flexbox distribution={'space-between'} horizontal>
        <div>
          <h3 className='' style={{ color: "white" }}>Assets</h3>
        </div>
      </Flexbox>

      <Upload />
      <Tabs className='tabs' onClick={setSelectedTab} selectedTab={selectedTab}  tabs={tabs} />
    </Flexbox>
  );
});

export default Header;

