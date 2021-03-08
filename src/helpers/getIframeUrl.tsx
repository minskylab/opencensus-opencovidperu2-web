import jwt from "jsonwebtoken";

const METABASE_SITE_URL = "http://165.227.111.88:3000";
const METABASE_SECRET_KEY = "38f9c812010a5ee0c65e828f030f5e3af3abb5b6ed33b7668478ce0cd7ad0e71";

const getIframeUrl = () => {
  const payload = {
    resource: { question: 5 },
    params: {},
    exp: Math.round(Date.now() / 1000) + 10 * 60, // 10 minute expiration
  };

  const token = jwt.sign(payload, METABASE_SECRET_KEY);

  const iframeUrl = `${METABASE_SITE_URL}/embed/question/${token}#bordered=true&titled=true`;

  return iframeUrl;
};

export default getIframeUrl;
