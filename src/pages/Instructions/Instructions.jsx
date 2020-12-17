import { useState } from 'react';

import styles from './Instructions.module.scss';

import { Layout } from '_components/Layout';
import { ChannelsList } from '_components/ChannelsList';

import { getChannelsList } from '_utils/getChannelsList';

const Instructions = () => {
  const [channelsList] = useState(getChannelsList());

  const renderChannelsLists = () => {
    const channelsLists = [];
    for (const category of Object.keys(channelsList)) {
      channelsLists.push(
        <ChannelsList category={category} channelsList={channelsList} />
      );
    }
    return channelsLists;
  };

  return (
    <Layout>
      <div className='container'>
        <h2>Видео инструкции по использованию и установке приставки.</h2>
        {renderChannelsLists()}
      </div>
    </Layout>
  );
};

export { Instructions };
