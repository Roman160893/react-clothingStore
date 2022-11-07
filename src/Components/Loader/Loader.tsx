import { FC } from 'react';
import ContentLoader from 'react-content-loader';

const Loader: FC = () => (
  <ContentLoader
    speed={2}
    width={314}
    height={380}
    viewBox="0 0 314 380"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="0" rx="7" ry="7" width="314" height="380" />
  </ContentLoader>
);

export default Loader;
