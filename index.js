import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('type markdown here');

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea 
        value={markdown} 
        onChange={handleInputChange} 
      />
      <div>
        <ReactMarkdown>
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;