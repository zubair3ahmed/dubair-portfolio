/* @ds-bundle: {"format":3,"namespace":"SedonaDesignSystem_019e02","components":[],"sourceHashes":{"ui_kits/sedona-app-dark/app.jsx":"46c37d48d468","ui_kits/sedona-app-dark/pages-1.jsx":"133b592bc7a8","ui_kits/sedona-app-dark/pages-2.jsx":"234c15167a95","ui_kits/sedona-app-dark/primitives.jsx":"94ea080b5dcb","ui_kits/sedona-app-dark/shell.jsx":"33657a7bad0d","ui_kits/sedona-app/app.jsx":"efbefd4538db","ui_kits/sedona-app/pages-1.jsx":"92213e41ae37","ui_kits/sedona-app/pages-2.jsx":"a723959aacd3","ui_kits/sedona-app/primitives.jsx":"97d2ae8f3cb4","ui_kits/sedona-app/shell.jsx":"b2422ef384f4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SedonaDesignSystem_019e02 = window.SedonaDesignSystem_019e02 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/sedona-app-dark/app.jsx
try { (() => {
/* app.jsx — top-level shell + page router */
const {
  useState: useStateApp
} = React;
function App() {
  const [page, setPage] = useStateApp('inbox');
  const titles = {
    inbox: ['Inbox', 'All your activity in one feed'],
    contacts: ['Contacts', 'Directory · 84 entries'],
    calls: ['Calls', 'Connected via SIP'],
    chat: ['Chat', 'Channels and direct messages'],
    calendar: ['Calendar', 'Week of March 17'],
    reports: ['Reports', 'Coming soon'],
    voicemail: ['Voicemail', 'Coming soon'],
    workflows: ['Workflows', 'Coming soon']
  }[page] || [page, ''];
  let content;
  if (page === 'inbox') content = /*#__PURE__*/React.createElement(InboxPage, null);else if (page === 'contacts') content = /*#__PURE__*/React.createElement(ContactsPage, null);else if (page === 'calls') content = /*#__PURE__*/React.createElement(CallsPage, null);else if (page === 'chat') content = /*#__PURE__*/React.createElement(ChatPage, null);else if (page === 'calendar') content = /*#__PURE__*/React.createElement(CalendarPage, null);else content = /*#__PURE__*/React.createElement(Placeholder, {
    title: titles[0]
  });

  // Chat page provides its own header layout; others get the standard TopBar.
  const showTopBar = page !== 'chat';
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": `Sedona App · ${titles[0]}`,
    style: {
      display: 'flex',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      background: '#070912',
      fontFamily: 'Lato'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    page: page,
    setPage: setPage
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, showTopBar && /*#__PURE__*/React.createElement(TopBar, {
    title: titles[0],
    subtitle: titles[1]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      minHeight: 0
    }
  }, content)));
}
function Placeholder({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 48,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      textAlign: 'center',
      maxWidth: 420,
      padding: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 16,
      background: 'rgba(59,130,247,.18)',
      color: '#3B82F7',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 32,
    strokeWidth: 1.75
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 22,
      color: '#F2F4FA'
    }
  }, title, " surface"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 14,
      color: '#9098B0',
      marginTop: 8,
      lineHeight: 1.5
    }
  }, "This area is reserved in the kit. The five primary surfaces (Inbox, Contacts, Calls, Chat, Calendar) are fully built \u2014 explore those for the high-fidelity treatment.")));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sedona-app-dark/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sedona-app-dark/pages-1.jsx
try { (() => {
/* pages-1.jsx — Inbox dashboard + Contacts directory */
const {
  useState: useState1
} = React;

/* ───────── Inbox / Home dashboard ───────── */
function InboxPage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 28,
      color: '#F2F4FA',
      letterSpacing: '-.4px'
    }
  }, "Good morning, Maya."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 14,
      color: '#9098B0',
      marginTop: 4
    }
  }, "You have 3 calls scheduled, 12 unread messages, and 4 tasks due today.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    leadingIcon: "download"
  }, "Export"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: "plus"
  }, "New activity"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Kpi, {
    label: "Calls handled",
    value: "142",
    delta: "+18%",
    tone: "success",
    trend: "up"
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "Avg. response time",
    value: "2m 14s",
    delta: "\u221224s",
    tone: "success",
    trend: "down",
    footer: "vs last week"
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "Open conversations",
    value: "36",
    delta: "+4",
    tone: "warning",
    trend: "up"
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "CSAT this week",
    value: "94%",
    delta: "+1.2%",
    tone: "success",
    trend: "up"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: 16,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Recent activity",
    actions: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      active: true
    }, "All"), /*#__PURE__*/React.createElement(Chip, null, "Calls"), /*#__PURE__*/React.createElement(Chip, null, "Messages"), /*#__PURE__*/React.createElement(Chip, null, "Meetings"))
  }), /*#__PURE__*/React.createElement("div", null, ACTIVITY.map((a, i) => /*#__PURE__*/React.createElement(ActivityRow, {
    key: i,
    a: a,
    last: i === ACTIVITY.length - 1
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 16,
      color: '#F2F4FA'
    }
  }, "Today's schedule"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontSize: 12,
      color: '#7A8195'
    }
  }, "Tue, Mar 18")), SCHEDULE.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      padding: '10px 0',
      borderTop: i === 0 ? 'none' : '1px solid #1B1F35'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Roboto Mono',
      fontSize: 13,
      fontWeight: 500,
      color: '#F2F4FA'
    }
  }, s.time), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      color: '#7A8195'
    }
  }, s.dur)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 3,
      borderRadius: 2,
      background: s.color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: 13,
      color: '#F2F4FA'
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 12,
      color: '#9098B0',
      marginTop: 2
    }
  }, s.attendees))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 16,
      color: '#F2F4FA'
    }
  }, "Tasks"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontSize: 12,
      fontWeight: 700,
      color: '#3B82F7',
      cursor: 'pointer'
    }
  }, "View all")), TASKS.map((t, i) => /*#__PURE__*/React.createElement("label", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      padding: '8px 0',
      borderTop: i === 0 ? 'none' : '1px solid #1B1F35',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    defaultChecked: t.done,
    style: {
      marginTop: 3,
      accentColor: '#3B82F7'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      color: t.done ? '#5B6480' : '#F2F4FA',
      textDecoration: t.done ? 'line-through' : 'none'
    }
  }, t.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      color: '#7A8195',
      marginTop: 2
    }
  }, t.due)), t.priority && /*#__PURE__*/React.createElement(Badge, {
    tone: t.priority === 'high' ? 'danger' : 'warning'
  }, t.priority)))), /*#__PURE__*/React.createElement(Card, {
    style: {
      background: '#F2F4FA',
      color: '#0F1224',
      border: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      color: '#7CB1FF',
      letterSpacing: '.6px',
      textTransform: 'uppercase'
    }
  }, "Tip of the day"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: 15,
      marginTop: 6,
      lineHeight: 1.4
    }
  }, "Press ", /*#__PURE__*/React.createElement("kbd", {
    style: {
      fontFamily: 'Roboto Mono',
      fontSize: 11,
      padding: '2px 6px',
      background: 'rgba(255,255,255,.12)',
      borderRadius: 4,
      border: '1px solid rgba(255,255,255,.18)'
    }
  }, "\u2318 K"), " to jump anywhere \u2014 search contacts, dial a number, or start a chat from anywhere in Sedona.")))));
}
function Kpi({
  label,
  value,
  delta,
  tone,
  trend,
  footer
}) {
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 12,
      fontWeight: 700,
      color: '#9098B0',
      letterSpacing: '.25px'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 30,
      color: '#F2F4FA',
      letterSpacing: '-.5px'
    }
  }, value), /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, /*#__PURE__*/React.createElement(Icon, {
    name: trend === 'up' ? 'arrowUp' : 'arrowDown',
    size: 11,
    strokeWidth: 2.5
  }), delta)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      color: '#7A8195',
      marginTop: 6
    }
  }, footer || 'vs last 7 days'));
}
function CardHeader({
  title,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px',
      borderBottom: '1px solid #1B1F35'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 16,
      color: '#F2F4FA'
    }
  }, title), actions);
}
const ACTIVITY = [{
  kind: 'call',
  who: 'Priya Ramanathan',
  co: 'Helio Labs',
  summary: 'Inbound call · 14m · "Wants to upgrade to Enterprise tier"',
  time: '9:42 AM',
  tone: 'success',
  icon: 'phone'
}, {
  kind: 'chat',
  who: 'Customer Success',
  co: '#cs-frontline',
  summary: 'New escalation from Brightline — billing dispute, $4,820',
  time: '9:15 AM',
  tone: 'warning',
  icon: 'chat'
}, {
  kind: 'meeting',
  who: 'Quarterly review',
  co: 'with Wendell, Priya, Sam',
  summary: 'Calendar invite · Tomorrow 2:00 PM',
  time: '8:50 AM',
  tone: 'info',
  icon: 'calendar'
}, {
  kind: 'voicemail',
  who: 'Tom Becker',
  co: 'Northwind Co.',
  summary: 'Voicemail · 0:48 · transcript ready',
  time: 'Yesterday',
  tone: 'neutral',
  icon: 'voicemail'
}, {
  kind: 'call',
  who: 'Outbound · Lila Hsu',
  co: 'Mercer Holdings',
  summary: 'No answer · 2 attempts',
  time: 'Yesterday',
  tone: 'danger',
  icon: 'phone'
}, {
  kind: 'chat',
  who: 'Sam Patel',
  co: 'Direct message',
  summary: 'Sent the deck — let me know if anything\'s off',
  time: 'Yesterday',
  tone: 'neutral',
  icon: 'chat'
}];
function ActivityRow({
  a,
  last
}) {
  const tones = {
    success: {
      bg: 'rgba(52,224,143,.14)',
      fg: '#34E08F'
    },
    warning: {
      bg: '#0F12242E1',
      fg: '#FFA238'
    },
    info: {
      bg: 'rgba(59,130,247,.18)',
      fg: '#3B82F7'
    },
    danger: {
      bg: 'rgba(255,92,106,.16)',
      fg: '#FF5C6A'
    },
    neutral: {
      bg: '#1B1F35',
      fg: '#9098B0'
    }
  }[a.tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14,
      padding: '14px 20px',
      borderBottom: last ? 'none' : '1px solid #1B1F35',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = '#070912',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: tones.bg,
      color: tones.fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: 14,
      color: '#F2F4FA'
    }
  }, a.who), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      color: '#7A8195'
    }
  }, "\xB7 ", a.co)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      color: '#9098B0',
      marginTop: 2
    }
  }, a.summary)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 12,
      color: '#7A8195',
      flexShrink: 0,
      paddingTop: 2
    }
  }, a.time));
}
const SCHEDULE = [{
  time: '10:00',
  dur: '30m',
  title: '1:1 with Sam Patel',
  attendees: '2 attendees · Sedona huddle',
  color: '#3B82F7'
}, {
  time: '11:30',
  dur: '45m',
  title: 'Helio Labs — renewal',
  attendees: 'Priya R., Wendell M.',
  color: '#FFA238'
}, {
  time: '2:00',
  dur: '1h',
  title: 'Quarterly business review',
  attendees: '8 attendees · Conf. Aspen',
  color: '#20BA75'
}, {
  time: '4:30',
  dur: '15m',
  title: 'Hold for prep',
  attendees: 'Personal time',
  color: '#5B6480'
}];
const TASKS = [{
  label: 'Send proposal to Helio Labs',
  due: 'Due today · 5pm',
  priority: 'high'
}, {
  label: 'Approve Q1 expense reports',
  due: 'Due tomorrow',
  priority: 'med'
}, {
  label: 'Review onboarding doc v3',
  due: 'Due Thu',
  priority: null
}, {
  label: 'Reply to Mercer thread',
  due: 'Yesterday',
  done: true,
  priority: null
}];

