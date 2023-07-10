import { paths } from './routes'

export default [
  {
    id: 1,
    name: 'Home',
    path: paths.home,
    side: 'left',
    tooltip: null
  },
  {
    id: 2,
    name: 'SuperClass',
    path: paths.superClass,
    side: 'left',
    tooltip: null
  },
  {
    id: 3,
    name: 'Magic calendars',
    path: paths.magicCalendars,
    side: 'left',
    tooltip: 'Wow! Magic calendars are coming soon. Get ready.'
  },
  {
    id: 4,
    name: 'Blog',
    path: paths.blog,
    side: 'left',
    tooltip: 'Aha! Freebies galore over here. Keep checking.'
  },
  {
    id: 5,
    name: 'Meet the Team',
    path: paths.meetTheTeam,
    side: 'right',
    tooltip: null
  },
  {
    id: 6,
    name: 'Contact us',
    path: paths.contactUs,
    side: 'right',
    tooltip: 'Yay! Let\'s for sure chat soon. I\'d love to hear from you.'
  },
  {
    id: 7,
    name: 'Genius marketing services',
    path: paths.geniusMarketingServices,
    side: 'right',
    tooltip: 'Shh... Genius secrets await you. Stay tuned.'
  }
]