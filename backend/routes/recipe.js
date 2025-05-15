const express = require("express")
const {getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe,upload} = require("../controller/recipe")
const verifyToken=require("../middleware/auth")
const router=express.Router()

router.get("/",getRecipes) //get all recipes
router.get("/:id",getRecipe) //get recipe by id
router.post("/",upload.single('file'),verifyToken,addRecipe) //add recipes
router.put("/:id",upload.single('file'),editRecipe) // edit recipes
router.delete("/:id",deleteRecipe) //delete recipe

module.exports=router