package main

import (
	"slices"
)

type Hamle struct {
	// id uint8
	// isim     string
	// ustunluk []uint8 // veriler {} içine yazılacak.
	// ustunluk []*Hamle
	ustunluk []string
}

type OyunModu struct {
	id uint8
	// isim            string
	// gecerliHamleler []Hamle
	gecerliHamleler []Hamle
}

// var Hamleler = []Hamle{
// 	{id: 0, isim: "taş", ustunluk: []uint8{
// 		2,
// 	}},
// 	{id: 1, isim: "kağıt", ustunluk: []uint8{
// 		0,
// 	}},
// 	{id: 2, isim: "makas", ustunluk: []uint8{
// 		1,
// 	}},
// }

var Hamleler = map[string]Hamle{
	"kağıt": { /*id: 1,*/ ustunluk: []string{"taş"}},
	// "taş":   { /*id: 0,*/ ustunluk: []uint8{2}},
	// "taş":   { /*id: 0,*/ ustunluk: []*Hamle{Hamleler["makas"]}},
	"taş":   { /*id: 1,*/ ustunluk: []string{"makas"}},
	"makas": { /*id: 1,*/ ustunluk: []string{"kağıt"}},
}

var OyunModları = map[string]OyunModu{
	"Asıl": {id: 0, gecerliHamleler: []Hamle{Hamleler["kağıt"], Hamleler["taş"], Hamleler["makas"]}},
}

func Karsilasma(Hamle1, Hamle2 string) string {
	if Hamle1 == Hamle2 {
		return Cozulum(0)
	}
	// Hamle1 değeri aranıyor
	// for index, SeciliHamle := range Hamleler {
	// 	if SeciliHamle.isim == Hamle1 {
	// 		// Hamle1 bulundu. Hamle2 değerini yenebilir mi inceleniyor
	// 		for _, arananIndex := range Hamleler[index].ustunluk {
	// 			if Hamleler[arananIndex].isim == Hamle2 {
	// 				return Cozulum(1)
	// 			}
	// 		}
	// 	}
	// }
	slices.Contains(Hamleler[Hamle1].ustunluk, Hamle2)
	return Cozulum(2)
}

func Cozulum(sonuc uint8) string {
	switch sonuc {
	case 0:
		return "Beraberlik."
	case 1:
		return "Kazandınız."
	case 2:
		return "Kaybettiniz."
	default:
		return "Hata"
	}
}

func main() {

	// Hamleler := []Hamle{
	// 	{id: 0, isim: "taş", ustunluk: []uint8{2}},
	// 	{id: 1, isim: "kağıt", ustunluk: []uint8{0}},
	// 	{id: 2, isim: "makas", ustunluk: []uint8{1}},
	// }
	// Eğer anahtarlar dinamik ve sonradan değişebilir olacaksa map kullanılır.
	// Hamleler := []struct {
	// 	id       uint8
	// 	isim     string
	// 	ustunluk []uint8 // veriler {} içine yazılacak.
	// }{
	// 	{0, "Hamle", []uint8{1}},
	// 	{1, "Makas", []uint8{1}},
	// 	{2, "Kagit", []uint8{0}},
	// 	// {3, true},
	// 	// {4, false},
	// 	// {5, true},
	// }

	// Artık dönüş değerleri için futbol bahis terimleri kullanılacak (1X2).
	// func Karsilasma (Hamle1, Hamle2 string) uint { // Fonksiyon içindeyken tekrar bu
	// şekilde tanımlamak yanlış olur.
	// Karsilasma := func(Hamle1, Hamle2 string) uint8 {
	// 	if Hamle1 == Hamle2 {
	// 		return 0
	// 	}
	// 	// Hamle1 değeri aranıyor
	// 	for index, SeciliHamle := range Hamleler {
	// 		if SeciliHamle.isim == Hamle1 {
	// 			// Hamle1 bulundu. Hamle2 değerini yenebilir mi inceleniyor
	// 			for _, arananIndex := range Hamleler[index].ustunluk {
	// 				if Hamleler[arananIndex].isim == Hamle2 {
	// 					return 1
	// 				}
	// 			}
	// 		}
	// 	}
	// 	return 2
	// }
	// var HamleSecimler = maps.Keys(Hamleler) // (istenmeyen kod) pointerları temsil eder. 'Dereference' ederek gerçek değerlerine ulaşabilirsin. (GPT)
	// for _, SeciliHamle := range Hamleler {
	// 	HamleSecimler = append(HamleSecimler, SeciliHamle.isim)
	// }

	// var girdi string
	print(OyunModları)
	// fmt.Println("Birinci taşınızı girin (taş, kağıt, makas):")
	// fmt.Scan(&Hamle1)
	// fmt.Println("İkinci taşınızı girin (taş, kağıt, makas):")
	// fmt.Scan(&Hamle2)
	// for {
	// 	fmt.Println("**************************")
	// 	fmt.Println("Seçenekler:", HamleSecimler) // Virgülde Go, otomatik boşluk bırakıyor.
	// 	fmt.Print("Hamlenizi yapın: ")
	// 	// fmt.Scan(&(strings.ToLower(girdi)))
	// 	fmt.Scanf("%s", &girdi)
	// 	var HamleVarMi bool
	// 	for _, SeciliHamleIsmi := range HamleSecimler {
	// 		if girdi == SeciliHamleIsmi {
	// 			HamleVarMi = true
	// 			break
	// 		}
	// 	}
	// 	if HamleVarMi {
	// 		robotHamlesi := HamleSecimler[rand.Intn(len(HamleSecimler))]
	// 		sonuc := Karsilasma(strings.ToLower(girdi), robotHamlesi)
	// 		fmt.Println(girdi, " <--")
	// 		fmt.Println("Robotun Hamlesi:", robotHamlesi, " <--")
	// 		fmt.Println("Sonuç: ", sonuc)
	// 	} else {
	// 		fmt.Println("Geçersiz taş ismi girdiniz.")
	// 	}
	// }
}
