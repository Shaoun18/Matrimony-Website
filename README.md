## Matrimony Website

A simple Matrimony website built with PHP and MySQL. Users can register, login, view, and update their profile dynamically.  

## Features

- User Registration
- User Login
- Session-based Authentication
- Dynamic User Profile Display
- Profile Picture Upload
- Gallery Section


## Technologies Used

- **Backend:** PHP, MySQL
- **Frontend:** HTML, CSS, Bootstrap
- **Libraries:** Lightbox, Venobox, Slick, FontAwesome


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


## File Structure

    ```

    Matrimony-Website/
    │
    ├── css/
    │   ├── style.css
    │   ├── responsive.css
    │   ├── userProfile.css
    │   └── ... (other CSS files)
    │
    ├── images/
    │   ├── zibonShathi.png
    │   ├── default-avatar.png
    │   ├── gallery/
    │   │   └── ... (gallery images)
    │   └── ... (other images)
    │
    ├── js/
    │   ├── jquery.js
    │   ├── bootstrap.js
    │   ├── lightbox.js
    │   └── ... (other JS files)
    │
    ├── login.php
    ├── login_user.html
    ├── home.php
    ├── profile.php
    ├── logout.php
    └── README.md


    ```

## Usage

1. Register a new user or use existing credentials.
2. Login using username and password.
3. View your profile dynamically on `home.php`.
4. Logout using the Logout button.
