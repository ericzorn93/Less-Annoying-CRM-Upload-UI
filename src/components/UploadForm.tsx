import React, { useState } from "react";
import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { getApiUrl } from "../services/http.service";

const { Dragger } = Upload;

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<any>(null);

  const handleSubmit = () => {
    if (file) {
      console.log(file);
    }
  };

  return (
    <div>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <Dragger
          multiple={false}
          name="campaignFile"
          action={`${getApiUrl()}/file-upload/add-spreadsheet`}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single file in CSV format Please.
          </p>
        </Dragger>
        ,
      </form>
    </div>
  );
};

export default UploadForm;
