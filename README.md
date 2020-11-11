# Node.js Express, Sequelize & PostgreSQL: CRUD Rest APIs

Build REST API for a wishlist management tool using the following technologies: Node.js and
PostgreSQL.:

## PostgreSQL setup
> [Dowload PostgreSQL w/o installation](https://www.enterprisedb.com/download-postgresql-binaries)

Extract and Go to your drive:
```
D:\pgsql\bin>initdb.exe -D D:\pgsql\_pgdata -U postgres -W -E UTF8 -A scram-sha-256
```
Enter Password:
```
123
```
Start PostgreSQL:
```
pg_ctl -D ^"D^:^\pgsql^\^_pgdata^" -l logfile start
```
Create DB:
```
D:\pgsql\bin>createdb.exe -h localhost -p 5432 -U postgres testdb
```
Enter Password:
```
123
```
### Project setup
```
npm run clean
```
```
npm run build
```
```
npm run start
```
### API

A user should be able to observe a list of wishlists.

```http
GET /api/wishlist
```

A user should be able to create a wishlist and add items

```http
POST /api/wishlist
```
```javascript
{
	"itemName" : "A user should be able to create a wishlist and add items.",
	"itemDescription": "A user should be able to create a wishlist and add items."
}
```

A user should be able to edit wishlist.
```http
PUT /api/wishlist
```
```javascript
{
	"itemName" : "itemName update",
	"itemDescription": "itemDescription update",
	"published": true
}
```
A user should be able to see details of any own wishlist.
```http
GET /api/wishlist/:id
```