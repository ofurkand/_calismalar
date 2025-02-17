package main

import "fmt"

type Hamle struct {
	ustunluk []string
}

type OyunModu struct {
	id              uint8
	gecerliHamleler []*Hamle
}

var Hamleler = map[string]*Hamle{
	"kağıt": {ustunluk: []string{"taş"}},
	"taş":   {ustunluk: []string{"makas"}},
	"makas": {ustunluk: []string{"kağıt"}},
}

var OyunModları = map[string]OyunModu{
	"Asıl": {id: 0, gecerliHamleler: []*Hamle{Hamleler["kağıt"], Hamleler["taş"], Hamleler["makas"]}},
}

func main() {
	// OyunModları["Asıl"]'ın tüm bilgilerini yazdırmak için
	fmt.Println("Oyun Modu - Asıl:")
	fmt.Printf("Oyun Modu ID: %d\n", OyunModları["Asıl"].id)

	// Oyun Modu içindeki geçerli hamleleri yazdıralım
	fmt.Println("Geçerli Hamleler:")
	for _, hamle := range OyunModları["Asıl"].gecerliHamleler {
		// Hamlelerin 'ustunluk' listesini yazdırıyoruz
		fmt.Printf("Hamle: %v, Ustunluk: %v\n", hamle, hamle.ustunluk)
	}
}
