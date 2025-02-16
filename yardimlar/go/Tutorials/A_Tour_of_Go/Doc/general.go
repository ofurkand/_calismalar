//packages.go
// package main

// import (
// 	"fmt"
// 	"math/rand"
// )

// func main() {
// 	fmt.Println("My favorite number is", rand.Intn(10))
// }

//imports.go
// package main

// import (
// 	"fmt"
// 	"math"
// )

// func main() {
// 	fmt.Printf("Now you have %g problems.\n", math.Sqrt(7))
// }

// exported-names.go
// package main

// import (
// 	"fmt"
// 	"math"
// )

// func main() {
// 	fmt.Println(math.Pi)
// }

// functions.go
// package main

// import "fmt"

// // func add(x int, y int) int {
// // 	return x + y
// // }

// func add(x, y int) int {
// 	return x + y
// }
// func main() {
// 	fmt.Println(add(42, 13))
// }

// multiple-results.go
// package main

// import "fmt"

// func swap(x, y string) (string, string) {
// 	return y, x
// }

// func main() {
// 	a, b := swap("hello", "world")
// 	fmt.Println(a, b)
// }

// named-results.go
// package main

// import "fmt"

// func split(sum int) (x, y int) {
// 	x = sum * 4 / 9
// 	y = sum - x
// 	return
// }

// func main() {
// 	fmt.Println(split(17))
// }

// variables.go
// package main

// import "fmt"

// var c, python, java bool

// func main() {
// 	var i int
// 	fmt.Println(i, c, python, java)
// }

// variables-with-initializers.go
// package main

// import "fmt"

// These variables're outside of the function.
// var i, j int = 1, 2

// func main() {
// 	var c, python, java = true, false, "no!"
// 	fmt.Println(i, j, c, python, java)
// }

// short-variable-declarations.go
// Inside a function, the := short assignment statement can be used in
// place of a var declaration with implicit type.
// Outside a function, every statement begins with a keyword (var, func,
// and so on) and so the := construct is not available.
// package main

// import "fmt"

// func main() {
// 	var i, j int = 1, 2
// 	k := 3
// 	c, python, java := true, false, "no!"

// 	fmt.Println(i, j, k, c, python, java)
// }

// basic-types.go
// package main

// import (
// 	"fmt"
// 	"math/cmplx"
// )

// var (
// 	ToBe   bool       = false
// 	MaxInt uint64     = 1<<64 - 1
// 	z      complex128 = cmplx.Sqrt(-5 + 12i)
// )

// func main() {
// 	fmt.Printf("Type: %T Value: %v\n", ToBe, ToBe)
// 	fmt.Printf("Type: %T Value: %v\n", MaxInt, MaxInt)
// 	fmt.Printf("Type: %T Value: %v\n", z, z)
// }

// zero.go
// package main

// import "fmt"

// func main() {
// 	var i int
// 	var f float64
// 	var b bool
// 	var s string
// 	fmt.Printf("%v %v\n%v %q", i, f, b, s)
// }

// type-conversions.go
// The expression T(v) converts the value v to the type T.
// package main

// import (
// 	"fmt"
// 	"math"
// )

// func main() {
// 	// var x, y int = 3, 4
// 	x, y := 3, 4
// 	var f float64 = math.Sqrt(float64(x*x + y*y))
// 	// var z uint = uint(f) // <== uint type conversion
// 	z := uint(f)
// 	fmt.Println(x, y, z)
// }

// type-inference.go
// When declaring a variable without specifying an explicit type (either by
// using the := syntax or var = expression syntax), the variable's type is
// inferred from the value on the right hand side.
// package main

// import "fmt"

// func main() {
// 	v := 42 // change me!
// 	fmt.Printf("v is of type %T\n", v)
// }

// constants.go
// Constants cannot be declared using the := syntax.
// package main

// import "fmt"

// const Pi = 3.14

// func main() {
// 	const World = "世界"
// 	fmt.Println("Hello", World)
// 	fmt.Println("Happy", Pi, "Day")

