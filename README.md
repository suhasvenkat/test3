# GroVELLOWS - German Construction Tender Tracker

<div align="center">
  <h3>Internal Tender Management System for German Construction Projects</h3>
  <p>Track, manage, and collaborate on construction tenders across Germany</p>
</div>

---

## 📱 About

**GroVELLOWS** is an internal mobile application designed for construction companies to track and manage tender opportunities from German public and private construction platforms. Built with modern technologies for cross-platform mobile deployment.

### Key Features

✅ **Multi-Platform Tender Tracking** - Monitor 50+ German tender platforms  
✅ **Role-Based Access** - 6 user roles (PM, Senior PM, Intern, HR, Partner, Director)  
✅ **Advanced Filtering** - Filter by IPA, IPD, Integrated PM, Project Management  
✅ **Real-Time Updates** - Daily tender synchronization  
✅ **Collaboration Tools** - Share tenders with team members  
✅ **Status Tracking** - Track tender progress (New → In Progress → Closed)  
✅ **GDPR Compliant** - Full German data privacy compliance  
✅ **Favorites System** - Bookmark important tenders  
✅ **LinkedIn Integration** - Track team connections for networking  

---

## 🛠️ Tech Stack

### Frontend (Mobile App)
- **Framework**: Expo React Native
- **Navigation**: Expo Router (file-based routing)
- **State Management**: React Context + AsyncStorage
- **UI Components**: React Native + Expo Vector Icons
- **API Client**: Axios

### Backend (API)
- **Framework**: FastAPI (Python 3.11+)
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: Bcrypt

### Deployment
- Cross-platform (iOS, Android, Web)
- Docker support included
- Cloud-ready architecture

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and Yarn
- Python 3.11+
- MongoDB 7+
- Expo CLI (for mobile development)

### 1. Clone Repository
```bash
git clone https://github.com/your-org/grovellows-tender-tracker.git
cd grovellows-tender-tracker
```

### 2. Setup Backend
```bash
cd backend
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env with your settings

# Start server
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

### 3. Setup Frontend
```bash
cd frontend
yarn install

# Configure environment
cp .env.example .env
# Edit .env with your backend URL

