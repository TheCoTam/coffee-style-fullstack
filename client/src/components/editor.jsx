import { lazy, Suspense, useMemo } from "react";
import "react-quill/dist/quill.snow.css";

const Editor = ({ onChange, value }) => {
  const ReactQuill = useMemo(() => lazy(() => import("react-quill")), []);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ReactQuill theme="snow" value={value} onChange={onChange} />
      </Suspense>
    </div>
  );
};

export default Editor;
