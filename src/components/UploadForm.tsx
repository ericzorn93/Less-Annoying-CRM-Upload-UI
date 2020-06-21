import React, { useState } from "react";
import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useQuery } from "react-query";

import { getApiUrl } from "../services/http.service";

const { Dragger } = Upload;

const fetchHealthCheck = (): Promise<boolean> => {
  return fetch(`${getApiUrl()}/health`)
    .then((res) => res.json())
    .then((data) => {
      if (data?.mongodb?.status === "up") {
        return true;
      }
      return false;
    });
};

const UploadForm: React.FC = () => {
  const [authToken] = useState<string | null>(null);
  const { data: isHealthy, error, isFetching } = useQuery(
    "healthCheck",
    fetchHealthCheck,
    { refetchOnWindowFocus: false }
  );

  if (error || isHealthy === false) {
    return <h1>Please refresh, an error has occurred</h1>;
  }

  if (isFetching) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Hi Richard, Please Only Upload CSV Files</h1>
        <br />
        <h2>
          <b>
            * Also, Add E-Mail Campaign Name with '-' to end of file name before
            .csv
          </b>
        </h2>

        <Dragger
          multiple={false}
          name="campaignFile"
          action={`${getApiUrl()}/file-upload/add-spreadsheet`}
          headers={{
            Authorization: authToken ? `Bearer ${authToken}` : "",
          }}
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
      </div>
    </>
  );
};

export default UploadForm;
