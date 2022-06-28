## NODE.JS NOTES-DAY1

* nodejs javascript çalışma ortamı ve asenkron bir doğası vardır
* v8: bizim js kodlarımızı makina diline çeviriyor
* libuv diye bir yapı var ve event loop sayesinde kodlarımızın asenkron olarak çalışmasını sağlıyor
* libuv asenkron giriş çıkış işlemlerini kolaylaştıran bir kütüphanedir
* process nesnesi : node js in o anki işlemi ile ilgili bilgi veriyor
* process.argv: node.js çalıştığında komut satırından girilen argümanları bize array olarak sunar
* repl node.js tarafında js kodlarını çalıştırmamızı sağlayan ortamdır
* Senkron programlama en basit tanımıyla işlemlerin sırasıyla yapılmasıdır. Önce bir dosya okuyalım,
sonra bir veritabanı işlemi yapalım ve sonrasında da bir http isteği gönderelim şeklinde basit bir şekilde çalışır.
* Asenkron programlama ise uzun süren bir işlemi beklemeden diğer işlemlere devam edebilmektir.Bir işlem yapılırken diğer işlemler bloklanmaz.
*** 
### Event Loop

> Restoran - garson metaforu! 
>> Restoranımız çalışma ortamı ve yalnızca tek bir garson çalışıyor (Single Thread) 
bu garsonumuz önce 1. masaya ait siparişleri aldı ve siparişi mutfağa bildirdi (Thread Pool).
O siparişlerin hazır olmasını beklemeden (Non-Blocking) 2. masaya ait siparişleri aldı ve yine mutfağa bildirdi.
Bu sırada kendisine 1. masanın yemeğinin hazır olduğu bildirildi (callback).
single thread: aynı anda sadece bir işlem yapılabilmesi
javascript kodunu manipule ederek asenkron gibi çalışmasını sağlarız bunu callback promise async ile sağlarız
setTimeOut(çalışmak istediğimiz fonksiyon,fonksiyonun ne kadar süres sonra çalışacağı milisaniye olarak);
bir fonksiyonu başka bir fonksiyon içersine argüman olarak koy işte bu fonksiyona callback fonksiyon denir
fonksiyonu parametre olarak döndürebiliriz.	
*** 
> callback ile işlem sonucunu beklemek zorunda kalıyoruz bir işlemi işlem sonuçlarını beklerken bir söz - promise - verelim. 
İstediğimiz sonucu aldığımızda devam edelim,bir hata ile karşılaştığımızda başka bir işlem yapalım.
Promise nesnesi Resolve ve Reject adında iki tane parametre alır ve olumlu durumlarda Resolve ile belirtilen işlemlerin,
olumsuz durumlarda da Reject ile belirtilen işlemlerin yapılacağına dair güvence verir.
Promise yapısı olumlu sonuçları .then(), olumsuz sonuçları da .catch() ile karşılar.
İşte burada Promise yapısı devreye girer.
async await promise göre daha iyi çünkü asenkron işlemlerin takibini senkron bir işlem takibi gibi yapabiliyoruz