/* ───────── Contacts directory ───────── */
const CONTACTS = [{
  name: 'Priya Ramanathan',
  title: 'VP Operations',
  co: 'Helio Labs',
  email: 'priya@helio.io',
  phone: '+1 (415) 555-0192',
  tags: ['VIP', 'Renewal'],
  lastTouch: 'Today',
  owner: 'MC',
  status: 'online'
}, {
  name: 'Wendell Marquez',
  title: 'Head of Customer Success',
  co: 'Helio Labs',
  email: 'w.marquez@helio.io',
  phone: '+1 (415) 555-0118',
  tags: ['Renewal'],
  lastTouch: '2h ago',
  owner: 'MC',
  status: 'online'
}, {
  name: 'Tom Becker',
  title: 'CFO',
  co: 'Northwind Co.',
  email: 'tom@northwind.com',
  phone: '+1 (212) 555-0144',
  tags: ['New lead'],
  lastTouch: 'Yesterday',
  owner: 'SP',
  status: 'away'
}, {
  name: 'Lila Hsu',
  title: 'Director, IT',
  co: 'Mercer Holdings',
  email: 'lila.hsu@mercer.co',
  phone: '+1 (646) 555-0132',
  tags: ['VIP'],
  lastTouch: '2d ago',
  owner: 'MC',
  status: 'offline'
}, {
  name: 'Brightline AP',
  title: 'Accounts Payable',
  co: 'Brightline Inc.',
  email: 'ap@brightline.com',
  phone: '+1 (303) 555-0181',
  tags: ['Billing', 'Hold'],
  lastTouch: '2d ago',
  owner: 'WT',
  status: 'dnd'
}, {
  name: 'Adaeze Okafor',
  title: 'Procurement Lead',
  co: 'Tessera Group',
  email: 'a.okafor@tessera.gr',
  phone: '+44 20 7946 0011',
  tags: ['Pilot'],
  lastTouch: '3d ago',
  owner: 'SP',
  status: 'online'
}, {
  name: 'Marco Della Vega',
  title: 'CTO',
  co: 'Vela Robotics',
  email: 'marco@velarobotics.io',
  phone: '+1 (415) 555-0177',
  tags: ['Champion'],
  lastTouch: '4d ago',
  owner: 'MC',
  status: 'offline'
}, {
  name: 'Hannah Greer',
  title: 'Operations Manager',
  co: 'Atelier 7',
  email: 'hannah@atelier7.studio',
  phone: '+1 (718) 555-0163',
  tags: [],
  lastTouch: '1w ago',
  owner: 'WT',
  status: 'offline'
}, {
  name: 'Yusuf Al-Khattab',
  title: 'Founder',
  co: 'Khattab & Sons',
  email: 'yusuf@kandsons.com',
  phone: '+971 4 555 0149',
  tags: ['New lead'],
  lastTouch: '1w ago',
  owner: 'SP',
  status: 'online'
}, {
  name: 'Camille Roux',
  title: 'Head of People',
  co: 'Maison Lumière',
  email: 'c.roux@lumiere.fr',
  phone: '+33 1 55 12 03 88',
  tags: ['VIP'],
  lastTouch: '2w ago',
  owner: 'MC',
  status: 'offline'
}];
function ContactsPage() {
  const [selected, setSelected] = useState1(0);
  const [query, setQuery] = useState1('');
  const [filter, setFilter] = useState1('All');
  const filtered = CONTACTS.filter(c => {
    if (filter === 'VIP' && !c.tags.includes('VIP')) return false;
    if (filter === 'My contacts' && c.owner !== 'MC') return false;
    if (filter === 'New leads' && !c.tags.includes('New lead')) return false;
    if (query && !(c.name + c.co + c.email).toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });
  const c = filtered[selected] || filtered[0] || CONTACTS[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 24,
      color: '#F2F4FA'
    }
  }, "Contacts"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      color: '#9098B0',
      marginTop: 2
    }
  }, filtered.length, " of ", CONTACTS.length, " contacts")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    leadingIcon: "download"
  }, "Export CSV"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    leadingIcon: "filter"
  }, "Filters"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: "plus"
  }, "Add contact"))), /*#__PURE__*/React.createElement(Card, {
    padded: false,
    style: {
      flex: 1,
      display: 'flex',
      overflow: 'hidden',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 520,
      borderRight: '1px solid #1B1F35',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      borderBottom: '1px solid #1B1F35'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    leadingIcon: "search",
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Search name, company, email\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, ['All', 'My contacts', 'VIP', 'New leads'].map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f,
    active: filter === f,
    onClick: () => setFilter(f)
  }, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(ContactsTableHeader, null), filtered.map((c, i) => /*#__PURE__*/React.createElement(ContactRow, {
    key: c.name,
    c: c,
    active: i === selected,
    onClick: () => setSelected(i)
  })))), /*#__PURE__*/React.createElement(ContactDetail, {
    c: c
  })));
}
function ContactsTableHeader() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 90px 80px',
      padding: '8px 16px',
      background: '#070912',
      borderBottom: '1px solid #1B1F35',
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      color: '#9098B0',
      letterSpacing: '.5px',
      textTransform: 'uppercase',
      position: 'sticky',
      top: 0,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, "Name / company"), /*#__PURE__*/React.createElement("div", null, "Last touch"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, "Owner"));
}
function ContactRow({
  c,
  active,
  onClick
}) {
  const ownerColor = {
    MC: '#3B82F7',
    SP: '#7B61FF',
    WT: '#FFA238'
  }[c.owner];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 90px 80px',
      alignItems: 'center',
      padding: '12px 16px',
      borderBottom: '1px solid #1B1F35',
      background: active ? 'rgba(59,130,247,.18)' : 'transparent',
      cursor: 'pointer',
      borderLeft: active ? '3px solid #3B82F7' : '3px solid transparent',
      paddingLeft: 13
    },
    onMouseEnter: e => {
      if (!active) e.currentTarget.style.background = '#070912';
    },
    onMouseLeave: e => {
      if (!active) e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: c.name,
    status: c.status
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: 14,
      color: '#F2F4FA',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, c.name), c.tags.includes('VIP') && /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 12,
    color: "#FFA238"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 12,
      color: '#9098B0',
      marginTop: 2
    }
  }, c.title, " \xB7 ", c.co))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 12,
      color: '#9098B0'
    }
  }, c.lastTouch), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: c.owner,
    size: 24,
    color: ownerColor
  })));
}
function ContactDetail({
  c
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 24px 16px',
      borderBottom: '1px solid #1B1F35'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: c.name,
    size: 64,
    status: c.status
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 22,
      color: '#F2F4FA',
      letterSpacing: '-.2px'
    }
  }, c.name), c.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: t === 'VIP' ? 'warning' : t === 'Hold' ? 'danger' : t === 'Billing' ? 'warning' : 'info'
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 14,
      color: '#9098B0',
      marginTop: 4
    }
  }, c.title, " at ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#F2F4FA',
      fontWeight: 700
    }
  }, c.co)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: "phone"
  }, "Call"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leadingIcon: "chat"
  }, "Message"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leadingIcon: "mail"
  }, "Email"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leadingIcon: "calendar"
  }, "Schedule"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "star"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "more"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(DetailField, {
    label: "Email",
    value: c.email,
    icon: "mail"
  }), /*#__PURE__*/React.createElement(DetailField, {
    label: "Phone",
    value: c.phone,
    icon: "phone"
  }), /*#__PURE__*/React.createElement(DetailField, {
    label: "Account owner",
    value: {
      MC: 'Maya Chen',
      SP: 'Sam Patel',
      WT: 'Wendell Tran'
    }[c.owner],
    icon: "users"
  }), /*#__PURE__*/React.createElement(DetailField, {
    label: "Last interaction",
    value: c.lastTouch,
    icon: "calendar"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      color: '#7A8195',
      letterSpacing: '.5px',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "Recent timeline"), [{
    icon: 'phone',
    tone: 'success',
    title: 'Inbound call answered',
    detail: '14m · "Discussed renewal terms, sending revised proposal."',
    t: 'Today, 9:42 AM'
  }, {
    icon: 'mail',
    tone: 'info',
    title: 'Sent proposal v3.pdf',
    detail: '2.4 MB · opened twice',
    t: 'Yesterday, 4:18 PM'
  }, {
    icon: 'chat',
    tone: 'neutral',
    title: 'Slack: #helio-account',
    detail: '"Looping in legal on the SOW edit."',
    t: 'Mon, 11:02 AM'
  }, {
    icon: 'calendar',
    tone: 'info',
    title: 'Meeting: Quarterly review',
    detail: '45m · 6 attendees · notes captured',
    t: 'Mar 11'
  }].map((e, i) => /*#__PURE__*/React.createElement(TimelineRow, {
    key: i,
    e: e
  }))));
}
function DetailField({
  label,
  value,
  icon
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      color: '#7A8195',
      letterSpacing: '.5px',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16,
    color: "#9098B0"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontSize: 14,
      color: '#F2F4FA'
    }
  }, value)));
}
function TimelineRow({
  e
}) {
  const tones = {
    success: {
      bg: 'rgba(52,224,143,.14)',
      fg: '#34E08F'
    },
    info: {
      bg: 'rgba(59,130,247,.18)',
      fg: '#3B82F7'
    },
    neutral: {
      bg: '#1B1F35',
      fg: '#9098B0'
    }
  }[e.tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      padding: '12px 0',
      borderTop: '1px solid #1B1F35'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: tones.bg,
      color: tones.fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: e.icon,
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      fontWeight: 700,
      color: '#F2F4FA'
    }
  }, e.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      color: '#9098B0',
      marginTop: 2
    }
  }, e.detail)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      color: '#7A8195',
      flexShrink: 0,
      paddingTop: 2
    }
  }, e.t));
}
Object.assign(window, {
  InboxPage,
  ContactsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sedona-app-dark/pages-1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sedona-app-dark/pages-2.jsx
try { (() => {
/* pages-2.jsx — Calls / dialer, Chat, Calendar */
const {
  useState: useState2
} = React;

/* ───────── Calls page ───────── */
const CALL_LOG = [{
  dir: 'in',
  who: 'Priya Ramanathan',
  co: 'Helio Labs',
  num: '+1 (415) 555-0192',
  time: 'Today, 9:42 AM',
  dur: '14m 02s',
  status: 'completed'
}, {
  dir: 'out',
  who: 'Lila Hsu',
  co: 'Mercer Holdings',
  num: '+1 (646) 555-0132',
  time: 'Today, 9:10 AM',
  dur: '—',
  status: 'no-answer'
}, {
  dir: 'in',
  who: 'Brightline AP',
  co: 'Brightline Inc.',
  num: '+1 (303) 555-0181',
  time: 'Today, 8:48 AM',
  dur: '6m 30s',
  status: 'completed'
}, {
  dir: 'in',
  who: 'Unknown caller',
  co: '',
  num: '+1 (702) 555-0418',
  time: 'Yesterday',
  dur: '0:48',
  status: 'voicemail'
}, {
  dir: 'out',
  who: 'Tom Becker',
  co: 'Northwind Co.',
  num: '+1 (212) 555-0144',
  time: 'Yesterday',
  dur: '22m 11s',
  status: 'completed'
}, {
  dir: 'out',
  who: 'Adaeze Okafor',
  co: 'Tessera Group',
  num: '+44 20 7946 0011',
  time: 'Mon, 4:02 PM',
  dur: '8m 47s',
  status: 'completed'
}, {
  dir: 'in',
  who: 'Marco Della Vega',
  co: 'Vela Robotics',
  num: '+1 (415) 555-0177',
  time: 'Mon, 11:31 AM',
  dur: '—',
  status: 'missed'
}];
function CallsPage() {
  const [tab, setTab] = useState2('All');
  const [dialed, setDialed] = useState2('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 24,
      color: '#F2F4FA'
    }
  }, "Calls"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      color: '#9098B0',
      marginTop: 2
    }
  }, "Connected: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#20BA75'
    }
  }, "SIP \xB7 sedona.cloud"), " \xB7 Ext. 4012")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    leadingIcon: "filter"
  }, "Filters"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: "phone"
  }, "New call"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 16,
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padded: false,
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      padding: '12px 16px',
      borderBottom: '1px solid #1B1F35'
    }
  }, ['All', 'Missed', 'Voicemail', 'Recorded'].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: {
      padding: '6px 12px',
      fontFamily: 'Lato',
      fontSize: 13,
      fontWeight: 700,
      background: tab === t ? 'rgba(59,130,247,.18)' : 'transparent',
      color: tab === t ? '#3B82F7' : '#9098B0',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '40px 1fr 200px 120px 100px 60px',
      padding: '8px 16px',
      background: '#070912',
      borderBottom: '1px solid #1B1F35',
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      color: '#9098B0',
      letterSpacing: '.5px',
      textTransform: 'uppercase',
      position: 'sticky',
      top: 0,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null, "Caller"), /*#__PURE__*/React.createElement("div", null, "Number"), /*#__PURE__*/React.createElement("div", null, "Time"), /*#__PURE__*/React.createElement("div", null, "Duration"), /*#__PURE__*/React.createElement("div", null)), CALL_LOG.map((c, i) => /*#__PURE__*/React.createElement(CallRow, {
    key: i,
    c: c
  })))), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 16,
      color: '#F2F4FA'
    }
  }, "Dialer"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#070912',
      border: '1px solid #1B1F35',
      borderRadius: 8,
      padding: '14px 16px',
      fontFamily: 'Roboto Mono',
      fontSize: 22,
      fontWeight: 500,
      color: dialed ? '#F2F4FA' : '#5B6480',
      minHeight: 30,
      letterSpacing: '.5px'
    }
  }, dialed || '+1 (___) ___-____'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 8
    }
  }, ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setDialed(d => d + k),
    style: {
      height: 56,
      background: '#0F1224',
      border: '1px solid #262B44',
      borderRadius: 8,
      fontFamily: 'Lato',
      fontSize: 22,
      fontWeight: 700,
      color: '#F2F4FA',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = '#070912',
    onMouseLeave: e => e.currentTarget.style.background = '#0F1224'
  }, k))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDialed(d => d.slice(0, -1)),
    style: {
      flex: 1,
      height: 48,
      background: '#1B1F35',
      color: '#9098B0',
      border: 'none',
      borderRadius: 8,
      fontFamily: 'Lato',
      fontSize: 14,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, "\u232B Delete"), /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 2,
      height: 48,
      background: '#20BA75',
      color: '#0F1224',
      border: 'none',
      borderRadius: 8,
      fontFamily: 'Lato',
      fontSize: 15,
      fontWeight: 700,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18,
    strokeWidth: 2.25
  }), " Call")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      paddingTop: 12,
      borderTop: '1px solid #1B1F35'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      color: '#7A8195',
      letterSpacing: '.5px',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "Recent"), [{
    n: 'Priya Ramanathan',
    t: '9:42 AM'
  }, {
    n: 'Lila Hsu',
    t: '9:10 AM'
  }, {
    n: 'Tom Becker',
    t: 'Yesterday'
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 0',
      borderTop: i === 0 ? 'none' : '1px solid #1B1F35'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: r.n,
    size: 28
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'Lato',
      fontSize: 13,
      color: '#F2F4FA'
    }
  }, r.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      color: '#7A8195'
    }
  }, r.t), /*#__PURE__*/React.createElement(IconButton, {
    icon: "phone",
    size: 28
  })))))));
}
function CallRow({
  c
}) {
  const dirIcon = c.dir === 'in' ? 'arrowDown' : 'arrowUp';
  const dirColor = c.status === 'missed' || c.status === 'no-answer' ? '#FF5C6A' : c.status === 'voicemail' ? '#FFA238' : '#20BA75';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '40px 1fr 200px 120px 100px 60px',
      alignItems: 'center',
      padding: '10px 16px',
      borderBottom: '1px solid #1B1F35',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = '#070912',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: dirIcon,
    size: 16,
    color: dirColor,
    strokeWidth: 2.25
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: c.who || '??',
    size: 28
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: 14,
      color: '#F2F4FA'
    }
  }, c.who, " ", c.status === 'missed' && /*#__PURE__*/React.createElement(Badge, {
    tone: "danger",
    style: {
      marginLeft: 6
    }
  }, "Missed"), c.status === 'voicemail' && /*#__PURE__*/React.createElement(Badge, {
    tone: "warning",
    style: {
      marginLeft: 6
    }
  }, "Voicemail"), c.status === 'no-answer' && /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    style: {
      marginLeft: 6
    }
  }, "No answer")), c.co && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 12,
      color: '#9098B0'
    }
  }, c.co))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Roboto Mono',
      fontSize: 13,
      color: '#9098B0'
    }
  }, c.num), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      color: '#9098B0'
    }
  }, c.time), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Roboto Mono',
      fontSize: 13,
      color: '#F2F4FA'
    }
  }, c.dur), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IconButton, {
    icon: "phone",
    size: 28
  })));
}

