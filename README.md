# api.werstack

REST API и Data Base.

## Структура базы данных
```mermaid
classDiagram
C01 <|-- AveryLongClass : Cool
<<Interface>> C01
Class09 --> C2 : Where am I?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
C01 : size()
C01 : int chimp
C01 : int gorilla
class Class10 {
  <<service>>
  int id
  size()
}

  

      
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
