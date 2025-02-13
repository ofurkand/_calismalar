package routers

// import (
// 	"TasKagitMakas/calismaAlani/goLang/_Digerleri/TasKagitMakas/controllers"

// 	"github.com/gofiber/fiber/v2"
// )

func RouterApp(c *fiber.App) {
	c.Get("/", controllers.UserControllerShow)
}
