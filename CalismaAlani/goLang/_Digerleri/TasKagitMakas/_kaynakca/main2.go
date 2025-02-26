package main

import (
	"fmt"
	"maps"
	"slices"
)

type Tas struct {
	id       uint8
	ustunluk []string // veriler {} içine yazılacak.
}

func (t *Tas) Kontrol(id uint8) bool {
	return slices.Contains(t.ustunluk, id)
}

type OyunModu struct {
	id     uint8
	Taslar map[string]Tas
}

func (o *OyunModu) TasIsimleri() []string {
	return maps.Keys(o.Taslar)
}

func (o *OyunModu) GetTas(adi string) (Tas, bool) {
	tas, ok := maps.Keys(o.Taslar)
	return tas, ok
}

var BasitOyunModu = OyunModu{
	id: 0,
	Taslar: map[string]Tas{
		"taş":   {id: 0, ustunluk: []uint8{2}},
		"kağıt": {id: 1, ustunluk: []uint8{0}},
		"makas": {id: 2, ustunluk: []uint8{1}},
	},
}

type Oyun struct {
	Mod OyunModu
}

func NewOyun(oyunModu OyunModue) *Oyun {
	return &Oyun{
		Mod: oyunModu,
	}
}

func (o *Oyun) GetRandom() Tas {
	//TODO: get random
	return o.OyunModu.Taslar["makas"]
}

func (o *Oyun) Karsilastir(t1, t2 Tas) string {
	if tas1 == tas2 {
		return Cozulum(0)
	}
	t1 := o.Mod.Taslar[tas1]
	t2 := o.Mod.Taslar[tas2]
	if t1.Kontrol(t2.id) {
		return Cozulum(1)
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
	oyun := NewOyun(BasitOyunModu)
	for {
		fmt.Println("**************************")
		fmt.Println("Seçenekler:", oyun.Mod.TasIsimleri()) // Virgülde Go, otomatik boşluk bırakıyor.
		fmt.Println("Hamlenizi yapın:")
		// fmt.Scan(&(strings.ToLower(girdi)))
		fmt.Scan(&girdi)
		tas, ok := oyun.Mod.GetTas(girdi)
		if ok {
			rTas := oyun.GetRandom()
			sonuc := oyun.Karsilastir(tas, rTas)
			fmt.Println("Sonuç: ", sonuc)
		} else {
			fmt.Println("Geçersiz taş ismi girdiniz.")
		}
	}
}
