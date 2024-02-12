'use client';

import { ActionIcon } from '@lobehub/ui';
import {
  Bot,
  FolderOpenDot,
  Layers,
  LayoutDashboard,
  MessageSquare,
  Type,
  UploadCloud,
} from 'lucide-react';
import Link from 'next/link';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { GlobalStore, useGlobalStore } from '@/store/global';
import { SidebarTabKey } from '@/store/global/initialState';
import { useSessionStore } from '@/store/session';

export interface TopActionProps {
  setTab: GlobalStore['switchSideBar'];
  tab: GlobalStore['sidebarKey'];
}

const TopActions = memo<TopActionProps>(({ tab, setTab }) => {
  const { t } = useTranslation('common');
  const switchBackToChat = useGlobalStore((s) => s.switchBackToChat);
  const [isChat, setIsChat] = useState(false);
  useEffect(() => {
    if (window?.location.pathname === '/chat') {
      setIsChat(true);
    }
  });

  return (
    <div>
      {isChat ? (
        <>
          <Link href={'/chat'}>
            <ActionIcon
              active={tab === SidebarTabKey.Chat}
              icon={Layers}
              placement={'right'}
              size="large"
              title={t('tab.chat')}
            />
          </Link>
          <Link href={'/chat'}>
            <ActionIcon
              // active={tab === SidebarTabKey.Market}
              icon={LayoutDashboard}
              // onClick={() => {
              //   setTab(SidebarTabKey.Market);
              // }}
              placement={'right'}
              size="large"
              title={t('tab.market')}
            />
          </Link>
          <Link href={'/chat'}>
            <ActionIcon
              // active={tab === SidebarTabKey.Market}
              icon={Type}
              // onClick={() => {
              //   setTab(SidebarTabKey.Market);
              // }}
              placement={'right'}
              size="large"
              title={t('tab.market')}
            />
          </Link>
          <Link href={'/chat'}>
            <ActionIcon
              // active={tab === SidebarTabKey.Market}
              icon={UploadCloud}
              // onClick={() => {
              //   setTab(SidebarTabKey.Market);
              // }}
              placement={'right'}
              size="large"
              title={t('tab.market')}
            />
          </Link>
          <Link href={'/chat'}>
            <ActionIcon
              // active={tab === SidebarTabKey.Market}
              icon={FolderOpenDot}
              // onClick={() => {
              //   setTab(SidebarTabKey.Market);
              // }}
              placement={'right'}
              size="large"
              title={t('tab.market')}
            />
          </Link>
        </>
      ) : (
        <>
          <Link
            href={'/chat'}
            onClick={(e) => {
              e.preventDefault();
              switchBackToChat(useSessionStore.getState().activeId);
              setTab(SidebarTabKey.Chat);
            }}
          >
            <ActionIcon
              active={tab === SidebarTabKey.Chat}
              icon={MessageSquare}
              placement={'right'}
              size="large"
              title={t('tab.chat')}
            />
          </Link>
          <Link href={'/market'}>
            <ActionIcon
              active={tab === SidebarTabKey.Market}
              icon={Bot}
              onClick={() => {
                setTab(SidebarTabKey.Market);
              }}
              placement={'right'}
              size="large"
              title={t('tab.market')}
            />
          </Link>
        </>
      )}
    </div>
  );
});

export default TopActions;