/* ───────── Chat page ───────── */
const THREADS = [{
  id: 0,
  kind: 'channel',
  name: 'cs-frontline',
  preview: 'Brightline escalation thread, billing dispute…',
  time: '9:15a',
  unread: 3,
  hash: true
}, {
  id: 1,
  kind: 'dm',
  name: 'Sam Patel',
  preview: 'Sent the deck — let me know if anything\'s off',
  time: '8:50a',
  unread: 0,
  status: 'online'
}, {
  id: 2,
  kind: 'dm',
  name: 'Wendell Tran',
  preview: 'Loop me in on the Helio call notes',
  time: 'Yest.',
  unread: 0,
  status: 'away'
}, {
  id: 3,
  kind: 'channel',
  name: 'helio-account',
  preview: 'Priya: "Looping in legal on the SOW edit."',
  time: 'Yest.',
  unread: 0,
  hash: true
}, {
  id: 4,
  kind: 'dm',
  name: 'Adaeze Okafor',
  preview: 'Thanks — calendar invite landed',
  time: 'Mon',
  unread: 0,
  status: 'offline'
}, {
  id: 5,
  kind: 'channel',
  name: 'announcements',
  preview: 'Tom: "All-hands moved to Friday 3pm"',
  time: 'Mon',
  unread: 0,
  hash: true
}];
const MESSAGES = [{
  who: 'Priya Ramanathan',
  t: '9:08 AM',
  body: 'Hey Maya — circling back on the renewal proposal. Wendell and I had a chance to review v2 last night.'
}, {
  who: 'Priya Ramanathan',
  t: '9:08 AM',
  body: 'Two things stood out: the ramp on Tier 3 and the SLA wording around scheduled maintenance.'
}, {
  who: 'me',
  t: '9:11 AM',
  body: 'Got it. We can absolutely soften the ramp — what timeline were you thinking?'
}, {
  who: 'me',
  t: '9:11 AM',
  body: 'And on SLA — we updated that template last quarter. Will pull the new clause and share.'
}, {
  who: 'Priya Ramanathan',
  t: '9:14 AM',
  body: 'Ramp over Q1 → Q2 → full Q3 would work. SLA cleanup will help unblock procurement on our side.'
}, {
  who: 'Priya Ramanathan',
  t: '9:15 AM',
  body: 'I attached our procurement\'s redlines for reference.',
  attachment: {
    name: 'procurement-redlines-v2.pdf',
    size: '1.4 MB'
  }
}, {
  who: 'me',
  t: '9:38 AM',
  body: 'Perfect — I\'ll have v3 over by EOD. Want to do a 15min sync at 11:30 to walk through?'
}];
function ChatPage() {
  const [active, setActive] = useState2(0);
  const [draft, setDraft] = useState2('');
  const t = THREADS[active];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      borderRight: '1px solid #262B44',
      display: 'flex',
      flexDirection: 'column',
      background: '#0F1224'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 18,
      color: '#F2F4FA'
    }
  }, "Chat"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "edit",
    size: 28,
    title: "New message"
  })), /*#__PURE__*/React.createElement(Input, {
    leadingIcon: "search",
    placeholder: "Search messages",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, THREADS.map((th, i) => /*#__PURE__*/React.createElement(ThreadItem, {
    key: th.id,
    th: th,
    active: i === active,
    onClick: () => setActive(i)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      background: '#070912'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      padding: '0 24px',
      flexShrink: 0,
      background: '#0F1224',
      borderBottom: '1px solid #262B44',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, t.hash ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: '#1B1F35',
      color: '#9098B0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 18
    }
  }, "#") : /*#__PURE__*/React.createElement(Avatar, {
    name: t.name,
    status: t.status
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 16,
      color: '#F2F4FA'
    }
  }, t.hash ? '#' : '', t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 12,
      color: '#9098B0'
    }
  }, t.kind === 'channel' ? '14 members · Customer success' : 'Online · Engineering')), /*#__PURE__*/React.createElement(IconButton, {
    icon: "phone",
    title: "Voice call"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "video",
    title: "Video call"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "pin",
    title: "Pinned"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "more"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      margin: '8px 0 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      color: '#7A8195',
      background: '#0F1224',
      padding: '4px 10px',
      borderRadius: 999,
      border: '1px solid #1B1F35'
    }
  }, "Today")), MESSAGES.map((m, i) => /*#__PURE__*/React.createElement(MessageBubble, {
    key: i,
    m: m,
    prev: MESSAGES[i - 1]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      background: '#0F1224',
      borderTop: '1px solid #262B44'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid #262B44',
      borderRadius: 8,
      padding: '8px 8px 8px 12px',
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8,
      background: '#0F1224'
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    placeholder: `Message ${t.hash ? '#' : ''}${t.name}…`,
    rows: 1,
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      resize: 'none',
      fontFamily: 'Lato',
      fontSize: 14,
      color: '#F2F4FA',
      padding: '8px 0',
      minHeight: 24
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "paperclip",
    size: 32
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "smile",
    size: 32
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "mic",
    size: 32
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    trailingIcon: "send",
    disabled: !draft.trim()
  }, "Send")))));
}
function ThreadItem({
  th,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      padding: '10px 16px',
      display: 'flex',
      gap: 10,
      cursor: 'pointer',
      background: active ? 'rgba(59,130,247,.18)' : 'transparent',
      borderLeft: active ? '3px solid #3B82F7' : '3px solid transparent',
      paddingLeft: active ? 13 : 13
    },
    onMouseEnter: e => {
      if (!active) e.currentTarget.style.background = '#070912';
    },
    onMouseLeave: e => {
      if (!active) e.currentTarget.style.background = 'transparent';
    }
  }, th.hash ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: '#1B1F35',
      color: '#9098B0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 16,
      flexShrink: 0
    }
  }, "#") : /*#__PURE__*/React.createElement(Avatar, {
    name: th.name,
    status: th.status
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontWeight: th.unread ? 900 : 700,
      fontSize: 13,
      color: '#F2F4FA',
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, th.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      color: '#7A8195'
    }
  }, th.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'Lato',
      fontSize: 12,
      color: th.unread ? '#F2F4FA' : '#9098B0',
      fontWeight: th.unread ? 700 : 400,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, th.preview), th.unread > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 18,
      height: 18,
      padding: '0 6px',
      background: '#3B82F7',
      color: '#0F1224',
      borderRadius: 999,
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, th.unread))));
}
function MessageBubble({
  m,
  prev
}) {
  const isMe = m.who === 'me';
  const stack = prev && prev.who === m.who;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isMe ? 'row-reverse' : 'row',
      gap: 10,
      marginTop: stack ? 2 : 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      flexShrink: 0,
      opacity: stack ? 0 : 1
    }
  }, !stack && /*#__PURE__*/React.createElement(Avatar, {
    name: isMe ? 'Maya Chen' : m.who,
    size: 32,
    color: isMe ? '#3B82F7' : undefined
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520,
      display: 'flex',
      flexDirection: 'column',
      alignItems: isMe ? 'flex-end' : 'flex-start'
    }
  }, !stack && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginBottom: 4,
      flexDirection: isMe ? 'row-reverse' : 'row'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: 13,
      color: '#F2F4FA'
    }
  }, isMe ? 'You' : m.who), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      color: '#7A8195'
    }
  }, m.t)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      borderRadius: isMe ? '12px 4px 12px 12px' : '4px 12px 12px 12px',
      background: isMe ? '#3B82F7' : '#0F1224',
      color: isMe ? '#0F1224' : '#F2F4FA',
      border: isMe ? 'none' : '1px solid #262B44',
      fontFamily: 'Lato',
      fontSize: 14,
      lineHeight: 1.45,
      boxShadow: '0 1px 2px rgba(34,38,72,0.04)'
    }
  }, m.body), m.attachment && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      padding: '10px 12px',
      background: '#0F1224',
      border: '1px solid #262B44',
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 6,
      background: 'rgba(255,92,106,.16)',
      color: '#FF5C6A',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 10
    }
  }, "PDF"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: 13,
      color: '#F2F4FA',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, m.attachment.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      color: '#7A8195'
    }
  }, m.attachment.size)), /*#__PURE__*/React.createElement(IconButton, {
    icon: "download",
    size: 28
  }))));
}

/* ───────── Calendar ───────── */
const DAYS = ['Mon 17', 'Tue 18', 'Wed 19', 'Thu 20', 'Fri 21', 'Sat 22', 'Sun 23'];
const HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const EVENTS = [{
  day: 0,
  start: 9,
  dur: 1,
  title: 'Team standup',
  tone: 'blue'
}, {
  day: 0,
  start: 13,
  dur: 1.5,
  title: 'Helio prep',
  tone: 'orange'
}, {
  day: 1,
  start: 10,
  dur: 0.5,
  title: '1:1 with Sam',
  tone: 'blue'
}, {
  day: 1,
  start: 11.5,
  dur: 0.75,
  title: 'Helio Labs renewal',
  tone: 'orange'
}, {
  day: 1,
  start: 14,
  dur: 1,
  title: 'QBR',
  tone: 'green',
  primary: true
}, {
  day: 1,
  start: 16.5,
  dur: 0.25,
  title: 'Hold',
  tone: 'gray'
}, {
  day: 2,
  start: 9,
  dur: 1,
  title: 'Brightline AP review',
  tone: 'red'
}, {
  day: 2,
  start: 13,
  dur: 2,
  title: 'Onboarding workshop',
  tone: 'purple'
}, {
  day: 3,
  start: 10.5,
  dur: 1.5,
  title: 'Helio v3 walkthrough',
  tone: 'orange'
}, {
  day: 3,
  start: 15,
  dur: 1,
  title: 'Engineering sync',
  tone: 'blue'
}, {
  day: 4,
  start: 9,
  dur: 0.5,
  title: 'Coffee w/ Wendell',
  tone: 'gray'
}, {
  day: 4,
  start: 11,
  dur: 1,
  title: 'Pipeline review',
  tone: 'green'
}, {
  day: 4,
  start: 14,
  dur: 1.5,
  title: 'Vela Robotics intro',
  tone: 'purple'
}];
const TONES = {
  blue: {
    bg: 'rgba(59,130,247,.18)',
    fg: '#3B82F7',
    stripe: '#3B82F7'
  },
  orange: {
    bg: '#0F12242E1',
    fg: '#FFA238',
    stripe: '#F47822'
  },
  green: {
    bg: 'rgba(52,224,143,.14)',
    fg: '#34E08F',
    stripe: '#20BA75'
  },
  red: {
    bg: 'rgba(255,92,106,.16)',
    fg: '#FF5C6A',
    stripe: '#FF5C6A'
  },
  purple: {
    bg: 'rgba(123,97,255,.18)',
    fg: '#B49DFF',
    stripe: '#7B61FF'
  },
  gray: {
    bg: '#1B1F35',
    fg: '#9098B0',
    stripe: '#5B6480'
  }
};
function CalendarPage() {
  const [view, setView] = useState2('Week');
  const slotH = 56;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 24,
      color: '#F2F4FA'
    }
  }, "March 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      color: '#9098B0',
      marginTop: 2
    }
  }, "Week 12 \xB7 13 events scheduled")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      border: '1px solid #262B44',
      borderRadius: 6,
      overflow: 'hidden'
    }
  }, ['Day', 'Week', 'Month'].map(v => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setView(v),
    style: {
      padding: '8px 14px',
      border: 'none',
      cursor: 'pointer',
      background: v === view ? '#3B82F7' : '#0F1224',
      color: v === view ? '#0F1224' : '#F2F4FA',
      fontFamily: 'Lato',
      fontSize: 13,
      fontWeight: 700
    }
  }, v))), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron",
    style: {
      transform: 'rotate(180deg)'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm"
  }, "Today"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 24,
      background: '#1B1F35',
      margin: '0 4px'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: "plus"
  }, "New event"))), /*#__PURE__*/React.createElement(Card, {
    padded: false,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `56px repeat(7, 1fr)`,
      borderBottom: '1px solid #1B1F35',
      background: '#0F1224'
    }
  }, /*#__PURE__*/React.createElement("div", null), DAYS.map((d, i) => {
    const [dow, num] = d.split(' ');
    const today = i === 1;
    return /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        padding: '12px 8px',
        textAlign: 'center',
        borderLeft: '1px solid #1B1F35'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Lato',
        fontSize: 11,
        fontWeight: 700,
        color: '#7A8195',
        letterSpacing: '.4px',
        textTransform: 'uppercase'
      }
    }, dow), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4,
        width: 32,
        height: 32,
        lineHeight: '32px',
        borderRadius: '50%',
        display: 'inline-block',
        background: today ? '#3B82F7' : 'transparent',
        color: today ? '#0F1224' : '#F2F4FA',
        fontFamily: 'Lato',
        fontWeight: 900,
        fontSize: 16
      }
    }, num));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `56px repeat(7, 1fr)`,
      position: 'relative'
    }
  }, HOURS.map((h, hi) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: slotH,
      padding: '4px 8px 0',
      textAlign: 'right',
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      color: '#7A8195',
      borderTop: hi === 0 ? 'none' : '1px solid #1B1F35'
    }
  }, h > 12 ? h - 12 : h, h >= 12 ? 'PM' : 'AM'), DAYS.map((_, di) => /*#__PURE__*/React.createElement("div", {
    key: di,
    style: {
      height: slotH,
      borderLeft: '1px solid #1B1F35',
      borderTop: hi === 0 ? 'none' : '1px solid #1B1F35',
      background: di === 1 ? 'rgba(59,130,247,0.07)' : 'transparent'
    }
  })))), EVENTS.map((e, i) => {
    const tone = TONES[e.tone];
    const top = (e.start - HOURS[0]) * slotH;
    const height = e.dur * slotH - 4;
    const colWidth = `calc((100% - 56px) / 7)`;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'absolute',
        top: top + 2,
        left: `calc(56px + ${e.day} * ${colWidth} + 4px)`,
        width: `calc(${colWidth} - 8px)`,
        height,
        background: tone.bg,
        color: tone.fg,
        borderRadius: 6,
        padding: '6px 8px',
        borderLeft: `3px solid ${tone.stripe}`,
        fontFamily: 'Lato',
        fontSize: 12,
        fontWeight: 700,
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: e.primary ? '0 4px 12px rgba(0,0,0,.65)' : 'none',
        transition: 'transform 150ms'
      },
      onMouseEnter: e2 => e2.currentTarget.style.transform = 'translateY(-1px)',
      onMouseLeave: e2 => e2.currentTarget.style.transform = 'translateY(0)'
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, e.title), e.dur > 0.5 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Roboto Mono',
        fontSize: 10,
        fontWeight: 500,
        opacity: .85,
        marginTop: 2
      }
    }, fmtTime(e.start), "\u2013", fmtTime(e.start + e.dur)));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: (10.7 - HOURS[0]) * slotH,
      left: `calc(56px + 1 * (100% - 56px) / 7)`,
      width: `calc((100% - 56px) / 7)`,
      height: 2,
      background: '#FF5C6A',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -5,
      top: -4,
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: '#FF5C6A'
    }
  }))))));
}
function fmtTime(h) {
  const hr = Math.floor(h);
  const m = Math.round((h - hr) * 60);
  const ap = hr >= 12 ? 'p' : 'a';
  const dh = hr > 12 ? hr - 12 : hr;
  return `${dh}:${String(m).padStart(2, '0')}${ap}`;
}
Object.assign(window, {
  CallsPage,
  ChatPage,
  CalendarPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sedona-app-dark/pages-2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sedona-app-dark/primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* primitives.jsx — Sedona reusable UI atoms.
   Globals exposed at end. Loaded after React + Babel.
*/

const {
  useState,
  useRef,
  useEffect
} = React;

/* ───────── Icon (Lucide-style inline SVGs) ───────── */
const ICONS = {
  home: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10',
  inbox: 'M22 12h-6l-2 3h-4l-2-3H2M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2|9,7,4,4|M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z',
  chat: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  calendar: 'M16 2v4M8 2v4M3 10h18|RECT|3,4,18,18,2',
  search: 'CIRCLE|11,11,7|m21 21-4.3-4.3',
  bell: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0',
  settings: 'CIRCLE|12,12,3|M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4',
  plus: 'M12 5v14M5 12h14',
  more: 'CIRCLE|12,12,1|CIRCLE|19,12,1|CIRCLE|5,12,1',
  chevron: 'm9 18 6-6-6-6',
  chevronDown: 'm6 9 6 6 6-6',
  check: 'M20 6 9 17l-5-5',
  x: 'M18 6 6 18M6 6l12 12',
  star: 'm12 2 3.09 6.26 6.91 1.01-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z',
  filter: 'M22 3H2l8 9.46V19l4 2v-8.54z',
  download: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4|M7 10l5 5 5-5|M12 15V3',
  mail: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z|m22 6-10 7L2 6',
  send: 'M22 2 11 13|M22 2l-7 20-4-9-9-4z',
  paperclip: 'm21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48',
  smile: 'CIRCLE|12,12,10|M8 14s1.5 2 4 2 4-2 4-2|M9 9h.01|M15 9h.01',
  mic: 'RECT|9,2,6,12,3|M19 10v2a7 7 0 0 1-14 0v-2|M12 19v3',
  video: 'M23 7l-7 5 7 5z|RECT|1,5,15,14,2',
  pin: 'M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2z',
  arrowUp: 'M12 19V5|m5 12 7-7 7 7',
  arrowDown: 'M12 5v14|m19 12-7 7-7-7',
  trash: 'M3 6h18|M8 6v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6m3 0V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2',
  edit: 'M12 20h9|M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4z',
  building: 'RECT|4,2,16,20,2|M9 22v-4h6v4|M8 6h.01|M16 6h.01|M12 6h.01|M12 10h.01|M12 14h.01|M16 10h.01|M16 14h.01|M8 10h.01|M8 14h.01',
  voicemail: 'CIRCLE|6,11,4|CIRCLE|18,11,4|M6 15h12',
  pieChart: 'M21.21 15.89A10 10 0 1 1 8 2.83|M22 12A10 10 0 0 0 12 2v10z',
  zap: 'M13 2 3 14h9l-1 8 10-12h-9z'
};
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 1.75,
  style
}) {
  const d = ICONS[name];
  if (!d) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: size,
      height: size
    }
  });
  // Tokenized syntax: paths separated by |, with CIRCLE|cx,cy,r and RECT|x,y,w,h,rx prefixes
  const parts = d.split('|');
  const els = [];
  let i = 0;
  while (i < parts.length) {
    const tok = parts[i];
    if (tok === 'CIRCLE') {
      const [cx, cy, r] = parts[i + 1].split(',').map(Number);
      els.push(/*#__PURE__*/React.createElement("circle", {
        key: i,
        cx: cx,
        cy: cy,
        r: r
      }));
      i += 2;
    } else if (tok === 'RECT') {
      const [x, y, w, h, rx] = parts[i + 1].split(',').map(Number);
      els.push(/*#__PURE__*/React.createElement("rect", {
        key: i,
        x: x,
        y: y,
        width: w,
        height: h,
        rx: rx || 0
      }));
      i += 2;
    } else {
      els.push(/*#__PURE__*/React.createElement("path", {
        key: i,
        d: tok
      }));
      i += 1;
    }
  }
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, els);
}

