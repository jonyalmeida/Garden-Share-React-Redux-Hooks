# Welcome to Garden Share!-
**An app where people can share / trade their excess produce and farm products.**
Jony Almeida - junior full stack dev
# App Description
-   Garden Share is intended as a virtual hub, where registered members can offer and / or trade their excess produce or farm products with their neighbors and community.
-   The app is meant to be simple and offer an intuitive UI making it possible for users to exchange goods with ease.
# User Stories
-   As a user of Garden Share, I would like to offer my excess produce or farm products and make them available for trade, or for free to my neighbors and community.
-   As a user of Garden Share, I would like to see a list of available products in my area
-   As a user of Garden Share, I would like to open an account and have my location, preferences and trade history available in the form of a profile page.
-   As a user of Garden Share, I would like to send other registered users messages with question about their products offered.
-   As a user of Garden Share, I would like to feel safe using the service.
# Technologies
-   Language: Javascript
-   RDBMS: PostgresSQL v12
-   ORM: Sequelize
-   Server: NodeJS Express
-   UI Engine: React with Redux Hooks
# Define Database Functionality + Input Data
1.  Store user information.
2.  Store locations.
3.  Store messages exchanged between users.
4.  Store list of goods offered.
5.  Have a list of categories for goods.
6.  Allows for search of goods at chosen radius from the user’s location.
7.  Allows for fast queries & book search.
# Define Models
**User**
-   name => string (20) / not null
-   lastName => string (125) / not null
-   username => string (20) / not null / unique
-   email => string (125) / not null / unique
-   hashedPassword => binary string
-   userGeocode => string (255) / not null

**Messages**
-   message => text / not null
-   receiverId => integer / not null  
-   senderId => integer / not null

**Produce / goods**
-   productName => string(125) / not null
-   productQty => decimal(5, 2) / not null
-   pictureUrl => string(255) / unique
-   sellerId => integer / not null
-   locationId => integer / not null
-   productCategoryId => integer / not null

**Categories**
-   vegetable => boolean / not null
-   fruits => boolean / not null
-   animal => boolean / not null
# Define Database Relations
## Goods and Users
	 1 user can have * good.   
	 1 goods belongs 1 user
 ## Messages and Users
	1 user can be either the sender or receiver of * messages
	1 message belongs to 1 sender and 1 receiver
## Goods and Categories
	1 category can have * goods
	1 goods belongs to 1 category
# Seeding the Database
-   Dummy information from Faker library    
-   Write script to run Faker and populate database with dummy information

# APIs CRUD Operations
- /user/create
- /user/login
- /message/list
- /message/send
- /goods/create
- /goods/delete
- /goods/edit
- /goods/list
# UI Layout
- One page application  
- App requires login / register  
- Fixed navbar with links to different features
- User profile page (my profile page)
- user’s info => top slice of page (picture, name, location)
- user navigation menu => navbar with links to show user’s listings, form to search for goods, form to offer new goods
- content => user’s listings, form to search for goods, form to offer new goods
- One of the desired UI functionalities is the optional Google Maps API integration for listing of available goods nearby a user
- User’s listings page lists offered goods by the user, with edit / delete offer button. Listings will be presented in banners taking full width of screen, with picture on left, name, qty and description taking two thirds of the width
- Other people’s listings page will have search form and lists offered goods with trade option button.
- Listings will be presented in banners taking full width of screen, with picture on left, name, qty and description taking two thirds of the width, action button on right of container
- Search form will have good type from dropdown list,

# Tools
-   VS Code
-   Ubuntu WSL 18.6
-   Firefox Dev Edition
-   GitHub
-   Coffee
-   Desire to make the world better
