import type { ReactNode } from 'react';

type ContentBlock =
  | {
      type: 'paragraph' | 'heading' | 'subheading';
      text: string;
    }
  | {
      type: 'list';
      items: string[];
    }
  | {
      type: 'custom';
      content: ReactNode;
    };

export type BlogPost = {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  slug: string;
  content: ContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How Much Does It Cost to Move a Piano in Sydney?',
    category: 'Piano Moving Guides',
    date: 'May 19, 2026',
    readTime: '6 min read',
    author: 'Affordable Pianos Editorial Team',
    image: '/images/sydney-piano-movers-loading-upright-piano.webp',
    slug: 'how-much-does-it-cost-to-move-a-piano-in-sydney',
    content: [
      {
        type: 'paragraph',
        text: 'Moving a piano is one of those jobs that sounds easy right up until somebody slips a disc, dents a staircase, or accidentally turns a $15,000 instrument into expensive firewood.',
      },
      {
        type: 'paragraph',
        text: 'Whether you own a compact upright piano or a full-size grand piano, moving it safely takes far more than a ute and a couple of mates. In Sydney especially, things like narrow terraces, apartment lifts, steep driveways, and staircases can make piano transport surprisingly complex.',
      },
      {
        type: 'paragraph',
        text: 'So what does it actually cost to move a piano in Sydney in 2026?',
      },
      {
        type: 'paragraph',
        text: 'Here’s a realistic breakdown of what affects pricing, what to expect, and why specialist piano movers are usually worth every cent.',
      },
      {
        type: 'heading',
        text: 'What Actually Affects Piano Moving Prices?',
      },
      {
        type: 'paragraph',
        text: 'A straightforward ground-floor upright move across suburbs is obviously far cheaper than moving a grand piano out of a third-floor apartment in the Sydney CBD.',
      },
      {
        type: 'paragraph',
        text: 'So if every piano move is different, what factors usually affect the final cost?',
      },
      {
        type: 'subheading',
        text: '1. Stairs',
      },
      {
        type: 'paragraph',
        text: 'This is usually the biggest pricing factor.',
      },
      {
        type: 'paragraph',
        text: 'A single flight of narrow stairs can dramatically increase labour, equipment requirements, and risk. Older Sydney terrace houses are especially notorious for difficult piano access.',
      },
      {
        type: 'subheading',
        text: '2. Piano Size and Type',
      },
      {
        type: 'paragraph',
        text: 'A compact upright piano is relatively manageable compared to a grand piano that requires:',
      },
      {
        type: 'list',
        items: [
          'partial disassembly',
          'specialised skids',
          'careful wrapping',
          'multiple movers',
        ]
      },
      {
        type: 'paragraph',
        text: 'Larger instruments naturally take longer and carry more risk.',
      },
      {
        type: 'subheading',
        text: '3. Distance Between Locations',
      },
      {
        type: 'paragraph',
        text: 'Local Sydney suburb moves are generally simpler than long-distance regional transport. Traffic conditions, parking access, and loading restrictions can also affect the complexity of the move.',
      },
      {
        type: 'subheading',
        text: '4. Difficult Access',
      },
      {
        type: 'paragraph',
        text: 'Things like:',
      },
      {
        type: 'list',
        items: [
          'apartment lifts',
          'steep driveways',
          'narrow hallways',
          'spiral staircases',
          'balcony hoists',
        ]
      },
      {
        type: 'paragraph',
        text: '…can all increase the difficulty of a piano relocation.',
      },
      {
        type: 'paragraph',
        text: 'Some larger grand pianos may even require cranes or specialised lifting equipment in tighter access situations.',
      },
      {
        type: 'heading',
        text: 'Is It Worth Hiring Specialist Piano Movers?',
      },
      {
        type: 'paragraph',
        text: 'In most cases: absolutely.',
      },
      {
        type: 'paragraph',
        text: 'Professional piano movers use:',
      },
      {
        type: 'list',
        items: [
          'heavy-duty piano dollies',
          'skid boards',
          'lifting straps',
          'protective padding',
          'specialist transport methods',
        ]
      },
      {
        type: 'paragraph',
        text: 'More importantly, experienced movers understand how to protect the piano’s internal structure during transport.',
      },
      {
        type: 'custom',
        content: (
          <>
            For difficult moves involving stairs, apartments, or larger instruments, many Sydney piano owners choose specialist services such as {' '}
            <a
              href="https://goninans.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] underline"
            >
              Goninan's Piano Removals
            </a>
            , to reduce the risk of damage to both the instrument and the property.
          </>
        ),
      },
      {
        type: 'heading',
        text: 'Can Moving a Piano Damage It?',
      },
      {
        type: 'paragraph',
        text: 'Unfortunately, yes.',
      },
      {
        type: 'paragraph',
        text: 'Even a perfectly executed move can slightly affect tuning due to movement, vibration, and environmental changes. Poor handling can cause much worse issues, including:',
      },
      {
        type: 'list',
        items: [
          'cracked soundboards',
          'broken legs',
          'damaged keys',
          'cabinet scratches',
          'internal action problems',
        ]
      },
      {
        type: 'paragraph',
        text: 'That’s why quality preparation and proper equipment matter so much.',
      },
      {
        type: 'heading',
        text: 'What To Do Before Moving a Piano',
      },
      {
        type: 'paragraph',
        text: 'Before moving day:',
      },
      {
        type: 'list',
        items: [
          'measure all doorways and hallways',
          'clear access paths',
          'remove fragile nearby furniture',
          'protect timber flooring',
          'avoid moving during heavy rain where possible',
          'never attempt to lift a piano by its legs',
        ]
      },
      {
        type: 'paragraph',
        text: 'If you’re purchasing a second-hand piano, it’s also worth considering delivery and access requirements before buying — especially for larger upright and grand pianos.',
      },
      {
        type: 'custom',
        content: (
          <>
            At{' '}
            <a
              href="https://www.affordablepianos.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] underline"
            >
              Affordable Pianos
            </a>
            , free delivery is available across many areas of Sydney, helping customers protect their investment from the moment the piano leaves the warehouse.
          </>
        ),
      },
      {
        type: 'heading',
        text: 'Final Thoughts',
      },
      {
        type: 'paragraph',
        text: 'A piano is far more than just heavy furniture. It’s a precision instrument with thousands of moving parts, significant sentimental value, and often a serious financial investment.',
      },
      {
        type: 'paragraph',
        text: 'While piano moving costs in Sydney can vary depending on access, stairs, and piano size, professional handling is almost always worth it when compared to the potential cost of repairs or damage.',
      },
      {
        type: 'paragraph',
        text: 'Whether you’re purchasing a piano, relocating house, or moving a long-owned family instrument, careful transport planning can save a huge amount of stress later on.',
      },
    ],
  },
  {
    id: 2,
    title: 'How to Choose Between a Grand and an Upright Piano',
    category: 'Buying Guide',
    date: 'May 14, 2026',
    readTime: '8 min read',
    author: 'Affordable Pianos Editorial',
    image: '/images/grand-vs-upright-piano-buying-guide.webp',
    slug: 'grand-vs-upright-piano',
    content: [
      {
        type: 'paragraph',
        text: 'The decision between a grand and an upright piano is one of the most significant choices a pianist will make. Each offers a distinct playing experience, sound profile, and presence in your home. Understanding the fundamental differences will help you make a decision you will be happy with for decades.',
      },
      {
        type: 'heading',
        text: 'The Sound: Horizontal vs. Vertical',
      },
      {
        type: 'paragraph',
        text: 'The defining difference lies in the orientation of the strings and soundboard. In a grand piano, these elements lie horizontally, allowing gravity to assist the action mechanism. When you release a key, the hammer falls back naturally, enabling faster repetition and more responsive touch control.',
      },
      {
        type: 'paragraph',
        text: 'Upright pianos house their strings vertically, which means the action must work against gravity. Modern uprights have made enormous strides in action design, and for most home players, the difference in repetition speed is negligible. Where the gap becomes audible is in the sustain and tonal complexity — grands simply have more room to resonate.',
      },
      {
        type: 'heading',
        text: 'Space and Presence',
      },
      {
        type: 'paragraph',
        text: 'A grand piano is not just an instrument — it is a statement. Even a baby grand (around 5 feet) commands attention in a room. The lid, when raised, becomes an architectural element that shapes the space around it. If your home has a dedicated music room or an open-plan living area, a grand piano can be the centrepiece that ties the entire space together.',
      },
      {
        type: 'paragraph',
        text: 'Upright pianos, by contrast, sit against a wall and integrate more discreetly into your living space. They are ideal for apartments, smaller homes, or rooms where floor space is at a premium. A quality upright from a respected manufacturer can deliver a playing experience that rivals many grands.',
      },
      {
        type: 'heading',
        text: 'Budget Considerations',
      },
      {
        type: 'paragraph',
        text: 'Entry-level upright pianos start around $4,000, while a comparable baby grand begins closer to $18,000. The price gap reflects not just the larger soundboard and longer strings, but also the complexity of the action mechanism and the craftsmanship involved in building a horizontal instrument.',
      },
      {
        type: 'paragraph',
        text: 'That said, a premium upright — particularly from European manufacturers — can cost as much as an entry-level grand. The lesson here is simple: a well-built upright is vastly preferable to a poorly made grand. Always prioritise craftsmanship over size.',
      },
      {
        type: 'heading',
        text: 'Our Recommendation',
      },
      {
        type: 'paragraph',
        text: 'For serious students and professional musicians who play daily and have the space, a grand piano is the clear choice. The responsive action and rich tonal palette reward dedicated practice.',
      },
      {
        type: 'paragraph',
        text: 'For home players, hobbyists, and those in smaller spaces, a quality upright offers an exceptional playing experience at a more accessible price point. Visit our showroom to experience both side by side — nothing replaces the feeling of the keys under your fingers.',
      },
    ],
  },
];