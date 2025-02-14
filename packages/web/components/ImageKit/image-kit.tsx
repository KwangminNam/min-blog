"use client";

import { IKImage } from "imagekitio-next";

interface IImageKitProps {
  path: string;
  alt: string;
  width: number;
  height: number;
}

const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

const ImageKit: React.FC<IImageKitProps> = (props) => {
  return (
    <IKImage
        style={{ borderRadius: "8px" }}
        urlEndpoint={urlEndpoint}
        {...props}
    />
  );
};

export default ImageKit;