/* ───────── Button ───────── */
function Button({
  variant = 'secondary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  children,
  onClick,
  disabled,
  style
}) {
  const sizes = {
    sm: {
      h: 32,
      px: 12,
      fs: 13
    },
    md: {
      h: 40,
      px: 16,
      fs: 14
    },
    lg: {
      h: 48,
      px: 20,
      fs: 15
    }
  }[size];
  const variants = {
    primary: {
      bg: '#3B82F7',
      bgH: '#1F4FE0',
      fg: '#0F1224'
    },
    secondary: {
      bg: '#1B1F35',
      bgH: '#262B44',
      fg: '#F2F4FA'
    },
    ghost: {
      bg: 'transparent',
      bgH: 'rgba(59,130,247,.18)',
      fg: '#3B82F7'
    },
    danger: {
      bg: '#FF5C6A',
      bgH: '#B82A38',
      fg: '#0F1224'
    },
    outline: {
      bg: '#0F1224',
      bgH: '#070912',
      fg: '#F2F4FA',
      border: '1px solid #262B44'
    }
  }[variant];
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      height: sizes.h,
      padding: `0 ${sizes.px}px`,
      background: disabled ? '#1B1F35' : hover ? variants.bgH : variants.bg,
      color: disabled ? '#5B6480' : variants.fg,
      border: variants.border || 'none',
      borderRadius: 4,
      fontFamily: 'Lato',
      fontSize: sizes.fs,
      fontWeight: 700,
      letterSpacing: '.25px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background 150ms',
      ...style
    }
  }, leadingIcon && /*#__PURE__*/React.createElement(Icon, {
    name: leadingIcon,
    size: 16,
    strokeWidth: 2
  }), children, trailingIcon && /*#__PURE__*/React.createElement(Icon, {
    name: trailingIcon,
    size: 16,
    strokeWidth: 2
  }));
}

/* ───────── IconButton ───────── */
function IconButton({
  icon,
  size = 36,
  onClick,
  active,
  style,
  title
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    title: title,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      background: active ? 'rgba(59,130,247,.18)' : hover ? '#070912' : 'transparent',
      color: active ? '#3B82F7' : '#9098B0',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background 150ms',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    strokeWidth: 1.75
  }));
}

/* ───────── Input ───────── */
function Input({
  leadingIcon,
  value,
  onChange,
  placeholder,
  type = 'text',
  style,
  size = 'md'
}) {
  const [focused, setFocused] = useState(false);
  const h = size === 'sm' ? 32 : 40;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 10,
      top: (h - 18) / 2,
      color: '#7A8195'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: leadingIcon,
    size: 18,
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value || '',
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      height: h,
      boxSizing: 'border-box',
      padding: leadingIcon ? '0 12px 0 36px' : '0 12px',
      fontFamily: 'Lato',
      fontSize: 14,
      color: '#F2F4FA',
      background: '#0F1224',
      border: `1px solid ${focused ? '#3B82F7' : '#262B44'}`,
      borderRadius: 4,
      outline: 'none',
      boxShadow: focused ? '0 0 0 2px rgba(59,130,247,.3)' : 'none',
      transition: 'all 150ms'
    }
  }));
}

/* ───────── Avatar ───────── */
const AVATAR_COLORS = ['#3B82F7', '#20BA75', '#FFA238', '#E8178A', '#7B61FF', '#00A680', '#F47822'];
function Avatar({
  name = '??',
  size = 32,
  status,
  color,
  style
}) {
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  const bg = color || AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
  const fs = size <= 24 ? 10 : size <= 32 ? 12 : size <= 40 ? 14 : 18;
  const dot = size <= 32 ? 8 : 10;
  const statusColor = {
    online: '#20BA75',
    away: '#FF9325',
    dnd: '#FF5C6A',
    offline: '#5B6480'
  }[status];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: bg,
      color: '#0F1224',
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: fs,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, initials), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -1,
      bottom: -1,
      width: dot,
      height: dot,
      borderRadius: '50%',
      background: statusColor,
      border: '2px solid #0F1224'
    }
  }));
}

/* ───────── Badge / Chip ───────── */
function Badge({
  children,
  tone = 'neutral',
  dot,
  style
}) {
  const tones = {
    neutral: {
      bg: '#1B1F35',
      fg: '#F2F4FA'
    },
    info: {
      bg: 'rgba(59,130,247,.18)',
      fg: '#3B82F7'
    },
    success: {
      bg: 'rgba(52,224,143,.14)',
      fg: '#34E08F'
    },
    warning: {
      bg: '#0F12242E1',
      fg: '#FFA238'
    },
    danger: {
      bg: 'rgba(255,92,106,.16)',
      fg: '#FF5C6A'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '2px 8px',
      borderRadius: 999,
      fontFamily: 'Lato',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.15px',
      background: tones.bg,
      color: tones.fg,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: 'currentColor'
    }
  }), children);
}

/* ───────── Card ───────── */
function Card({
  children,
  style,
  padded = true,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: '#0F1224',
      border: '1px solid #262B44',
      borderRadius: 8,
      boxShadow: '0 1px 2px rgba(0,0,0,0.5)',
      padding: padded ? 20 : 0,
      ...style
    }
  }), children);
}

/* ───────── Menu (popover) ───────── */
function Menu({
  trigger,
  items,
  align = 'left'
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(o => !o)
  }, trigger), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 4px)',
      [align]: 0,
      minWidth: 200,
      background: '#0F1224',
      border: '1px solid #262B44',
      borderRadius: 8,
      boxShadow: '0 4px 12px rgba(0,0,0,.65)',
      padding: 4,
      zIndex: 50
    }
  }, items.map((it, i) => it === '-' ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 1,
      background: '#1B1F35',
      margin: '4px 0'
    }
  }) : /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => {
      it.onClick?.();
      setOpen(false);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      padding: '8px 10px',
      border: 'none',
      background: 'transparent',
      fontFamily: 'Lato',
      fontSize: 13,
      color: it.danger ? '#FF5C6A' : '#F2F4FA',
      borderRadius: 6,
      cursor: 'pointer',
      textAlign: 'left'
    },
    onMouseEnter: e => e.currentTarget.style.background = '#070912',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, it.icon && /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 16
  }), it.label))));
}

/* ───────── Chip (filter) ───────── */
function Chip({
  children,
  active,
  onClick,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      borderRadius: 999,
      border: `1px solid ${active ? '#3B82F7' : '#262B44'}`,
      background: active ? 'rgba(59,130,247,.18)' : '#0F1224',
      color: active ? '#3B82F7' : '#F2F4FA',
      fontFamily: 'Lato',
      fontSize: 13,
      cursor: 'pointer'
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      color: '#7A8195',
      fontSize: 11
    }
  }, "\xD7"));
}
Object.assign(window, {
  Icon,
  Button,
  IconButton,
  Input,
  Avatar,
  Badge,
  Card,
  Menu,
  Chip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sedona-app-dark/primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sedona-app-dark/shell.jsx
try { (() => {
/* shell.jsx — Sidebar, TopBar, and main App shell */
const {
  useState: useStateShell
} = React;

/* ───────── Sidebar ───────── */
const NAV_ITEMS = [{
  id: 'inbox',
  label: 'Inbox',
  icon: 'inbox',
  badge: 12
}, {
  id: 'contacts',
  label: 'Contacts',
  icon: 'users'
}, {
  id: 'calls',
  label: 'Calls',
  icon: 'phone',
  badge: 3
}, {
  id: 'chat',
  label: 'Chat',
  icon: 'chat',
  badge: '•',
  badgeTone: 'info'
}, {
  id: 'calendar',
  label: 'Calendar',
  icon: 'calendar'
}];
const SECONDARY_NAV = [{
  id: 'reports',
  label: 'Reports',
  icon: 'pieChart'
}, {
  id: 'voicemail',
  label: 'Voicemail',
  icon: 'voicemail'
}, {
  id: 'workflows',
  label: 'Workflows',
  icon: 'zap'
}];
function Sidebar({
  page,
  setPage
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      flexShrink: 0,
      background: '#0F1224',
      borderRight: '1px solid #262B44',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      borderBottom: '1px solid #1B1F35'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: '#3B82F7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#0F1224',
      fontFamily: 'Mona Sans',
      fontWeight: 900,
      fontSize: 16
    }
  }, "S"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Mona Sans',
      fontWeight: 900,
      fontSize: 18,
      color: '#F2F4FA',
      letterSpacing: '-.3px'
    }
  }, "Sedona")), /*#__PURE__*/React.createElement("button", {
    style: {
      margin: 12,
      padding: '10px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: '#070912',
      border: '1px solid #1B1F35',
      borderRadius: 8,
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 6,
      background: '#FFA238',
      color: '#0F1224',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 12
    }
  }, "NX"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      fontWeight: 700,
      color: '#F2F4FA'
    }
  }, "Nextiva HQ"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      color: '#7A8195'
    }
  }, "Pro \xB7 84 seats")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronDown",
    size: 14,
    color: "#7A8195"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: '4px 8px',
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(SidebarSection, {
    title: "Workspace"
  }), NAV_ITEMS.map(it => /*#__PURE__*/React.createElement(SidebarItem, {
    key: it.id,
    item: it,
    active: page === it.id,
    onClick: () => setPage(it.id)
  })), /*#__PURE__*/React.createElement(SidebarSection, {
    title: "Insights"
  }), SECONDARY_NAV.map(it => /*#__PURE__*/React.createElement(SidebarItem, {
    key: it.id,
    item: it,
    active: page === it.id,
    onClick: () => setPage(it.id)
  })), /*#__PURE__*/React.createElement(SidebarSection, {
    title: "Spaces"
  }), [{
    label: 'Account team',
    color: '#3B82F7'
  }, {
    label: 'Customer success',
    color: '#20BA75'
  }, {
    label: 'Engineering #ops',
    color: '#7B61FF'
  }, {
    label: 'Onboarding 2026',
    color: '#F47822'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      padding: '7px 10px 7px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      borderRadius: 6,
      fontFamily: 'Lato',
      fontSize: 13,
      color: '#C5C9DD',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = '#070912',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: s.color
    }
  }), s.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid #1B1F35',
      padding: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Maya Chen",
    status: "online",
    size: 32,
    color: "#3B82F7"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      fontWeight: 700,
      color: '#F2F4FA'
    }
  }, "Maya Chen"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      color: '#20BA75'
    }
  }, "Available")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "settings",
    size: 32
  })));
}
function SidebarSection({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 12px 6px',
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      color: '#7A8195',
      letterSpacing: '.6px',
      textTransform: 'uppercase'
    }
  }, title);
}
function SidebarItem({
  item,
  active,
  onClick
}) {
  const [hover, setHover] = useStateShell(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: '100%',
      height: 36,
      padding: '0 10px 0 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: active ? 'rgba(59,130,247,.18)' : hover ? '#070912' : 'transparent',
      color: active ? '#3B82F7' : '#C5C9DD',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontFamily: 'Lato',
      fontSize: 14,
      fontWeight: active ? 700 : 500,
      textAlign: 'left',
      position: 'relative'
    }
  }, active && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -8,
      top: 6,
      bottom: 6,
      width: 3,
      background: '#3B82F7',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: item.icon,
    size: 18,
    strokeWidth: active ? 2 : 1.75
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, item.label), item.badge !== undefined && (item.badge === '•' ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: '#20BA75'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 20,
      height: 18,
      padding: '0 6px',
      background: active ? '#3B82F7' : '#1B1F35',
      color: active ? '#0F1224' : '#9098B0',
      borderRadius: 999,
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, item.badge)));
}

