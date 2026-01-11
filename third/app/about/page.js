import React from 'react'
import Image from 'next/image';

export default function about() {
  return (
    <div>
        <Image src={"https://www.pixelstalk.net/wp-content/uploads/2016/07/Download-Free-Pictures-3840x2160.jpg"} alt="brand image"
        
         width={100} height={100}></Image>
      Only About
    </div>
  )
  
}
export const metadata = {
  title: "Instagram",
  description: "Share Photos and videos but its about",
};

