import axios from "axios";

export function getApiUrl(): string {
  let url: string;

  switch (process.env.NODE_ENV) {
    case "production":
      url = "";
      break;
    case "development":
      url = "http://localhost:5000";
      break;
    default:
      url = "http://localhost:5000";
      break;
  }

  return url;
}

async function uploadFile(file: any): Promise<boolean> {
  const url = getApiUrl();

  let uploadedFile: boolean = false;
  try {
    const { data } = await axios({
      method: "POST",
      url,
      headers: {
        "Content-Type": "multipart/formdata",
      },
      data: {
        file,
      },
    });

    if (data && data.length) {
      uploadedFile = true;
    }
  } catch (err) {
    console.error(err);
    uploadedFile = false;
  }

  return uploadedFile;
}
