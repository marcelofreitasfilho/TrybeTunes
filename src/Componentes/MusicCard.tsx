type MusicCardProps = {
  trackId: number,
  trackName: string,
  previewUrl: string,
};

function MusicCard(MusicardProps: MusicCardProps) {
  const { trackName, trackId, previewUrl } = MusicardProps;
  return (
    <section>
      <h4>{trackName}</h4>

      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        <code>audio</code>
      </audio>

    </section>
  );
}

export default MusicCard;
