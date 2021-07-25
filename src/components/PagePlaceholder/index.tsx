import { Player } from '@lottiefiles/react-lottie-player';

function PagePlaceholder(): JSX.Element {
  return (
    <Player
      autoplay
      loop
      src="https://assets5.lottiefiles.com/packages/lf20_cg9lvxff.json"
      style={{ height: '500px', width: '500px' }}
    />
  );
}
export default PagePlaceholder;
