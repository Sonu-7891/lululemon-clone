# Lululemon Clone Project

This repository contains the source code for a **Lululemon.com** clone, designed to replicate the functionality and aesthetics of the original site. This project showcases the implementation of a responsive frontend, backend, and interactive features for e-commerce.

---

## Features

### **Frontend Features**
- Home page with dynamic categories (e.g., "Shop Popular Categories").
- Product listing by categories (e.g., Hoodies, Sweatshirts, Pants, etc.).
- Fully responsive design.
- Custom fonts and icons (FontAwesome integration).
- Video playback for promotional sections.



### **Functionalities**
- User profile management.
- Favorites (wishlist) system.
- Shopping cart functionality.
- Early access and membership feature simulation.

---

## Tech Stack

### **Frontend**
- React.js
- TailwindCSS for styling
- FontAwesome for icons
- React Router for navigation



### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/Sonu-7891/lululemon-clone.git
   cd lululemon-clone
   ```

2. Install dependencies for the frontend:
   ```bash
   cd frontend
   npm install
   ```

3. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```

### **Environment Variables**

Create a `.env` file in the `backend` directory and provide the following values:

```
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

### **Running the Project**


1. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

2. Open your browser and visit:
   ```

   http://localhost:3000
   ```

---

## Folder Structure

```
|-- frontend/
|   |-- public/
|   |-- src/
|       |-- components/
|       |-- pages/
|       |-- assets/
|       |-- App.js
|       |-- index.js
|
|-- backend/
|   |-- models/
|   |-- routes/
|   |-- controllers/
|   |-- server.js
|
|-- README.md
```

---

## Deployment

### **Frontend**
1. Build the frontend for production:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy the `build/` folder to a hosting provider like Vercel or Netlify.



## Screenshots

### **Home Page**
![Home Page](c:\Users\91789\Pictures\Screenshots\Screenshot 2024-12-12 154222.png)

### **Category Section**
![Category Section](c:\Users\91789\Pictures\Screenshots\Screenshot 2024-12-12 153920.png)

---

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin main
   ```
5. Create a Pull Request.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

- **Lululemon** for inspiration.
- Open-source libraries and tools used in this project.

---

## Contact

For questions or support, please email: your-email@example.com.

