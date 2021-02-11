# Tasty Recipes API

![logo](https://raw.githubusercontent.com/madhawa-se/recipe/main/src/assets/logo.png)

This is a simple api written in typescript and node.
Sqlite is used for database.
Typescript version of sequlizer is used as a ORM.

## Ingredients

### Get All Ingredient

http://localhost:3000/ingredient/

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

http://localhost:3000/ingredient/{ingredient id}

**Response:**

```
    {
        "ingredientId": 5,
        "name": "salt"
    }

```

### Add Ingredient

http://localhost:3000/ingredient/

**Request:**

```json
{
  "name": "tomato"
}
```

### Edit Ingredient

**Request:**

http://localhost:3000/ingredient/{ingredientId}

### Update Ingredient

**Request:**

http://localhost:3000/ingredient/{ingredientId}

```json
{
  "name": "tomato"
}
```

### Delete Ingredient

**Request:**

http://localhost:3000/ingredient/{ingredientId}


------------------------------------------------------------

## Ingredients

### Get All Receips

http://localhost:3000/recipe

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

### Delete Ingredient

**Request:**

http://localhost:3000/recipe/{recipeId}

