package main

import (
	database "PT_Oyunu/db"

	"github.com/gofiber/fiber/v2"
)

func main() {
	database.Connect()

	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Deneme")
	})

	app.Listen("localhost:3000")
}
