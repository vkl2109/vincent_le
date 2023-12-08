const featuredData = [
    {
        id: 0,
        name: 'Hyve',
        slogan: 'Fund Events With Friends',
        image: 'hyve',
        description: 'An event scheduling and payments automation platform: send invites, collect money upfront, and withdraw funds all in one place.',
        techStack: [
            {
                id: 0,
                name: 'React Native'
            },
            {
                id: 1,
                name: 'Firebase',
            },
            {
                id: 2,
                name: 'Expo Go',
            }
        ],
        links: [
            {
                id: 0,
                link: 'https://www.joinhyve.io/',
                name: 'joinhyve.io',
            },
            {
                id: 1,
                link: 'https://apps.apple.com/us/app/hyve-fund-events-with-friends/id6449512036',
                name: 'App Store'
            }
        ]
    },
    {
        id: 1,
        name: 'Turbo1031',
        slogan: 'Lightning Fast 1031 Exchanges',
        image: 'turbo1031',
        description: 'An automated 1031 exchange forms platform with secure user auth, Stripe payment processing, PDF auto-completion, and automated email reminders.',
        techStack: [
            {
                id: 0,
                name: 'React'
            },
            {
                id: 1,
                name: 'Django',
            },
            {
                id: 2,
                name: 'Ant Design',
            }
        ],
        links: [
            {
                id: 0,
                link: 'https://www.turbo1031exchange.com/',
                name: 'turbo1031exchange.com'
            },
        ]
    },
    {
        id: 2,
        name: 'FinSnap',
        slogan: 'Finance in a Snap',
        image: 'finsnap',
        description: 'A live chat mobile app promoting financial literacy utilizing a custom AI model, integrated with GPT-4.',
        techStack: [
            {
                id: 0,
                name: 'GPT-4'
            },
            {
                id: 1,
                name: 'React',
            },
            {
                id: 2,
                name: 'Firebase'
            }
        ],
        links: [
            {
                id: 0,
                link: 'https://finsnap.org/',
                name: 'finsnap.org'
            }
        ]
    }
]

const otherData = [
    {
        id: 3,
        name: 'Coding For Hermit Crabs',
        slogan: 'Beginner Friendly Coding',
        image: 'hermitcrab',
        description: 'An educational nonprofit platform introducing IT skills and training to the disenfranchised as a path to financial independence.',
        techStack: [
            {
                id: 0,
                name: 'Ruby on Rails'
            },
            {
                id: 1,
                name: 'React',
            },
            {
                id: 2,
                name: 'TypeScript'
            }
        ],
        links: [
            {
                id: 0,
                link: 'https://www.codingforhermitcrabs.org/',
                name: 'codingforhermitcrabs.org'
            }
        ]
    },
    {
        id: 4,
        name: 'The Bulletin',
        slogan: 'Virtual Campus Bulletin Board',
        image: 'bulletin',
        description: 'A dynamic platform aimed at enhancing university life and organization management by connecting students with campus organizations.',
        techStack: [
            {
                id: 0,
                name: 'Next.js'
            },
            {
                id: 1,
                name: 'MongoDB',
            },
            {
                id: 2,
                name: 'AWS'
            }
        ],
        links: [
            {
                id: 0,
                link: 'https://www.thebulletin.info/about',
                name: 'thebulletin.info'
            },
            {
                id: 1,
                link: 'https://apps.apple.com/us/app/the-bulletin-cu/id6447767280',
                name: 'App Store'
            }
        ]
    },
    {
        id: 5,
        name: 'NYC DOI',
        slogan: 'Department of Investigation',
        image: 'dept',
        description: 'AI chatbot trained on real time city govt web data providing users easy access to online city government resources.',
        techStack: [
            {
                id: 0,
                name: 'GPT-4'
            },
            {
                id: 1,
                name: 'React',
            },
            {
                id: 2,
                name: 'Azure'
            }
        ],
        links: [
            {
                id: 0,
                link: 'https://chat.nyc.gov/',
                name: 'chat.nyc.gov'
            },
        ]
    },
]

const totalData = [...featuredData, ...otherData]

const skillData = [
    {
        id: 0,
        category: 'Front End',
        list: [
            {
                id: 0,
                name: 'React'
            },
            {
                id: 1,
                name: 'React Native',
            },
            {
                id: 3,
                name: 'Next.js'
            },
        ]
    },
    {
        id: 1,
        category: 'Back End',
        list: [
            {
                id: 0,
                name: 'Django',
            },
            {
                id: 2,
                name: 'Flask'
            },
            {
                id: 3,
                name: 'Ruby on Rails'
            }
        ]
    },
    {
        id: 3,
        category: 'Databases',
        list: [
            {
                id: 0,
                name: 'MongoDB',
            },
            {
                id: 1,
                name: 'PostgreSQL'
            },
            {
                id: 2,
                name: 'Firebase',
            },
        ]
    },
    {
        id: 4,
        category: 'Cloud',
        list: [
            {
                id: 0,
                name: 'AWS'
            },
            {
                id: 1,
                name: 'Azure',
            },
            {
                id: 2,
                name: 'GCP'
            }
        ]
    }
]

const bio = `I'm Vincent Le, a passionate and versatile individual currently pursuing a Master's degree in Computer Science at Columbia University. My journey has been a unique blend of technology, creativity, and innovation.

During my undergraduate years at Columbia, I embarked on a double major adventure in Pre-Medicine and Music, fueled by my deep love for both healing and harmonies. This unconventional path led me to explore the fascinating realm of Music Therapy, where I researched the therapeutic applications of music.

After graduation, I took a captivating turn into clinical research at NYU, specializing in pain management. While medical school seemed like the natural progression, I pivoted towards web development, teaching myself the ropes and then honing my skills through online coding resources.

Currently, I'm enrolled in Columbia's Master's program in Computer Science, with a focus on Machine Learning. My experience spans from being a lead mobile app developer for Hyve, a social event scheduling app, to working as a freelance web developer for a real estate firm automating 1031 exchanges.

When I'm not coding, you'll find me lost in the world of music or exploring the intersection of technology and art. I'm thrilled to share my journey with you and engage in exciting projects that bridge the gap between creativity and computation.

Let's connect and create something amazing together!`

export {
    featuredData,
    totalData,
    skillData,
    bio
}