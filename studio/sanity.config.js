import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { muxInput } from "sanity-plugin-mux-input";
import { colorInput } from "@sanity/color-input";
import schemas from "./schemas/schema";
import deskStructure from "./deskStructure";

export default defineConfig([
  {
    name: "production-workspace",
    title: "ooo",
    projectId: "y1gidup7",
    dataset: "production",
    basePath: "/production",
    document: {
      productionUrl: (prev, context) => {
        const { client, dataset, document } = context;

        if (
          document._type === "post" ||
          document._type === "page" ||
          document._type === "landing"
        ) {
          // Any random string, must match SANITY_PREVIEW_SECRET in the Next.js .env.local file
          const previewSecret =
            "j8heapkqy4rdz6kudrvsc7ywpvfhrv022abyx5zgmuwpc1xv";

          // Replace `remoteUrl` with your deployed Next.js site
          const remoteUrl = `https://ooo.place`;
          const localUrl = `http://localhost:3000`;

          const baseUrl =
            window.location.hostname === "localhost" ? localUrl : remoteUrl;

          const previewUrl = new URL(baseUrl);

          previewUrl.pathname = `/api/preview`;
          previewUrl.searchParams.append(`secret`, previewSecret);
          previewUrl.searchParams.append(`type`, document._type);
          const slug = document?.slug?.current;
          if (slug) {
            previewUrl.searchParams.append(`slug`, slug);
          }

          return previewUrl.toString();
        }

        return prev;
      },
    },
    plugins: [
      deskTool({
        structure: deskStructure,
      }),
      muxInput(),
      visionTool(),
      colorInput(),
    ],
    schema: {
      types: schemas,
    },
  },
  {
    name: "staging-workspace",
    title: "ooo Staging",
    projectId: "y1gidup7",
    dataset: "development",
    basePath: "/staging",
    plugins: [
      deskTool({
        structure: deskStructure,
      }),
      muxInput(),
      visionTool(),
      colorInput(),
    ],
    schema: {
      types: schemas,
    },
  },
]);
