import { Helmet } from "react-helmet-async";

const Meta = ({ title = "", url = "" }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default Meta;