/* ───────── TopBar ───────── */
function TopBar({
  title,
  subtitle,
  actions
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      flexShrink: 0,
      padding: '0 24px',
      background: '#0F1224',
      borderBottom: '1px solid #262B44',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 20,
      color: '#F2F4FA',
      letterSpacing: '-.2px'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 12,
      color: '#7A8195',
      marginTop: 1
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 480,
      marginLeft: 24
    }
  }, /*#__PURE__*/React.createElement(Input, {
    leadingIcon: "search",
    placeholder: "Search contacts, calls, messages\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), actions, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    title: "Notifications"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 28,
      background: '#1B1F35'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 4px 0 8px',
      border: '1px solid #262B44',
      borderRadius: 999,
      height: 36
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: '#20BA75'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      fontWeight: 700,
      color: '#F2F4FA'
    }
  }, "Available"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronDown",
    size: 14,
    color: "#7A8195"
  })));
}
Object.assign(window, {
  Sidebar,
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sedona-app-dark/shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sedona-app/app.jsx
try { (() => {
/* app.jsx — top-level shell + page router */
const {
  useState: useStateApp
} = React;
function App() {
  const [page, setPage] = useStateApp('inbox');
  const titles = {
    inbox: ['Inbox', 'All your activity in one feed'],
    contacts: ['Contacts', 'Directory · 84 entries'],
    calls: ['Calls', 'Connected via SIP'],
    chat: ['Chat', 'Channels and direct messages'],
    calendar: ['Calendar', 'Week of March 17'],
    reports: ['Reports', 'Coming soon'],
    voicemail: ['Voicemail', 'Coming soon'],
    workflows: ['Workflows', 'Coming soon']
  }[page] || [page, ''];
  let content;
  if (page === 'inbox') content = /*#__PURE__*/React.createElement(InboxPage, null);else if (page === 'contacts') content = /*#__PURE__*/React.createElement(ContactsPage, null);else if (page === 'calls') content = /*#__PURE__*/React.createElement(CallsPage, null);else if (page === 'chat') content = /*#__PURE__*/React.createElement(ChatPage, null);else if (page === 'calendar') content = /*#__PURE__*/React.createElement(CalendarPage, null);else content = /*#__PURE__*/React.createElement(Placeholder, {
    title: titles[0]
  });

  // Chat page provides its own header layout; others get the standard TopBar.
  const showTopBar = page !== 'chat';
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": `Sedona App · ${titles[0]}`,
    style: {
      display: 'flex',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      background: '#F7F8FA',
      fontFamily: 'Lato'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    page: page,
    setPage: setPage
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, showTopBar && /*#__PURE__*/React.createElement(TopBar, {
    title: titles[0],
    subtitle: titles[1]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      minHeight: 0
    }
  }, content)));
}
function Placeholder({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 48,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      textAlign: 'center',
      maxWidth: 420,
      padding: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 16,
      background: '#E2F2FF',
      color: '#005FEC',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 32,
    strokeWidth: 1.75
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 22,
      color: '#0B1029'
    }
  }, title, " surface"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 14,
      color: '#54687F',
      marginTop: 8,
      lineHeight: 1.5
    }
  }, "This area is reserved in the kit. The five primary surfaces (Inbox, Contacts, Calls, Chat, Calendar) are fully built \u2014 explore those for the high-fidelity treatment.")));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sedona-app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sedona-app/pages-1.jsx
try { (() => {
/* pages-1.jsx — Inbox dashboard + Contacts directory */
const {
  useState: useState1
} = React;

/* ───────── Inbox / Home dashboard ───────── */
function InboxPage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 28,
      color: '#0B1029',
      letterSpacing: '-.4px'
    }
  }, "Good morning, Maya."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 14,
      color: '#54687F',
      marginTop: 4
    }
  }, "You have 3 calls scheduled, 12 unread messages, and 4 tasks due today.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    leadingIcon: "download"
  }, "Export"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: "plus"
  }, "New activity"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Kpi, {
    label: "Calls handled",
    value: "142",
    delta: "+18%",
    tone: "success",
    trend: "up"
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "Avg. response time",
    value: "2m 14s",
    delta: "\u221224s",
    tone: "success",
    trend: "down",
    footer: "vs last week"
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "Open conversations",
    value: "36",
    delta: "+4",
    tone: "warning",
    trend: "up"
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "CSAT this week",
    value: "94%",
    delta: "+1.2%",
    tone: "success",
    trend: "up"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: 16,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Recent activity",
    actions: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      active: true
    }, "All"), /*#__PURE__*/React.createElement(Chip, null, "Calls"), /*#__PURE__*/React.createElement(Chip, null, "Messages"), /*#__PURE__*/React.createElement(Chip, null, "Meetings"))
  }), /*#__PURE__*/React.createElement("div", null, ACTIVITY.map((a, i) => /*#__PURE__*/React.createElement(ActivityRow, {
    key: i,
    a: a,
    last: i === ACTIVITY.length - 1
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 16,
      color: '#0B1029'
    }
  }, "Today's schedule"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontSize: 12,
      color: '#7A7D8C'
    }
  }, "Tue, Mar 18")), SCHEDULE.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      padding: '10px 0',
      borderTop: i === 0 ? 'none' : '1px solid #EAEBEF'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Roboto Mono',
      fontSize: 13,
      fontWeight: 500,
      color: '#0B1029'
    }
  }, s.time), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      color: '#7A7D8C'
    }
  }, s.dur)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 3,
      borderRadius: 2,
      background: s.color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: 13,
      color: '#0B1029'
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 12,
      color: '#54687F',
      marginTop: 2
    }
  }, s.attendees))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 16,
      color: '#0B1029'
    }
  }, "Tasks"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontSize: 12,
      fontWeight: 700,
      color: '#005FEC',
      cursor: 'pointer'
    }
  }, "View all")), TASKS.map((t, i) => /*#__PURE__*/React.createElement("label", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      padding: '8px 0',
      borderTop: i === 0 ? 'none' : '1px solid #EAEBEF',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    defaultChecked: t.done,
    style: {
      marginTop: 3,
      accentColor: '#005FEC'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      color: t.done ? '#A9B3BE' : '#0B1029',
      textDecoration: t.done ? 'line-through' : 'none'
    }
  }, t.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      color: '#7A7D8C',
      marginTop: 2
    }
  }, t.due)), t.priority && /*#__PURE__*/React.createElement(Badge, {
    tone: t.priority === 'high' ? 'danger' : 'warning'
  }, t.priority)))), /*#__PURE__*/React.createElement(Card, {
    style: {
      background: '#0B1029',
      color: '#fff',
      border: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      color: '#87CBFF',
      letterSpacing: '.6px',
      textTransform: 'uppercase'
    }
  }, "Tip of the day"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: 15,
      marginTop: 6,
      lineHeight: 1.4
    }
  }, "Press ", /*#__PURE__*/React.createElement("kbd", {
    style: {
      fontFamily: 'Roboto Mono',
      fontSize: 11,
      padding: '2px 6px',
      background: 'rgba(255,255,255,.12)',
      borderRadius: 4,
      border: '1px solid rgba(255,255,255,.18)'
    }
  }, "\u2318 K"), " to jump anywhere \u2014 search contacts, dial a number, or start a chat from anywhere in Sedona.")))));
}
function Kpi({
  label,
  value,
  delta,
  tone,
  trend,
  footer
}) {
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 12,
      fontWeight: 700,
      color: '#54687F',
      letterSpacing: '.25px'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 30,
      color: '#0B1029',
      letterSpacing: '-.5px'
    }
  }, value), /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, /*#__PURE__*/React.createElement(Icon, {
    name: trend === 'up' ? 'arrowUp' : 'arrowDown',
    size: 11,
    strokeWidth: 2.5
  }), delta)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      color: '#7A7D8C',
      marginTop: 6
    }
  }, footer || 'vs last 7 days'));
}
function CardHeader({
  title,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px',
      borderBottom: '1px solid #EAEBEF'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 16,
      color: '#0B1029'
    }
  }, title), actions);
}
const ACTIVITY = [{
  kind: 'call',
  who: 'Priya Ramanathan',
  co: 'Helio Labs',
  summary: 'Inbound call · 14m · "Wants to upgrade to Enterprise tier"',
  time: '9:42 AM',
  tone: 'success',
  icon: 'phone'
}, {
  kind: 'chat',
  who: 'Customer Success',
  co: '#cs-frontline',
  summary: 'New escalation from Brightline — billing dispute, $4,820',
  time: '9:15 AM',
  tone: 'warning',
  icon: 'chat'
}, {
  kind: 'meeting',
  who: 'Quarterly review',
  co: 'with Wendell, Priya, Sam',
  summary: 'Calendar invite · Tomorrow 2:00 PM',
  time: '8:50 AM',
  tone: 'info',
  icon: 'calendar'
}, {
  kind: 'voicemail',
  who: 'Tom Becker',
  co: 'Northwind Co.',
  summary: 'Voicemail · 0:48 · transcript ready',
  time: 'Yesterday',
  tone: 'neutral',
  icon: 'voicemail'
}, {
  kind: 'call',
  who: 'Outbound · Lila Hsu',
  co: 'Mercer Holdings',
  summary: 'No answer · 2 attempts',
  time: 'Yesterday',
  tone: 'danger',
  icon: 'phone'
}, {
  kind: 'chat',
  who: 'Sam Patel',
  co: 'Direct message',
  summary: 'Sent the deck — let me know if anything\'s off',
  time: 'Yesterday',
  tone: 'neutral',
  icon: 'chat'
}];
function ActivityRow({
  a,
  last
}) {
  const tones = {
    success: {
      bg: '#E5FDF0',
      fg: '#068751'
    },
    warning: {
      bg: '#FFF2E1',
      fg: '#E24F1F'
    },
    info: {
      bg: '#E2F2FF',
      fg: '#005FEC'
    },
    danger: {
      bg: '#FCE6E8',
      fg: '#DB3545'
    },
    neutral: {
      bg: '#EAEBEF',
      fg: '#54687F'
    }
  }[a.tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14,
      padding: '14px 20px',
      borderBottom: last ? 'none' : '1px solid #EAEBEF',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = '#F7F8FA',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: tones.bg,
      color: tones.fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: 14,
      color: '#0B1029'
    }
  }, a.who), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      color: '#7A7D8C'
    }
  }, "\xB7 ", a.co)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      color: '#54687F',
      marginTop: 2
    }
  }, a.summary)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 12,
      color: '#7A7D8C',
      flexShrink: 0,
      paddingTop: 2
    }
  }, a.time));
}
const SCHEDULE = [{
  time: '10:00',
  dur: '30m',
  title: '1:1 with Sam Patel',
  attendees: '2 attendees · Sedona huddle',
  color: '#005FEC'
}, {
  time: '11:30',
  dur: '45m',
  title: 'Helio Labs — renewal',
  attendees: 'Priya R., Wendell M.',
  color: '#FFA238'
}, {
  time: '2:00',
  dur: '1h',
  title: 'Quarterly business review',
  attendees: '8 attendees · Conf. Aspen',
  color: '#20BA75'
}, {
  time: '4:30',
  dur: '15m',
  title: 'Hold for prep',
  attendees: 'Personal time',
  color: '#A9B3BE'
}];
const TASKS = [{
  label: 'Send proposal to Helio Labs',
  due: 'Due today · 5pm',
  priority: 'high'
}, {
  label: 'Approve Q1 expense reports',
  due: 'Due tomorrow',
  priority: 'med'
}, {
  label: 'Review onboarding doc v3',
  due: 'Due Thu',
  priority: null
}, {
  label: 'Reply to Mercer thread',
  due: 'Yesterday',
  done: true,
  priority: null
}];

