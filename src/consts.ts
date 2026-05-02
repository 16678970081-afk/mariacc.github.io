import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Maria\'s Blog',
  description:
    'astro-erudite is a opinionated, unstyled blogging template—built with Astro, Tailwind, and shadcn/ui.',
  href: 'https://mariallmm.github.io/',
  author: 'jktrn',
  locale: 'zh-Ch',
  featuredPostCount: 3,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/about',
    label: 'project',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/mariallmm',
    label: 'GitHub',
  },
  {
    href: '',
    // href: 'https://twitter.com/enscry',
    label: 'Twitter',
  },
  {
    href: '',
    // href: 'mailto:jason@enscribe.dev',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
