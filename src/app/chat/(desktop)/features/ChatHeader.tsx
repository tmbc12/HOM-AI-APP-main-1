
import { ActionIcon,  ChatHeader } from '@lobehub/ui';
import { Upload  } from 'lucide-react';
import { memo } from 'react';
// import { useTranslation } from 'react-i18next';

// import { useGlobalStore } from '@/store/global';

import SettingButton from '../../features/ChatHeader/SettingButton';
import ShareButton from '../../features/ChatHeader/ShareButton';

// const Left = memo(() => {
//   const { t } = useTranslation('chat');

//   const router = useRouter();

//   const [init, isInbox, title, description, avatar, backgroundColor, model, plugins] =
//     useSessionStore((s) => [
//       sessionSelectors.isSomeSessionActive(s),
//       sessionSelectors.isInboxSession(s),
//       agentSelectors.currentAgentTitle(s),
//       agentSelectors.currentAgentDescription(s),
//       agentSelectors.currentAgentAvatar(s),
//       agentSelectors.currentAgentBackgroundColor(s),
//       agentSelectors.currentAgentModel(s),
//       agentSelectors.currentAgentPlugins(s),
//     ]);

//   const displayTitle = isInbox ? t('inbox.title') : title;
//   const displayDesc = isInbox ? t('inbox.desc') : description;

//   return !init ? (
//     <Flexbox horizontal>
//       <Skeleton
//         active
//         avatar={{ shape: 'circle', size: 'default' }}
//         paragraph={false}
//         title={{ style: { margin: 0, marginTop: 8 }, width: 200 }}
//       />
//     </Flexbox>
//   ) : (
//     <Flexbox align={'flex-start'} gap={12} horizontal>
//       <Avatar
//         avatar={avatar}
//         background={backgroundColor}
//         onClick={() =>
//           isInbox
//             ? router.push('/settings/agent')
//             : router.push(pathString('/chat/settings', { hash: location.hash }))
//         }
//         size={40}
//         title={title}
//       />
//       <ChatHeaderTitle
//         desc={displayDesc}
//         tag={
//           <>
//             <Tag icon={<SiOpenai size={'1em'} />}>{model}</Tag>
//             {plugins?.length > 0 && <PluginTag plugins={plugins} />}
//           </>
//         }
//         title={displayTitle}
//       />
//     </Flexbox>
//   );
// });

const Right = memo(() => {
  // const { t } = useTranslation('chat');

  // const [showAgentSettings, toggleConfig] = useGlobalStore((s) => [
  //   s.preference.showChatSideBar,
  //   s.toggleChatSideBar,
  // ]);

  return (
    <>
      <ShareButton />
      <ActionIcon
        icon={Upload }
        // onClick={() => toggleConfig()}
        // size={DESKTOP_HEADER_ICON_SIZE}
        // title={t('roleAndArchive')}
      />
      <SettingButton />
    </>
  );
});

const Header = memo(() => <ChatHeader right={<Right />} />);

export default Header;
