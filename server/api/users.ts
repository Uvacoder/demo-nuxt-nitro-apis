import { useRoute } from "nuxt-nitro-helpers";
import wait from "waait";

export default useRoute({
  get() {
    return "GET";
  },

  async post(_, res) {
    await wait(3000);

    res.statusCode = 201;
    return "POST";
  }
});