// 	const Truth bool = true
// 	fmt.Println("Go rules?", Truth)
// }

// numeric-constants.go
// package main

// import "fmt"

// const (
// 	// Createe a huge number by shifting a 1 bit left 100 places.
// 	// In other words, the binary number that is 1 followed by 100 zeroes.
// 	Big = 1 << 100
// 	// Shift it right again 99 places, so we end up with 1<<1, or 2.
// 	Small = Big >> 99
// )

// func needInt(x int) int { return x*10 + 1 }
// func needFloat(x float64) float64 {
// 	return x * 0.1
// }

// func main() {
// 	fmt.Println(needInt(Small))
// 	// fmt.Println("type %T",Big)
// 	fmt.Println(needFloat(Small))
// 	fmt.Println(needFloat(Big))
// 	// fmt.Println(needInt(Big))
// }

// moduler-us-alma.go
// package main

// import "fmt"

// func modExp(base, exp int, mod int) int {
// 	result := 1
// 	for exp > 0 {
// 		if exp%2 == 1 {
// 			result = (result * base) % mod
// 		}
// 		base = (base * base) % mod
// 		exp /= 2
// 	}
// 	return result
// }

// func modExp2(base, exp int) int {
// 	if exp == 1 {
// 		return base
// 	} else {
// 		return modExp2((base * base), (exp - 1))
// 	}
// }

// func main() {
// 	base := 2
// 	exp := 6
// 	// mod := 7
// 	mod := 0
// 	fmt.Println(modExp(base, exp, mod)) // Çıktı: 1
// 	fmt.Println(modExp2(base, exp))     // Çıktı: 1
// }

// daha sonra kullanılacak // pointer-kullanimi
// package main

// import "fmt"

// // Bir işaretçi parametre kabul eden bir fonksiyon
// func printPointerValue(ptr *int) {
// 	if ptr == nil {
// 		fmt.Println("Pointer is nil!")
// 	} else {
// 		fmt.Println("Pointer is not nil, value:", *ptr)
// 	}
// }

// func main() {
// 	var ptr *int // ptr işaretçi (pointer) değişkeni, başlangıçta nil (yani işaretçi bir değeri göstermiyor)

// 	fmt.Println(ptr) // nil yazdırır

// 	// nil kontrolü
// 	if ptr == nil {
// 		fmt.Println("Pointer nil")
// 	}

// 	// Bir işaretçiye değer atama
// 	value := 10
// 	ptr = &value // ptr işaretçisini value değişkenine işaret edecek şekilde ayarlıyoruz

// 	fmt.Println(ptr)  // Bellek adresini yazdırır
// 	fmt.Println(*ptr) // İşaret edilen değeri yazdırır (10)

// 	var ptr2 *int           // İşaretçi başlangıçta nil
// 	printPointerValue(ptr2) // Nil işaretçi gönderiyoruz
// }

// for.go // while dahilî
// package main

// import "fmt"

// func main() {
// 	sum := 0
// 	// for i := 0; i < 10; i++ {
// 	// 	sum += i
// 	// }

// 	// for ; sum < 1000; {
// 	for sum < 1000 {
// 		sum += sum
// 	}
// 	fmt.Println(sum)
// }

// forever.go
// package main

// func main() {
// 	for {
// 	}
// }

// if-and-else.go
// package main

// import (
// 	"fmt"
// 	"math"
// )

// func sqrt(x float64) string {
// 	if x < 0 {
// 		return sqrt(-x) + "i"
// 	}
// 	// return fmt.Sprint(math.Sqrt(x))
// 	return fmt.Sprint(math.Sqrt(x))
// }

// func pow(x, n, lim float64) float64 {
// 	if v := math.Pow(x, n); v < lim {
// 		return v
// 	} else {
// 		fmt.Printf("%g >= %g\n", v, lim)
// 	}
// 	// can't use v here, though
// 	return lim
// 	// lim, sonucun geçmemesi gereken bir üst sınır olması
// 	// adına iş görüyor. Büyük sayıların bellekeği zorlaması
// 	// konusu hafifletilmektedir. lim => limit
// }

