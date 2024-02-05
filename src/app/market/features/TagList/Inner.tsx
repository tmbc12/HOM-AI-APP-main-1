import { Button } from 'antd';
// import isEqual from 'fast-deep-equal';
import { startCase } from 'lodash-es';
import { memo } from 'react';

import { useMarketStore } from '@/store/market';

import homTags from './agentTags.json';

const Inner = memo(() => {
  // const agentTagList = useMarketStore(agentMarketSelectors.getAgentTagList, isEqual);
  const [keywords, setSearchKeywords] = useMarketStore((s) => [
    s.searchKeywords,
    s.setSearchKeywords,
  ]);

  return homTags.tags.map((item) => (
    <Button
      key={item}
      onClick={() => setSearchKeywords(item)}
      shape={'round'}
      size={'small'}
      type={keywords === item ? 'primary' : 'default'}
    >
      {startCase(item)}
    </Button>
  ));
});

export default Inner;
