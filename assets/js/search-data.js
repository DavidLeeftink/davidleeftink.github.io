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
            },},{id: "news-talk-i-gave-a-contributed-talk-at-the-workshop-on-theory-of-control-and-reinforcement-learning-at-cwi-amsterdam-on-indirect-methods-for-probabilistic-reinforcement-learning",
          title: 'Talk: I gave a contributed talk at the Workshop on Theory of Control...',
          description: "",
          section: "News",},{id: "news-paper-acceptance-our-work-on-mean-hamiltonian-minimization-has-been-accepted-at-ieee-conference-for-decision-and-control-cdc-2025",
          title: 'Paper Acceptance: Our work on Mean Hamiltonian Minimization has been accepted at IEEE...',
          description: "",
          section: "News",},{id: "news-talk-i-presented-on-probabilistic-pontryagin-s-minimum-principle-in-a-lightning-round-talk-at-the-workshop-on-stochastic-planning-amp-amp-control-of-dynamical-systems-at-cdc-in-rio-de-janeiro-photo",
          title: 'Talk: I presented on probabilistic Pontryagin’s minimum principle in a lightning round talk...',
          description: "",
          section: "News",},{id: "news-paper-accepted-our-recent-work-on-bayesian-optimization-for-semiconductor-manufacturing-has-been-accepted-for-ifac-s-control-engineering-practice",
          title: 'Paper accepted: Our recent work on Bayesian Optimization for Semiconductor Manufacturing has been...',
          description: "",
          section: "News",},{id: "news-winner-poster-prize-very-happy-to-have-received-the-power-award-for-the-natural-computing-and-neurotechnology-theme-at-the-donders-day-of-2026-i-presented-on-our-recent-preprint-on-neural-co-state-policies-photo",
          title: 'Winner Poster Prize: Very happy to have received the power award for the...',
          description: "",
          section: "News",},{id: "news-squiddmeet-seminar-i-visited-tu-delft-to-give-a-talk-at-the-local-seminar-organized-by-the-sequential-decision-making-group-thanks-for-having-me",
          title: 'SquidDMeet seminar: I visited TU Delft to give a talk at the local...',
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