// func main() {
// 	fmt.Println(sqrt(2), sqrt(-4))
// 	fmt.Println(
// 		pow(3, 2, 10),
// 		pow(3, 3, 20),
// 	)
// }

// switch.go
// package main

// import (
// 	"fmt"
// 	"runtime"
// )

// func main() {
// 	fmt.Print("Go runs on ")
// 	// os := runtime.GOOS
// 	// switch os {
// 	switch os := runtime.GOOS; os {
// 	case "darwin":
// 		fmt.Println("OS X.")
// 	case "linux":
// 		fmt.Println("Linux.")
// 	default:
// 		// freebsd, openbsd,
// 		// plan9, windows...
// 		fmt.Printf("%s.\n", os)
// 	}
// }

// switch-with-no-condition.go
// package main

// import (
// 	"fmt"
// 	"time"
// )

// func main() {
// 	t := time.Now()
// 	switch {
// 	case t.Hour() < 12:
// 		fmt.Println("Good morning!")
// 	case t.Hour() < 17:
// 		fmt.Println("Good afternoon.")
// 	default:
// 		fmt.Println("Good evening.")
// 	}
// }

// switch-evaluation-order.go
// package main

// import (
// 	"fmt"
// 	"time"
// )

// func main() {
// 	fmt.Println("When's Saturday?")
// 	today := time.Now().Weekday()
// 	switch time.Saturday {
// 	case today + 0:
// 		fmt.Println("Today.")
// 	case today + 1:
// 		fmt.Println("Tomorrow.")
// 	case today + 2:
// 		fmt.Println("In two days.")
// 	default:
// 		fmt.Println("Too far away.")
// 	}
// }

// defer.go
// package main

// import "fmt"

// func main() {
// 	defer fmt.Println("world")
// 	defer fmt.Println("hello")

// 	fmt.Println("counting")

// 	for i := 0; i < 10; i++ {
// 		defer fmt.Println(i)
// 	}

// 	fmt.Println("done")
// }

// pointers.go
// package main

// import "fmt"

// func main() {
// 	i, j := 42, 2701

// 	p := &i         // point to i
// 	fmt.Println(*p) // read i through the pointer
// 	*p = 21         // set i through the pointer
// 	fmt.Println(i)  // see the new value of i

// 	p = &j         // point to j
// 	*p = *p / 37   // divide j through the pointer
// 	fmt.Println(j) // see the new value of j
// }

// structs.go
// package main

// import "fmt"

// type Vertex struct {
// 	X int
// 	Y int
// }

// func main() {
// 	v := Vertex{1, 2}
// 	v.X = 4
// 	p := &v
// 	fmt.Println(v)
// 	p.X = 1e9
// 	fmt.Println(v)
// }

// struct-literals.go
// package main

// import "fmt"

// type Vertex struct {
// 	X, Y int
// }

// var (
// 	v1 = Vertex{1, 2}  // has type Vertex
// 	v2 = Vertex{X: 1}  // Y:0 is implicit
// 	v3 = Vertex{}      // X:0 and Y:0
// 	p  = &Vertex{1, 2} // has type *Vertex
// )

// func main() {
// 	fmt.Println(v1, v2, v3, p)
// }

// array.go
// package main

// import "fmt"

// func main() {
// 	var a [2]string
// 	a[0] = "Hello"
// 	a[1] = "World"
// 	fmt.Println(a[0], a[1])
// 	fmt.Println(a)

// 	primes := [6]int{2, 3, 5, 7, 11, 13}
// 	fmt.Println(primes)
// 	var s []int = primes[1:4]
// 	fmt.Println(s)

// 	names := [4]string{
// 		"John",
// 		"Paul",
// 		"George",
// 		"Ringo",
// 	}
// 	fmt.Println(names)

// 	c := names[0:2]
// 	d := names[1:3]
// 	fmt.Println(c, d)

// 	d[0] = "XXX"
// 	fmt.Println(c, d)
// 	fmt.Println(names)
// 	// A slice does not store any data, <================
// 	// it just describes a section of an underlying array.
// 	// It actually acts like pointers
// }

