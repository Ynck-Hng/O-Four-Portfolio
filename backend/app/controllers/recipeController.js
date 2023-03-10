const prisma = require("./../schema/prisma");
const {random} = require("./../utils/random");
const recipeController = {
    findRandomRecipe: async (req,res) => {
        const result = await prisma.recipe.findMany({
            include:{
                ingredients:{
                    include:{
                        ingredient: true
                    }
                }
            }
        });

        if(!result){
            return res.status(404).json("Aucune recette n'a été trouvée, revenez plus tard...");
        }

        const randomNumber = random(0, result.length - 1);

        res.status(200).json(result[randomNumber]);
    },

    findOneRecipe: async(req,res) => {
        const recipeId = Number(req.params.recipeId);
        const result = await prisma.recipe.findUnique({
            where: {
                id: recipeId
            },
            include: {
                ingredients:{
                    include:{
                        ingredient: true
                    }
                },
                steps: true,
            }, 
        })

        if(!result) {
            return res.status(404).json("Cette recette n'existe pas...");
        }

        res.status(200).json(result);
    },
}

module.exports = recipeController;