import { Helmet } from "react-helmet";
import { seoTags, tagManagerID, twitterUsername } from "../Constants";

const SiteHelmet: React.FC<typeSeo> = ({
  title,
  description,
  keyword,
  image,
  url,
} = seoTags) => {
  return (
    <>
      <Helmet>
        {/* <!-- Search Engine --> */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
        <meta name="image" content={image} />
        <meta name="author" content="Obi Fortune Dubem" />
        {/* <!-- Schema.org for Google --> */}
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={image} />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content={`@${twitterUsername}`} />
        <meta name="twitter:creator" content={`@${twitterUsername}`} />
        <meta name="twitter:image:src" content={image} />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta name="og:title" content={title} />
        <meta name="og:site_name" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={image} />
        <meta name="og:url" content={url} />
        <meta name="og:type" content="website" />
        <meta name="og:type" content="profile" />

        <script>
          {(function (w: any, d: Document, s: any, l: any, i: any): any {
            w[l] = w[l] || [];
            w[l].push({
              "gtm.start": new Date().getTime(),
              event: "gtm.js",
            });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l !== "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", tagManagerID)}
        </script>
      </Helmet>

      <>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${tagManagerID}}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          ></iframe>
        </noscript>
      </>
    </>
  );
};
export default SiteHelmet;