// slice-literals.go
// package main

// import "fmt"

// func main() {
// 	q := []int{2, 3, 5, 7, 11, 13}
// 	fmt.Println(q)

// 	r := []bool{true, false, true, true, false, true}
// 	fmt.Println(r)

// 	type z struct {
// 		X int
// 		Y bool
// 	}
// 	orjs := []int{2, 3, 5, 7, 11, 13}
// 	printSlice(orjs)
// 	s := orjs[:0]

// 	// Important Section Below <==================
// 	// Slices don't affect main array's values, but their own.

// 	// Slice the slice to give it zero length.
// 	printSlice(s)

// 	// Extend its length.
// 	s = s[:4]
// 	printSlice(s)

// 	// Drop its first two values.
// 	s = s[2:]
// 	printSlice(s)
// 	// Important Section Above <==================

// 	s = []int{2, 3, 5, 7, 11, 13} // Reason why we set this again
// 	s = s[1:4]
// 	fmt.Println(s)

// 	s = s[:2]
// 	fmt.Println(s)

// 	s = s[1:]
// 	fmt.Println(s)
// 	var a [10]int
// 	// All of'em're same.
// 	fmt.Println(a[0:10])
// 	fmt.Println(a[:10])
// 	fmt.Println(a[0:])
// 	fmt.Println(a[:])

// 	var zed []z
// 	// for _index, value := range r {
// 	// 	var Addition z = z{
// 	// 		X: q[_index],
// 	// 		Y: value,
// 	// 	}
// 	// for _index := range r {
// 	// 	var Addition z = z{
// 	// 		X: q[_index],
// 	// 		Y: r[_index],
// 	// 	}
// 	// for _index := range r {
// 	// 	var Addition = z{
// 	// 		X: q[_index],
// 	// 		Y: r[_index],
// 	// 	}
// 	// for _index := range r {
// 	// 	Addition := z{
// 	// 		X: q[_index], Y: r[_index],
// 	// 	}
// 	for _index := range r {
// 		zed = append(zed, z{
// 			X: q[_index], Y: r[_index],
// 		})
// 	}
// 	ss := []struct {
// 		i int
// 		b bool
// 	}{
// 		{2, true},
// 		{3, false},
// 		{5, true},
// 		{7, true},
// 		{11, false},
// 		{13, true},
// 	}
// 	fmt.Println(ss)
// 	fmt.Println(zed)

// 	var w []int
// 	fmt.Println(w, len(w), cap(w))
// 	if w == nil {
// 		fmt.Println("nil!")
// 	}

// 	aa := make([]int, 5) // len(a)=5
// 	printSlice2("a", aa)

// 	bb := make([]int, 0, 5) // len(b)=0, cap(b)=5
// 	printSlice2("b", bb)

// 	cc := bb[:2]
// 	printSlice2("c", cc) // len(b)=5, cap(b)=5

// 	dd := cc[2:5]
// 	printSlice2("d", dd) // len(b)=4, cap(b)=4
// }
// func printSlice(s []int) {
// 	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
// }
// func printSlice2(s string, x []int) {
// 	fmt.Printf("%s len=%d cap=%d %v\n",
// 		s, len(x), cap(x), x)
// }

// slices-of-slices.go
// package main

// import (
// 	"fmt"
// 	"strings"
// )

// func main() {
// 	// Create a tic-tac-toe board.
// 	board := [][]string{
// 		[]string{"_", "_", "_"},
// 		[]string{"_", "_", "_"},
// 		[]string{"_", "_", "_"},
// 	}

// 	// The players take turns.
// 	board[0][0] = "X"
// 	board[2][2] = "O"
// 	board[1][2] = "X"
// 	board[1][0] = "O"
// 	board[0][2] = "X"

//		for i := 0; i < len(board); i++ {
//			fmt.Printf("%s\n", strings.Join(board[i], " "))
//		}
//	}

// PLAYGROUND (GPT)
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
