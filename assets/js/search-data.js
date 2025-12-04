// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Throughout my studies and PhD, I have been involved in several courses as teaching assistant, guest lecturer, and coordinator.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-books-amp-music",
              title: "Books &amp; music",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "books-vento-ibérico",
          title: 'Vento Ibérico',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/1_fereira/";
            },},{id: "books-dança-do-tempo",
          title: 'Dança do Tempo',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/1_kuroda/";
            },},{id: "books-dança-do-tempo",
          title: 'Dança do Tempo',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/1_nascimento/";
            },},{id: "books-the-wake-up",
          title: 'The Wake Up',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/1_wakeup/";
            },},{id: "books-the-unbearable-lightness-of-being",
          title: 'The Unbearable Lightness of Being',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/lightness_of_being/";
            },},{id: "books-sirens-of-titan",
          title: 'Sirens of Titan',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/sirens_of_titan/";
            },},{id: "books-slaughterhouse-five",
          title: 'Slaughterhouse-Five',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/slaughterhouse5/";
            },},{id: "news-upcoming-talk-i-will-give-a-contributed-talk-at-the-workshop-on-theory-of-control-and-reinforcement-learning-at-cwi-amsterdam-on-the-19th-of-june-2025",
          title: 'Upcoming Talk: I will give a contributed talk at the Workshop on Theory...',
          description: "",
          section: "News",},{id: "news-paper-acceptance-our-work-on-mean-hamiltonian-minimization-has-been-accepted-at-ieee-conference-for-decision-and-control-cdc-2025",
          title: 'Paper Acceptance: Our work on Mean Hamiltonian Minimization has been accepted at IEEE...',
          description: "",
          section: "News",},{id: "news-upcoming-talk-i-will-give-a-lightning-round-talk-at-the-workshop-on-stochastic-planning-amp-amp-control-of-dynamical-systems-at-cdc-in-rio-de-janeiro-on-december-9th-2025",
          title: 'Upcoming Talk: I will give a lightning round talk at the Workshop on...',
          description: "",
          section: "News",},{id: "news-new-preprint-automated-discovery-of-laser-dicing-processes-with-bayesian-optimization-for-semiconductor-manufacturing",
          title: 'New preprint: Automated Discovery of Laser Dicing Processes with Bayesian Optimization for Semiconductor...',
          description: "",
          section: "News",},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/davidleeftink.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%76%69%64.%6C%65%65%66%74%69%6E%6B@%72%75.%6E%6C", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/DavidLeeftink", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/david-leeftink-a58599230/", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/https://orcid.org/0000-0002-9542-3334", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=OmpMYJcAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
