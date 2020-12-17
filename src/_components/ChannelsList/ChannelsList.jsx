import styles from './ChannelsList.module.scss';

const ChannelsList = ({ category, channelsList, ...props }) => {
  return (
    <>
      <details>
        <summary>{category}</summary>
        <div className={styles.content}>
          <ul>
            {channelsList[category].sort().map((channel, i) => (
              <li>
                <h3>{`${i + 1}.${`    `} ${channel.toUpperCase()}`}</h3>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </>
  );
};

export { ChannelsList };
