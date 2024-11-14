import ContentLoader from "react-content-loader";

const Loader = ({ id }: { id: string }) => {
  switch (id) {
    case "topStories":
      return (
        <ContentLoader viewBox="0 0 100% 280" height={280} width="100%">
          <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
          <rect x="6" y="190" rx="0" ry="0" width="150" height="20" />
          <rect x="4" y="225" rx="0" ry="0" width="239" height="20" />
          <rect x="4" y="260" rx="0" ry="0" width="130" height="20" />
          <rect x="324" y="3" rx="0" ry="10" width="350" height="20" />
          <rect x="324" y="30" rx="0" ry="10" width="350" height="20" />
          <rect x="324" y="60" rx="0" ry="10" width="100" height="20" />
          <rect x="324" y="100" rx="0" ry="10" width="350" height="20" />
          <rect x="324" y="130" rx="0" ry="10" width="350" height="20" />
          <rect x="324" y="160" rx="0" ry="10" width="100" height="20" />
          <rect x="324" y="200" rx="0" ry="10" width="350" height="20" />
          <rect x="324" y="230" rx="0" ry="10" width="350" height="20" />
          <rect x="324" y="260" rx="0" ry="10" width="100" height="20" />
        </ContentLoader>
      );
    default:
      return (
        <ContentLoader viewBox="0 0 100% 280" height={280} width="100%">
          <rect x="90%" y="3" rx="0" ry="10" width="60" height="60" />
          <rect x="3" y="3" rx="0" ry="10" width="80%" height="20" />
          <rect x="3" y="30" rx="0" ry="10" width="80%" height="20" />
          <rect x="3" y="60" rx="0" ry="10" width="30%" height="20" />

          <rect x="90%" y="100" rx="0" ry="10" width="60" height="60" />
          <rect x="3" y="100" rx="0" ry="10" width="80%" height="20" />
          <rect x="3" y="130" rx="0" ry="10" width="80%" height="20" />
          <rect x="3" y="160" rx="0" ry="10" width="30%" height="20" />

          <rect x="90%" y="200" rx="0" ry="10" width="60" height="60" />
          <rect x="3" y="200" rx="0" ry="10" width="80%" height="20" />
          <rect x="3" y="230" rx="0" ry="10" width="80%" height="20" />
          <rect x="3" y="260" rx="0" ry="10" width="30%" height="20" />
        </ContentLoader>
      );
  }
};

export default Loader;
