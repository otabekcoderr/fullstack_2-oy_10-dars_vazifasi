// 41.Funksiya2taargumentqabulqiladi. Birinchiargument
// ikkinchiargumentdankattaemas.Agarbirinchiargumentni
// ikkinchisigabo’linsa,funksiyatrueqaytaradiaksholdafalse

// bolinsin(98,7) true
// //98/7=14
// bolinsin(85,4) false
// 2

//shart xato ekan

// function bolinsin(num_1, num_2) {
//   if (num_1 > num_2) {
//     if (num_1 % num_2 == 0) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }

// console.log(bolinsin(85, 4));

//=================================================================

// 42.Funksiyagaraqamarringko’rinishidaberilsa,funksiyaushbu
// ma’lumotniyanaraqamma’lumotturiko’rinishidaqaytarib
// bersin.

// const raqam = function (arr) {
//   let raqammi = Number(arr);
//   if (Number.isNaN(raqammi)) return "Raqamli arring emas";
//   else return raqammi;
// };

// console.log(raqam("34"));

//=====================================================================

// 43.To’rtburchakningyuzini hisoblaydigan funksiyayasang.
// Bundafunksiyagato’rtburchakning(ya’nito’g’riturtburchak)
// tomonlariberiladi. Funksiyauningyuziniqaytarishikerak,
// agartomonlarxatokiritilganbo’lsafunksiya-1qaytarsin.

// const tortYuzi = (tomon_1, tomon_2) => {
//   if (tomon_1 < 1 || tomon_2 < 1) return -1;
//   else return tomon_1 * tomon_2;
// };

// console.log(tortYuzi(3, 4));

//====================================================================

// 44.Funksiyagaismvafamiliyaargumentqilibberilsa,funksiya
// “ism,familiya”formatdagiarringqaytarsin.

// function ismFam(ism, fam) {
//   return ism + "," + fam;
// }
// console.log(ismFam("Otabek", "Umarov"));

//====================================================================

// 45.Quyidaganamunanikuzatganholdafunksiyayasang.
// Namuna:
// bug(true) "sad days"
// bug(false) "it'sagoodday

// const two_words = function (arr) {
//   let count = 0;
//   for (let i of arr) {
//     if (i.includes(" ")) count++;
//   }
//   return count > 1 ? false : true;
// };

// console.log(two_words("sad days"));

//=======================================================================

// 46.Shundayfunksiyayasangki,ushbufunksiya2taargument
// qabulqiladi. Birinchiargumentmassive, ikkinchiargument
// ushbumassivniboshidanboshlabnechtaelementnitushurib
// 22
// EDABIT
// qoldirish. Tushiribqoldirilgandanso’ng funksiyanatijani
// qaytarsin

// function tushirMassiv(arr, tushirishSoni) {
//   return arr.slice(tushirishSoni);
// }
// console.log(tushirMassiv([1, 2, 3], 1));

//=======================================================================
// 48.Funksiyasonqabulqilsa, ushbusonningnegativiniqay
// tarsin.

// const negativ = function (son) {
//   return son * -1;
// };
// console.log(negativ(-1));

//=======================================================================

// 49.Massivni elementlarini o’rninalmashtiradigan funksiya
// yasang.Reversemetodisizhamurinibko’ring

// const almash = (arr) => {
//   let new_arr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     new_arr.push(arr[i]);
//   }
//   return new_arr;
// };

// console.log(almash([9, 9, 2, 3, 4]));

//======================================================================

// 50.Kinoteatrga bollar kino ko’rgani kirmoqchi bunda 2ta talab
// mavjud. Shunda funksiya 2ta argument qabul qiladi. Bolaning
// yoshini va ota-onasi bilan birgami degan boolean qiymat. Agar
// bolaning yoshi kamida 15 bo’lsa va ota-onasi bilan birga bo’lsa
// funksiya true qaytarsin aks holda false.

// function kinogaKirish(yosh, otaOna) {
//   return yosh >= 15 && otaOna === true;
// }
// console.log(kinogaKirish(12, true));

//=======================================================================

// 51.Quyidagi namunalarda kamchilik bor funksiya aslida har
// bir massivning elementiga 1 qo’shishi kerak. Funksiya to’g’ri
// yasang.

