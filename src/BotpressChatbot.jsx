// import React, { useEffect } from 'react';

// const BotpressChatbot = () => {
//   useEffect(() => {
//     const botpressScript = document.createElement('script');
//     botpressScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
//     botpressScript.async = true;
//     document.body.appendChild(botpressScript);

//     const configScript = document.createElement('script');
//     configScript.src = 'https://mediafiles.botpress.cloud/80557a6e-7cb6-4414-850a-e0915cb95e50/webchat/config.js';
//     configScript.defer = true;
//     document.body.appendChild(configScript);

//     return () => {
//       document.body.removeChild(botpressScript);
//       document.body.removeChild(configScript);
//     };
//   }, []);

//   return <div id="webchat" />;
// };

// export default BotpressChatbot;
import React, { useEffect } from "react";

const BotpressChatbot = () => {
  useEffect(() => {
    const loadBotpressChatbot = async () => {
      // Dynamically load the inject.js script
      const injectScript = document.createElement("script");
      injectScript.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
      injectScript.async = true;
      document.body.appendChild(injectScript);

      // Wait for the inject.js script to be loaded
      await new Promise((resolve) => {
        injectScript.onload = resolve;
      });

      // Once inject.js is loaded, load the config.js script
      const configScript = document.createElement("script");
      configScript.src =
        "https://mediafiles.botpress.cloud/80557a6e-7cb6-4414-850a-e0915cb95e50/webchat/config.js";
      configScript.defer = true;
      document.body.appendChild(configScript);
    };

    loadBotpressChatbot();

    // Cleanup function to remove the scripts when the component unmounts
    return () => {
      const injectScript = document.querySelector(
        'script[src="https://cdn.botpress.cloud/webchat/v1/inject.js"]'
      );
      const configScript = document.querySelector(
        'script[src="https://mediafiles.botpress.cloud/80557a6e-7cb6-4414-850a-e0915cb95e50/webchat/config.js"]'
      );
      if (injectScript) {
        document.body.removeChild(injectScript);
      }
      if (configScript) {
        document.body.removeChild(configScript);
      }
    };
  }, []);

  return <div id="webchat" />;
};

export default BotpressChatbot;
