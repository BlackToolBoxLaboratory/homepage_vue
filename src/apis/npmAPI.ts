import { npmAPI as service } from "../plugins/axios";

export default {
  getPackageDownloads: function (pkgName: string) {
    return service.get(`/downloads/range/last-year/${pkgName}`);
  },
};