// Namuna:
// oshir1ga([0, 1, 2, 3])
// oshir1ga([2, 4, 6, 8])
// [1, 2, 3, 4]
// [3, 5, 7, 9]
// oshir1ga([-1,-2,-3,-4])
// [0,-1,-2,-3

// const oshirilgan = function (arr) {
//   let new_arr = [];
//   arr.forEach((element) => {
//     new_arr.push(element + 1);
//   });
//   return new_arr;
// };

// console.log(oshirilgan([0, 1, 2, 3]));

//=======================================================================

// 52.Template arring yordamida ya’ni backticlar orqali “ ushbu
// formatdagi arringni hosil qiling.

// const ism_fam = (ism, fam) => {
//   return `${ism} ${fam}`;
// };

// let ism = "Donyor";
// let fam = "Olimov";

// console.log(ism_fam(ism, fam));

//=======================================================================

// 53.Quyidagi namunani ternary operator ko’rinishida yozing.
// Ternary operatorga misol:
// 2===2 ? 'teng' : 'tengemas'
// Namuna:
// var holatiYaxshimi = true
// var holati;
// if (holatiYaxshimi)
// holati = "yaxshi"
// else
// holati = "yaxshi emas"
// Yuqoridagi kodni ternary operator ko’rinishiga o’giring!.

// function holati_yaxshimi(holat) {
//   return holat ? "yaxshi" : "yaxshi emas";
// }

// console.log(holati_yaxshimi(true));

//=======================================================================

// 54.Funksiya arring qabul qiladi. Agar ushbu arringning uzunligi.
// juft bo’lsa funksiya true qaytarsin, aks holda false

// const sozUzunligi = function (arr) {
//   return arr.length % 2 == 0 ? true : false;
// };
// console.log(sozUzunligi("apples"));

//=======================================================================

// 55.Funksiya2taargumentqabulqiladi. Ikkalaargumentham
// son, funksiya1-sonni2-songadarajagako’tarilganqiymatni
// qaytarsin.

// const darajagaKotar = (num_1, num_2) => Math.pow(num_1, num_2);
// console.log(darajagaKotar(2, 3));

//=======================================================================

// 56.Funksiyamassivqabulqiladi.Ushbufunksiyamassivning
// so’nggielementiniqaytaribbersin.

// function songiElement(arr) {
//   return arr.at(-1);
// }
// console.log(songiElement([1, 2, 3]));

//=======================================================================

// 57.Kabisayilinianiqlaydiganfunksiyayasang.Agarkiritilgan
// yilkabisabo’lsafunksiyatrueqaytaradi,aksholdafalse.Kabisa
// yili4gabo’linadiganyilbo’lib, lekin100gabo’linsauholda
// 400gahambo’linganidaginakabisahisoblanadi.

// const kabisa = function (yil) {
//   if (yil % 4 == 0) {
//     return true;
//   } else if (yil % 100 == 0 && yil % 400 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(kabisa(1968));

//=======================================================================

// 58.Funskiyaga so’zkiritilsa funksiyaushbuso’zni birinchi
// harfisizqaytaribbersin.

// const soz = (word) => word.slice(1, word.length);
// console.log(soz("qale"));

//=======================================================================

// 59.Boolenqiymatiniteskarisiniqaytaribberadiganfunksiya
// yasang

// function teskariBool(bool) {
//   return bool ? false : true;
// }
// console.log(teskariBool(true));

// short

// const teskariBool = (bool) => (bool ? false : true);
// console.log(teskariBool(false));

//=======================================================================

// 60.Funskiyasonqabulqiladi,agarsonjuftbo’lsafunskiya“juft”
// qaytaradi,agartoqbo’lsa“toq”qaytarsin.

// const juftMiToqmi = function (num) {
//   return num % 2 == 0 ? "juft" : "toq";
// };
// console.log(juftMiToqmi(11));

//=======================================================================

// 61.Quyidagi rasmga muvofiq qutilar teriladi. Qutilarning
// qavatiga qarab ularning soni oshib boradi

// const qutilar = function (count) {
//   return count * count;
// };

// console.log(qutilar(12));

//=======================================================================

