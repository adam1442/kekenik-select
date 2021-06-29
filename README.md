# kekenik select.js
کِکِنیک سلکت یک کتابخانه سبک جاوااسکریپتی است که به شما کمک میکنه بدون هیچ کد اضافه ای یک سلک باکس زیبا و کارمد را به صفحه وب خود اضافه کنید.
![kekenik-select](https://raw.githubusercontent.com/adam1442/kekenik-select/master/kekenik-select.jpg)
### این کتابخانه از صفحه کلید پشتیبانی میکند
در حال حاضر از قابلیت مالتی سلکت پشتیبانی نمیکنه، اما به زودی این امکان بهش اضافه میشه
## استفاده
برای نصب می توانید از npm یا yarn استفاده کنید

    npm install kekenik-select
    yarn add kekenik-select
بعد از نصب می توانید به صورت زیر استفاده کنید
```javascript
const selectElements = document.querySelectorAll('.kekenik-select');

selectElements.forEach(select => {
    new KekenikSelect(select, {options})
});
```

یا اینکه می توانید فایلهای اسکریپت و استایل را دانلود کنید و به صفحه اچ تی ام ال اضافه کنید

    <link rel="stylesheet" href="./dist/css/kekenik-select.css">
و

    <script defer src="./dist/js/kekenik-select.js"></script>
بعد از اضافه کردن فایل های مورد نیاز به راحتی می توانیم توسط کد زیر از کتابخانه استفاده کنیم
```javascript
<script>
	kekenikSelect('.kekenik');
</script>
```
## مثال کامل
```html
<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="./dist/css/kekenik-select.css">
    <title>Kekeink Select Box | Hossein Razavi</title>
</head>
<body>

<label for="select">استان:</label>
<select name="select" id="select" class="kekenik">
    <option value="آذربایجان شرقی">آذربایجان شرقی</option>
    <option value="آذربایجان غربی">آذربایجان غربی</option>
    <option value="اردبیل">اردبیل</option>
    .
    .
    .
</select>
<script defer src="./dist/js/kekenik-select.js"></script>
<script>
    kekenikSelect('.kekenik');
</script>
</body>
</html>
```
همچنین شما می توانید به عنوان پارامتر دوم تنظیمات مورد نظر را برای سلک باکس وارد کنید
```javascript
kekenikSelect('.kekenik', {
    checkmark: true,
    searchBox: true,
    .
    .
    .
}); 
```
## لیست تنظیمات
در جدول زیر تنظیمات قابل اعمال روی سلک باکس با مقدار پیشفرض آورده شده است
|کلید| نوع| مقدار پیشفرض| توضیحات|
|--|--|--|--|
| searchPlaceholder | STRING | جستجو کنید... | تنظیم ویژگی placeholder باکس جستجو |
| notFound | STRING | موردی یافت نشد | درصورتی که جستجوی کاربر نتیجه ای نداشت این پیام نمایش داده می شود |
| searchIn | STRING | label | می توانید جستجو را براساس متن نمایش داده شده یا value تنظیم کنید. دو گزینه `label` یا `value` را می توانید تنظیم کنید |
| theme | STRING | light | استایل یلکت باکس را می توانید تنظیم کنید، گزینه های موجود: `light` و `dark` |
| checkmark | BOOL | true | علامت چک مارک را در مقابل گزینه انتخاب شده نمایش می دهد |
| searchBox | BOOL | true | باکس جستجو را می توانید نشان دهید یا حذف کنید |

## صفحه کلید
کلید های صفحه کلید قابل پشتیبانی و همچنین عملکرد آنها
|کلید| عملکرد |
|--|--|
| Space | باز یا بسته کردن سلکت باکس |
| Esc | بستن سلکت باکس |
| ArrowUp | انتخاب گزینه قبلی |
| ArrowDown | انتخاب گزینه بعدی |

همچنین شما می توانید با کلید تب سلک باکس را فعال کنید و توسط کلید های جهت نمای بالا یا پایین بدون باز کردن سلک باکس بین مقادیر موجود جابجا شوید

## توضیحات بیشتر
در پایان ممنون میشه اگه میتونید به پیشرفت این کتابخانه کمک کنید و تغییرات انجام شده را برای من بفرستید تا با هم بتونیم یک کتابخانه بهتر و بهتر داشته باشیم

همچنین چند پروژه متن باز دیگه هم درحال توسعه شون هستم منو دنبال کنید تا هم از پروژه های بعدی من باخبر بشید و هم می تونید اگه پیشنهادی دارید برای من ارسال کنید
پروژه های که قراره به زودی ارائه کنم

- انتخاب گر تاریخ شمسی و میلادی
- تقویم رویدادها
- پنل مدیریت کامل

## ارتباط با من
Email: [hossein.r.1442@gmail.com](mailto:hossein.r.1442@gmail.com)
instagram: [hossein.r.1442](https://www.instagram.com/hossein.r.1442/)