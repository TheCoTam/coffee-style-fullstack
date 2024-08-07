import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const Preview = ({ value }) => {
  return <ReactQuill theme="bubble" value={value} readOnly />;
};

export default Preview;