// 62.Funskiya massiv qabul qiladi, ushbu massivni ichida yoki
// stringlar yoki numberlar joyshlashgan bo’ladi. funksiya massiv
// elementlarini bitta string qilib qaytarsin.

// const arrayToString = (arr) => {
//   let string = "";
//   arr.forEach((i) => {
//     string += i;
//   });

//   return string;
// };
// console.log(arrayToString([1, 2, 3, 4, 5, 6]));

//=======================================================================

// 63.Funksia2tasonlardaniboratmassivqabul qilsa, ularni
// birlashtiribbittamassivko’rinishidaqaytaribbersin

// function birlash(arr_1, arr_2) {
//   return arr_1.concat(arr_2);
// }

// console.log(birlash([1, 3, 5], [2, 6, 8]));

//=======================================================================

// 64.Funskiya2taargumentqabulqiladi. 1-argumentmassiv,
// 2-argumentushbumassivningbironelementi.Funksiyaushbu
// elementningmassivichidanechinchiindexdaturishiniqaytarib
// bersin

// const topIndex = function (arr, str) {
//   return arr.indexOf(str);
// };
// console.log(topIndex(["hi", "edabit", "fgh", "abc"], "fgh"));

//=======================================================================

// const arrElement = (arr, index) => {
//   let i = index;
//   return arr.indexOf(i);
// };

// console.log(arrElement([1, 2, 3, 4, 5, 6], 10 / 2));

//======================================================================

// 66.Quyidaginamunanikuzatganholdafunksiyayasang.
// 32
// EDABIT
// Namuna:
// namuna([1, 2, 3, 4, 5])
// namuna([-1, 0, 1])
// 0
// 15
// namuna([0, 4, 8, 12])
// 24

// function hisobla(arr) {
//   let sum = 0;
//   arr.forEach((i) => (sum += i));
//   return sum;
// }

// console.log(hisobla([1, 2, 3, 4, 5]));

// 67.Funksiyaga son so’z ko’rinishida kiritilsa, raqam ko’rinishida
// qaytarilsin
// “bir”-> 1
// “ikki”-> 2
// “uch”-> 3
// “to’rt”-> 4
// “besh”-> 5
// “olti”-> 6
// “yetti”-> 7
// “sakkiz”-> 8
// “to’qqiz”-> 9
// “nol”-> 0
// Namuna:
// sozSon("bir")
// sozSon("ikki")
// sozSon("uch")

// lugat = {
//   nol: 0,
//   bir: 1,
//   ikki: 2,
//   uch: 3,
//   "to’rt": 4,
//   "to'rt": 4,
//   besh: 5,
//   olti: 6,
//   yetti: 7,
//   sakkiz: 8,
//   "to’qqiz": 9,
//   "to'qqiz": 9,
// };
// function strToNum(str, text) {
// let num = text.trim().toLowerCase()
//   return str[num] ?? "Bunday raqam mavjud emas";
// }

// console.log(strToNum(lugat, "uch"));

//====================================================================

// 68.Funskiyaga sonlar massivi beriladi, va 2-argument sifatida
// bitta son beriladi agar ushbu son massivniichidabo’lsa funksiya
// true qaytarsin, aks holda false

// const bormi = function (arr, num) {
//   return arr.includes(num) ?? "Bunday raqam mavjud emas";
// };

// console.log(bormi([1, 2, 3, 4, 5], 3));

//=======================================================================

// 69.Funskiyasonlarvastringlarmassiviberilsa,massivning
// ichidagisonlarnistringgao’girib,ushbumassivnifunksiyayana
// qaytaribbersin.

// const sonString = (arr) => {
//   return arr.join(",").split(",");
// };

// console.log(sonString([1, 2, "a", "b"]));

//=======================================================================

// 70.Kubik rubik yasash uchun kubikchalar kerak bo’ladi.
// Funksiya kubik rubikni necha qatorligiga qarab turib,
// kubikchalar sonini qaytasin.

// function kubikchalar(num) {
//   return 3 ** 2 * 6;
// }

// console.log(kubikchalar(3));

//=======================================================================

// 71.Oddiy avtomobil 4ta yo’lovchi va 1ta havdovchini o’z ichiga
// olishi mumkin. Bundan kelib chiqib safarga chiqish uchun
// odamlar soni aniq bo’lsa funksiya kamida nechta avtomobil
// kerakligini qaytarsin.

