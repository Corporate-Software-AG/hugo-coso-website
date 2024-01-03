// tina/config.js
import { defineConfig } from "tinacms";

// tina/templates.js
function blogbeitragFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title"
    },
    {
      type: "image",
      name: "image",
      label: "image"
    },
    {
      type: "datetime",
      name: "date",
      label: "date"
    },
    {
      type: "string",
      name: "description",
      label: "description"
    },
    {
      type: "string",
      name: "categories",
      label: "categories",
      list: true
    }
  ];
}
function job_ausschreibungFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titel"
    },
    {
      type: "string",
      name: "description",
      label: "Beschreibung",
      ui: {
        component: "textarea"
      }
    }
  ];
}
function serviceFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titel"
    },
    {
      type: "string",
      name: "description",
      label: "Beschreibung",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "image",
      name: "image",
      label: "Bild"
    }
  ];
}
function success_storyFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title"
    },
    {
      type: "image",
      name: "image",
      label: "Image"
    },
    {
      type: "string",
      name: "category",
      label: "Kategorien",
      list: true,
      ui: {
        component: "tags"
      }
    },
    {
      type: "datetime",
      name: "date",
      label: "Datum"
    }
  ];
}
function teammitgliedFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Name"
    },
    {
      type: "image",
      name: "image",
      label: "Bild"
    },
    {
      type: "string",
      name: "categories",
      label: "categories",
      list: true
    },
    {
      type: "string",
      name: "job_title",
      label: "Job Titel"
    },
    {
      type: "string",
      name: "team",
      label: "Team"
    },
    {
      type: "string",
      name: "certifications",
      label: "Zertifikate",
      list: true,
      ui: {
        component: "tags"
      }
    },
    {
      type: "object",
      name: "social",
      label: "social",
      list: true,
      fields: [
        {
          type: "string",
          name: "icon",
          label: "icon"
        },
        {
          type: "string",
          name: "link",
          label: "link"
        }
      ]
    }
  ];
}

// tina/config.js
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        format: "toml",
        label: "Hauptkonfiguration",
        name: "hauptkonfiguration",
        path: ".",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "config"
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description: "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info"
          }
        ]
      },
      {
        format: "yml",
        label: "Seitenkonfiguration",
        name: "seitenkonfiguration",
        path: "data/de",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "homepage"
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description: "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info"
          }
        ]
      },
      {
        format: "md",
        label: "Services",
        name: "services",
        path: "content/german/services",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...serviceFields()
        ]
      },
      {
        format: "md",
        label: "\xDCber uns",
        name: "_ber_uns",
        path: "content/german/about",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "_index"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          }
        ]
      },
      {
        format: "md",
        label: "Job Seite",
        name: "job_seite",
        path: "content/german/jobs",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "_index"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          }
        ]
      },
      {
        format: "md",
        label: "Jobs",
        name: "jobs",
        path: "content/german/jobs",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
          exclude: "_index"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...job_ausschreibungFields()
        ]
      },
      {
        format: "yml",
        label: "Short Success Stories (Testimonial)",
        name: "short_success_stories__testimonial_",
        path: "data/de",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "success_short"
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description: "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info"
          }
        ]
      },
      {
        format: "md",
        label: "Erfolge Seite",
        name: "erfolge_seite",
        path: "content/german/success",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "_index"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          }
        ]
      },
      {
        format: "md",
        label: "Erfolgsgeschichten",
        name: "erfolgsgeschichten",
        path: "content/german/success",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
          exclude: "_index"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...success_storyFields()
        ]
      },
      {
        format: "md",
        label: "Blog Seite",
        name: "blog_seite",
        path: "content/german/blog",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "_index"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          }
        ]
      },
      {
        format: "md",
        label: "Blogbeitr\xE4ge",
        name: "blogbeitr_ge",
        path: "content/german/blog",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
          exclude: "_index"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...blogbeitragFields()
        ]
      },
      {
        format: "md",
        label: "Team Seite",
        name: "team_seite",
        path: "content/german/team",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "_index"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          }
        ]
      },
      {
        format: "md",
        label: "Team",
        name: "team",
        path: "content/german/team",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
          exclude: "_index"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...teammitgliedFields()
        ]
      },
      {
        format: "md",
        label: "Zertifikatsseiten",
        name: "zertifikatsseiten",
        path: "content/german/certified-quality",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          }
        ]
      },
      {
        format: "md",
        label: "Kontakt",
        name: "kontakt",
        path: "content/german/contact",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "_index"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          }
        ]
      },
      {
        format: "yml",
        label: "Partner",
        name: "partner",
        path: "data/de",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "partner"
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description: "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info"
          }
        ]
      },
      {
        format: "md",
        label: "Datenschutz und Impressum",
        name: "datenschutz_und_impressum",
        path: "content/german/privacy-policy-imprint",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "_index"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          }
        ]
      },
      {
        format: "yaml",
        label: "Sprachelemente",
        name: "sprachelemente",
        path: "i18n",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "de"
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description: "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
