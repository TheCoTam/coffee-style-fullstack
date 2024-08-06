import { lazy, useMemo } from "react";

const Preview = ({ value }) => {
  const ReactQuill = useMemo(() => lazy(() => import("react-quill")), []);
  return <ReactQuill theme="bubble" value={value} readOnly />;
};

export default Preview;