// const sayohat = function (odamlar) {
//   return odamlar % 4;
// };

// console.log(sayohat(5));

//=======================================================================

// 72.Funksiyatekshirisin,agarungaberilganstringdabo’shjoy
// mavjudbo’lsatrueqaytarsin,aksholdafalse.

// const boshJoy = (str) => {
//   return str.includes(" ") ?? true;
// };
// console.log(boshJoy(" "));

//=======================================================================

// 73.Funksiyabironqutiningolchamlarima’lumotlariniobject
// sifatidaqabulqiladi. funksiyaushbuqutininghajminiqaytarib
// bersin.Hajm=Balandlik*Eni*Uzunlik

// function hajm(quti) {
//   return quti.width * quti.length * quti.height;
// }

// console.log(hajm({ width: 2, length: 5, height: 1 }));

//=======================================================================

// 74.Funksiyason1,son2vamassivqabulqiladi.Funksiyaushbu
// massivni ichidanson1dankattavason2dankichiksonlarni
// ajratibolibyangimassivqaytarsin.Bundason1doimson2dan
// kichik.

// function sonlar(son1, son2, arr) {
//   let new_arr = [];
//   if (son1 >= son2) {
//     return "son1 son2da kichik bo'lishi kerak";
//   } else {
//     for (let i of arr) {
//       if (i > son1 && i < son2) {
//         new_arr.push(i);
//       }
//     }
//   }
//   return new_arr;
// }
// console.log(sonlar(1, 10, [1, 10, 25, 8, 11, 6]));

//=======================================================================

// 75.Funksiyamassivqabulqiladi.Ushbufunksiyaungaberilgan
// massivelementlarigamoso’rindajoylashganelementlarning
// turinisaqlaganmassivqaytarsin.

// function turlar(arr) {
//   let new_arr = [];

//   for (let i of arr) {
//     new_arr.push(typeof i);
//   }
//   return new_arr;
// }

// console.log(turlar([1, 2, "null", []]));

//=======================================================================

// 76.Funskiyastringvanumberqabulqiladi. Funksiyaushbu
// stringniberilgansonmiqdorichaqayta-qaytayozibnatijani
// stringko’rinishidaqaytarsin.

// function qaytarString(str, num) {
//   return str.repeat(num);
// }

// console.log(qaytarString("Salom", 3));

//=======================================================================

// 77.Funksiyagaso’zkiritilsa,agarushbuso’zko’plikdabo’lsa
// funksiyatrueqaytarsin,aksholdafalse.

// function koplik(str) {
//   return str.endsWith("lar") ?? true;
// }

// console.log(koplik("odamlar"));

//=======================================================================

// 78.Funksiyastringqabulqiladi.Ushbufunksiyaushbustringni
// boshvaoxirgiharflarinibirlashtirganstringniqaytarsin.

// function boshOxiri(str) {
//   let text = str.at(0) + str.at(-1);
//   return text;
// }
// console.log(boshOxiri("salom"));

//======================================================================

// 79.Jon so’zni qiynalib talaffuz qiladi. Masalan quyosh so’zini
// qu…qu…quyoshdeb,daraxtso’zini da… da… daraxtdeb, ya’ni
// boshida 2 marta so’zini 2ta harfini aytadi keyin hammasini.
// Agar funksiya string kiritilsa xuddi shunday formatda string
// qaytarsin

// function sozAytish(str) {
//   return `${str.slice(0, 2)}... ${str.slice(0, 2)}... ${str}`;
// }
// console.log(sozAytish("Otabek"));

//=======================================================================

// 80.Quyidaga namunani kuzatgan holda funksiya yasang.
// Namuna:
// ahvol("happy")
// ahvol("sad")
// ahvol()
// "Today, I am feeling happy"
// "Today, I am feeling sad"
// "Today, I am feeling neutral

// function sozQosh(str) {
//   return `I am feeling ${str}`;
// }

// console.log(sozQosh("happy"));

//=======================================================================

// 81.Funksiyaga so’z berilsa, ushbu funksiya ushbu so’zda nechta
// bo’g’in borligini aytsin.

// function bogin(word) {
//   return Math.floor(word.length / 2);
// }
// console.log(bogin("Hehehehehehev"));

