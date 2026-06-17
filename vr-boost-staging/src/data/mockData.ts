export const visits = [
  {
    id: 1,
    client: "Youssef Alami",
    type: "Apartment",
    address: "12 Rue de la Paix, Rabat 10000, Morocco",
    rooms: ["Living Room", "Bedroom", "Kitchen"],
    status: "not-started" as const,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&q=80",
    avatars: ["https://i.pravatar.cc/32?img=1"],
  },
  {
    id: 2,
    client: "Layla El Idrissi",
    type: "Apartment",
    address: "45 Rue des Oliviers, Casablanca 20200, Morocco",
    rooms: ["Kitchen"],
    status: "pending" as const,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&q=80",
    avatars: ["https://i.pravatar.cc/32?img=2", "https://i.pravatar.cc/32?img=3"],
  },
  {
    id: 3,
    client: "Ahmed Benali",
    type: "Villa",
    address: "87 Avenue Hassan II, Marrakesh 40000, Morocco",
    rooms: ["Living Room"],
    status: "completed" as const,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&q=80",
    avatars: ["https://i.pravatar.cc/32?img=4", "https://i.pravatar.cc/32?img=5"],
  },
];

export const meetings = [
  {
    id: 1,
    group: "Today",
    date: "Monday, June 9",
    time: "10:00 AM",
    client: "Youssef Alami",
    clientEmail: "y.alami@email.com",
    address: "12 Rue de la Paix, Rabat",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&q=80",
    status: "upcoming" as const,
  },
  {
    id: 2,
    group: "Today",
    date: "Monday, June 9",
    time: "2:00 PM",
    client: "Layla El Idrissi",
    clientEmail: "l.elidrissi@email.com",
    address: "45 Rue des Oliviers, Casablanca",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&q=80",
    status: "upcoming" as const,
  },
  {
    id: 3,
    group: "Tomorrow",
    date: "Tuesday, June 10",
    time: "11:00 AM",
    client: "Ahmed Benali",
    clientEmail: "a.benali@email.com",
    address: "87 Avenue Hassan II, Marrakesh",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&q=80",
    status: "upcoming" as const,
  },
];

export const notifications = [
  {
    id: 1,
    text: "New visit request from Youssef Alami",
    time: "2 min ago",
    image: "https://i.pravatar.cc/32?img=1",
    unread: true,
  },
  {
    id: 2,
    text: "Meeting confirmed for tomorrow 11:00 AM",
    time: "1 hour ago",
    image: "https://i.pravatar.cc/32?img=4",
    unread: true,
  },
  {
    id: 3,
    text: "Ahmed Benali visit completed",
    time: "3 hours ago",
    image: "https://i.pravatar.cc/32?img=5",
    unread: false,
  },
];

export const messages = [
  {
    id: 1,
    sender: "Youssef Alami",
    preview: "Bonjour, est-ce que la visite virtuelle...",
    time: "10:32",
    avatar: "https://i.pravatar.cc/32?img=1",
    unread: true,
  },
  {
    id: 2,
    sender: "Layla El Idrissi",
    preview: "Merci pour la démonstration hier!",
    time: "09:15",
    avatar: "https://i.pravatar.cc/32?img=2",
    unread: true,
  },
  {
    id: 3,
    sender: "Ahmed Benali",
    preview: "Pouvez-vous ajouter le salon principal?",
    time: "Hier",
    avatar: "https://i.pravatar.cc/32?img=4",
    unread: false,
  },
  {
    id: 4,
    sender: "Sara Mansouri",
    preview: "Le catalogue est disponible?",
    time: "Lun",
    avatar: "https://i.pravatar.cc/32?img=6",
    unread: false,
  },
];

export const teamMembers = [
  { id: 1, name: "Ali Hraich", role: "Admin", avatar: "https://i.pravatar.cc/40?img=7" },
  { id: 2, name: "Sara Mansouri", role: "Designer", avatar: "https://i.pravatar.cc/40?img=6" },
  { id: 3, name: "Karim Tazi", role: "Developer", avatar: "https://i.pravatar.cc/40?img=8" },
  { id: 4, name: "Nadia Chraibi", role: "Sales", avatar: "https://i.pravatar.cc/40?img=9" },
  { id: 5, name: "Omar Fassi", role: "Support", avatar: "https://i.pravatar.cc/40?img=10" },
  { id: 6, name: "Khadija Berrada", role: "Support", avatar: "https://i.pravatar.cc/40?img=11" },
];