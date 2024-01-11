import React, { useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// Define a custom button component
const CustomButton = React.forwardRef((props, ref) => (
  // Use the ref prop to pass the reference to the span element
  <span ref={ref} className="octicon octicon-link" />
));

// Define a custom toolbar component
const CustomToolbar = () => (
  <div id="toolbar">
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-custom">
      <CustomButton  />
    </button>
  </div>
);

// Define the main editor component
const Editor = () => {
    // Use a ref to access the editor instance
    const quillRef = useRef();
  
    // Use another ref to access the custom button instance
    const customButtonRef = useRef(); // Declare the customButtonRef variable here
  
    // Use an effect to register the custom button handler
    useEffect(() => {
      // Get the Quill instance
      const quill = quillRef.current.getEditor();
  
      // Get the custom button element from the ref
      const customButton = customButtonRef.current;
  
      // Add a click event listener
      customButton.addEventListener("click", () => {
        // Get the current cursor position
        const selection = quill.getSelection();
  
        // Check if selection is not null
        if (selection) {
          // Insert a link with a placeholder text
          quill.insertText(selection.index, "Link");
          quill.formatText(selection.index, 4, "link", "https://example.com");
        }
      });
    }, []);
  
    return (
      <div className="text-editor">
        <CustomToolbar />
        <ReactQuill
          ref={quillRef}
          theme="snow"
          modules={{ toolbar: { container: "#toolbar" } }}
        />
      </div>
    );
  };
  
  export default Editor;
  