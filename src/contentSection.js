import React from "react";

const ContentSection = ({comment}) => {
  return (
    <div>
      <p className="text-slate-600 break-all">{comment.content}</p>
    </div>
  );
};

export default ContentSection;
