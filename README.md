# api.werstack

REST API и Data Base.

## Структура базы данных
```mermaid
  flowchart LR;
      A[CI MULTI CHAPTCHA]-->B{Select captcha service by developer?};
      classDef green color:#022e1f,fill:#00f500;
      classDef red color:#022e1f,fill:#f11111;
      classDef white color:#022e1f,fill:#fff;
      classDef black color:#fff,fill:#000;
      B--YES-->C[How to use?]:::green;
      
      C-->U[I choose recaptcha.]:::green;
      U--Views-->Q["echo CIMC_JS('recaptcha');\n echo CIMC_HTML(['captcha_name'=>'recaptcha']);"]:::green;
      U--Controller-->W["CIMC_RULE('recaptcha');"]:::green;
      
      C-->I[I choose arcaptcha.]:::white;
      I--Views-->O["echo CIMC_JS('arcaptcha');\n echo CIMC_HTML(['captcha_name'=>'arcaptcha']);"]:::white;
      I--Controller-->P["CIMC_RULE('arcaptcha');"]:::white;
      
      C-->X[I choose bibot.]:::red;
      X--Views-->V["echo CIMC_JS('bibot');\n echo CIMC_HTML(['captcha_name'=>'bibot']);"]:::red;
      X--Controller-->N["CIMC_RULE('bibot');"]:::red;
      
      B--NO-->D[How to use?]:::black;
      D---Views:::black-->F["echo CIMC_JS('randomcaptcha');\n echo CIMC_HTML(['captcha_name'=>'randomcaptcha']);"]:::black; 
      D---Controller:::black-->T["CIMC_RULE('archaptcha,recaptcha,bibot');"]:::black;
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
