import { ActionIcon, Logo } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { MessageSquarePlus } from 'lucide-react';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { DESKTOP_HEADER_ICON_SIZE } from '@/const/layoutTokens';
import { useSessionStore } from '@/store/session';

import SessionSearchBar from '../../features/SessionSearchBar';

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
  const { t } = useTranslation('chat');
  const [createSession] = useSessionStore((s) => [s.createSession]);


  type TabsType = {
    label: string;
    index: number;
    Component: React.FC<{}>;
    icons: React.FC<{}>;
  }[];

  // Tabs Array
  const tabs: TabsType = [
    {
      label: "Tab One",
      index: 1,
      Component: TabOne,
      icons: Maximize,
    },
    {
      label: "Tab Two",
      index: 2,
      Component: TabTwo,
      icons: Video,
    },
    {
      label: "Tab Three",
      index: 3,
      Component: TabThree,
      icons: Settings2,
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
      <Tabs className='tabs'  selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
    </Flexbox>
  );
});

export default Header;


{/* <Logo className={styles.logo} size={36} type={'text'} />
<ActionIcon
  icon={MessageSquarePlus}
  onClick={() => createSession()}
  size={DESKTOP_HEADER_ICON_SIZE}
  style={{ flex: 'none' }}
  title={t('newAgent')}
/>

<SessionSearchBar /> */}