/* ───────── Contacts directory ───────── */
const CONTACTS = [{
  name: 'Priya Ramanathan',
  title: 'VP Operations',
  co: 'Helio Labs',
  email: 'priya@helio.io',
  phone: '+1 (415) 555-0192',
  tags: ['VIP', 'Renewal'],
  lastTouch: 'Today',
  owner: 'MC',
  status: 'online'
}, {
  name: 'Wendell Marquez',
  title: 'Head of Customer Success',
  co: 'Helio Labs',
  email: 'w.marquez@helio.io',
  phone: '+1 (415) 555-0118',
  tags: ['Renewal'],
  lastTouch: '2h ago',
  owner: 'MC',
  status: 'online'
}, {
  name: 'Tom Becker',
  title: 'CFO',
  co: 'Northwind Co.',
  email: 'tom@northwind.com',
  phone: '+1 (212) 555-0144',
  tags: ['New lead'],
  lastTouch: 'Yesterday',
  owner: 'SP',
  status: 'away'
}, {
  name: 'Lila Hsu',
  title: 'Director, IT',
  co: 'Mercer Holdings',
  email: 'lila.hsu@mercer.co',
  phone: '+1 (646) 555-0132',
  tags: ['VIP'],
  lastTouch: '2d ago',
  owner: 'MC',
  status: 'offline'
}, {
  name: 'Brightline AP',
  title: 'Accounts Payable',
  co: 'Brightline Inc.',
  email: 'ap@brightline.com',
  phone: '+1 (303) 555-0181',
  tags: ['Billing', 'Hold'],
  lastTouch: '2d ago',
  owner: 'WT',
  status: 'dnd'
}, {
  name: 'Adaeze Okafor',
  title: 'Procurement Lead',
  co: 'Tessera Group',
  email: 'a.okafor@tessera.gr',
  phone: '+44 20 7946 0011',
  tags: ['Pilot'],
  lastTouch: '3d ago',
  owner: 'SP',
  status: 'online'
}, {
  name: 'Marco Della Vega',
  title: 'CTO',
  co: 'Vela Robotics',
  email: 'marco@velarobotics.io',
  phone: '+1 (415) 555-0177',
  tags: ['Champion'],
  lastTouch: '4d ago',
  owner: 'MC',
  status: 'offline'
}, {
  name: 'Hannah Greer',
  title: 'Operations Manager',
  co: 'Atelier 7',
  email: 'hannah@atelier7.studio',
  phone: '+1 (718) 555-0163',
  tags: [],
  lastTouch: '1w ago',
  owner: 'WT',
  status: 'offline'
}, {
  name: 'Yusuf Al-Khattab',
  title: 'Founder',
  co: 'Khattab & Sons',
  email: 'yusuf@kandsons.com',
  phone: '+971 4 555 0149',
  tags: ['New lead'],
  lastTouch: '1w ago',
  owner: 'SP',
  status: 'online'
}, {
  name: 'Camille Roux',
  title: 'Head of People',
  co: 'Maison Lumière',
  email: 'c.roux@lumiere.fr',
  phone: '+33 1 55 12 03 88',
  tags: ['VIP'],
  lastTouch: '2w ago',
  owner: 'MC',
  status: 'offline'
}];
function ContactsPage() {
  const [selected, setSelected] = useState1(0);
  const [query, setQuery] = useState1('');
  const [filter, setFilter] = useState1('All');
  const filtered = CONTACTS.filter(c => {
    if (filter === 'VIP' && !c.tags.includes('VIP')) return false;
    if (filter === 'My contacts' && c.owner !== 'MC') return false;
    if (filter === 'New leads' && !c.tags.includes('New lead')) return false;
    if (query && !(c.name + c.co + c.email).toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });
  const c = filtered[selected] || filtered[0] || CONTACTS[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 24,
      color: '#0B1029'
    }
  }, "Contacts"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      color: '#54687F',
      marginTop: 2
    }
  }, filtered.length, " of ", CONTACTS.length, " contacts")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    leadingIcon: "download"
  }, "Export CSV"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    leadingIcon: "filter"
  }, "Filters"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: "plus"
  }, "Add contact"))), /*#__PURE__*/React.createElement(Card, {
    padded: false,
    style: {
      flex: 1,
      display: 'flex',
      overflow: 'hidden',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 520,
      borderRight: '1px solid #EAEBEF',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      borderBottom: '1px solid #EAEBEF'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    leadingIcon: "search",
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Search name, company, email\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, ['All', 'My contacts', 'VIP', 'New leads'].map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f,
    active: filter === f,
    onClick: () => setFilter(f)
  }, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(ContactsTableHeader, null), filtered.map((c, i) => /*#__PURE__*/React.createElement(ContactRow, {
    key: c.name,
    c: c,
    active: i === selected,
    onClick: () => setSelected(i)
  })))), /*#__PURE__*/React.createElement(ContactDetail, {
    c: c
  })));
}
function ContactsTableHeader() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 90px 80px',
      padding: '8px 16px',
      background: '#F7F8FA',
      borderBottom: '1px solid #EAEBEF',
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      color: '#54687F',
      letterSpacing: '.5px',
      textTransform: 'uppercase',
      position: 'sticky',
      top: 0,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, "Name / company"), /*#__PURE__*/React.createElement("div", null, "Last touch"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, "Owner"));
}
function ContactRow({
  c,
  active,
  onClick
}) {
  const ownerColor = {
    MC: '#005FEC',
    SP: '#7B61FF',
    WT: '#FFA238'
  }[c.owner];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 90px 80px',
      alignItems: 'center',
      padding: '12px 16px',
      borderBottom: '1px solid #EAEBEF',
      background: active ? '#E2F2FF' : 'transparent',
      cursor: 'pointer',
      borderLeft: active ? '3px solid #005FEC' : '3px solid transparent',
      paddingLeft: 13
    },
    onMouseEnter: e => {
      if (!active) e.currentTarget.style.background = '#F7F8FA';
    },
    onMouseLeave: e => {
      if (!active) e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: c.name,
    status: c.status
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: 14,
      color: '#0B1029',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, c.name), c.tags.includes('VIP') && /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 12,
    color: "#FFA238"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 12,
      color: '#54687F',
      marginTop: 2
    }
  }, c.title, " \xB7 ", c.co))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 12,
      color: '#54687F'
    }
  }, c.lastTouch), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: c.owner,
    size: 24,
    color: ownerColor
  })));
}
function ContactDetail({
  c
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 24px 16px',
      borderBottom: '1px solid #EAEBEF'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: c.name,
    size: 64,
    status: c.status
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 22,
      color: '#0B1029',
      letterSpacing: '-.2px'
    }
  }, c.name), c.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: t === 'VIP' ? 'warning' : t === 'Hold' ? 'danger' : t === 'Billing' ? 'warning' : 'info'
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 14,
      color: '#54687F',
      marginTop: 4
    }
  }, c.title, " at ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#0B1029',
      fontWeight: 700
    }
  }, c.co)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: "phone"
  }, "Call"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leadingIcon: "chat"
  }, "Message"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leadingIcon: "mail"
  }, "Email"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leadingIcon: "calendar"
  }, "Schedule"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "star"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "more"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(DetailField, {
    label: "Email",
    value: c.email,
    icon: "mail"
  }), /*#__PURE__*/React.createElement(DetailField, {
    label: "Phone",
    value: c.phone,
    icon: "phone"
  }), /*#__PURE__*/React.createElement(DetailField, {
    label: "Account owner",
    value: {
      MC: 'Maya Chen',
      SP: 'Sam Patel',
      WT: 'Wendell Tran'
    }[c.owner],
    icon: "users"
  }), /*#__PURE__*/React.createElement(DetailField, {
    label: "Last interaction",
    value: c.lastTouch,
    icon: "calendar"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      color: '#7A7D8C',
      letterSpacing: '.5px',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "Recent timeline"), [{
    icon: 'phone',
    tone: 'success',
    title: 'Inbound call answered',
    detail: '14m · "Discussed renewal terms, sending revised proposal."',
    t: 'Today, 9:42 AM'
  }, {
    icon: 'mail',
    tone: 'info',
    title: 'Sent proposal v3.pdf',
    detail: '2.4 MB · opened twice',
    t: 'Yesterday, 4:18 PM'
  }, {
    icon: 'chat',
    tone: 'neutral',
    title: 'Slack: #helio-account',
    detail: '"Looping in legal on the SOW edit."',
    t: 'Mon, 11:02 AM'
  }, {
    icon: 'calendar',
    tone: 'info',
    title: 'Meeting: Quarterly review',
    detail: '45m · 6 attendees · notes captured',
    t: 'Mar 11'
  }].map((e, i) => /*#__PURE__*/React.createElement(TimelineRow, {
    key: i,
    e: e
  }))));
}
function DetailField({
  label,
  value,
  icon
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      color: '#7A7D8C',
      letterSpacing: '.5px',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16,
    color: "#54687F"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontSize: 14,
      color: '#0B1029'
    }
  }, value)));
}
function TimelineRow({
  e
}) {
  const tones = {
    success: {
      bg: '#E5FDF0',
      fg: '#068751'
    },
    info: {
      bg: '#E2F2FF',
      fg: '#005FEC'
    },
    neutral: {
      bg: '#EAEBEF',
      fg: '#54687F'
    }
  }[e.tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      padding: '12px 0',
      borderTop: '1px solid #EAEBEF'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: tones.bg,
      color: tones.fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: e.icon,
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      fontWeight: 700,
      color: '#0B1029'
    }
  }, e.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      color: '#54687F',
      marginTop: 2
    }
  }, e.detail)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      color: '#7A7D8C',
      flexShrink: 0,
      paddingTop: 2
    }
  }, e.t));
}
Object.assign(window, {
  InboxPage,
  ContactsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sedona-app/pages-1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sedona-app/pages-2.jsx
try { (() => {
/* pages-2.jsx — Calls / dialer, Chat, Calendar */
const {
  useState: useState2
} = React;

/* ───────── Calls page ───────── */
const CALL_LOG = [{
  dir: 'in',
  who: 'Priya Ramanathan',
  co: 'Helio Labs',
  num: '+1 (415) 555-0192',
  time: 'Today, 9:42 AM',
  dur: '14m 02s',
  status: 'completed'
}, {
  dir: 'out',
  who: 'Lila Hsu',
  co: 'Mercer Holdings',
  num: '+1 (646) 555-0132',
  time: 'Today, 9:10 AM',
  dur: '—',
  status: 'no-answer'
}, {
  dir: 'in',
  who: 'Brightline AP',
  co: 'Brightline Inc.',
  num: '+1 (303) 555-0181',
  time: 'Today, 8:48 AM',
  dur: '6m 30s',
  status: 'completed'
}, {
  dir: 'in',
  who: 'Unknown caller',
  co: '',
  num: '+1 (702) 555-0418',
  time: 'Yesterday',
  dur: '0:48',
  status: 'voicemail'
}, {
  dir: 'out',
  who: 'Tom Becker',
  co: 'Northwind Co.',
  num: '+1 (212) 555-0144',
  time: 'Yesterday',
  dur: '22m 11s',
  status: 'completed'
}, {
  dir: 'out',
  who: 'Adaeze Okafor',
  co: 'Tessera Group',
  num: '+44 20 7946 0011',
  time: 'Mon, 4:02 PM',
  dur: '8m 47s',
  status: 'completed'
}, {
  dir: 'in',
  who: 'Marco Della Vega',
  co: 'Vela Robotics',
  num: '+1 (415) 555-0177',
  time: 'Mon, 11:31 AM',
  dur: '—',
  status: 'missed'
}];
function CallsPage() {
  const [tab, setTab] = useState2('All');
  const [dialed, setDialed] = useState2('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 24,
      color: '#0B1029'
    }
  }, "Calls"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      color: '#54687F',
      marginTop: 2
    }
  }, "Connected: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#20BA75'
    }
  }, "SIP \xB7 sedona.cloud"), " \xB7 Ext. 4012")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    leadingIcon: "filter"
  }, "Filters"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: "phone"
  }, "New call"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 16,
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padded: false,
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      padding: '12px 16px',
      borderBottom: '1px solid #EAEBEF'
    }
  }, ['All', 'Missed', 'Voicemail', 'Recorded'].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: {
      padding: '6px 12px',
      fontFamily: 'Lato',
      fontSize: 13,
      fontWeight: 700,
      background: tab === t ? '#E2F2FF' : 'transparent',
      color: tab === t ? '#005FEC' : '#54687F',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '40px 1fr 200px 120px 100px 60px',
      padding: '8px 16px',
      background: '#F7F8FA',
      borderBottom: '1px solid #EAEBEF',
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      color: '#54687F',
      letterSpacing: '.5px',
      textTransform: 'uppercase',
      position: 'sticky',
      top: 0,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null, "Caller"), /*#__PURE__*/React.createElement("div", null, "Number"), /*#__PURE__*/React.createElement("div", null, "Time"), /*#__PURE__*/React.createElement("div", null, "Duration"), /*#__PURE__*/React.createElement("div", null)), CALL_LOG.map((c, i) => /*#__PURE__*/React.createElement(CallRow, {
    key: i,
    c: c
  })))), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 16,
      color: '#0B1029'
    }
  }, "Dialer"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F7F8FA',
      border: '1px solid #EAEBEF',
      borderRadius: 8,
      padding: '14px 16px',
      fontFamily: 'Roboto Mono',
      fontSize: 22,
      fontWeight: 500,
      color: dialed ? '#0B1029' : '#A9B3BE',
      minHeight: 30,
      letterSpacing: '.5px'
    }
  }, dialed || '+1 (___) ___-____'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 8
    }
  }, ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setDialed(d => d + k),
    style: {
      height: 56,
      background: '#fff',
      border: '1px solid #DEDFE4',
      borderRadius: 8,
      fontFamily: 'Lato',
      fontSize: 22,
      fontWeight: 700,
      color: '#0B1029',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = '#F7F8FA',
    onMouseLeave: e => e.currentTarget.style.background = '#fff'
  }, k))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDialed(d => d.slice(0, -1)),
    style: {
      flex: 1,
      height: 48,
      background: '#EAEBEF',
      color: '#54687F',
      border: 'none',
      borderRadius: 8,
      fontFamily: 'Lato',
      fontSize: 14,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, "\u232B Delete"), /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 2,
      height: 48,
      background: '#20BA75',
      color: '#fff',
      border: 'none',
      borderRadius: 8,
      fontFamily: 'Lato',
      fontSize: 15,
      fontWeight: 700,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18,
    strokeWidth: 2.25
  }), " Call")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      paddingTop: 12,
      borderTop: '1px solid #EAEBEF'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      color: '#7A7D8C',
      letterSpacing: '.5px',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "Recent"), [{
    n: 'Priya Ramanathan',
    t: '9:42 AM'
  }, {
    n: 'Lila Hsu',
    t: '9:10 AM'
  }, {
    n: 'Tom Becker',
    t: 'Yesterday'
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 0',
      borderTop: i === 0 ? 'none' : '1px solid #EAEBEF'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: r.n,
    size: 28
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'Lato',
      fontSize: 13,
      color: '#0B1029'
    }
  }, r.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      color: '#7A7D8C'
    }
  }, r.t), /*#__PURE__*/React.createElement(IconButton, {
    icon: "phone",
    size: 28
  })))))));
}
function CallRow({
  c
}) {
  const dirIcon = c.dir === 'in' ? 'arrowDown' : 'arrowUp';
  const dirColor = c.status === 'missed' || c.status === 'no-answer' ? '#DB3545' : c.status === 'voicemail' ? '#FFA238' : '#20BA75';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '40px 1fr 200px 120px 100px 60px',
      alignItems: 'center',
      padding: '10px 16px',
      borderBottom: '1px solid #EAEBEF',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = '#F7F8FA',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: dirIcon,
    size: 16,
    color: dirColor,
    strokeWidth: 2.25
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: c.who || '??',
    size: 28
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: 14,
      color: '#0B1029'
    }
  }, c.who, " ", c.status === 'missed' && /*#__PURE__*/React.createElement(Badge, {
    tone: "danger",
    style: {
      marginLeft: 6
    }
  }, "Missed"), c.status === 'voicemail' && /*#__PURE__*/React.createElement(Badge, {
    tone: "warning",
    style: {
      marginLeft: 6
    }
  }, "Voicemail"), c.status === 'no-answer' && /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    style: {
      marginLeft: 6
    }
  }, "No answer")), c.co && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 12,
      color: '#54687F'
    }
  }, c.co))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Roboto Mono',
      fontSize: 13,
      color: '#54687F'
    }
  }, c.num), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      color: '#54687F'
    }
  }, c.time), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Roboto Mono',
      fontSize: 13,
      color: '#0B1029'
    }
  }, c.dur), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IconButton, {
    icon: "phone",
    size: 28
  })));
}

