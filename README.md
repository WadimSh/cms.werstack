# api.werstack

REST API и Data Base.

## Структура базы данных
```mermaid
  flowchart LR;
      A[Products]-->B[productImages];
      A[Products]-->C[productAttributes];
      A[Products]-->D[productPrices];
      A[Products]-->B[productDiscounts];
      A[Products]-->B[productRatings];
      A[Products]-->B[productReviews];

      
```

    
### Поля схемы `Users`

Поле | Описание
-----|------------
firstName | Обязательное поле типа **string**, с длинной строки от 2 до 15 символов.
secondName | Поле типа **string**, с длинной строки от 2 до 30 символов.
email | Обязательное поле типа **string**. Валидируется на уровне схемы на соответствие типу элекстронной почты.
password | Обязательное поле типа **string**. Поле хешируется. База данных не возвращает это поле.
shippingAddress | Поле типа **string**.
phoneNumber | Поле типа **string**.
role | Обязательное поле типа **string**, может принимать одно из трёх значений - **admin**, **seller**, **buyer**.

### Поля схемы `Sellers`

Поле | Описание
-----|------------
