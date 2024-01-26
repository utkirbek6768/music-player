import service from "./axios";
const AuthServise = {
  searchMusic() {
    return service.get(
      "/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=1&numberOfTopResults=1"
    );
  },
  getTracks() {
    return service.get("/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv");
  },
};

export default AuthServise;
