import React, { useEffect } from 'react';

const AdComponent = () => {
  useEffect(() => {
    // Load Google AdSense script
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1263396093645014";
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    return () => {
      // Cleanup when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="ad">
      <ins className="adsbygoogle"
           style={{display:'block'}}
           data-ad-client="ca-pub-1263396093645014"
           data-ad-slot="1234567890"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
};

export default AdComponent;