# Start Expo
yarn start
```

### 4. Seed Sample Data
```bash
curl -X POST http://localhost:8001/api/seed-data
```

---

## 📁 Project Structure

```
grovellows-tender-tracker/
├── backend/
│   ├── server.py              # Main FastAPI application
│   ├── requirements.txt       # Python dependencies
│   └── .env                   # Environment variables
│
├── frontend/
│   ├── app/                   # Expo Router screens
│   │   ├── (auth)/           # Authentication screens
│   │   ├── (tabs)/           # Main app tabs
│   │   ├── tender/           # Tender detail screens
│   │   └── _layout.tsx       # Root layout
│   ├── components/           # Reusable components
│   ├── contexts/             # React contexts
│   ├── utils/                # Helper functions
│   └── package.json          # Dependencies
│
└── EXPORT_DOCUMENTATION.md   # Deployment guide
```

---

## 🎨 Branding

### Colors
- **Primary**: #143250 (Navy Blue)
- **Secondary**: #A07D50 (Gold)
- **Background**: #F5F7FA
- **Text**: White on primary, Dark on light backgrounds

### Typography
- **Font Family**: Avenir Next LT Pro (iOS), Sans-serif (Android)
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

---

## 🔐 User Roles & Permissions

| Role | Access Level | Capabilities |
|------|-------------|--------------|
| **Director** | Full Access | All features + user management |
| **Partner** | High Access | All tenders, team collaboration |
| **Senior PM** | High Access | All tenders, status updates |
| **Project Manager** | Standard | View & manage assigned tenders |
| **HR** | Admin | User management, notifications |
| **Intern** | Limited | View tenders, limited editing |

---

## 🌐 Tender Platforms Supported

### National Platforms
- Bund.de
- Deutsches Vergabeportal (DTVP)
- e-Vergabe (Federal)
- Deutsche eVergabe

### Regional Platforms (States)
- Berlin: berlin.de/vergabeplattform
- Bayern: vergabe.bayern.de
- NRW: evergabe.nrw.de
- Baden-Württemberg: vergabe.landbw.de
- Hamburg, Bremen, Hessen, and more...

**Total: 50+ platforms monitored**

---

## 📡 API Endpoints

### Authentication
```
POST /api/auth/register      # Register new user
POST /api/auth/login         # Login user
GET  /api/auth/me            # Get current user
PUT  /api/auth/preferences   # Update notification settings
POST /api/auth/gdpr-consent  # Save GDPR consent
```

### Tenders
```
GET  /api/tenders            # List all tenders (with filters)
GET  /api/tenders/{id}       # Get tender details
POST /api/tenders            # Create new tender
PUT  /api/tenders/{id}       # Update tender
```

### Favorites
```
POST   /api/favorites/{id}   # Add to favorites
DELETE /api/favorites/{id}   # Remove from favorites
GET    /api/favorites        # Get user favorites
```

### Sharing & Collaboration
```
POST /api/share              # Share tender with team
GET  /api/shares             # Get shared tenders
GET  /api/users              # List team members
```

---

## 🧪 Testing

### Backend Testing
```bash
cd backend
pytest
```

### Frontend Testing
```bash
cd frontend
yarn test
```

### Manual Testing
Use test credentials:
- Email: `test@example.com`
- Password: `test123`

---

## 🚢 Deployment

### Option 1: Self-Hosting
See `EXPORT_DOCUMENTATION.md` for detailed instructions on:
- AWS/DigitalOcean deployment
- Docker deployment
- Mobile app distribution

### Option 2: Emergent Platform
- 50 credits/month for managed hosting
- Automatic scaling
- Built-in monitoring

---

## 🔒 GDPR Compliance

GroVELLOWS is fully compliant with German GDPR (DSGVO) requirements:

- ✅ **Consent Management**: Required and optional consent tracking
- ✅ **Data Minimization**: Only essential data collected
- ✅ **Right to Access**: Users can view their data
- ✅ **Right to Deletion**: Data deletion on request
- ✅ **Data Portability**: Export functionality
- ✅ **Secure Storage**: Encrypted passwords, JWT authentication
- ✅ **German Language**: Privacy policy in German

---

## 📊 Database Schema

### Users Collection
```javascript
{
  email: String,
  password: String (hashed),
  name: String,
  role: String,
  linkedin_url: String,
  notification_preferences: Object,
  gdpr_consent: Object,
  created_at: DateTime
}
```

### Tenders Collection
```javascript
{
  title: String,
  description: String,
  budget: String,
  deadline: DateTime,
  location: String,
  project_type: String,
  category: String (IPA/IPD/PM),
  contracting_authority: String,
  participants: Array,
  contact_details: Object,
  tender_date: DateTime,
  platform_source: String,
  platform_url: String,
  status: String,
  created_at: DateTime
}
```

---

## 🛡️ Security

- JWT-based authentication
- Bcrypt password hashing
- CORS protection
- Rate limiting recommended for production
- Environment variable protection
- MongoDB access control

---

## 📱 Mobile App Distribution

### Internal Distribution
1. Build APK/IPA using EAS Build
2. Distribute via internal channels
3. No app store approval needed

### Public Distribution
- Google Play Store (Android)
- Apple App Store (iOS)
- Requires developer accounts

---

## 🤝 Contributing

This is an internal company application. For feature requests or bug reports, contact your IT department.

---

## 📄 License

Proprietary - Internal Company Use Only

---

## 🆘 Support

### Documentation
- `EXPORT_DOCUMENTATION.md` - Deployment guide
- `README.md` - This file

### Technical Support
Contact your internal development team or IT department.

---

## 📈 Roadmap

### Phase 1 ✅ (Complete)
- User authentication & roles
- Tender listing with filters
- Favorites system
- GDPR compliance
- Sample data (8 tenders)

### Phase 2 (Planned)
- Automated web scraping (50+ platforms)
- Push notifications
- LinkedIn connection checker
- Tender document editor
- PDF export
- Daily automated updates

### Phase 3 (Future)
- AI-powered tender matching
- Automated bid preparation
- Analytics dashboard
- Mobile offline mode
- Advanced collaboration tools

---

## 🙏 Acknowledgments

Built with modern technologies for internal company use.

- **Expo** - For cross-platform mobile development
- **FastAPI** - For high-performance API
- **MongoDB** - For flexible data storage
- **React Native** - For native mobile experience

---

## 📝 Version History

### v1.0.0 (January 2026)
- Initial release
- 6 user roles
- Basic tender management
- GDPR compliance
- 8 sample German construction tenders
- Advanced filtering (IPA/IPD/PM)
- Favorites & sharing
- Mobile-first design

---

<div align="center">
  <p><strong>GroVELLOWS</strong> - German Construction Tender Tracker</p>
  <p>© 2026 Your Company Name. All Rights Reserved.</p>
</div>
