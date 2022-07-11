import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import ClipboardJS from "clipboard";

if (typeof window !== "undefined") {
  new ClipboardJS(".button");
}

function SchemaWebsite() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [target, setTarget] = useState("");
  const website = `<script type="application/ld+json">
  {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "${name}",
    "url": "${url}",
    ${
      target
        ? `"potentialAction": {
      "@type": "SearchAction",
      "target": "${target}",
      "query-input": "required name=search_term_string"
  }`
        : ""
    }
  }
  </script>`;

  function handleClick(e) {
    e.preventDefault();
    alert("Copied!");
  }

  return (
    <div>
      <form>
        <legend>Schema builder for a a Website</legend>
        <label htmlFor="websiteName">Website Name</label>
        <input
          id="websiteName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="websiteUrl">Website Url</label>
        <input
          id="websiteUrl"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <label htmlFor="target">Target</label>
        <input
          id="target"
          type="text"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="button"
          data-clipboard-action="copy"
          data-clipboard-target=".script"
        >
          Copy
        </button>
      </form>
      <SyntaxHighlighter className="script" language="javascript">
        {website}
      </SyntaxHighlighter>
    </div>
  );
}

export default SchemaWebsite;
