🧾 Mini Project Documentation — Clothing Store CRUD System
📌 Project Overview
This project is a simple CRUD (Create, Read, Update, Delete) system built for managing the inventory of a clothing store.
 It allows users to:
Add new clothing products.


Edit existing product details.


Delete unwanted items.


Search for specific products.


Automatically calculate total stock and total value using basic arithmetic operations.


The project is built on one single page (no routing) using React, TypeScript, and Tailwind CSS for a clean, modern UI.

⚙️ Main Features
Add Products


User can input a product name, price, and quantity.


When added, it updates the inventory table immediately.


Edit Products


Clicking “Edit” allows the user to modify product details.


Changes update instantly in the table.


Delete Products


Removes a product from the table with one click.


Search Function


The search bar filters products by name dynamically.


Inventory Arithmetic Logic


Uses addition/subtraction for stock management:


Adding shipment → increases stock.


Selling items → decreases stock.


Uses multiplication/addition for total calculations:


Total Item Value = Quantity × Price


Total Inventory Value = Sum of all item values.



💻 Technologies Used
Technology
Purpose
React
For building UI components dynamically
TypeScript
Provides static typing and better code safety
Tailwind CSS
For responsive, modern, and fast styling
React Hooks (useState, useEffect)
For managing component states and side effects


🧩 Main Components
Component
Description
Header.tsx
Displays the app title and branding
ProductForm.tsx
Handles adding/editing product details
SearchBar.tsx
Allows users to search for products
ProductTable.tsx
Displays the list of products in a table format
ProductRow.tsx
Represents a single product row in the table


🧠 React Concepts Used
Component-Based Architecture: Each part of the UI is separated into reusable components.


State Management: Using useState to store products, form data, and search terms.


Data Flow via Props: Parent component (App) passes data and functions to child components.


Rendering Lists: Using .map() to display products in a table.


Event Handling: Handling form submission, edit, delete, and search operations.


Conditional Rendering: Showing different UI when editing or adding a new product.


