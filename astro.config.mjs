// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "GrogDocs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/denzang",
        },
        {
          icon: "gitlab",
          label: "GitLab",
          href: "https://gitlab.com/dpak94",
        },
      ],
      sidebar: [
        {
          label: "HTML",
          items: [{ autogenerate: { directory: "html" } }],
        },
        {
          label: "CSS",
          items: [{ autogenerate: { directory: "css" } }],
        },
        {
          label: "JavaScript",
          items: [{ autogenerate: { directory: "javascript" } }],
        },
        {
          label: "Node",
          items: [{ autogenerate: { directory: "node" } }],
        },
        {
          label: "Python",
          items: [{ autogenerate: { directory: "python" } }],
        },
        {
          label: "Go",
          items: [{ autogenerate: { directory: "go" } }],
        },
        {
          label: "Tools",
          items: [{ autogenerate: { directory: "tools" } }],
        },
        {
          label: "Test Folder",
          items: [{ autogenerate: { directory: "testFolder" } }],
        },
      ],
    }),
  ],
});
