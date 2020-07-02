# MY SHOP API DOCUMENTATION

> MY SHOP is a mini shop simulation website . This website has :
>
> RESTful endpoint for products's CRUD operation with JSON formatted response

### Technology use in this website

> client: VUE CLI,VUEX, Component,Bootstrap
>
> server: sequelize,express,postgres,ORM(express)

## Restful Endpoints

1. POST ; /login
2. GET : /products
3. POST : /products
4. GET : /products/:id
5. PUT : /products/:id
6. DELETE : /products/:id
7. POST : /registerCustomer
8. POST : /loginCustomer
9. GET : /customer/products
10. GET :/customer/products/:id
11. GET : /carts
12. POST : /carts
13. DELETE : /carts/:id

## Global Response

Response(500 - INTERNAL SERVER ERROR)

```json
{
  "message": "Internal Server Error"
}
```

Response(400 - AUTH_FAILED)

```json
{
  "message": "Authentication Failed!"
}
```

## POST /login
> Login account

Request body:

```json
{
  "email": "<your email>",
  "password": "<your password>"
}
```

Response(200 - Ok):

```json
{
  "emailUser": "<your email>",
  "access_token": "<user token>"
}
```

Response(404 - EMAIL NOT FOUND)

```json
{
  "message": "Email not found please register first!"
}
```

Response(400 - EMAIL PASS NOT MATCH)

```json
{
  "message": "Email and Password not match!"
}
```

## POST /products
> Create new product

Request headers:

```json
{
  "access_token": "<your access token>"
}
```

Request body:

```json
{
  "name": "<your product name>",
  "image_url": "<your product image_url>",
  "price": "<your product price>",
  "stock": "<your product stock>"
}
```

Response(201 - Created):

```json
{
  "id": "<your product id>",
  "name": "<your product name>",
  "image_url": "<your product image_url>",
  "price": "<your product price>",
  "stock": "<your product stock>",
  "updatedAt": "<your product updatedAt date>",
  "createdAt": "<your product createdAt date>",
}
```

Response(400 - SequelizeValidationError)

```json
{
  "message": "Error Validation"
}
```

## GET /products 
> Get all llist products

Request headers:

```json
{
  "access_token": "<your access token>"
}
```

Request body:
Not Needed

Response(200 - Ok):

```json
[
  {
    "id": "<your product id>",
    "name": "<your product name>",
    "image_url": "<your product image_url>",
    "price": "<your product price>",
    "stock": "<your product stock>",
    "updatedAt": "<your product updatedAt date>",
    "createdAt": "<your product createdAt date>",
  },
  {
    ...
  }
]
```

## GET /products/:id
> Get one product by id

Request headers:

```json
{
  "access_token": "<your access token>"
}
```

Request param id: integer (required)

Request body:
not needed

Response(200 - Ok):

```json
{
  "id": "<your product id>",
  "name": "<your product name>",
  "image_url": "<your product image url>",
  "price": "<your product price>",
  "stock": "<your product stock>",
  "updatedAt": "<your product updatedAt date>",
  "createdAt": "<your product createdAt date>",
}
```

## PUT /products/:id
> Edit product by id

Request headers:

```json
{
  "access_token": "<your access token>"
}
```

Request params id: integer (required)

Request body:

```json
{
  "name": "<your product name>",
  "image_url": "<your product image url>",
  "price": "<your product price>",
  "stock": "<your product stock>"
}
```

Response(200 - OK):

```json
{
  "id": "<your product id>",
  "name": "<your product name>",
  "image_url": "<your product image url>",
  "price": "<your product price>",
  "stock": "<your product stock>",
  "updatedAt": "<your product updatedAt date>",
  "createdAt": "<your product createdAt date>",
}
```

Response(400 - SequelizeValidationError)

```json
{
  "message": "Error Validation"
}
```

## DELETE /products/:id
> Delete product by id

Request headers:

```json
{
  "access_token": "<your access token>"
}
```

Request params id: integer (required)

Request body:
not needed

