/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: "category",
      label: "Foundation Docs",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Mission, Vision, Values",
          items: [
            "Intro/intro",
            "Intro/why-daos",
            "Intro/new-builders",
            "Intro/mason-values",
          ],
        },
        {
          type: "category",
          label: "Rules of the Game",
          items: ["Rules/governance", "Rules/dao-structure", "Rules/projects"],
        },
        {
          type: "category",
          label: "Rituals",
          items: [
            "Rituals/ritual-of-sacrifice",
            "Rituals/ritual-of-skill",
            "Rituals/ritual-of-growth",
            "Rituals/ritual-of-oaths",
            "Rituals/ritual-of-reward",
          ],
        },
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
