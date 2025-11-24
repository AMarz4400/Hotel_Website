# Hotel Management System 🏨

A full-stack web application designed to digitize hotel operations. This project provides distinct interfaces for Administrators and Receptionists to manage rooms and reservations efficiently.

Built using the **MERN Stack** (MongoDB, Express.js, React, Node.js).

## 🌟 Key Features

### 👨‍💼 Admin Panel (`/pagina-admin`)
* **Room Management:** Add, remove, and update hotel rooms details (ID, Name, Price).
* **Inventory Control:** Real-time view of room availability.
* **CRUD Operations:** Direct interaction with the backend API to modify database records.

### 🛎️ Receptionist Panel (`/pagina-receptionist`)
* **Reservation Tracking:** View all active and past reservations.
* **Check-in/Check-out:** Monitor room status (Active/Completed).
* **Filtered Views:** Quickly access active reservations vs. full history.

## 🛠️ Tech Stack

* **Frontend:** React.js, React Router (SPA Architecture)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (with Mongoose ODM)
* **Styling:** CSS3 (Custom styles)

## 📂 Project Structure

The repository is organized into a client-server architecture:

* `client/`: React frontend application.
* `server/`: Node.js/Express backend API.

## 🚀 Getting Started

### Prerequisites
* Node.js & npm installed
* MongoDB Atlas URI (or local instance)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/AMarz4400/hotel_website.git](https://github.com/AMarz4400/hotel_website.git)
    cd hotel_website
    ```

2.  **Setup Backend:**
    ```bash
    cd server
    npm install
    # Create a .env file and add your connection string:
    # MONGO_URI=your_mongodb_connection_string
    ```

3.  **Setup Frontend:**
    ```bash
    cd ../client
    npm install
    ```

### Running the Application

1.  **Start the Server:**
    ```bash
    # In server/ terminal
    node index.js
    # Server runs on http://localhost:8080
    ```

2.  **Start the Client:**
    ```bash
    # In client/ terminal
    npm start
    # App runs on http://localhost:3000
    ```

## 🛡️ Security Note
This project uses environment variables for database security. Ensure you create a `.env` file in the server directory as credentials are not included in the repository.

## 📜 License
This project is open source and available under the MIT License.