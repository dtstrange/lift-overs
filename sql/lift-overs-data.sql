USE liftovers_db;

INSERT INTO users (user_first_name, user_last_name, user_phone, user_email, user_password, user_type)
VALUES ("Susan", "Driver", "(714) 000-0000", "susan@susan.com", "Password", "driver");

INSERT INTO drivers (driver_monday, driver_tuesday, driver_wednesday, driver_thursday, driver_friday, driver_saturday, driver_sunday, driver_status_override)
VALUES ("available", "available", "available", "available","available", "available", "available", "available");

INSERT INTO users (user_first_name, user_last_name, user_phone, user_email, user_password, user_type)
VALUES ("Mary", "Driver", "(714) 000-0000", "mary@mary.com", "Password", "driver");

INSERT INTO drivers (driver_monday, driver_tuesday, driver_wednesday, driver_thursday, driver_friday, driver_saturday, driver_sunday, driver_status_override)
VALUES ("available", "not available", "available", "available","available", "available", "available", "available");

INSERT INTO users (user_first_name, user_last_name, user_phone, user_email, user_password, user_type)
VALUES ("John", "Driver", "(714) 000-0000", "john@john.com", "Password", "driver");

INSERT INTO drivers (driver_monday, driver_tuesday, driver_wednesday, driver_thursday, driver_friday, driver_saturday, driver_sunday, driver_status_override)
VALUES ("available", "available", "not available", "available","available", "available", "available", "available");

INSERT INTO users (user_first_name, user_last_name, user_phone, user_email, user_password, user_type)
VALUES ("Mike", "Receiver", "(714) 000-0000", "mike@mike.com", "Password", "receiver");

INSERT INTO users (user_first_name, user_last_name, user_phone, user_email, user_password, user_type)
VALUES ("Anna", "Receiver", "(714) 000-0000", "anna@anna.com", "Password", "receiver");

INSERT INTO organizations ( 
	organization_name,
    organization_street_address,
    organization_city,
    organization_state,
    organization_zip,
    organization_contact,
    organization_website,
    organization_phone,
    organization_description,
    organization_type
    )
VALUES (
	"Annas Receivers",
    "100 Anna Street",
    "Anna Town",
    "CA",
    "00000-0000",
    "Mike",
    "www.anna.com",
    "(111) 111-1111",
    "Anna does great work.",
    "receiver"
    );

INSERT INTO users (user_first_name, user_last_name, user_phone, user_email, user_password, user_type)
VALUES ("David", "Receiver", "(714) 000-0000", "david@david.com", "Password", "receiver");

INSERT INTO organizations ( 
	organization_name,
    organization_street_address,
    organization_city,
    organization_state,
    organization_zip,
    organization_contact,
    organization_website,
    organization_phone,
    organization_description,
    organization_type
    )
VALUES (
	"Davids Receivers",
    "100 David Street",
    "David Town",
    "CA",
    "00000-0000",
    "David",
    "www.david.com",
    "(111) 111-1111",
    "David does great work.",
    "receiver"
    );

INSERT INTO users (user_first_name, user_last_name, user_phone, user_email, user_password, user_type)
VALUES ("Bob", "Supplier", "(714) 000-0000", "bob@bob.com", "Password", "supplier");

INSERT INTO organizations ( 
	organization_name,
    organization_street_address,
    organization_city,
    organization_state,
    organization_zip,
    organization_contact,
    organization_website,
    organization_phone,
    organization_description,
    organization_type
    )
VALUES (
	"Bobs Suppliers",
    "100 Bob Street",
    "Bob Town",
    "CA",
    "00000-0000",
    "Bob",
    "www.bob.com",
    "(111) 111-1111",
    "Bob does great work.",
    "supplier"
    );

INSERT INTO users (user_first_name, user_last_name, user_phone, user_email, user_password, user_type)
VALUES ("Jessica", "Supplier", "(714) 000-0000", "jessica@jessica.com", "Password", "supplier");

INSERT INTO organizations ( 
	organization_name,
    organization_street_address,
    organization_city,
    organization_state,
    organization_zip,
    organization_contact,
    organization_website,
    organization_phone,
    organization_description,
    organization_type
    )
VALUES (
	"Jessicas Suppliers",
    "100 Jessica Street",
    "Jessica Town",
    "CA",
    "00000-0000",
    "Jessica",
    "www.jessica.com",
    "(111) 111-1111",
    "Jessica does great work.",
    "supplier"
    );

INSERT INTO users (user_first_name, user_last_name, user_phone, user_email, user_password, user_type)
VALUES ("Tim", "Supplier", "(714) 000-0000", "tim@tim.com", "Password", "supplier");

INSERT INTO organizations ( 
	organization_name,
    organization_street_address,
    organization_city,
    organization_state,
    organization_zip,
    organization_contact,
    organization_website,
    organization_phone,
    organization_description,
    organization_type
    )
VALUES (
	"Tims Suppliers",
    "100 Tim Street",
    "Tim Town",
    "CA",
    "00000-0000",
    "Bob",
    "www.tim.com",
    "(111) 111-1111",
    "Tim does great work.",
    "supplier"
    );
    
INSERT INTO pickups (pickup_status) VALUES ("available");
INSERT INTO pickups (pickup_status) VALUES ("not available");
INSERT INTO pickups (pickup_status) VALUES ("available");
INSERT INTO pickups (pickup_status) VALUES ("not available");