/* ───────── Chat page ───────── */
const THREADS = [{
  id: 0,
  kind: 'channel',
  name: 'cs-frontline',
  preview: 'Brightline escalation thread, billing dispute…',
  time: '9:15a',
  unread: 3,
  hash: true
}, {
  id: 1,
  kind: 'dm',
  name: 'Sam Patel',
  preview: 'Sent the deck — let me know if anything\'s off',
  time: '8:50a',
  unread: 0,
  status: 'online'
}, {
  id: 2,
  kind: 'dm',
  name: 'Wendell Tran',
  preview: 'Loop me in on the Helio call notes',
  time: 'Yest.',
  unread: 0,
  status: 'away'
}, {
  id: 3,
  kind: 'channel',
  name: 'helio-account',
  preview: 'Priya: "Looping in legal on the SOW edit."',
  time: 'Yest.',
  unread: 0,
  hash: true
}, {
  id: 4,
  kind: 'dm',
  name: 'Adaeze Okafor',
  preview: 'Thanks — calendar invite landed',
  time: 'Mon',
  unread: 0,
  status: 'offline'
}, {
  id: 5,
  kind: 'channel',
  name: 'announcements',
  preview: 'Tom: "All-hands moved to Friday 3pm"',
  time: 'Mon',
  unread: 0,
  hash: true
}];
const MESSAGES = [{
  who: 'Priya Ramanathan',
  t: '9:08 AM',
  body: 'Hey Maya — circling back on the renewal proposal. Wendell and I had a chance to review v2 last night.'
}, {
  who: 'Priya Ramanathan',
  t: '9:08 AM',
  body: 'Two things stood out: the ramp on Tier 3 and the SLA wording around scheduled maintenance.'
}, {
  who: 'me',
  t: '9:11 AM',
  body: 'Got it. We can absolutely soften the ramp — what timeline were you thinking?'
}, {
  who: 'me',
  t: '9:11 AM',
  body: 'And on SLA — we updated that template last quarter. Will pull the new clause and share.'
}, {
  who: 'Priya Ramanathan',
  t: '9:14 AM',
  body: 'Ramp over Q1 → Q2 → full Q3 would work. SLA cleanup will help unblock procurement on our side.'
}, {
  who: 'Priya Ramanathan',
  t: '9:15 AM',
  body: 'I attached our procurement\'s redlines for reference.',
  attachment: {
    name: 'procurement-redlines-v2.pdf',
    size: '1.4 MB'
  }
}, {
  who: 'me',
  t: '9:38 AM',
  body: 'Perfect — I\'ll have v3 over by EOD. Want to do a 15min sync at 11:30 to walk through?'
}];
function ChatPage() {
  const [active, setActive] = useState2(0);
  const [draft, setDraft] = useState2('');
  const t = THREADS[active];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      borderRight: '1px solid #DEDFE4',
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 18,
      color: '#0B1029'
    }
  }, "Chat"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "edit",
    size: 28,
    title: "New message"
  })), /*#__PURE__*/React.createElement(Input, {
    leadingIcon: "search",
    placeholder: "Search messages",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, THREADS.map((th, i) => /*#__PURE__*/React.createElement(ThreadItem, {
    key: th.id,
    th: th,
    active: i === active,
    onClick: () => setActive(i)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      background: '#F7F8FA'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      padding: '0 24px',
      flexShrink: 0,
      background: '#fff',
      borderBottom: '1px solid #DEDFE4',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, t.hash ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: '#EAEBEF',
      color: '#54687F',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 18
    }
  }, "#") : /*#__PURE__*/React.createElement(Avatar, {
    name: t.name,
    status: t.status
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 16,
      color: '#0B1029'
    }
  }, t.hash ? '#' : '', t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 12,
      color: '#54687F'
    }
  }, t.kind === 'channel' ? '14 members · Customer success' : 'Online · Engineering')), /*#__PURE__*/React.createElement(IconButton, {
    icon: "phone",
    title: "Voice call"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "video",
    title: "Video call"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "pin",
    title: "Pinned"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "more"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      margin: '8px 0 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      color: '#7A7D8C',
      background: '#fff',
      padding: '4px 10px',
      borderRadius: 999,
      border: '1px solid #EAEBEF'
    }
  }, "Today")), MESSAGES.map((m, i) => /*#__PURE__*/React.createElement(MessageBubble, {
    key: i,
    m: m,
    prev: MESSAGES[i - 1]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      background: '#fff',
      borderTop: '1px solid #DEDFE4'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid #DEDFE4',
      borderRadius: 8,
      padding: '8px 8px 8px 12px',
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    placeholder: `Message ${t.hash ? '#' : ''}${t.name}…`,
    rows: 1,
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      resize: 'none',
      fontFamily: 'Lato',
      fontSize: 14,
      color: '#0B1029',
      padding: '8px 0',
      minHeight: 24
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "paperclip",
    size: 32
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "smile",
    size: 32
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "mic",
    size: 32
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    trailingIcon: "send",
    disabled: !draft.trim()
  }, "Send")))));
}
function ThreadItem({
  th,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      padding: '10px 16px',
      display: 'flex',
      gap: 10,
      cursor: 'pointer',
      background: active ? '#E2F2FF' : 'transparent',
      borderLeft: active ? '3px solid #005FEC' : '3px solid transparent',
      paddingLeft: active ? 13 : 13
    },
    onMouseEnter: e => {
      if (!active) e.currentTarget.style.background = '#F7F8FA';
    },
    onMouseLeave: e => {
      if (!active) e.currentTarget.style.background = 'transparent';
    }
  }, th.hash ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: '#EAEBEF',
      color: '#54687F',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 16,
      flexShrink: 0
    }
  }, "#") : /*#__PURE__*/React.createElement(Avatar, {
    name: th.name,
    status: th.status
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontWeight: th.unread ? 900 : 700,
      fontSize: 13,
      color: '#0B1029',
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, th.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      color: '#7A7D8C'
    }
  }, th.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'Lato',
      fontSize: 12,
      color: th.unread ? '#0B1029' : '#54687F',
      fontWeight: th.unread ? 700 : 400,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, th.preview), th.unread > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 18,
      height: 18,
      padding: '0 6px',
      background: '#005FEC',
      color: '#fff',
      borderRadius: 999,
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, th.unread))));
}
function MessageBubble({
  m,
  prev
}) {
  const isMe = m.who === 'me';
  const stack = prev && prev.who === m.who;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isMe ? 'row-reverse' : 'row',
      gap: 10,
      marginTop: stack ? 2 : 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      flexShrink: 0,
      opacity: stack ? 0 : 1
    }
  }, !stack && /*#__PURE__*/React.createElement(Avatar, {
    name: isMe ? 'Maya Chen' : m.who,
    size: 32,
    color: isMe ? '#005FEC' : undefined
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520,
      display: 'flex',
      flexDirection: 'column',
      alignItems: isMe ? 'flex-end' : 'flex-start'
    }
  }, !stack && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginBottom: 4,
      flexDirection: isMe ? 'row-reverse' : 'row'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: 13,
      color: '#0B1029'
    }
  }, isMe ? 'You' : m.who), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      color: '#7A7D8C'
    }
  }, m.t)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      borderRadius: isMe ? '12px 4px 12px 12px' : '4px 12px 12px 12px',
      background: isMe ? '#005FEC' : '#fff',
      color: isMe ? '#fff' : '#0B1029',
      border: isMe ? 'none' : '1px solid #DEDFE4',
      fontFamily: 'Lato',
      fontSize: 14,
      lineHeight: 1.45,
      boxShadow: '0 1px 2px rgba(34,38,72,0.04)'
    }
  }, m.body), m.attachment && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      padding: '10px 12px',
      background: '#fff',
      border: '1px solid #DEDFE4',
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 6,
      background: '#FCE6E8',
      color: '#DB3545',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 10
    }
  }, "PDF"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: 13,
      color: '#0B1029',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, m.attachment.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      color: '#7A7D8C'
    }
  }, m.attachment.size)), /*#__PURE__*/React.createElement(IconButton, {
    icon: "download",
    size: 28
  }))));
}

/* ───────── Calendar ───────── */
const DAYS = ['Mon 17', 'Tue 18', 'Wed 19', 'Thu 20', 'Fri 21', 'Sat 22', 'Sun 23'];
const HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const EVENTS = [{
  day: 0,
  start: 9,
  dur: 1,
  title: 'Team standup',
  tone: 'blue'
}, {
  day: 0,
  start: 13,
  dur: 1.5,
  title: 'Helio prep',
  tone: 'orange'
}, {
  day: 1,
  start: 10,
  dur: 0.5,
  title: '1:1 with Sam',
  tone: 'blue'
}, {
  day: 1,
  start: 11.5,
  dur: 0.75,
  title: 'Helio Labs renewal',
  tone: 'orange'
}, {
  day: 1,
  start: 14,
  dur: 1,
  title: 'QBR',
  tone: 'green',
  primary: true
}, {
  day: 1,
  start: 16.5,
  dur: 0.25,
  title: 'Hold',
  tone: 'gray'
}, {
  day: 2,
  start: 9,
  dur: 1,
  title: 'Brightline AP review',
  tone: 'red'
}, {
  day: 2,
  start: 13,
  dur: 2,
  title: 'Onboarding workshop',
  tone: 'purple'
}, {
  day: 3,
  start: 10.5,
  dur: 1.5,
  title: 'Helio v3 walkthrough',
  tone: 'orange'
}, {
  day: 3,
  start: 15,
  dur: 1,
  title: 'Engineering sync',
  tone: 'blue'
}, {
  day: 4,
  start: 9,
  dur: 0.5,
  title: 'Coffee w/ Wendell',
  tone: 'gray'
}, {
  day: 4,
  start: 11,
  dur: 1,
  title: 'Pipeline review',
  tone: 'green'
}, {
  day: 4,
  start: 14,
  dur: 1.5,
  title: 'Vela Robotics intro',
  tone: 'purple'
}];
const TONES = {
  blue: {
    bg: '#E2F2FF',
    fg: '#005FEC',
    stripe: '#005FEC'
  },
  orange: {
    bg: '#FFF2E1',
    fg: '#E24F1F',
    stripe: '#F47822'
  },
  green: {
    bg: '#E5FDF0',
    fg: '#068751',
    stripe: '#20BA75'
  },
  red: {
    bg: '#FCE6E8',
    fg: '#DB3545',
    stripe: '#DB3545'
  },
  purple: {
    bg: '#EDE7FF',
    fg: '#5D10A8',
    stripe: '#7B61FF'
  },
  gray: {
    bg: '#EAEBEF',
    fg: '#54687F',
    stripe: '#A9B3BE'
  }
};
function CalendarPage() {
  const [view, setView] = useState2('Week');
  const slotH = 56;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 24,
      color: '#0B1029'
    }
  }, "March 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      color: '#54687F',
      marginTop: 2
    }
  }, "Week 12 \xB7 13 events scheduled")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      border: '1px solid #DEDFE4',
      borderRadius: 6,
      overflow: 'hidden'
    }
  }, ['Day', 'Week', 'Month'].map(v => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setView(v),
    style: {
      padding: '8px 14px',
      border: 'none',
      cursor: 'pointer',
      background: v === view ? '#005FEC' : '#fff',
      color: v === view ? '#fff' : '#0B1029',
      fontFamily: 'Lato',
      fontSize: 13,
      fontWeight: 700
    }
  }, v))), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron",
    style: {
      transform: 'rotate(180deg)'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm"
  }, "Today"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 24,
      background: '#EAEBEF',
      margin: '0 4px'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: "plus"
  }, "New event"))), /*#__PURE__*/React.createElement(Card, {
    padded: false,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `56px repeat(7, 1fr)`,
      borderBottom: '1px solid #EAEBEF',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", null), DAYS.map((d, i) => {
    const [dow, num] = d.split(' ');
    const today = i === 1;
    return /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        padding: '12px 8px',
        textAlign: 'center',
        borderLeft: '1px solid #EAEBEF'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Lato',
        fontSize: 11,
        fontWeight: 700,
        color: '#7A7D8C',
        letterSpacing: '.4px',
        textTransform: 'uppercase'
      }
    }, dow), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4,
        width: 32,
        height: 32,
        lineHeight: '32px',
        borderRadius: '50%',
        display: 'inline-block',
        background: today ? '#005FEC' : 'transparent',
        color: today ? '#fff' : '#0B1029',
        fontFamily: 'Lato',
        fontWeight: 900,
        fontSize: 16
      }
    }, num));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `56px repeat(7, 1fr)`,
      position: 'relative'
    }
  }, HOURS.map((h, hi) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: slotH,
      padding: '4px 8px 0',
      textAlign: 'right',
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      color: '#7A7D8C',
      borderTop: hi === 0 ? 'none' : '1px solid #EAEBEF'
    }
  }, h > 12 ? h - 12 : h, h >= 12 ? 'PM' : 'AM'), DAYS.map((_, di) => /*#__PURE__*/React.createElement("div", {
    key: di,
    style: {
      height: slotH,
      borderLeft: '1px solid #EAEBEF',
      borderTop: hi === 0 ? 'none' : '1px solid #EAEBEF',
      background: di === 1 ? 'rgba(0,95,236,0.02)' : 'transparent'
    }
  })))), EVENTS.map((e, i) => {
    const tone = TONES[e.tone];
    const top = (e.start - HOURS[0]) * slotH;
    const height = e.dur * slotH - 4;
    const colWidth = `calc((100% - 56px) / 7)`;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'absolute',
        top: top + 2,
        left: `calc(56px + ${e.day} * ${colWidth} + 4px)`,
        width: `calc(${colWidth} - 8px)`,
        height,
        background: tone.bg,
        color: tone.fg,
        borderRadius: 6,
        padding: '6px 8px',
        borderLeft: `3px solid ${tone.stripe}`,
        fontFamily: 'Lato',
        fontSize: 12,
        fontWeight: 700,
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: e.primary ? '0 4px 12px rgba(34,38,72,.16)' : 'none',
        transition: 'transform 150ms'
      },
      onMouseEnter: e2 => e2.currentTarget.style.transform = 'translateY(-1px)',
      onMouseLeave: e2 => e2.currentTarget.style.transform = 'translateY(0)'
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, e.title), e.dur > 0.5 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Roboto Mono',
        fontSize: 10,
        fontWeight: 500,
        opacity: .85,
        marginTop: 2
      }
    }, fmtTime(e.start), "\u2013", fmtTime(e.start + e.dur)));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: (10.7 - HOURS[0]) * slotH,
      left: `calc(56px + 1 * (100% - 56px) / 7)`,
      width: `calc((100% - 56px) / 7)`,
      height: 2,
      background: '#DB3545',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -5,
      top: -4,
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: '#DB3545'
    }
  }))))));
}
function fmtTime(h) {
  const hr = Math.floor(h);
  const m = Math.round((h - hr) * 60);
  const ap = hr >= 12 ? 'p' : 'a';
  const dh = hr > 12 ? hr - 12 : hr;
  return `${dh}:${String(m).padStart(2, '0')}${ap}`;
}
Object.assign(window, {
  CallsPage,
  ChatPage,
  CalendarPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sedona-app/pages-2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sedona-app/primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* primitives.jsx — Sedona reusable UI atoms.
   Globals exposed at end. Loaded after React + Babel.
*/

const {
  useState,
  useRef,
  useEffect
} = React;

/* ───────── Icon (Lucide-style inline SVGs) ───────── */
const ICONS = {
  home: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10',
  inbox: 'M22 12h-6l-2 3h-4l-2-3H2M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2|9,7,4,4|M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z',
  chat: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  calendar: 'M16 2v4M8 2v4M3 10h18|RECT|3,4,18,18,2',
  search: 'CIRCLE|11,11,7|m21 21-4.3-4.3',
  bell: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0',
  settings: 'CIRCLE|12,12,3|M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4',
  plus: 'M12 5v14M5 12h14',
  more: 'CIRCLE|12,12,1|CIRCLE|19,12,1|CIRCLE|5,12,1',
  chevron: 'm9 18 6-6-6-6',
  chevronDown: 'm6 9 6 6 6-6',
  check: 'M20 6 9 17l-5-5',
  x: 'M18 6 6 18M6 6l12 12',
  star: 'm12 2 3.09 6.26 6.91 1.01-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z',
  filter: 'M22 3H2l8 9.46V19l4 2v-8.54z',
  download: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4|M7 10l5 5 5-5|M12 15V3',
  mail: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z|m22 6-10 7L2 6',
  send: 'M22 2 11 13|M22 2l-7 20-4-9-9-4z',
  paperclip: 'm21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48',
  smile: 'CIRCLE|12,12,10|M8 14s1.5 2 4 2 4-2 4-2|M9 9h.01|M15 9h.01',
  mic: 'RECT|9,2,6,12,3|M19 10v2a7 7 0 0 1-14 0v-2|M12 19v3',
  video: 'M23 7l-7 5 7 5z|RECT|1,5,15,14,2',
  pin: 'M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2z',
  arrowUp: 'M12 19V5|m5 12 7-7 7 7',
  arrowDown: 'M12 5v14|m19 12-7 7-7-7',
  trash: 'M3 6h18|M8 6v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6m3 0V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2',
  edit: 'M12 20h9|M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4z',
  building: 'RECT|4,2,16,20,2|M9 22v-4h6v4|M8 6h.01|M16 6h.01|M12 6h.01|M12 10h.01|M12 14h.01|M16 10h.01|M16 14h.01|M8 10h.01|M8 14h.01',
  voicemail: 'CIRCLE|6,11,4|CIRCLE|18,11,4|M6 15h12',
  pieChart: 'M21.21 15.89A10 10 0 1 1 8 2.83|M22 12A10 10 0 0 0 12 2v10z',
  zap: 'M13 2 3 14h9l-1 8 10-12h-9z'
};
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 1.75,
  style
}) {
  const d = ICONS[name];
  if (!d) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: size,
      height: size
    }
  });
  // Tokenized syntax: paths separated by |, with CIRCLE|cx,cy,r and RECT|x,y,w,h,rx prefixes
  const parts = d.split('|');
  const els = [];
  let i = 0;
  while (i < parts.length) {
    const tok = parts[i];
    if (tok === 'CIRCLE') {
      const [cx, cy, r] = parts[i + 1].split(',').map(Number);
      els.push(/*#__PURE__*/React.createElement("circle", {
        key: i,
        cx: cx,
        cy: cy,
        r: r
      }));
      i += 2;
    } else if (tok === 'RECT') {
      const [x, y, w, h, rx] = parts[i + 1].split(',').map(Number);
      els.push(/*#__PURE__*/React.createElement("rect", {
        key: i,
        x: x,
        y: y,
        width: w,
        height: h,
        rx: rx || 0
      }));
      i += 2;
    } else {
      els.push(/*#__PURE__*/React.createElement("path", {
        key: i,
        d: tok
      }));
      i += 1;
    }
  }
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, els);
}

