package main

import (
	"fmt"

	"log"

	"example.com/greetings"

	"rsc.io/quote/v4"
)

func main() {
	// Set properties of the predefined Logger, including
	// the log entry prefix and a flag to disable printing
	// the time, source file, and line number.
	log.SetPrefix("greetings: ")
	log.SetFlags(0)

	fmt.Println("Hello, World!")
	fmt.Println(quote.Hello())
	fmt.Println(quote.Go())

	message, err := greetings.Hello("Alex")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(message)

	// message, err = greetings.Hello("")
	// // If an error was returned, print it to the console and
	// // exit the program.
	// if err != nil {
	// 	log.Fatal(err)
	// }

	// If no error was returned, print the returned message
	// to the console.
	fmt.Println(message)

	// A slice of names.
	names := []string{"Gladys", "Samantha", "Darrin"}

	// Request greeting messages for the names.
	messages, err := greetings.Hellos(names)
	if err != nil {
		log.Fatal(err)
	}
	// If no error was returned, print the returned map of
	// messages to the console.
	fmt.Println(messages)
	fmt.Println(messages["Gladys"])
}