//=======================================================================

// 82.FunskiyagabelgikiritilsaushbubelginingASCIIkodini
// qaytarsin.

// function ascii(symbol) {
//   return symbol.charCodeAt();
// }
// console.log(ascii("A"));

//=======================================================================

// 83.Funksiyaga2taso’zberiladi,anashu2taso’zbir-birigateng
// bo’lsatrueqaytsin,aksholdafalse.Bundaikkalaso’ziningkatta
// yokikichikharflardayozilganiahamiyatsizdeboling

// function tengmi(soz1, soz2) {
//   return soz1.length == soz2.length;
// }
// console.log(tengmi("salom", "salo"));

//=======================================================================

// 84.Funksiyagaso’zberilsa, funksiyaushbuso’ziningnechta
// belgidan iborat ekanligini qaytarsin. Bunda string.length
// propertisizdanfoydalanishmumkinemas!!!

// function belgiSoni(str) {
//   let count = 0;
//   for (let i of str) {
//     count++;
//   }
//   return count;
// }

// console.log(belgiSoni("salom"));

//=======================================================================

// 85. Karonavirusdantuzalganlarsoni, yangikasallanganlar
// soni vahozirdakasallar soni natijalari qo’limizdamavjud.
// 42
// EDABIT
// Tuzalganlarsonivayangikasallarsoniharkunibirxilnatija.
// Funksiyanechakundankeyinbarchatuzalishiniqaytarsin.
// Namuna:
// endCorona(4000,2000,77000) 39
// endCorona(3000,2000,50699) 51
// endCorona(30000,25000,390205) 79

// function endCorona(fixed, fixing, notfix) {
//   return Math.round(notfix / (fixed - fixing));
// }
// console.log(endCorona(3000, 2000, 50699));

//=======================================================================

// 86.Quyidaginamunanikuzatganholdafunkisyayasang.
// Namuna:
// namuna([2,5,3]) [4,10,6]
// namuna([1,86,-5]) [2,172,-10]
// namuna([5,382,0]) [10,764,0]

// function darajaKotar(arr) {
//   let new_arr = [];
//   for (let i of arr) {
//     new_arr.push(i * 2);
//   }
//   return new_arr;
// }

// console.log(darajaKotar([2, 3, 5]));

//=======================================================================

// 87.Funksiyaso’zlarmassiviniqabulqiladi.Funksiyaanashu
// so’zlarninguzunligidaniboratbo’lganyangimassivqaytarsin.

// function wordLengths(arr) {
//   let new_arr = [];
//   for (let i of arr) {
//     new_arr.push(i.length);
//   }
//   return new_arr;
// }
// console.log(wordLengths(["hello", "world"]));

//=======================================================================

// 88.Taksikilometriga1000so’mdanhaqoladi.Lekinbirinchi
// kilometri4000so’m.Agarfunksiyataksigato’langanyakuniy
// 43
// DASTURLASHDANMASALALAR
// summani qabul qilsa. Funksiya taksiningnechakilometr
// yurganiniqaytarsin.

// function nechaKm(som) {
//   if (som < 4000) {
//     return "4000 so'mdan kam bo'lishi mumkin emas";
//   }
//   let km = 1 + (som - 4000) / 1000;
//   return Math.round(km);
// }

// console.log(nechaKm(5000));

//=======================================================================

// 89.Funksiyamatnqabuqilsa,ushbufunksiyaushbumatnda“d”
// harfinechimartaishtiroketganliginiqaytarsin. “d”harfining
// kattakichikliginiahamiyatiyo’q.

// function dlar(text) {
//   let count = 0;
//   for (let i of text) {
//     if (i.toLowerCase() == "d") {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(dlar("MyfriendDylangotdistractedinschool."));

//=======================================================================

// 90.Funksiyastringqabulqiladi.Vaharbelginiorasigabo’shjoy
// qo’yibqaytarsin.

// function boshJoy(str) {
//   return str.split("").join(" ");
// }
// console.log(boshJoy("salom"));

//=======================================================================

// 91.Funksiya2tasonargumentqabulqiladi.Funksiyashunday
// 44
// EDABIT
// qiymatqaytarsinki,ushbuqiymatanashuikkalasondankatta
// va2-chisongabo’linsin.

