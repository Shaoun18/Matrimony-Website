Here’s a clean **README.md** for your project:

````markdown
# Matrimony Website

A simple Matrimony website built with PHP and MySQL. Users can register, login, view, and update their profile dynamically.  

---

## Features

- User Registration
- User Login
- Session-based Authentication
- Dynamic User Profile Display
- Profile Picture Upload
- Gallery Section

---

## Technologies Used

- **Backend:** PHP, MySQL
- **Frontend:** HTML, CSS, Bootstrap
- **Libraries:** Lightbox, Venobox, Slick, FontAwesome

---

## Database Setup

1. Create a MySQL database:

```sql
CREATE DATABASE login_page;
````

2. Create the `userTable` table:

```sql
CREATE TABLE userTable (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    gender VARCHAR(10),
    age INT,
    height VARCHAR(10),
    occupation VARCHAR(50),
    avatar VARCHAR(255) DEFAULT 'images/default.png'
);
```

3. Insert sample user (passwords are plain text in this example; for production, use `password_hash()`):

```sql
INSERT INTO userTable (name, email, password, gender, age, height, occupation)
VALUES ('John Doe', 'john@example.com', '123456', 'Male', 30, '5.9', 'Engineer');
```

---

## Installation

1. Clone the project to your local server (e.g., `htdocs` for XAMPP or `www` for Laragon):

```bash
git clone <repository-url>
```

2. Make sure the database credentials in `login.php` and `home.php` match your MySQL setup:

```php
$conn = mysqli_connect('localhost', 'root', '', 'login_page');
```

3. Open the browser and navigate to:

```
http://localhost/Matrimony-Website/login_user.html
```

---

## File Structure

```
Matrimony-Website/
├── css/
│   └── style.css, responsive.css, userProfile.css, etc.
├── images/
│   └── zibonshathi.png, default avatar, gallery images
├── js/
│   └── jquery, lightbox, bootstrap
├── login.php
├── login_user.html
├── home.php
├── profile.php
├── logout.php
└── README.md
```

---

## Usage

1. Register a new user or use existing credentials.
2. Login using username and password.
3. View your profile dynamically on `home.php`.
4. Logout using the Logout button.
