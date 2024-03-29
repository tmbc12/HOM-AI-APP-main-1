import React from 'react';
import { ActionIcon } from '@lobehub/ui';
import { CircleUserRound  } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { useTranslation } from 'react-i18next';

// import { DESKTOP_HEADER_ICON_SIZE, MOBILE_HEADER_ICON_SIZE } from '@/const/layoutTokens';
// import { useGlobalStore } from '@/store/global';
// import { SettingsTabs, SidebarTabKey } from '@/store/global/slices/common/initialState';
// import { useSessionStore } from '@/store/session';
// import { sessionSelectors } from '@/store/session/selectors';
// import { pathString } from '@/utils/url';

const SettingButton = ()=> {
  // const isInbox = useSessionStore(sessionSelectors.isInboxSession);
  // const { t } = useTranslation('common');
  // const router = useRouter();

  return (
    <ActionIcon
      icon={CircleUserRound }
      // onClick={() => {
      //   if (isInbox) {
      //     useGlobalStore.setState({
      //       settingsTab: SettingsTabs.Agent,
      //       sidebarKey: SidebarTabKey.Setting,
      //     });
      //     router.push('/settings/agent');
      //   } else {
      //     router.push(pathString('/chat/settings', { hash: location.hash }));
      //   }
      // }}
      // size={mobile ? MOBILE_HEADER_ICON_SIZE : DESKTOP_HEADER_ICON_SIZE}
      // title={t('header.session', { ns: 'setting' })}
    />
  );
};

export default SettingButton;
