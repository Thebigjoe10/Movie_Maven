/* eslint-disable react/prop-types */
// ImageSkeleton.jsx
import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ImageSkeleton({ src, alt, className }) {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  return (
    <div>
      {showSkeleton ? (
        <Skeleton height={300} width={200} />
      ) : (
        <img
          src={src}
          alt={alt}
          className={className}
        />
      )}
    </div>
  );
}
