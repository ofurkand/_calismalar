package main

import (
	"fmt"
	"strings"
)

type Tas struct {
	id       uint8
	isim     string
	ustunluk []uint8 // veriler {} içine yazılacak.
}

type OyunModu struct {
	id            uint8
	isim          string
	gecerliTaslar []Tas
}

var Taslar = []Tas{
	{id: 0, isim: "taş", ustunluk: []uint8{2}},
	{id: 1, isim: "kağıt", ustunluk: []uint8{0}},
	{id: 2, isim: "makas", ustunluk: []uint8{1}},
}

func Karsilasma(tas1, tas2 string) string {
	if tas1 == tas2 {
		return Cozulum(0)
	}
	// tas1 değeri aranıyor
	for index, SeciliTas := range Taslar {
		if SeciliTas.isim == tas1 {
			// tas1 bulundu. tas2 değerini yenebilir mi inceleniyor
			for _, arananIndex := range Taslar[index].ustunluk {
				if Taslar[arananIndex].isim == tas2 {
					return Cozulum(1)
				}
			}
		}
	}
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

	// Taslar := []Tas{
	// 	{id: 0, isim: "taş", ustunluk: []uint8{2}},
	// 	{id: 1, isim: "kağıt", ustunluk: []uint8{0}},
	// 	{id: 2, isim: "makas", ustunluk: []uint8{1}},
	// }
	// Eğer anahtarlar dinamik ve sonradan değişebilir olacaksa map kullanılır.
	// Taslar := []struct {
	// 	id       uint8
	// 	isim     string
	// 	ustunluk []uint8 // veriler {} içine yazılacak.
	// }{
	// 	{0, "Tas", []uint8{1}},
	// 	{1, "Makas", []uint8{1}},
	// 	{2, "Kagit", []uint8{0}},
	// 	// {3, true},
	// 	// {4, false},
	// 	// {5, true},
	// }

	// Artık dönüş değerleri için futbol bahis terimleri kullanılacak (1X2).
	// func Karsilasma (tas1, tas2 string) uint { // Fonksiyon içindeyken tekrar bu
	// şekilde tanımlamak yanlış olur.
	// Karsilasma := func(tas1, tas2 string) uint8 {
	// 	if tas1 == tas2 {
	// 		return 0
	// 	}
	// 	// tas1 değeri aranıyor
	// 	for index, SeciliTas := range Taslar {
	// 		if SeciliTas.isim == tas1 {
	// 			// tas1 bulundu. tas2 değerini yenebilir mi inceleniyor
	// 			for _, arananIndex := range Taslar[index].ustunluk {
	// 				if Taslar[arananIndex].isim == tas2 {
	// 					return 1
	// 				}
	// 			}
	// 		}
	// 	}
	// 	return 2
	// }
	var TasSecimler []string
	for _, SeciliTas := range Taslar {
		TasSecimler = append(TasSecimler, SeciliTas.isim)
	}

	var girdi string
	// fmt.Println("Birinci taşınızı girin (taş, kağıt, makas):")
	// fmt.Scan(&tas1)
	// fmt.Println("İkinci taşınızı girin (taş, kağıt, makas):")
	// fmt.Scan(&tas2)
	for {
		fmt.Println("**************************")
		fmt.Println("Seçenekler:", TasSecimler) // Virgülde Go, otomatik boşluk bırakıyor.
		fmt.Println("Hamlenizi yapın:")
		// fmt.Scan(&(strings.ToLower(girdi)))
		fmt.Scan(&girdi)
		var TasVarMi bool
		for _, SeciliTasIsmi := range TasSecimler {
			if girdi == SeciliTasIsmi {
				TasVarMi = true
				break
			}
		}
		if TasVarMi {
			sonuc := Karsilasma(strings.ToLower(girdi), "makas")
			fmt.Println("Sonuç: ", sonuc)
		} else {
			fmt.Println("Geçersiz taş ismi girdiniz.")
		}
	}
}
