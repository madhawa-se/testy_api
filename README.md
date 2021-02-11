# Tasty Recipes API

![logo](https://raw.githubusercontent.com/madhawa-se/testy_api/main/src/assets/logo.png)

This is a simple api written in typescript and node.
Sqlite is used for database.
Typescript version of sequlizer is used as a ORM.

### POSTMAN collection

https://documenter.getpostman.com/view/5740346/TW77hifu


------------------------------------------------------------

### To install

#### Prerequisites
SQlite modules may require visuall c++ and python.make sure you have installed them.

* Clone the git repository, and `npm i` to install dependencies
* Run API using  `npm run dev` command



### Database Structure

![logo](https://raw.githubusercontent.com/madhawa-se/testy_api/main/src/assets/db-structure.png)



## API documentation

### Ingredients

### Get All Ingredient

http://localhost:3000/ingredient/

* **Method:**
  `GET`

**Response:**

```
[
    {
        "ingredientId": 4,
        "name": "garlic"
    },
    {
        "ingredientId": 5,
        "name": "salt"
    },
    {
        "ingredientId": 6,
        "name": "tomato"
    }
]

```

### Get a Ingredient

http://localhost:3000/ingredient/{ingredientId}

* **Method:**
  `GET`

**Response:**

```
    {
        "ingredientId": 5,
        "name": "salt"
    }

```

### Add Ingredient

http://localhost:3000/ingredient/

* **Method:**
  `POST`

**Request:**

```json
{
  "name": "tomato"
}
```

### Update Ingredient

**Request:**

http://localhost:3000/ingredient/{ingredientId}

* **Method:**
  `PUT`

```json
{
  "name": "tomato"
}
```

### Delete Ingredient

**Request:**

http://localhost:3000/ingredient/{ingredientId}


* **Method:**
  `DELETE`

------------------------------------------------------------

## Recipes

### Get All Recipes

http://localhost:3000/recipe

* **Method:**
  `GET`

**Response:**

```
[
    {
        "recipeId": 1,
        "name": "pasta",
        "ingredients": [
            {
                "ingredientId": 4,
                "name": "garlic"
            }
        ]
    },
    {
        "recipeId": 2,
        "name": "pizza",
        "ingredients": [
            {
                "ingredientId": 4,
                "name": "garlic"
            },
            {
                "ingredientId": 5,
                "name": "salt"
            }
        ]
    }
]

```

### Get a receip

http://localhost:3000/recipe/{recipeId}

* **Method:**
  `GET`

**Response:**

```
    {
        "recipeId": 2,
        "name": "pizza",
        "ingredients": [
            {
                "ingredientId": 4,
                "name": "garlic"
            },
            {
                "ingredientId": 5,
                "name": "salt"
            }
        ]
    }

```

### Add a recipe

http://localhost:3000/recipe/

* **Method:**
  `POST`


**Request:**

```json
{
    "name":"pasta 5",
    "ingredients":[2]
}
```

### Update recipe

**Request:**

http://localhost:3000/recipe/{recipeId}

* **Method:**
  `PUT`

```json
{
    "name":"cheese pizza",
    "ingredients":[
        {
            "ingredientId":4,
            "amount":5
        },
        {
            "ingredientId":5,
            "amount":2
        }
    ]
}
```

### Delete a recipe

**Request:**

http://localhost:3000/recipe/{recipeId}

* **Method:**
  `DELETE`


### To do

Optimize queries with sequalizer associations
Add route validation for all api calls
