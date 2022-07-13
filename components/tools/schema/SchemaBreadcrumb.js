import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
function SchemaBreadcrumb() {
  const [serviceList, setServiceList] = useState([{ service: "" }]);
  const [urlList, setUrlList] = useState([{ url: "" }]);

  const breadcrumb = `<script type="application/ld+json">
  {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "${serviceList[0].service}",
      "item": "${urlList[0].url}" 
    ${serviceList[1] ? `},{` : ""}
    ${
      serviceList[1]
        ? `"@type": "ListItem", 
          "position": 2, 
          "name": "${serviceList[1].service}",
          "item": "${urlList[1].url}"`
        : ""
    }
    ${serviceList[2] ? `},{` : ""}
        ${
          serviceList[2]
            ? `"@type": "ListItem", 
          "position": 3, 
          "name": "${serviceList[2].service}",
          "item": "${urlList[2].url}"`
            : ""
        }
        ${serviceList[3] ? `},{` : ""}
        ${
          serviceList[3]
            ? `"@type": "ListItem", 
          "position": 4, 
          "name": "${serviceList[3].service}",
          "item": "${urlList[3].url}"`
            : ""
        }
    }]
  }
  </script>`;

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };
  const handleUrlChange = (e, index) => {
    const { name, value } = e.target;
    const listUrl = [...urlList];
    listUrl[index][name] = value;
    setUrlList(listUrl);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
    setUrlList([...urlList, { url: "" }]);
  };

  return (
    <>
      <div className="tool-cnt">
        <div className="tool-first-cnt">
          <form>
            {serviceList.map((singleService, index) => (
              <div key={index}>
                <div className="pages">
                  <label htmlFor="service">Name of the page</label>
                  <input
                    name="service"
                    type="text"
                    id="service"
                    value={singleService.service}
                    onChange={(e) => handleServiceChange(e, index)}
                    required
                  />
                  <label htmlFor="url">Url of the page</label>
                  <input
                    name="url"
                    type="text"
                    id="url"
                    value={singleService.url}
                    onChange={(e) => handleUrlChange(e, index)}
                    required
                  />
                  {serviceList.length - 1 === index && serviceList.length < 5 && (
                    <button
                      type="button"
                      onClick={handleServiceAdd}
                      className="add-btn"
                    >
                      <span>Add a page</span>
                    </button>
                  )}
                </div>
                <div className="pages-btn">
                  {serviceList.length !== 1 && (
                    <button
                      type="button"
                      onClick={() => handleServiceRemove(index)}
                      className="remove-btn"
                    >
                      <span>Remove</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </form>
        </div>
        <div className="tool-second-cnt">
          <SyntaxHighlighter className="script" language="javascript">
            {breadcrumb}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}

export default SchemaBreadcrumb;
