import React, { useState, useEffect } from "react";
import SchemaBreadcrumb from "../../components/tools/schema/SchemaBreadcrumb";
import SchemaProduct from "../../components/tools/schema/SchemaProduct";
import SchemaWebsite from "../../components/tools/schema/SchemaWebsite";

function SchemaBuilder() {
  const [schema, setSchema] = useState("SelectSchema");
  const [productVisible, setProductVisible] = useState(false);
  const [websiteVisible, setWebsiteVisible] = useState(false);
  const [breadcrumbVisible, setBreadcrumbVisible] = useState(false);

  const handleOnChange = (e) => {
    setSchema(e.target.value);
  };

  useEffect(() => {
    schema === "product" ? setProductVisible(true) : setProductVisible(false);
    schema === "website" ? setWebsiteVisible(true) : setWebsiteVisible(false);
    schema === "breadcrumb"
      ? setBreadcrumbVisible(true)
      : setBreadcrumbVisible(false);
  }, [schema]);

  return (
    <div>
      <select
        name="schema"
        id="schema"
        value={schema}
        onChange={handleOnChange}
      >
        <option value="selectSchema">Select a schema</option>
        <option value="product">Product</option>
        <option value="website">Website</option>
        <option value="breadcrumb">Breadcrumb</option>
      </select>
      {productVisible && <SchemaProduct />}
      {websiteVisible && <SchemaWebsite />}
      {breadcrumbVisible && <SchemaBreadcrumb />}
    </div>
  );
}

export default SchemaBuilder;