// function bolinsiz(num_1, num_2) {
//   let num = 0;
//   for (let i = num_1; i; i++) {
//     if (i % num_2 == 0) {
//       num += i;
//       break;
//     }
//   }
//   return num;
// }

// console.log(bolinsiz(14, 11));

//=======================================================================

// 92.Agarmencafedan3takofeolsamyana1tatekingaqo’shib
// berishadi. Funksiyanechtakofeolsammeniqo’limda jami
// nechtakofebo’lishiniqaytarsin.

// function bonusKofe(kofe) {
//   let qoldiq = Math.floor(kofe / 3);
//   return qoldiq + kofe;
// }
// console.log(bonusKofe(200));

//=====================================================================

// 93.Funksiyagastringvasonberilsa,ushbustringningoxirigi
// belgisinifunksiyasonmartatakrorlabqaytaribbersin.

// function oxirginiTakrorla(str, num) {
//   return `${str}${str.at(-1).repeat(num - 1)}`;
// }
// console.log(oxirginiTakrorla("hey", 6));

//=======================================================================

// 94.Funksiyagasonlarmassiviberilsa,Anashumassivdagi5dan
// kattabo’lganelementlarniyig’indiisiniqaytarsin.

// function kattalarniQosh(arr) {
//   let sum = 0;
//   arr.forEach((element) => {
//     if (element > 5) {
//       sum += element;
//     }
//   });
//   return sum;
// }

// console.log(kattalarniQosh([1, 5, 20, 30, 4, 9, 18]));

//=======================================================================

// 95.Funksiyagamassivberilsa,ushbufunksiyamassivelement
// larinibarchasiniyig’indisiniqaytarsin.

// function hisobla(arr) {
//   return arr.reduce((sum, i) => sum + i, 0);
// }

// console.log(hisobla([2, 3, 5]));

//=======================================================================

// 96.Funksiyaga faylningmanzilikiritiladi. Funksiyaushbu
// ma’lumotdanfayliningnomiajratibbersin.

// function fileNominiAjrat(file) {
//   let oxirgi_slesh = file.lastIndexOf("/");
//   if (oxirgi_slesh != -1) return file.slice(oxirgi_slesh + 1);
//   else return file;
// }

// console.log(fileNominiAjrat("C:/Users/johnsmith/Music/Beethoven_5.mp3"));

//=======================================================================

// 97.Dostonuyidanmasofalarbosibo’tadi.Uyidanyooldinga
// yokiorqaga.Bosibo’tilganmasoflarmassivifunksiyaberilsa,
// funksiyaDostonuyigaqaytishiuchunqanchamasofabosib
// 46
// EDABIT
// o’tishiniaytsin.

// function qanchaMasofa(masofa) {
//   return masofa.reduce((sum, i) => sum + i, 0);
// }

// console.log(qanchaMasofa([3, 4, -5, -2]));

//=======================================================================

// 98.Funksiyauchburchakningtomonlariargumentqilibberiladi.
// Agarushbuberilgantomonlardanuchburchakyasabbo’lsa
// undafunksiyatrueqaytarsin,aksholdafalse.Uchburchakning
// qoida,istalgan2tatomoniningyig’igindisiuchunchitomondan
// kattabo’lsaginauchburchakhosilbo’ladi.

// function togrimi(a, b, c) {
//   let max = Math.max(a, b, c);
//   let P = a + b + c;
//   return P - max > max;
// }
// console.log(togrimi(4, 3, 8));

//=======================================================================

// 99.Funksiya 2 sonoralig’gini qabul qilsa, ushbu2ta son
// orasidagi sonlardan tuzilgan massivni ushbu funksiya
// qaytarsin.

// function oraliq(a, b) {
//   let arr = [];
//   for (let i = a + 1; i < b; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// console.log(oraliq(4, 7));

//=======================================================================

function Namuna(str) {
  const [tag, count] = str.split("*");
  let result = "";

  for (let i = 1; i <= Number(count); i++) {
    if (tag === "li") {
      result += `${i}.\n`;
    } else {
      result += `<${tag}></${tag}>\n`;
    }
  }

  return result;
}

console.log(Namuna("div*2"));
