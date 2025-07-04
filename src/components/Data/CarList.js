
const cars = [
  {
    id: 1,
    name: "Toyota Camry 2024",
    type: "Sedan",
    location: "Downtown",
    pricePerDay: 89,
    rating: 4.8,
    reviews: 127,
    passengers: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    available: true,
    features: ["GPS", "Bluetooth", "AC", "USB Charging"],
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop&blur=1",
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop&sat=1.2"
    ],
    description: "Experience efficiency and reliability with the Toyota Camry 2024. This hybrid sedan combines excellent fuel economy with modern comfort features and advanced safety technology.",
    specifications: {
      year: "2024",
      engine: "2.5L Hybrid",
      range: "686 miles",
      acceleration: "0-60 mph in 7.5s",
      topSpeed: "115 mph",
      charging: "Self-Charging Hybrid"
    },
    amenities: [
      { icon: "Navigation", name: "GPS Navigation" },
      { icon: "Bluetooth", name: "Bluetooth" },
      { icon: "Snowflake", name: "Climate Control" },
      { icon: "Zap", name: "USB Charging" },
      { icon: "Radio", name: "Audio System" },
      { icon: "Shield", name: "Safety Features" }
    ],
    owner: {
      name: "City Car Rentals",
      rating: 4.7,
      responseTime: "Within 2 hours",
      phone: "+1 (555) 234-5678",
      email: "info@citycarrentals.com"
    }
  },
  {
    id: 2,
    name: "BMW X5 2024",
    type: "SUV",
    location: "Airport",
    pricePerDay: 149,
    rating: 4.9,
    reviews: 89,
    passengers: 7,
    transmission: "Automatic",
    fuel: "Gasoline",
    available: true,
    features: ["GPS", "Leather Seats", "Sunroof", "Premium Audio"],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&blur=1",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&sat=1.2"
    ],
    description: "Drive in luxury with the BMW X5 2024. This premium SUV offers spacious seating for 7, advanced technology, and exceptional performance for both city and highway driving.",
    specifications: {
      year: "2024",
      engine: "3.0L TwinPower Turbo",
      range: "450 miles",
      acceleration: "0-60 mph in 5.3s",
      topSpeed: "155 mph",
      charging: "N/A"
    },
    amenities: [
      { icon: "Navigation", name: "GPS Navigation" },
      { icon: "Sun", name: "Panoramic Sunroof" },
      { icon: "Radio", name: "Premium Audio" },
      { icon: "Armchair", name: "Leather Seating" },
      { icon: "Snowflake", name: "Climate Control" },
      { icon: "Wifi", name: "BMW Connected" }
    ],
    owner: {
      name: "Luxury Auto Rentals",
      rating: 4.9,
      responseTime: "Within 1 hour",
      phone: "+1 (555) 345-6789",
      email: "premium@luxuryautorentals.com"
    }
  },
  {
    id: 3,
    name: "Tesla Model 3",
    type: "Electric",
    location: "City Center",
    pricePerDay: 119,
    rating: 4.7,
    reviews: 203,
    passengers: 5,
    transmission: "Automatic",
    fuel: "Electric",
    available: false,
    features: ["Autopilot", "Supercharging", "Premium Interior", "Glass Roof"],
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop&blur=1",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop&sat=1.2"
    ],
    description: "Experience the future of driving with the Tesla Model 3. This electric sedan combines cutting-edge autopilot technology, zero emissions, and impressive performance in a sleek package.",
    specifications: {
      year: "2024",
      engine: "Electric Motor",
      range: "358 miles",
      acceleration: "0-60 mph in 4.2s",
      topSpeed: "162 mph",
      charging: "Supercharger Compatible"
    },
    amenities: [
      { icon: "Zap", name: "Autopilot" },
      { icon: "Battery", name: "Supercharging" },
      { icon: "Sun", name: "Glass Roof" },
      { icon: "Monitor", name: "Premium Interior" },
      { icon: "Wifi", name: "Connected Services" },
      { icon: "Snowflake", name: "Climate Control" }
    ],
    owner: {
      name: "EV Rentals Pro",
      rating: 4.8,
      responseTime: "Within 30 minutes",
      phone: "+1 (555) 456-7890",
      email: "tesla@evrentalspro.com"
    }
  },
  {
    id: 4,
    name: "Honda Civic 2024",
    type: "Compact",
    location: "Downtown",
    pricePerDay: 65,
    rating: 4.6,
    reviews: 156,
    passengers: 5,
    transmission: "Manual",
    fuel: "Gasoline",
    available: true,
    features: ["Bluetooth", "AC", "Backup Camera", "USB Ports"],
    images: [
      "https://images.unsplash.com/photo-1540431657627-415fdd6c3cee?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1540431657627-415fdd6c3cee?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1540431657627-415fdd6c3cee?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop",
    ],
    description: "Perfect for city driving, the Honda Civic 2024 offers excellent fuel efficiency, reliable performance, and modern safety features in an affordable compact package.",
    specifications: {
      year: "2024",
      engine: "2.0L 4-Cylinder",
      range: "380 miles",
      acceleration: "0-60 mph in 7.8s",
      topSpeed: "125 mph",
      charging: "N/A"
    },
    amenities: [
      { icon: "Bluetooth", name: "Bluetooth" },
      { icon: "Snowflake", name: "Air Conditioning" },
      { icon: "Camera", name: "Backup Camera" },
      { icon: "Zap", name: "USB Ports" },
      { icon: "Radio", name: "Audio System" },
      { icon: "Shield", name: "Honda Sensing" }
    ],
    owner: {
      name: "Budget Car Solutions",
      rating: 4.5,
      responseTime: "Within 3 hours",
      phone: "+1 (555) 567-8901",
      email: "rentals@budgetcarsolutions.com"
    }
  },
  {
    id: 5,
    name: "Mercedes C-Class",
    type: "Luxury",
    location: "Luxury District",
    pricePerDay: 179,
    rating: 4.9,
    reviews: 74,
    passengers: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    available: true,
    features: ["Premium Sound", "Leather", "Navigation", "Ambient Lighting"],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop&blur=1",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop&sat=1.2"
    ],
    description: "Indulge in German luxury with the Mercedes C-Class. This premium sedan features exquisite craftsmanship, advanced technology, and unparalleled comfort for the discerning driver.",
    specifications: {
      year: "2024",
      engine: "2.0L Turbo 4-Cylinder",
      range: "420 miles",
      acceleration: "0-60 mph in 5.9s",
      topSpeed: "155 mph",
      charging: "N/A"
    },
    amenities: [
      { icon: "Radio", name: "Premium Sound" },
      { icon: "Armchair", name: "Leather Seats" },
      { icon: "Navigation", name: "MBUX Navigation" },
      { icon: "Lightbulb", name: "Ambient Lighting" },
      { icon: "Snowflake", name: "Climate Control" },
      { icon: "Wifi", name: "Mercedes me" }
    ],
    owner: {
      name: "Elite Luxury Cars",
      rating: 4.9,
      responseTime: "Within 1 hour",
      phone: "+1 (555) 678-9012",
      email: "concierge@eliteluxurycars.com"
    }
  },
  {
    id: 6,
    name: "Jeep Wrangler",
    type: "Off-Road",
    location: "Adventure Base",
    pricePerDay: 95,
    rating: 4.5,
    reviews: 98,
    passengers: 4,
    transmission: "Manual",
    fuel: "Gasoline",
    available: true,
    features: ["4WD", "Removable Top", "All-Terrain", "Rock Rails"],
    images: [
      "https://images.unsplash.com/photo-1579044587961-5e370f6080bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1579044587961-5e370f6080bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1579044587961-5e370f6080bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop",
    ],
    description: "Conquer any terrain with the iconic Jeep Wrangler. Built for adventure, this rugged off-road vehicle features removable doors and roof for the ultimate outdoor experience.",
    specifications: {
      year: "2024",
      engine: "3.6L V6",
      range: "340 miles",
      acceleration: "0-60 mph in 6.5s",
      topSpeed: "112 mph",
      charging: "N/A"
    },
    amenities: [
      { icon: "Mountain", name: "4WD Capability" },
      { icon: "Sun", name: "Removable Top" },
      { icon: "Compass", name: "All-Terrain Tires" },
      { icon: "Shield", name: "Rock Rails" },
      { icon: "Radio", name: "Alpine Audio" },
      { icon: "Zap", name: "USB Charging" }
    ],
    owner: {
      name: "Adventure Rentals",
      rating: 4.6,
      responseTime: "Within 2 hours",
      phone: "+1 (555) 789-0123",
      email: "adventure@adventurerentals.com"
    }
  },
  {
    id: 7,
    name: "Toyota Camry 2024",
    type: "Sedan",
    location: "Downtown",
    pricePerDay: 89,
    rating: 4.8,
    reviews: 127,
    passengers: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    available: true,
    features: ["GPS", "Bluetooth", "AC", "USB Charging"],
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop&blur=1",
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop&sat=1.2"
    ],
    description: "Experience efficiency and reliability with the Toyota Camry 2024. This hybrid sedan combines excellent fuel economy with modern comfort features and advanced safety technology.",
    specifications: {
      year: "2024",
      engine: "2.5L Hybrid",
      range: "686 miles",
      acceleration: "0-60 mph in 7.5s",
      topSpeed: "115 mph",
      charging: "Self-Charging Hybrid"
    },
    amenities: [
      { icon: "Navigation", name: "GPS Navigation" },
      { icon: "Bluetooth", name: "Bluetooth" },
      { icon: "Snowflake", name: "Climate Control" },
      { icon: "Zap", name: "USB Charging" },
      { icon: "Radio", name: "Audio System" },
      { icon: "Shield", name: "Safety Features" }
    ],
    owner: {
      name: "Metro Car Rentals",
      rating: 4.7,
      responseTime: "Within 2 hours",
      phone: "+1 (555) 890-1234",
      email: "service@metrocarrentals.com"
    }
  },
  {
    id: 8,
    name: "BMW X5 2024",
    type: "SUV",
    location: "Airport",
    pricePerDay: 149,
    rating: 4.9,
    reviews: 89,
    passengers: 7,
    transmission: "Automatic",
    fuel: "Gasoline",
    available: true,
    features: ["GPS", "Leather Seats", "Sunroof", "Premium Audio"],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&blur=1",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&sat=1.2"
    ],
    description: "Drive in luxury with the BMW X5 2024. This premium SUV offers spacious seating for 7, advanced technology, and exceptional performance for both city and highway driving.",
    specifications: {
      year: "2024",
      engine: "3.0L TwinPower Turbo",
      range: "450 miles",
      acceleration: "0-60 mph in 5.3s",
      topSpeed: "155 mph",
      charging: "N/A"
    },
    amenities: [
      { icon: "Navigation", name: "GPS Navigation" },
      { icon: "Sun", name: "Panoramic Sunroof" },
      { icon: "Radio", name: "Premium Audio" },
      { icon: "Armchair", name: "Leather Seating" },
      { icon: "Snowflake", name: "Climate Control" },
      { icon: "Wifi", name: "BMW Connected" }
    ],
    owner: {
      name: "Airport Luxury Rentals",
      rating: 4.8,
      responseTime: "Within 1 hour",
      phone: "+1 (555) 901-2345",
      email: "airport@luxuryrentals.com"
    }
  },
  {
    id: 9,
    name: "Tesla Model 3",
    type: "Electric",
    location: "City Center",
    pricePerDay: 119,
    rating: 4.7,
    reviews: 203,
    passengers: 5,
    transmission: "Automatic",
    fuel: "Electric",
    available: false,
    features: ["Autopilot", "Supercharging", "Premium Interior", "Glass Roof"],
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop&blur=1",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop&sat=1.2"
    ],
    description: "Experience the future of driving with the Tesla Model 3. This electric sedan combines cutting-edge autopilot technology, zero emissions, and impressive performance in a sleek package.",
    specifications: {
      year: "2024",
      engine: "Electric Motor",
      range: "358 miles",
      acceleration: "0-60 mph in 4.2s",
      topSpeed: "162 mph",
      charging: "Supercharger Compatible"
    },
    amenities: [
      { icon: "Zap", name: "Autopilot" },
      { icon: "Battery", name: "Supercharging" },
      { icon: "Sun", name: "Glass Roof" },
      { icon: "Monitor", name: "Premium Interior" },
      { icon: "Wifi", name: "Connected Services" },
      { icon: "Snowflake", name: "Climate Control" }
    ],
    owner: {
      name: "Green Drive Rentals",
      rating: 4.8,
      responseTime: "Within 30 minutes",
      phone: "+1 (555) 012-3456",
      email: "eco@greendriverentals.com"
    }
  },
  {
    id: 10,
    name: "Honda Civic 2024",
    type: "Compact",
    location: "Downtown",
    pricePerDay: 65,
    rating: 4.6,
    reviews: 156,
    passengers: 5,
    transmission: "Manual",
    fuel: "Gasoline",
    available: true,
    features: ["Bluetooth", "AC", "Backup Camera", "USB Ports"],
    images: [
      "https://images.unsplash.com/photo-1540431657627-415fdd6c3cee?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1540431657627-415fdd6c3cee?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1540431657627-415fdd6c3cee?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop",
    ],
    description: "Perfect for city driving, the Honda Civic 2024 offers excellent fuel efficiency, reliable performance, and modern safety features in an affordable compact package.",
    specifications: {
      year: "2024",
      engine: "2.0L 4-Cylinder",
      range: "380 miles",
      acceleration: "0-60 mph in 7.8s",
      topSpeed: "125 mph",
      charging: "N/A"
    },
    amenities: [
      { icon: "Bluetooth", name: "Bluetooth" },
      { icon: "Snowflake", name: "Air Conditioning" },
      { icon: "Camera", name: "Backup Camera" },
      { icon: "Zap", name: "USB Ports" },
      { icon: "Radio", name: "Audio System" },
      { icon: "Shield", name: "Honda Sensing" }
    ],
    owner: {
      name: "Affordable Auto Rentals",
      rating: 4.4,
      responseTime: "Within 3 hours",
      phone: "+1 (555) 123-4567",
      email: "budget@affordableauto.com"
    }
  },
  {
    id: 11,
    name: "Mercedes C-Class",
    type: "Luxury",
    location: "Luxury District",
    pricePerDay: 179,
    rating: 4.9,
    reviews: 74,
    passengers: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    available: true,
    features: ["Premium Sound", "Leather", "Navigation", "Ambient Lighting"],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop&blur=1",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop&sat=1.2"
    ],
    description: "Indulge in German luxury with the Mercedes C-Class. This premium sedan features exquisite craftsmanship, advanced technology, and unparalleled comfort for the discerning driver.",
    specifications: {
      year: "2024",
      engine: "2.0L Turbo 4-Cylinder",
      range: "420 miles",
      acceleration: "0-60 mph in 5.9s",
      topSpeed: "155 mph",
      charging: "N/A"
    },
    amenities: [
      { icon: "Radio", name: "Premium Sound" },
      { icon: "Armchair", name: "Leather Seats" },
      { icon: "Navigation", name: "MBUX Navigation" },
      { icon: "Lightbulb", name: "Ambient Lighting" },
      { icon: "Snowflake", name: "Climate Control" },
      { icon: "Wifi", name: "Mercedes me" }
    ],
    owner: {
      name: "Prestige Car Collection",
      rating: 4.9,
      responseTime: "Within 1 hour",
      phone: "+1 (555) 234-5678",
      email: "vip@prestigecars.com"
    }
  },
  {
    id: 12,
    name: "Jeep Wrangler",
    type: "Off-Road",
    location: "Adventure Base",
    pricePerDay: 95,
    rating: 4.5,
    reviews: 98,
    passengers: 4,
    transmission: "Manual",
    fuel: "Gasoline",
    available: true,
    features: ["4WD", "Removable Top", "All-Terrain", "Rock Rails"],
    images: [
      "https://images.unsplash.com/photo-1579044587961-5e370f6080bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1579044587961-5e370f6080bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1579044587961-5e370f6080bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop",
    ],
    description: "Conquer any terrain with the iconic Jeep Wrangler. Built for adventure, this rugged off-road vehicle features removable doors and roof for the ultimate outdoor experience.",
    specifications: {
      year: "2024",
      engine: "3.6L V6",
      range: "340 miles",
      acceleration: "0-60 mph in 6.5s",
      topSpeed: "112 mph",
      charging: "N/A"
    },
    amenities: [
      { icon: "Mountain", name: "4WD Capability" },
      { icon: "Sun", name: "Removable Top" },
      { icon: "Compass", name: "All-Terrain Tires" },
      { icon: "Shield", name: "Rock Rails" },
      { icon: "Radio", name: "Alpine Audio" },
      { icon: "Zap", name: "USB Charging" }
    ],
    owner: {
      name: "Outdoor Adventures Inc",
      rating: 4.5,
      responseTime: "Within 2 hours",
      phone: "+1 (555) 345-6789",
      email: "trail@outdooradventures.com"
    }
  }
];

export default cars;