Response(200 - Ok):

```json
{
  "message": "Successfully delete product!"
}
```

Response(400 - SequelizeValidationError)

```json
{
  "message": "Error Validation"
}
```
## POST /registerCustomer
> Register Account

Request body:

```json
{
  "email": "<your email>",
  "password": "<your password>"
}
```

Response(201 - Created):

```json
{
  "emailUser": "<your email>",
  "access_token": "<user token>"
}
```

Response(400 - SequelizeValidationError)

```json
{
  "message": "Error Validation"
}
```

Response(400 - EMAIL_ALREADY_REGISTERED)

```json
{
  "message": "Your email already register, please login or use other email!"
}
```


## POST /login
> Login account

Request body:

```json
{
  "email": "<your email>",
  "password": "<your password>"
}
```

Response(200 - Ok):

```json
{
  "emailUser": "<your email>",
  "access_token": "<user token>"
}
```

Response(404 - EMAIL NOT FOUND)

```json
{
  "message": "Email not found please register first!"
}
```

Response(400 - EMAIL PASS NOT MATCH)

```json
{
  "message": "Email and Password not match!"
}
```

## GET /customer/products 
> Get all list products for customer

Request headers:
Not Needed

Request body:
Not Needed

Response(200 - Ok):

```json
[
  {
    "id": "<your product id>",
    "name": "<your product name>",
    "image_url": "<your product image_url>",
    "price": "<your product price>",
    "stock": "<your product stock>",
    "updatedAt": "<your product updatedAt date>",
    "createdAt": "<your product createdAt date>",
  },
  {
    ...
  }
]
```

## GET /customer/products/:id
> Get one product by id

Request headers:

Not Needed

Request param id: integer (required)

Request body:
not needed

Response(200 - Ok):

```json
{
  "id": "<your product id>",
  "name": "<your product name>",
  "image_url": "<your product image url>",
  "price": "<your product price>",
  "stock": "<your product stock>",
  "updatedAt": "<your product updatedAt date>",
  "createdAt": "<your product createdAt date>",
}
```

## GET /carts 
> Get all list carts

Request headers:

```json
{
  "access_token": "<your access token>"
}
```

Request body:
Not Needed

Response(200 - Ok):

```json
[
     {
        "id": "<your id cart>",
        "UserId": "<your UserId>",
        "ProductId": "<your ProductId>",
        "amount": "<your product amount>",
        "createdAt": "<your cart createdAt>",
        "updatedAt":  "<your cart updatedAt>",
        "Product": {
            "id": "<your product id>",
            "name":  "<your product name>",
            "image_url":  "<your product image_url>",
            "price":  "<your product price>",
            "stock":  "<your product stock>",
            "UserId":  "<your product UserId>",
            "updatedAt": "<your product updatedAt date>",
            "createdAt": "<your product createdAt date>"
        }
    },,
  {
    ...
  }
]

## POST /carts
> Create new cart

Request headers:

```json
{
  "access_token": "<your access token>"
}
```

Request body:

```json
{
  "amount": "<your product amount>",
  "product": "<your product id>",
}
```

Response(200 - Ok):

```json
     {
        "id": "<your id cart>",
        "UserId": "<your UserId>",
        "ProductId": "<your ProductId>",
        "amount": "<your product amount>",
        "createdAt": "<your cart createdAt>",
        "updatedAt":  "<your cart updatedAt>",
        "Product": {
            "id": "<your product id>",
            "name":  "<your product name>",
            "image_url":  "<your product image_url>",
            "price":  "<your product price>",
            "stock":  "<your product stock>",
            "UserId":  "<your product UserId>",
            "updatedAt": "<your product updatedAt date>",
            "createdAt": "<your product createdAt date>"
        }
    }
```

## DELETE /carts/:id
> Delete cart by id

Request headers:

```json
{
  "access_token": "<your access token>"
}
```

Request params id: integer (required)

Request body:
not needed

Response(200 - Ok):

```json
{
  "message": "Successfully delete cart!"
}
