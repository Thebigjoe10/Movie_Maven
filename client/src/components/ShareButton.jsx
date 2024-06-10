import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookShareCount
} from 'react-share';

const ShareButton = () => {
  const shareUrl = 'https://moviemaven.xyz';
  const title = 'Discover Amazing Movies on MovieMaven!';
  const description = 'Join MovieMaven to explore, review, and share your favorite movies with a vibrant community of movie enthusiasts!';
  const imageUrl = 'https://moviemaven.xyz/moviemaven.webp'; 

  return (
    <div className="fixed bottom-0 left-0 bg-transparent shadow-lg rounded-tr-lg z-50">
      <div className="flex flex-col items-center space-y-2">
        <div className="flex items-center">
          <FacebookShareButton
            url={shareUrl}
            quote={`${title} - ${description}`}
            hashtag="#MovieMaven"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <FacebookShareCount url={shareUrl}>
            {count => <span className="ml-2">{count}</span>}
          </FacebookShareCount>
        </div>

        <div className="flex items-center">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            via="MovieMaven"
            hashtags={["MovieMaven", "Movies", "Reviews"]}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>

        <div className="flex items-center">
          <WhatsappShareButton
            url={shareUrl}
            title={`${title} - ${description}`}
            separator=":: "
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
};

export default ShareButton;