/* ───────── Button ───────── */
function Button({
  variant = 'secondary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  children,
  onClick,
  disabled,
  style
}) {
  const sizes = {
    sm: {
      h: 32,
      px: 12,
      fs: 13
    },
    md: {
      h: 40,
      px: 16,
      fs: 14
    },
    lg: {
      h: 48,
      px: 20,
      fs: 15
    }
  }[size];
  const variants = {
    primary: {
      bg: '#005FEC',
      bgH: '#1D3BCD',
      fg: '#fff'
    },
    secondary: {
      bg: '#EAEBEF',
      bgH: '#DEDFE4',
      fg: '#0B1029'
    },
    ghost: {
      bg: 'transparent',
      bgH: '#E2F2FF',
      fg: '#005FEC'
    },
    danger: {
      bg: '#DB3545',
      bgH: '#B82A38',
      fg: '#fff'
    },
    outline: {
      bg: '#fff',
      bgH: '#F7F8FA',
      fg: '#0B1029',
      border: '1px solid #DEDFE4'
    }
  }[variant];
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      height: sizes.h,
      padding: `0 ${sizes.px}px`,
      background: disabled ? '#EAEBEF' : hover ? variants.bgH : variants.bg,
      color: disabled ? '#A9B3BE' : variants.fg,
      border: variants.border || 'none',
      borderRadius: 4,
      fontFamily: 'Lato',
      fontSize: sizes.fs,
      fontWeight: 700,
      letterSpacing: '.25px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background 150ms',
      ...style
    }
  }, leadingIcon && /*#__PURE__*/React.createElement(Icon, {
    name: leadingIcon,
    size: 16,
    strokeWidth: 2
  }), children, trailingIcon && /*#__PURE__*/React.createElement(Icon, {
    name: trailingIcon,
    size: 16,
    strokeWidth: 2
  }));
}

/* ───────── IconButton ───────── */
function IconButton({
  icon,
  size = 36,
  onClick,
  active,
  style,
  title
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    title: title,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      background: active ? '#E2F2FF' : hover ? '#F7F8FA' : 'transparent',
      color: active ? '#005FEC' : '#54687F',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background 150ms',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    strokeWidth: 1.75
  }));
}

/* ───────── Input ───────── */
function Input({
  leadingIcon,
  value,
  onChange,
  placeholder,
  type = 'text',
  style,
  size = 'md'
}) {
  const [focused, setFocused] = useState(false);
  const h = size === 'sm' ? 32 : 40;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 10,
      top: (h - 18) / 2,
      color: '#7A7D8C'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: leadingIcon,
    size: 18,
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value || '',
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      height: h,
      boxSizing: 'border-box',
      padding: leadingIcon ? '0 12px 0 36px' : '0 12px',
      fontFamily: 'Lato',
      fontSize: 14,
      color: '#0B1029',
      background: '#fff',
      border: `1px solid ${focused ? '#005FEC' : '#DEDFE4'}`,
      borderRadius: 4,
      outline: 'none',
      boxShadow: focused ? '0 0 0 2px rgba(0,95,236,.15)' : 'none',
      transition: 'all 150ms'
    }
  }));
}

/* ───────── Avatar ───────── */
const AVATAR_COLORS = ['#005FEC', '#20BA75', '#FFA238', '#E8178A', '#7B61FF', '#00A680', '#F47822'];
function Avatar({
  name = '??',
  size = 32,
  status,
  color,
  style
}) {
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  const bg = color || AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
  const fs = size <= 24 ? 10 : size <= 32 ? 12 : size <= 40 ? 14 : 18;
  const dot = size <= 32 ? 8 : 10;
  const statusColor = {
    online: '#20BA75',
    away: '#FF9325',
    dnd: '#DB3545',
    offline: '#A9B3BE'
  }[status];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: bg,
      color: '#fff',
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: fs,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, initials), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -1,
      bottom: -1,
      width: dot,
      height: dot,
      borderRadius: '50%',
      background: statusColor,
      border: '2px solid #fff'
    }
  }));
}

/* ───────── Badge / Chip ───────── */
function Badge({
  children,
  tone = 'neutral',
  dot,
  style
}) {
  const tones = {
    neutral: {
      bg: '#EAEBEF',
      fg: '#171C34'
    },
    info: {
      bg: '#E2F2FF',
      fg: '#005FEC'
    },
    success: {
      bg: '#E5FDF0',
      fg: '#068751'
    },
    warning: {
      bg: '#FFF2E1',
      fg: '#E24F1F'
    },
    danger: {
      bg: '#FCE6E8',
      fg: '#DB3545'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '2px 8px',
      borderRadius: 999,
      fontFamily: 'Lato',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.15px',
      background: tones.bg,
      color: tones.fg,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: 'currentColor'
    }
  }), children);
}

/* ───────── Card ───────── */
function Card({
  children,
  style,
  padded = true,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: '#fff',
      border: '1px solid #DEDFE4',
      borderRadius: 8,
      boxShadow: '0 1px 2px rgba(34,38,72,0.08)',
      padding: padded ? 20 : 0,
      ...style
    }
  }), children);
}

/* ───────── Menu (popover) ───────── */
function Menu({
  trigger,
  items,
  align = 'left'
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(o => !o)
  }, trigger), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 4px)',
      [align]: 0,
      minWidth: 200,
      background: '#fff',
      border: '1px solid #DEDFE4',
      borderRadius: 8,
      boxShadow: '0 4px 12px rgba(34,38,72,.16)',
      padding: 4,
      zIndex: 50
    }
  }, items.map((it, i) => it === '-' ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 1,
      background: '#EAEBEF',
      margin: '4px 0'
    }
  }) : /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => {
      it.onClick?.();
      setOpen(false);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      padding: '8px 10px',
      border: 'none',
      background: 'transparent',
      fontFamily: 'Lato',
      fontSize: 13,
      color: it.danger ? '#DB3545' : '#0B1029',
      borderRadius: 6,
      cursor: 'pointer',
      textAlign: 'left'
    },
    onMouseEnter: e => e.currentTarget.style.background = '#F7F8FA',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, it.icon && /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 16
  }), it.label))));
}

/* ───────── Chip (filter) ───────── */
function Chip({
  children,
  active,
  onClick,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      borderRadius: 999,
      border: `1px solid ${active ? '#005FEC' : '#DEDFE4'}`,
      background: active ? '#E2F2FF' : '#fff',
      color: active ? '#005FEC' : '#0B1029',
      fontFamily: 'Lato',
      fontSize: 13,
      cursor: 'pointer'
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      color: '#7A7D8C',
      fontSize: 11
    }
  }, "\xD7"));
}
Object.assign(window, {
  Icon,
  Button,
  IconButton,
  Input,
  Avatar,
  Badge,
  Card,
  Menu,
  Chip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sedona-app/primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sedona-app/shell.jsx
try { (() => {
/* shell.jsx — Sidebar, TopBar, and main App shell */
const {
  useState: useStateShell
} = React;

/* ───────── Sidebar ───────── */
const NAV_ITEMS = [{
  id: 'inbox',
  label: 'Inbox',
  icon: 'inbox',
  badge: 12
}, {
  id: 'contacts',
  label: 'Contacts',
  icon: 'users'
}, {
  id: 'calls',
  label: 'Calls',
  icon: 'phone',
  badge: 3
}, {
  id: 'chat',
  label: 'Chat',
  icon: 'chat',
  badge: '•',
  badgeTone: 'info'
}, {
  id: 'calendar',
  label: 'Calendar',
  icon: 'calendar'
}];
const SECONDARY_NAV = [{
  id: 'reports',
  label: 'Reports',
  icon: 'pieChart'
}, {
  id: 'voicemail',
  label: 'Voicemail',
  icon: 'voicemail'
}, {
  id: 'workflows',
  label: 'Workflows',
  icon: 'zap'
}];
function Sidebar({
  page,
  setPage
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      flexShrink: 0,
      background: '#fff',
      borderRight: '1px solid #DEDFE4',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      borderBottom: '1px solid #EAEBEF'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: '#005FEC',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: 'Mona Sans',
      fontWeight: 900,
      fontSize: 16
    }
  }, "S"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Mona Sans',
      fontWeight: 900,
      fontSize: 18,
      color: '#0B1029',
      letterSpacing: '-.3px'
    }
  }, "Sedona")), /*#__PURE__*/React.createElement("button", {
    style: {
      margin: 12,
      padding: '10px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: '#F7F8FA',
      border: '1px solid #EAEBEF',
      borderRadius: 8,
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 6,
      background: '#FFA238',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 12
    }
  }, "NX"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      fontWeight: 700,
      color: '#0B1029'
    }
  }, "Nextiva HQ"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      color: '#7A7D8C'
    }
  }, "Pro \xB7 84 seats")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronDown",
    size: 14,
    color: "#7A7D8C"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: '4px 8px',
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(SidebarSection, {
    title: "Workspace"
  }), NAV_ITEMS.map(it => /*#__PURE__*/React.createElement(SidebarItem, {
    key: it.id,
    item: it,
    active: page === it.id,
    onClick: () => setPage(it.id)
  })), /*#__PURE__*/React.createElement(SidebarSection, {
    title: "Insights"
  }), SECONDARY_NAV.map(it => /*#__PURE__*/React.createElement(SidebarItem, {
    key: it.id,
    item: it,
    active: page === it.id,
    onClick: () => setPage(it.id)
  })), /*#__PURE__*/React.createElement(SidebarSection, {
    title: "Spaces"
  }), [{
    label: 'Account team',
    color: '#005FEC'
  }, {
    label: 'Customer success',
    color: '#20BA75'
  }, {
    label: 'Engineering #ops',
    color: '#7B61FF'
  }, {
    label: 'Onboarding 2026',
    color: '#F47822'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      padding: '7px 10px 7px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      borderRadius: 6,
      fontFamily: 'Lato',
      fontSize: 13,
      color: '#222648',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = '#F7F8FA',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: s.color
    }
  }), s.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid #EAEBEF',
      padding: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Maya Chen",
    status: "online",
    size: 32,
    color: "#005FEC"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      fontWeight: 700,
      color: '#0B1029'
    }
  }, "Maya Chen"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 11,
      color: '#20BA75'
    }
  }, "Available")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "settings",
    size: 32
  })));
}
function SidebarSection({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 12px 6px',
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      color: '#7A7D8C',
      letterSpacing: '.6px',
      textTransform: 'uppercase'
    }
  }, title);
}
function SidebarItem({
  item,
  active,
  onClick
}) {
  const [hover, setHover] = useStateShell(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: '100%',
      height: 36,
      padding: '0 10px 0 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: active ? '#E2F2FF' : hover ? '#F7F8FA' : 'transparent',
      color: active ? '#005FEC' : '#222648',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontFamily: 'Lato',
      fontSize: 14,
      fontWeight: active ? 700 : 500,
      textAlign: 'left',
      position: 'relative'
    }
  }, active && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -8,
      top: 6,
      bottom: 6,
      width: 3,
      background: '#005FEC',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: item.icon,
    size: 18,
    strokeWidth: active ? 2 : 1.75
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, item.label), item.badge !== undefined && (item.badge === '•' ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: '#20BA75'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 20,
      height: 18,
      padding: '0 6px',
      background: active ? '#005FEC' : '#EAEBEF',
      color: active ? '#fff' : '#54687F',
      borderRadius: 999,
      fontFamily: 'Lato',
      fontSize: 11,
      fontWeight: 700,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, item.badge)));
}

/* ───────── TopBar ───────── */
function TopBar({
  title,
  subtitle,
  actions
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      flexShrink: 0,
      padding: '0 24px',
      background: '#fff',
      borderBottom: '1px solid #DEDFE4',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 20,
      color: '#0B1029',
      letterSpacing: '-.2px'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Lato',
      fontSize: 12,
      color: '#7A7D8C',
      marginTop: 1
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 480,
      marginLeft: 24
    }
  }, /*#__PURE__*/React.createElement(Input, {
    leadingIcon: "search",
    placeholder: "Search contacts, calls, messages\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), actions, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    title: "Notifications"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 28,
      background: '#EAEBEF'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 4px 0 8px',
      border: '1px solid #DEDFE4',
      borderRadius: 999,
      height: 36
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: '#20BA75'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Lato',
      fontSize: 13,
      fontWeight: 700,
      color: '#0B1029'
    }
  }, "Available"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronDown",
    size: 14,
    color: "#7A7D8C"
  })));
}
Object.assign(window, {
  Sidebar,
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sedona-app/shell.jsx", error: String((e && e.message) || e) }); }

})();
