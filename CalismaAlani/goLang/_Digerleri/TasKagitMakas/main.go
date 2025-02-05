package main

import (
	"TasKagitMakas/calismaAlani/goLang/_Digerleri/TasKagitMakas/database"

	"github.com/gofiber/fiber"
	"gorm.io/gorm"
)

var DB *gorm.DB

func main() {
	database.Connect()

	// database.DB

	app := fiber.New()

	// routers.RouterApp(app)

	// app.Post("/", func(c *fiber.Ctx) error {
	// 	return c.JSON(fiber.Map{
	// 		"message": "bismillah",
	// 	})
	// })
	// app.Listen(":8000")

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Bismillah")
	})

	app.Listen(":3000")

}
