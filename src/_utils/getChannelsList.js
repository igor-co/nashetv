import { externalM3u8List } from './externalM3u8List';

const separateByCategory = (channelsList) => {
  const uniqueCategoriesList = [
    ...new Set(channelsList.map((channel) => channel.category)),
  ];
  const channelsByCategory = {};

  for (let i = 0; i < channelsList.length; i++) {
    const channel = channelsList[i];
    for (let y = 0; y < uniqueCategoriesList.length; y++) {
      const category = uniqueCategoriesList[y];
      if (channel.category === category) {
        if (!channelsByCategory.hasOwnProperty(category)) {
          channelsByCategory[category] = [];
        }

        channelsByCategory[category].push(channel.name);
      }
    }
  }

  return channelsByCategory;
};

const getChannelsList = () => {
  const playlistToJson = (m3u8) => {
    const channelsList = m3u8
      .replace('#EXTM3U', '')
      .split(',')
      .map((channel) => {
        const singleChannel = channel.split('#EXTGRP:');
        return {
          name: singleChannel[0]?.trim(),
          category: singleChannel[1]?.split('   ')[0].trim(),
        };
      })
      .filter((channel) => channel.category !== undefined);

    return separateByCategory(channelsList);
  };

  return playlistToJson(externalM3u8List);
};
export { getChannelsList };
