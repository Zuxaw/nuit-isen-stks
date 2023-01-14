import { useState } from 'react';


const Post = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleImageClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };
  return (
    <>
      {posts.map((post,index) => (
        <div key={index} className="card card-compact w-full mt-5 bg-base-100 shadow-xl border border-base-300">
          <div className="card-body ">
            <p className="prose">{post.content}</p>
            {post.images && post.images.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center justify-center">
                {post.images && post.images.length > 0 && (
                  <div className="flex flex-wrap items-center justify-center mt-4">
                    {post.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        className="h-52 w-64 rounded-lg m-1"
                        onClick={handleImageClick}
                        style={{ objectFit: 'cover' }}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="card-actions justify-end">
              <button className="text-base mr-4">
                <i className="fas fa-heart mr-2" />
                {post.likes}
              </button>
              <button className="text-base mr-4">
                <i className="fa-solid fa-share mr-2"></i>
                {post.shares}
              </button>
              <button className="text-base mr-4">
                <i className="fa-solid fa-comment mr-2"></i>
                {post.comments}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
