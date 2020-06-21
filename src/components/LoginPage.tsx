import React, { useCallback } from "react";
import { Button } from "antd";
import { getApiUrl } from "../services/http.service";

const loginContainerStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const LoginPage: React.FC = () => {
  const handleLoginClick = useCallback(() => {
    const openWindow = window.open(
      `${getApiUrl()}/auth/login/google`,
      "googleWindowName",
      "height=500,width=500"
    );

    openWindow?.postMessage("this is a test", "*");
  }, []);

  return (
    <div style={loginContainerStyles}>
      <h1>Please Login With Google</h1>
      <Button type="primary" onClick={handleLoginClick}>
        Login With Google
      </Button>
    </div>
  );
};

export default LoginPage;
