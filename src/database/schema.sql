-- Users and Authentication
CREATE TABLE users (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    photo_url VARCHAR(255),
    role ENUM('admin', 'user') DEFAULT 'user',
    type ENUM('individual', 'company') NOT NULL,
    status ENUM('active', 'inactive', 'suspended') DEFAULT 'active',
    password_hash VARCHAR(255) NOT NULL, -- Added password hash
    email_verified BOOLEAN DEFAULT FALSE, -- Added email verification
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp(),
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
    last_login TIMESTAMP NULL -- Added last login tracking
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE company_profiles (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    business_name VARCHAR(255) NOT NULL,
    commercial_reg_no VARCHAR(100) NOT NULL,
    tax_number VARCHAR(100),
    address TEXT,
    city VARCHAR(100),
    country VARCHAR(100),
    website VARCHAR(255),
    industry VARCHAR(100), -- Added industry field
    company_size VARCHAR(50), -- Added company size
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp(),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE individual_profiles (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    national_id VARCHAR(100) NOT NULL,
    date_of_birth DATE,
    address TEXT,
    city VARCHAR(100),
    country VARCHAR(100),
    occupation VARCHAR(100), -- Added occupation
    education_level VARCHAR(100), -- Added education level
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp(),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Equipment Management
CREATE TABLE equipment (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    type ENUM('equipment', 'material') NOT NULL,
    specifications JSON,
    daily_price DECIMAL(10,2),
    weekly_price DECIMAL(10,2),
    monthly_price DECIMAL(10,2),
    fixed_price DECIMAL(10,2),
    available BOOLEAN DEFAULT true,
    quantity_available INT NOT NULL DEFAULT 1, -- Added quantity tracking
    maintenance_status ENUM('available', 'maintenance', 'repair') DEFAULT 'available', -- Added maintenance status
    image_url VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp(),
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Jobs and Applications
CREATE TABLE jobs (
    id VARCHAR(36) PRIMARY KEY,
    company_id VARCHAR(36) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255) NOT NULL,
    type ENUM('workers', 'technicians', 'administrators', 'engineers') NOT NULL,
    contract_type ENUM('full-time', 'part-time', 'temporary') NOT NULL,
    salary_range VARCHAR(100),
    required_number INT NOT NULL,
    requirements JSON,
    benefits JSON,
    skills_required JSON, -- Added required skills
    experience_years INT, -- Added experience requirement
    education_requirement VARCHAR(100), -- Added education requirement
    status ENUM('draft', 'open', 'closed', 'cancelled') DEFAULT 'draft',
    deadline DATE NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp(),
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
    FOREIGN KEY (company_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tenders and Submissions
CREATE TABLE tenders (
    id VARCHAR(36) PRIMARY KEY,
    tender_number VARCHAR(50) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    organization_id VARCHAR(36) NOT NULL,
    category ENUM('government', 'private', 'individual') NOT NULL,
    budget DECIMAL(15,2) NOT NULL,
    application_price DECIMAL(10,2) NOT NULL,
    status ENUM('draft', 'published', 'under_review', 'closed', 'awarded', 'cancelled') DEFAULT 'draft',
    submission_deadline DATETIME NOT NULL,
    evaluation_criteria JSON, -- Added evaluation criteria
    minimum_qualifications JSON, -- Added minimum qualifications
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp(),
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
    FOREIGN KEY (organization_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Notifications System
CREATE TABLE notifications (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    type ENUM('tender', 'result', 'news', 'job', 'system') NOT NULL,
    priority ENUM('low', 'medium', 'high') DEFAULT 'medium', -- Added priority levels
    read BOOLEAN DEFAULT false,
    action_url VARCHAR(255), -- Added action URL
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp(),
    expires_at TIMESTAMP NULL, -- Added expiration
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Audit Trail
CREATE TABLE audit_logs (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36),
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50) NOT NULL,
    entity_id VARCHAR(36) NOT NULL,
    old_values JSON,
    new_values JSON,
    ip_address VARCHAR(45),
    user_agent VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp(),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Improved Indexes
ALTER TABLE tenders ADD INDEX idx_status_deadline (status, submission_deadline);
ALTER TABLE jobs ADD INDEX idx_location_type (location, type);
ALTER TABLE equipment ADD INDEX idx_type_available (type, available);
ALTER TABLE notifications ADD INDEX idx_user_read_created (user_id, read, created_at);
ALTER TABLE audit_logs ADD INDEX idx_entity (entity_type, entity_id);