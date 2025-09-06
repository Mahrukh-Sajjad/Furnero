# 🛋️ Furnero

Furnero is a React + Vite based frontend project that provides an e-commerce style interface with **login, signup, and logout functionality**. It lists products on the products page, allows users to view product details, and provides **admin functionality** to delete products.  
The project uses **Redux Toolkit** for state management and **JSON Server** as a mock backend.

---

## 🚀 Features

- 🔑 User authentication (Login, Signup, Logout) with Redux Toolkit  
- 📦 Product listing on the Products page  
- 📄 Product details view  
- 🗑️ Admin-only access to delete products  
- ⚡ State management with Redux Toolkit  
- 🗄️ Mock backend with JSON Server  

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite), React Router  
- **State Management:** Redux Toolkit  
- **Backend:** JSON Server (mock API)  
- **Styling:** CSS (or your preferred styling method)  

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/Mahrukh-Sajjad/Furnero.git

# 2. Go inside the project folder
cd furnero

# 3. Install dependencies
npm install

# 4. Start JSON Server (run this in the folder where db.json is located)
npx json-server --watch db.json --port 5000

# 5. In a new terminal, start the Vite development server
npm run dev
