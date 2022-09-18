const input = document.querySelector("textarea");
const p = document.querySelector(".ünlü");
const ert = document.querySelector(".ünsüz");
const qwe = document.querySelector(".toplam");
// const mn = document.querySelector(".kelime");
const elf = document.querySelector("#elf")


counter = 0;
coun = 0;
kelime = 1;
let a;
let asd = [
  "a",
  "e",
  "ö",
  "o",
  "ı",
  "i",
  "ü",
  "u",
  "A",
  "E",
  "Ö",
  "İ",
  "Ü",
  "O",
  "I",
  "U",
];
let sessiz =["q","w","r","t","y","p","ğ","ş","l","k","j","h","g","f","d","s","z","x","c","v","b","n","m","ç"]

console.log(input.value); 
// input.addEventListener("input", (event) =>{
// input.value.split("").forEach((e) => {
//   if (asd.includes(e)) {
//     counter++;
//   } else if (sessiz.includes(e)) {
//     coun++;
//   } else if (e.code == "Space") {
//     kelime++;
//   }

//   // p.innerText = counter;
//   // ert.innerText = coun;
// });
// })
input.addEventListener("input", () => {
 
  if (input.value.length > 1) {
    elf.addEventListener("click", () => {
      console.log(input.value.length);
      input.value.split("").forEach((e) => {
        if (asd.includes(e)) {
          counter++;
        } else if (sessiz.includes(e)) {
          coun++;
        } else if (e.code == "Space") {
          kelime++;
        }
      });
      p.innerText = "Sesli Harf Sayısı: " + counter;
      ert.innerText = "Sessiz Harf Sayısı: " + coun;
      qwe.innerText = "Toplam Harf Sayısı: " + (coun + counter);
      counter = 0;
      coun = 0;
    });
  } else {
    
    //  p.innerText = "Sesli Harf Sayısı: " + counter;
    //  ert.innerText = "Sessiz Harf Sayısı: " + coun;
    //  qwe.innerText = "Toplam Harf Sayısı: " + (coun + counter);
     console.log(input.value);
    input.addEventListener("keydown", (event) => {
       if (asd.includes(input.value)) {
         counter++;
       } else if (sessiz.includes(input.value)) {
         coun++;
       }
      // console.log(event.code);
      // console.log(input.value);
      if (event.code == "Space") {
        ++kelime;
      }
      // console.log(event.key);
      asd.includes(event.key) == true
        ? counter++
        : sessiz.includes(event.key.toLowerCase()) == true
        ? coun++
        : a;
      // *******************************************
      // if (asd.includes(input.value.split("")[input.value.split("").length - 1])) {
      //   --counter;
      // } else if (
      //   sessiz.includes(input.value.split("")[input.value.split("").length - 1])
      // ) {
      //   --coun;
      // }
      // input.value.split("").forEach((e) => {
      //   if (asd.includes(e)) {
      //     counter++;
      //   } else if (sessiz.includes(e)) {
      //     coun++;
      //   } else if (e.code == "Space") {
      //     kelime++;
      //   }

      //   p.innerText = counter;
      //   ert.innerText = coun;
      // });
      // *******************************************

      if (event.key == "Backspace") {
        counter = 0;
        coun = 0;
        // kelime= 0

        if (
          asd.includes(input.value.split("")[input.value.split("").length - 1])
        ) {
          --counter;
        } else if (
          sessiz.includes(
            input.value.split("")[input.value.split("").length - 1]
          )
        ) {
          --coun;
        }
        input.value.split("").forEach((e) => {
          if (asd.includes(e)) {
            counter++;
          } else if (sessiz.includes(e)) {
            coun++;
          } else if (e.code == "Space") {
            kelime++;
          }

          p.innerText = counter;
          ert.innerText = coun;
        });
      }

      //  mn.innerText = "Kelime Sayısı: "+kelime;
      p.innerText = "Sesli Harf Sayısı: " + counter;
      ert.innerText = "Sessiz Harf Sayısı: " + coun;
      qwe.innerText = "Toplam Harf Sayısı: " + (coun + counter);
      
    });
     
  }
});
// *************************************************************

const num = document.querySelector("#num");
const text = document.querySelector("#text");

num.addEventListener("input", (e) => {
  let a;
  a = +num.value;
  console.log(a);

  let asd = "*";
  let b = " ";
  let qw = 4;
  let n = a;
  // let a = 5;
  let m = 0;
  let str = "";
  if (a == 0) {
    text.innerHTML = str;
  } else if (a == 1) {
    text.innerHTML = str += b.repeat(n) + asd.repeat(1) + b.repeat(n);
  } else if (a > 1) {
    str += b.repeat(n - 1) + asd.repeat(1) + b.repeat(n - 1);
    // console.log(b.repeat(n-1) + asd.repeat(1) + b.repeat(n-1));

    str += "\n";
    for (let i = 0; i < a - 1; i++) {
      n -= 1;
      str +=
        b.repeat(n - 1) +
        asd.repeat(1) +
        b.repeat(2 * m + 1) +
        asd.repeat(1) +
        b.repeat(n - 1) +
        "\n";
      // console.log(
      //   b.repeat(n - 1) +
      //     asd.repeat(1) +
      //     b.repeat(2 * m + 1) +
      //     asd.repeat(1) +
      //     b.repeat(n - 1)
      // );
      m += 1;
    }
    n = 0;
    // console.log(n);
    for (let j = 0; j < a - 2; j++) {
      m -= 1;
      str +=
        b.repeat(n + 1) +
        asd.repeat(1) +
        b.repeat(2 * m - 1) +
        asd.repeat(1) +
        b.repeat(n + 1) +
        "\n";
      //  console.log(
      //   b.repeat(n + 1) +
      //     asd.repeat(1) +
      //     b.repeat(2 * m - 1) +
      //     asd.repeat(1) +
      //     b.repeat(n + 1)
      // );

      n += 1;
    }
    str += b.repeat(n + 1) + asd.repeat(1) + b.repeat(n + 1) + "\n";
    // console.log(b.repeat(n + 1) + asd.repeat(1) + b.repeat(n + 1));
    text.innerHTML = str;
  } else {
    text.innerHTML = "Lütfen Pozitif Sayı Giriniz";
  }
});
